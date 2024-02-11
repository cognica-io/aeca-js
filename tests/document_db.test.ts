//
// Cognica
//
// Copyright (c) 2023-2024 Cognica
//

import { Channel, DocumentDB } from "@/index"

describe("DocumentDB", () => {
  const _COLLECTION = "cognica.js.test"
  const _COLLECTION_ALTER = `${_COLLECTION}.alter`
  const channel = new Channel("localhost", 10080)
  const doc_db = new DocumentDB(channel)

  beforeAll(async () => {
    const collections = await doc_db.listCollections()
    if (collections.includes(_COLLECTION)) {
      await doc_db.dropCollection(_COLLECTION)
    }
    if (collections.includes(_COLLECTION_ALTER)) {
      await doc_db.dropCollection(_COLLECTION_ALTER)
    }

    const indexes = [
      {
        index_type: "kPrimaryKey",
        fields: ["doc_id"],
      },
      {
        name: "sk_author",
        index_type: "kSecondaryKey",
        fields: ["author"],
        unique: false,
      },
      {
        name: "sk_fts",
        fields: ["content"],
        unique: false,
        index_type: "kFullTextSearchIndex",
        options: {
          content: {
            analyzer: {
              type: "StandardAnalyzer",
            },
            index_options: "offsets",
          },
        },
      },
    ]
    await doc_db.createCollection(_COLLECTION, indexes)
    const data = [
      { doc_id: "1", author: "tim", content: "get started" },
      { doc_id: "2", author: "finn", content: "vector database cookbook" },
    ]
    await doc_db.insert(_COLLECTION, data)
  })

  test("createCollection", async () => {
    const indexes = [
      {
        index_type: "kPrimaryKey",
        fields: ["doc_id"],
      },
    ]
    await doc_db.createCollection(_COLLECTION_ALTER, indexes)
  })

  test("listCollections", async () => {
    const collections = await doc_db.listCollections()
    expect(collections).toContain(_COLLECTION)
  })

  test("getCollection", async () => {
    const collection = await doc_db.getCollection(_COLLECTION)
    expect(collection).not.toBeNull()
  })

  test("getCollections", async () => {
    const collections = await doc_db.getCollections([_COLLECTION])
    expect(collections).not.toBeNull()
  })

  test("insert", async () => {
    const data = [
      { doc_id: "3", author: "finn", content: "imdb tutorial" },
      { doc_id: "4", author: "tim", content: "vector database" },
    ]
    await doc_db.insert(_COLLECTION, data)
  })

  test("update", async () => {
    await doc_db.update(_COLLECTION, { author: "finn" }, { title: "test" })
    const data = (await doc_db.find(_COLLECTION, { author: "finn" }))!.toArray()
    expect(data[0].title).toEqual("test")
  })

  test("remove", async () => {
    await doc_db.remove(_COLLECTION, { doc_id: "1" })
    const table = await doc_db.find(_COLLECTION, { doc_id: "1" })
    expect(table).toBeNull()
  })

  test("find", async () => {
    const table = await doc_db.find(_COLLECTION, { author: "tim" })
    expect(table!.numRows).toBeGreaterThan(0)
  })

  test("find.fts", async () => {
    const table = await doc_db.find(_COLLECTION, {
      $search: {
        query: "content:database",
      },
    })
    const result = table!.toArray()
    expect(result[0].content).toContain("database")
  })

  test("dropCollections", async () => {
    await doc_db.dropCollection(_COLLECTION_ALTER)
  })

  test("createIndex/dropIndex", async () => {
    const indexDescriptor = {
      name: "sk_doc_id",
      index_type: "kSecondaryKey",
      fields: ["doc_id"],
      unique: true,
    }
    await doc_db.createIndex(_COLLECTION, indexDescriptor)
    const index = await doc_db.getIndex(_COLLECTION, "sk_doc_id")
    expect(index).not.toBeNull()

    await doc_db.dropIndex(_COLLECTION, "sk_doc_id")
  })

  test("getIndex", async () => {
    const index = await doc_db.getIndex(_COLLECTION, "sk_fts")
    expect(index).not.toBeNull()
  })

  test("renameIndex", async () => {
    await doc_db.renameIndex(_COLLECTION, "sk_author", "sk_author2")
    const index = await doc_db.getIndex(_COLLECTION, "sk_author2")
    expect(index).not.toBeNull()
  })

  afterAll(async () => {
    await doc_db.dropCollection(_COLLECTION)
    doc_db.close()
  })
})
