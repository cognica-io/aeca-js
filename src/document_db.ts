import { Client, Metadata, ServiceError } from "@grpc/grpc-js"
import * as proto from "@/proto/generated/document_db"
import { Channel } from "./channel"

type Dictionary = {
  [x: string]: any | Dictionary
}

export interface IndexDescriptor {
  indexType: string
  fields: string[]
  indexId?: number
  indexName?: string
  unique?: boolean
  status?: string
  options?: Dictionary
}

export class GrpcClient<ClientType> {
  protected _channel: Channel
  protected _client: ClientType
  protected _timeout: number | undefined

  constructor(
    channel: Channel,
    client: ClientType,
    timeout: number | undefined = undefined,
  ) {
    this._channel = channel
    this._client = client
    this._timeout = timeout
  }

  createPromise<ReturnType, Request, Response>(
    request: Request,
    methodName: keyof ClientType,
    response_mapper: (response: Response) => any | undefined = () => null,
    waitForReady: boolean = true,
  ) {
    const metadata = new Metadata()
    if (waitForReady) {
      metadata.setOptions({ waitForReady: waitForReady })
    }
    if (this._timeout) {
      metadata.set("grpc-timeout", `${this._timeout}m`)
    }

    return new Promise<ReturnType>((resove, reject) => {
      ;(this._client[methodName] as Function)(
        request,
        metadata,
        (error: ServiceError | null, response: Response) => {
          if (error) {
            reject(error)
          } else {
            resove(response_mapper(response))
          }
        },
      )
    })
  }

  get channel() {
    return this._channel
  }

  get timeout() {
    return this._timeout
  }

  close() {
    ;(this._client as Client).close()
  }
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
    return this.createPromise(
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
    return this.createPromise(
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
      return proto.IndexDescriptor.fromJSON(index)
    })
    console.log(indexes)
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
