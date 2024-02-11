import * as proto from "@/proto/generated/document_db"
import { Channel } from "./channel"
import { Document, GrpcClient } from "./client"
import { Table, tableFromIPC } from "apache-arrow"
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
    collection: string,
    query: Document,
    limit: number | undefined = undefined,
    indexColumns: string[] | undefined = undefined,
    columns: string[] | undefined = undefined,
    dtypes: { [key: string]: string } | undefined = undefined,
  ) {
    const request = proto.FindRequest.fromJSON({
      query: {
        collectionName: collection,
        query: this.toDocument(query),
      },
      limit: limit,
      indexColumns: indexColumns,
      columns: columns,
      dtypes: dtypes,
    })
    return this.createPromise<
      Table<any>,
      proto.FindRequest,
      proto.FindResponse
    >(request, "find", (response: proto.FindResponse) => {
      const arrowBuffer = readParquet(response.buffer)
      const table = tableFromIPC(arrowBuffer.intoIPCStream())
      return table
    })
  }

  insert(collection: string, docs: Document[]) {
    const queries = docs.map((doc: Document) => {
      return { collectionName: collection, query: this.toDocument(doc) }
    })
    const request = {
      requests: queries,
    } as proto.InsertRequest
    return this.createPromise(request, "insert")
  }

  update(
    collection: string,
    filter: Document | Document[],
    updates: Document | Document[],
  ) {
    const request = {
      collectionName: collection,
      filter: this.toDocument(filter),
      updates: this.toDocument(updates),
    } as proto.UpdateRequest
    return this.createPromise(request, "update")
  }

  remove(collection: string, docs: Document | Document[]) {
    const request = {
      requests: [
        {
          collectionName: collection,
          query: this.toDocument(docs),
        },
      ],
    } as proto.RemoveRequest
    return this.createPromise(request, "remove")
  }

  getCollection(collection: string) {
    return this.createPromise<
      proto.CollectionInfo,
      proto.GetCollectionRequest,
      proto.GetCollectionResponse
    >(
      { collectionName: collection } as proto.GetCollectionRequest,
      "getCollection",
      (response: proto.GetCollectionResponse) => {
        if (response) {
          return response.collection
        }
        return null
      },
    )
  }

  getCollections(collections: string[]) {
    return this.createPromise<
      proto.CollectionInfo[],
      proto.GetCollectionsRequest,
      proto.GetCollectionsResponse
    >(
      { collectionNames: collections } as proto.GetCollectionsRequest,
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

  createCollection(
    collectionName: string,
    indexDescriptors: IndexDescriptor[],
  ) {
    const indexes = indexDescriptors.map((index) => {
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
}
