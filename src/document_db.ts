import { Client, Metadata, ServiceError } from "@grpc/grpc-js"
import {
  DocumentDBServiceClient,
  GetCollectionRequest,
  GetCollectionResponse,
  ListCollectionsRequest,
  ListCollectionsResponse,
} from "@/proto/generated/document_db"
import { Channel } from "./channel"

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
    if (timeout) {
      this._timeout = timeout
    }
  }

  createPromise<Request, Response>(
    request: Request,
    methodName: keyof ClientType,
    response_mapper: (response: Response) => any,
  ) {
    const metadata = new Metadata()

    if (this._timeout) {
      metadata.set("grpc-timeout", `${this._timeout}m`)
    }

    return new Promise((resove, reject) => {
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

  close() {
    (this._client as Client).close()
  }
}

export class DocumentDB extends GrpcClient<DocumentDBServiceClient> {
  constructor(channel: Channel, timeout: number | undefined = undefined) {
    const client = new DocumentDBServiceClient(
      channel.address,
      channel.credential,
      channel.options,
    )
    super(channel, client, timeout)
  }

  getCollection(collection: string) {
    return this.createPromise(
      { collectionName: collection } as GetCollectionRequest,
      "getCollection",
      (response: GetCollectionResponse) => {
        if (response) {
          return response.collection
        }
        return null
      },
    )
  }

  listCollections() {
    return this.createPromise(
      {} as ListCollectionsRequest,
      "listCollections",
      (response: ListCollectionsResponse) => {
        if (response) {
          return response.collectionNames
        }
        return null
      },
    )
  }
}
