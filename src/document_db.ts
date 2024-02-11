//
// Cognica
//
// Copyright (c) 2023-2024 Cognica
//

import { Table, tableFromIPC } from "apache-arrow"
import { readParquet } from "parquet-wasm"

import * as proto from "@/proto/generated/document_db"

import { Channel } from "./channel"
import { Document, GrpcClient } from "./client"

export interface IndexDescriptor {
  index_type: string
  fields: string[]
  name?: string
  indexId?: number
  unique?: boolean
  status?: string
  options?: Document
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
    limit: number | undefined = undefined,
    indexColumns: string[] | undefined = undefined,
    columns: string[] | undefined = undefined,
    dtypes: { [key: string]: string } | undefined = undefined,
  ) {
    const request = proto.FindRequest.fromJSON({
      query: {
        collectionName: collectionName,
        query: this.toDocument(query),
      },
      limit: limit,
      indexColumns: indexColumns,
      columns: columns,
      dtypes: dtypes,
    })
    return this.createPromise<
      Table<any> | null,
      proto.FindRequest,
      proto.FindResponse
    >(request, "find", (response: proto.FindResponse) => {
      if (response.numRows) {
        const arrowBuffer = readParquet(response.buffer)
        const table = tableFromIPC(arrowBuffer.intoIPCStream())
        return table
      }
      return null
    })
  }

  insert(collectionName: string, docs: Document | Document[]) {
    if (!Array.isArray(docs)) {
      docs = [docs]
    }
    const queries = docs.map((doc: Document) => {
      return { collectionName: collectionName, query: this.toDocument(doc) }
    })
    const request = {
      requests: queries,
    } as proto.InsertRequest
    return this.createPromise(request, "insert")
  }

  update(collectionName: string, filter: Document, updates: Document) {
    const request = {
      collectionName: collectionName,
      filter: this.toDocument(filter),
      updates: this.toDocument(updates),
    } as proto.UpdateRequest
    return this.createPromise(request, "update")
  }

  remove(collectionName: string, docs: Document | Document[]) {
    if (!Array.isArray(docs)) {
      docs = [docs]
    }
    const queries = docs.map((doc: Document) => {
      return { collectionName: collectionName, query: this.toDocument(doc) }
    })
    const request = {
      requests: queries,
    } as proto.RemoveRequest
    return this.createPromise(request, "remove")
  }

  getCollection(collectionName: string) {
    return this.createPromise<
      proto.CollectionInfo,
      proto.GetCollectionRequest,
      proto.GetCollectionResponse
    >(
      { collectionName: collectionName } as proto.GetCollectionRequest,
      "getCollection",
      (response: proto.GetCollectionResponse) => {
        if (response) {
          return response.collection
        }
        return null
      },
    )
  }

  getCollections(collectionNames: string[]) {
    return this.createPromise<
      proto.CollectionInfo[],
      proto.GetCollectionsRequest,
      proto.GetCollectionsResponse
    >(
      { collectionNames: collectionNames } as proto.GetCollectionsRequest,
      "getCollections",
      (response: proto.GetCollectionsResponse) => {
        if (response) {
          return response.collections
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

  private toIndexDescriptor(index: IndexDescriptor) {
    let options
    if (index.options) {
      options = this.toDocument(index.options)
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

  createCollection(
    collectionName: string,
    indexDescriptors: IndexDescriptor[],
  ) {
    const indexes = indexDescriptors.map((index) => {
      return this.toIndexDescriptor(index)
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

  dropCollection(collectionName: string) {
    return this.createPromise(
      {
        collectionName: collectionName,
      } as proto.DropCollectionRequest,
      "dropCollection",
    )
  }

  createIndex(collectionName: string, indexDescriptor: IndexDescriptor) {
    const index = this.toIndexDescriptor(indexDescriptor)
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
}
