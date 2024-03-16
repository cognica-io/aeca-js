//
// Aeca
//
// Copyright (c) 2024 Aeca
//

import * as grpc from "@grpc/grpc-js"

export class Channel {
  private _address: string
  private _credential: grpc.ChannelCredentials
  private _useSSL: boolean

  private static readonly _OPTIONS = {
    "grpc.max_concurrent_streams": 4,
    "grpc.max_send_message_length": -1,
    "grpc.max_receive_message_length": -1,
    "grpc.http2.max_frame_size": 10 * 1024 * 1024, // 10MB
  }

  constructor(host: string, port: number, useSSL: boolean = false) {
    this._address = `${host}:${port}`
    this._useSSL = useSSL
    if (this._useSSL) {
      this._credential = grpc.credentials.createSsl()
    } else {
      this._credential = grpc.credentials.createInsecure()
    }
  }

  get address(): string {
    return this._address
  }
  get credential(): grpc.ChannelCredentials {
    return this._credential
  }
  get options(): grpc.ChannelOptions {
    return Channel._OPTIONS
  }
}
