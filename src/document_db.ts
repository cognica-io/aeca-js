import * as proto from "@/proto/generated/document_db"
import { Document } from "@/proto/generated/document"
import { Channel } from "./channel"
import { GrpcClient } from "./client"

type Dictionary = {
  [x: string]: any | Dictionary
}

export interface IndexDescriptor {
  index_type: string
  fields: string[]
  name?: string
  indexId?: number
  unique?: boolean
  status?: string
  options?: Dictionary
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
        options = Document.fromJSON({ json: JSON.stringify(index.options) })
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
