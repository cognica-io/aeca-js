//
// Aeca
//
// Copyright (c) 2024 Aeca
//

import { Table, tableFromIPC } from "apache-arrow"
import * as proto from "@/proto/generated/document_db"
import { Channel } from "./channel"
import { Document, GrpcClient } from "./client"
import { readParquet } from "parquet-wasm"

export interface IndexDescriptor {
  index_type: string
  fields: string[]
  name?: string
  indexId?: number
  unique?: boolean
  status?: string
  options?: Document
}
export type Query = Document | Document[]
export interface Request {
  collectionName: string
  query: Query
  limit?: number
  indexColumns?: string[]
  columns?: string[]
  dtypes?: { [key: string]: string }
}
export const enum IndexType {
  kPrimaryKey = 0,
  kSecondaryKey = 1,
  kClusteredSecondaryKey = 2,
  kFullTextSearchIndex = 3,
  UNRECOGNIZED = -1,
}
export const indexTypeFromJSON = proto.indexTypeFromJSON
export type IndexStats = proto.IndexStats
export const indexStatusFromJSON = proto.indexStatusFromJSON
export type CollectionInfo = {
  collectionName: string
  indexDescriptors: IndexDescriptor[]
  indexStats: IndexStats[]
}
interface DataFrame {
  data: Table<any>
  meta?: Document
}

export class DocumentDB extends GrpcClient<proto.DocumentDBServiceClient> {
  constructor(channel: Channel, timeout: number | undefined = undefined) {
    const client = new proto.DocumentDBServiceClient(
      channel.address,
      channel.credential,
      channel.options,
    )
    super(channel, client, timeout)
  }

  find(
    collectionName: string,
    query: Document,
    limit?: number,
    indexColumns?: string[],
    columns?: string[],
    dtypes?: { [key: string]: string },
  ): Promise<DataFrame | null>
  find(request: Request): Promise<DataFrame | null>
  find(
    request: string | Request,
    query?: Document,
    limit?: number,
    indexColumns?: string[],
    columns?: string[],
    dtypes?: { [key: string]: string },
  ) {
    let findRequest
    if (typeof request === "string") {
      findRequest = DocumentDB.toFindRequest({
        collectionName: request,
        query: query!,
        limit: limit,
        indexColumns: indexColumns,
        columns: columns,
        dtypes: dtypes,
      })
    } else {
      findRequest = DocumentDB.toFindRequest(request)
    }
    return this.createPromise<
      DataFrame | null,
      proto.FindRequest,
      proto.FindResponse
    >(findRequest, "find", (response: proto.FindResponse) => {
      return DocumentDB.toDataFrame(response)
    })
  }

  findRaw(request: Request): Promise<Buffer | null> {
    const findRequest = DocumentDB.toFindRequest(request)
    return this.createPromise<
      Buffer | null,
      proto.FindRequest,
      proto.FindResponse
    >(findRequest, "find", (response: proto.FindResponse) => {
      return response.buffer
    })
  }

  findBatch(requests: Request[]) {
    const findRequests: proto.FindBatchRequest = {
      requests: requests.map((request) => {
        return DocumentDB.toFindRequest(request)
      }),
    }
    return this.createPromise<
      (DataFrame | null)[],
      proto.FindBatchRequest,
      proto.FindBatchResponse
    >(findRequests, "findBatch", (response: proto.FindBatchResponse) => {
      return response.responses.map((response) =>
        DocumentDB.toDataFrame(response),
      )
    })
  }

  insert(collectionName: string, docs: Document | Document[]) {
    if (!Array.isArray(docs)) {
      docs = [docs]
    }
    const queries = docs.map((doc: Document) => {
      return {
        collectionName: collectionName,
        query: DocumentDB.toDocument(doc),
      }
    })
    const request = {
      requests: queries,
    } as proto.InsertRequest
    return this.createPromise(request, "insert")
  }

  update(collectionName: string, filter: Document, updates: Document) {
    const request = {
      collectionName: collectionName,
      filter: DocumentDB.toDocument(filter),
      updates: DocumentDB.toDocument(updates),
    } as proto.UpdateRequest
    return this.createPromise(request, "update")
  }

  remove(collectionName: string, docs: Document | Document[]) {
    if (!Array.isArray(docs)) {
      docs = [docs]
    }
    const queries = docs.map((doc: Document) => {
      return {
        collectionName: collectionName,
        query: DocumentDB.toDocument(doc),
      }
    })
    const request = {
      requests: queries,
    } as proto.RemoveRequest
    return this.createPromise(request, "remove")
  }

  createCollection(
    collectionName: string,
    indexDescriptors: IndexDescriptor[],
  ) {
    const indexes = indexDescriptors.map((index) => {
      return DocumentDB.toIndexDescriptor(index)
    })
    return this.createPromise(
      {
        collection: {
          collectionName: collectionName,
          indexDescriptors: indexes,
          indexStats: [],
        },
      },
      "createCollection",
    )
  }

  getCollection(collectionName: string) {
    return this.createPromise<
      CollectionInfo,
      proto.GetCollectionRequest,
      proto.GetCollectionResponse
    >(
      { collectionName: collectionName } as proto.GetCollectionRequest,
      "getCollection",
      (response: proto.GetCollectionResponse) => {
        if (response && response.collection) {
          return DocumentDB.fromCollectionInfo(response.collection)
        }
        return null
      },
    )
  }

