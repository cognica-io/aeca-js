//
// Cognica
//
// Copyright (c) 2023-2024 Cognica
//

import { Client, Metadata, ServiceError } from "@grpc/grpc-js"

import * as proto from "@/proto/generated/document"

import { Channel } from "./channel"

export type Document = {
  [x: string]: any | Document
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

  createPromise<Return, Request, Response>(
    request: Request,
    methodName: keyof ClientType,
    response_mapper: (response: Response) => any = () => null,
    waitForReady: boolean = true,
  ) {
    const metadata = new Metadata()
    if (waitForReady) {
      metadata.setOptions({ waitForReady: waitForReady })
    }
    if (this._timeout) {
      metadata.set("grpc-timeout", `${this._timeout}m`)
    }

    return new Promise<Return>((resove, reject) => {
      ;(this._client[methodName] as Function)(
        request,
        metadata,
        (error: ServiceError | null, response: Response) => {
          if (error) {
            // console.error(error)
            reject(error)
          } else {
            resove(response_mapper(response))
          }
        },
      )
    })
  }

  toDocument(doc: Document): proto.Document {
    let result: proto.Document
    if (doc.json === undefined) {
      result = proto.Document.fromJSON({ json: JSON.stringify(doc) })
    } else {
      result = doc
    }
    return result
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
