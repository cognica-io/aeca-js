//
// Cognica
//
// Copyright (c) 2025 Cognica
//

import { Channel, SentenceTransformer } from "@/index"

const _MODEL_NAME = "intfloat/multilingual-e5-small"

describe("SentenceTransformer", () => {
  const channel = new Channel("localhost", 10080)
  const model = new SentenceTransformer(channel, _MODEL_NAME)

  test("encode", async () => {
    const value = await model.encode(["test"])
    expect(value.length).toBeGreaterThan(0)
  })
})
