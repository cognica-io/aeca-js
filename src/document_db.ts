//
// Aeca
//
// Copyright (c) 2024 Aeca
//

import * as proto from "@/proto/generated/document_db"
import { Channel } from "./channel"
import { Document, GrpcClient } from "./client"
import { readParquet } from "parquet-wasm"
import { Table, tableFromIPC } from "@apache-arrow/esnext-esm"

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
export type ReturnType = "arrow" | "object"
export interface FindOptions {
  limit?: number
  indexColumns?: string[]
  columns?: string[]
  dtypes?: { [key: string]: string }
  format?: ReturnType
}
export type ObjectType = any[]
export type DataFormat = ObjectType | Table<any>
export interface DataFrame<T extends DataFormat> {
  data: T
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

  find<T extends DataFormat = ObjectType>(
    collectionName: string,
    query: Document,
    options?: FindOptions,
  ): Promise<DataFrame<T> | null>
  find<T extends DataFormat = ObjectType>(
    request: Request,
  ): Promise<DataFrame<T> | null>
  find<T extends DataFormat = ObjectType>(
    request: string | Request,
    query?: Document,
    options?: FindOptions,
  ): Promise<DataFrame<T> | null> {
    let findRequest
    if (typeof request === "string") {
      findRequest = DocumentDB.toFindRequest({
        collectionName: request!,
        query: query!,
        limit: options?.limit,
        indexColumns: options?.indexColumns,
        columns: options?.columns,
        dtypes: options?.dtypes,
      })
    } else {
      findRequest = DocumentDB.toFindRequest(request)
    }
    return this.createPromise<
      DataFrame<T> | null,
      proto.FindRequest,
      proto.FindResponse
    >(findRequest, "find", (response: proto.FindResponse) => {
      return DocumentDB.toDataFrame(response, options?.format)
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

  findBatch<T extends DataFormat = ObjectType>(
    requests: Request[],
    format: ReturnType = "object",
  ) {
    const findRequests: proto.FindBatchRequest = {
      requests: requests.map((request) => {
        return DocumentDB.toFindRequest(request)
      }),
    }
    return this.createPromise<
      (DataFrame<T> | null)[],
      proto.FindBatchRequest,
      proto.FindBatchResponse
    >(findRequests, "findBatch", (response: proto.FindBatchResponse) => {
      return response.responses.map((response) =>
        DocumentDB.toDataFrame(response, format),
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
    return this.find<Table<any>>(collectionName, query, {
      dtypes: dtypes,
      format: "arrow",
    }).then((result): boolean => {
      if (result && result.data) {
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
    format: ReturnType = "object",
  ): Promise<DataFrame<DataFormat> | null> {
    if (response.numRows) {
      const arrowBuffer = readParquet(response.buffer)
      const df = tableFromIPC(arrowBuffer.intoIPCStream())
      const metaJson = df.schema.metadata.get("pandas")

      let meta
      if (metaJson) {
        meta = JSON.parse(metaJson)
      }

      let data = df
      if (format === "object") {
        data = this.parseMetadata(meta, df.toArray())
      }
      return {
        data: data,
        meta,
      }
    }
    return null
  }

  private static identity(value: string | undefined) {
    return value
  }

  private static toJson(text: string | undefined) {
    if (!text) {
      return text
    }

    try {
      return JSON.parse(text)
    } catch (error) {
      return text
    }
  }

  private static parseMetadata(meta: any, df: any): any {
    const transformMap = Object.fromEntries(
      meta.columns.map((column: any) => {
        let entry = [column.name, this.identity]
        if (column.metadata && column.metadata.hasOwnProperty("encoding")) {
          if (column.metadata.encoding == "json") {
            entry = [column.name, this.toJson]
          }
        }
        return entry
      }),
    )

    return df.map((row: any) => {
      const entries = Object.keys(row).map((key) => {
        const converted = transformMap[key](row[key])
        return [key, converted]
      })
      return Object.fromEntries(entries)
    })
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
