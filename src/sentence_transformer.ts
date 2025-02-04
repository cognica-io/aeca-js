//
// Cognica
//
// Copyright (c) 2024 Cognica
//

import * as proto from "@/proto/generated/sentence_transformer"

import { Channel } from "./channel"
import { GrpcClient } from "./client"

export type Tensor = proto.Tensor

export class SentenceTransformer extends GrpcClient<proto.SentenceTransformerServiceClient> {
  private _modelName: string

  constructor(
    channel: Channel,
    modelName: string,
    timeout: number | undefined = undefined,
  ) {
    const client = new proto.SentenceTransformerServiceClient(
      channel.address,
      channel.credential,
      channel.options,
    )
    super(channel, client, timeout)
    this._modelName = modelName
  }

  encode(sentences: string[]): Promise<Tensor[]> {
    const request = {
      modelName: this._modelName,
      sentences: sentences,
    } satisfies proto.SentenceEncoderRequest

    return this.createPromise<
      Tensor[],
      proto.SentenceEncoderRequest,
      proto.SentenceEncoderResponse
    >(request, "encode", (response: proto.SentenceEncoderResponse) => {
      return response.tensors
    })
  }
}
