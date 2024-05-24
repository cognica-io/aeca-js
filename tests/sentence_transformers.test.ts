//
// Aeca
//
// Copyright (c) 2024 Aeca
//

import { Channel, SentenceTransformer } from "@/index"

const _MODEL_NAME =
  "sentence-transformers/paraphrase-multilingual-mpnet-base-v2"

describe("SentenceTransformer", () => {
  const channel = new Channel("localhost", 10080)
  const model = new SentenceTransformer(channel, _MODEL_NAME)

  test("encode", async () => {
    const value = await model.encode(["test"])
    expect(value.length).toBeGreaterThan(0)
  })
})