  getCollections(collectionNames: string[]) {
    return this.createPromise<
      CollectionInfo[],
      proto.GetCollectionsRequest,
      proto.GetCollectionsResponse
    >(
      { collectionNames: collectionNames } as proto.GetCollectionsRequest,
      "getCollections",
      (response: proto.GetCollectionsResponse) => {
        if (response && response.collections) {
          return response.collections.map(DocumentDB.fromCollectionInfo)
        }
        return null
      },
    )
  }

  listCollections() {
    return this.createPromise<
      string[],
      proto.ListCollectionsRequest,
      proto.ListCollectionsResponse
    >(
      {} as proto.ListCollectionsRequest,
      "listCollections",
      (response: proto.ListCollectionsResponse) => {
        if (response) {
          return response.collectionNames
        }
        return null
      },
    )
  }

  renameCollection(oldCollectionName: string, newCollectionName: string) {
    return this.createPromise(
      {
        oldCollectionName: oldCollectionName,
        newCollectionName: newCollectionName,
      } as proto.RenameCollectionRequest,
      "renameCollection",
    )
  }

  truncateCollection(collectionName: string) {
    return this.createPromise(
      {
        collectionName: collectionName,
      } as proto.TruncateCollectionRequest,
      "truncateCollection",
    )
  }

  dropCollection(collectionName: string) {
    return this.createPromise(
      {
        collectionName: collectionName,
      } as proto.DropCollectionRequest,
      "dropCollection",
    )
  }

  createIndex(collectionName: string, indexDescriptor: IndexDescriptor) {
    const index = DocumentDB.toIndexDescriptor(indexDescriptor)
    return this.createPromise(
      {
        collectionName: collectionName,
        indexDesc: index,
      } as proto.CreateIndexRequest,
      "createIndex",
    )
  }

  getIndex(collectionName: string, indexName: string) {
    return this.createPromise<
      proto.GetIndexResponse,
      proto.GetIndexRequest,
      proto.GetIndexResponse
    >(
      {
        collectionName: collectionName,
        indexName: indexName,
      } as proto.GetIndexRequest,
      "getIndex",
      (response: proto.GetIndexResponse) => response,
    )
  }

  renameIndex(
    collectionName: string,
    oldIndexName: string,
    newIndexName: string,
  ) {
    return this.createPromise(
      {
        collectionName: collectionName,
        oldIndexName: oldIndexName,
        newIndexName: newIndexName,
      } as proto.RenameIndexRequest,
      "renameIndex",
    )
  }

  dropIndex(collectionName: string, indexName: string) {
    return this.createPromise(
      {
        collectionName: collectionName,
        indexName: indexName,
      } as proto.DropIndexRequest,
      "dropIndex",
    )
  }

  empty(
    collectionName: string,
    query: Document,
    dtypes: { [key: string]: string } | undefined = undefined,
  ) {
    return this.find({
      collectionName: collectionName,
      query: query,
      dtypes: dtypes,
    }).then((result): boolean => {
      if (result) {
        return result.data.numRows == 0
      }
      return true
    })
  }

  private static toFindRequest(request: Request): proto.FindRequest {
    return proto.FindRequest.fromJSON({
      query: {
        collectionName: request.collectionName,
        query: DocumentDB.toDocument(request.query),
      },
      limit: request.limit,
      indexColumns: request.indexColumns,
      columns: request.columns,
      dtypes: request.dtypes,
    })
  }

  private static async toDataFrame(
    response: proto.FindResponse,
  ): Promise<DataFrame | null> {
    if (response.numRows) {
      const arrowBuffer = readParquet(response.buffer)
      const df = tableFromIPC(arrowBuffer.intoIPCStream())
      const meta_json = df.schema.metadata.get("pandas")
      let meta
      if (meta_json) {
        meta = JSON.parse(meta_json)
      }
      return {
        data: df,
        meta: meta,
      }
    }
    return null
  }

  private static fromCollectionInfo(
    collection: proto.CollectionInfo,
  ): CollectionInfo {
    return {
      collectionName: collection.collectionName,
      indexDescriptors: collection.indexDescriptors.map((index) =>
        DocumentDB.fromIndexDescriptor(index),
      ),
      indexStats: collection.indexStats,
    }
  }

  private static toIndexDescriptor(index: IndexDescriptor) {
    let options
    if (index.options) {
      options = DocumentDB.toDocument(index.options)
    }
    const descriptor = {
      indexName: index.name,
      fields: index.fields,
      unique: index.unique,
      indexType: index.index_type,
      status: index.status,
      options: options,
    }
    return proto.IndexDescriptor.fromJSON(descriptor)
  }

  private static fromIndexDescriptor(index: proto.IndexDescriptor) {
    const descriptor: IndexDescriptor = {
      name: index.indexName,
      fields: index.fields,
      unique: index.unique,
      index_type: proto.indexTypeToJSON(index.indexType),
      status: proto.indexStatusToJSON(index.status),
      options: index.options,
    }
    return descriptor
  }
}
