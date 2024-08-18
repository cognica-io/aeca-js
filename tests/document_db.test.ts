//
// Aeca
//
// Copyright (c) 2024 Aeca
//

import { Channel, DocumentDB, Request } from "@/index"
import { timeout } from "./helper"

describe("DocumentDB", () => {
  const _COLLECTION = "aeca.js.test"
  const channel = new Channel("localhost", 10080)
  const doc_db = new DocumentDB(channel)

  beforeAll(async () => {
    const collections = await doc_db.listCollections()
    const renameCollection = `${_COLLECTION}.rename`
    if (collections.includes(_COLLECTION)) {
      await doc_db.dropCollection(_COLLECTION)
    }
    if (collections.includes(renameCollection)) {
      await doc_db.dropCollection(renameCollection)
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

    await doc_db.createCollection(`${_COLLECTION}.rename`, indexes)
  })

  test("create/truncate/dropCollection", async () => {
    const collectionName = `${_COLLECTION}.collection_crud`
    const collections = await doc_db.listCollections()
    if (collections.includes(collectionName)) {
      await doc_db.dropCollection(collectionName)
    }

    const indexes = [
      {
        index_type: "kPrimaryKey",
        fields: ["doc_id"],
      },
    ]
    await doc_db.createCollection(collectionName, indexes)
    await doc_db.truncateCollection(collectionName)
    await doc_db.dropCollection(collectionName)
  })

  test("renameCollections", async () => {
    const oldCollectionName = `${_COLLECTION}.rename`
    const newCollectionName = `${_COLLECTION}.rename.new`

    await doc_db.renameCollection(oldCollectionName, newCollectionName)
    const collections = await doc_db.listCollections()
    expect(collections).toContain(newCollectionName)
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
    const data = (await doc_db.find(_COLLECTION, { author: "finn" }))!.data
    expect(data[0].title).toEqual("test")
  })

  test("remove", async () => {
    await doc_db.remove(_COLLECTION, { doc_id: "1" })
    const table = await doc_db.find(_COLLECTION, { doc_id: "1" })
    expect(table).toBeNull()
  })

  test("find", async () => {
    const df = await doc_db.find(_COLLECTION, { author: "tim" })
    expect(df!.data.length).toBeGreaterThan(0)
  })

  test("find.fts", async () => {
    const df = await doc_db.find(_COLLECTION, {
      $search: {
        query: "content:database",
      },
    })
    const result = df!.data
    expect(result[0].content).toContain("database")
  })

  test("findBatch", async () => {
    const requests: Request[] = [
      { collectionName: _COLLECTION, query: { author: "tim" } },
      { collectionName: _COLLECTION, query: { doc_id: "1" } },
    ]
    const tables = await doc_db.findBatch(requests)
    expect(tables.length).toBeGreaterThan(0)
    // expect(tables[0]!.numRows).toBeGreaterThan(0)
  })

  test("create/dropIndex", async () => {
    await doc_db
      .getIndex(_COLLECTION, "sk_doc_id")
      .then(() => {
        doc_db.dropIndex(_COLLECTION, "sk_doc_id")
      })
      .catch(() => {
        return
      })
    const indexDescriptor = {
      name: "sk_doc_id",
      index_type: "kSecondaryKey",
      fields: ["doc_id"],
      unique: true,
    }
    await doc_db.createIndex(_COLLECTION, indexDescriptor)
    // gRPC threads do not guarantee sequential processing,
    // A slight delay is needed for the creation of index.
    await timeout(10)
    const index = await doc_db.getIndex(_COLLECTION, "sk_doc_id")
    expect(index).not.toBeNull()
  })

  test("createIndex:duplicated", async () => {
    await doc_db
      .getIndex(_COLLECTION, "sk_doc_id")
      .then(() => {
        doc_db.dropIndex(_COLLECTION, "sk_doc_id")
      })
      .catch(() => {
        return
      })
    const indexDescriptor = {
      name: "sk_doc_id",
      index_type: "kSecondaryKey",
      fields: ["doc_id"],
      unique: true,
    }
    await doc_db.createIndex(_COLLECTION, indexDescriptor)
    await timeout(10)
    const result = await doc_db.createIndex(_COLLECTION, indexDescriptor)
  })

  test("createIndex:not_exist_field", async () => {
    await doc_db
      .getIndex(_COLLECTION, "sk_title")
      .then(() => {
        doc_db.dropIndex(_COLLECTION, "sk_title")
      })
      .catch(() => {
        return
      })
    const indexDescriptor = {
      name: "sk_title",
      index_type: "kSecondaryKey",
      fields: ["doc_id", "title"],
      unique: true,
    }
    await doc_db.createIndex(_COLLECTION, indexDescriptor)
  })

  test("createIndex", async () => {
    await doc_db
      .getIndex(_COLLECTION, "sk_author_2")
      .then(() => {
        doc_db.dropIndex(_COLLECTION, "sk_author_2")
      })
      .catch(() => {
        return
      })
    const indexDescriptor = {
      name: "sk_author_2",
      index_type: "kSecondaryKey",
      fields: ["doc_id", "author"],
      unique: true,
    }
    await doc_db.createIndex(_COLLECTION, indexDescriptor)
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

  test("empty", async () => {
    const isEmpty = await doc_db.empty(_COLLECTION, { author: "tim" })
    expect(isEmpty).toBeFalsy()
  })

  afterAll(async () => {
    const collections = await doc_db.listCollections()
    // await doc_db.dropCollection(_COLLECTION)

    const oldCollectionName = `${_COLLECTION}.rename`
    if (collections.includes(oldCollectionName)) {
      await doc_db.dropCollection(oldCollectionName)
    }

    const newCollectionName = `${_COLLECTION}.rename.new`
    if (collections.includes(newCollectionName)) {
      await doc_db.dropCollection(newCollectionName)
    }
    doc_db.close()
  })
})
