import { Channel, DocumentDB, IndexDescriptor } from "@/index"

describe("DocumentDB", () => {
  const _COLLECTION = "cognica.js.test"
  const _COLLECTION_ALTER = `${_COLLECTION}.alter`
  const channel = new Channel("localhost", 10080)
  const client = new DocumentDB(channel)

  beforeAll(async () => {
    const collections = await client.listCollections()
    if (collections.includes(_COLLECTION)) {
      await client.dropCollection(_COLLECTION)
    }
    if (collections.includes(_COLLECTION_ALTER)) {
      await client.dropCollection(_COLLECTION_ALTER)
    }

    const indexes = [
      {
        index_type: "kPrimaryKey",
        fields: ["doc_id"],
      },
      {
        name: "sk_author",
        fields: ["author"],
        unique: false,
        index_type: "kSecondaryKey",
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
    await client.createCollection(_COLLECTION, indexes)
  })

  test("createCollection", async () => {
    const indexes = [
      {
        index_type: "kPrimaryKey",
        fields: ["doc_id"],
      },
    ]
    await client.createCollection(`${_COLLECTION_ALTER}`, indexes)
  })

  test("listCollections", async () => {
    const collections = await client.listCollections()
    expect(collections).toContain(_COLLECTION)
  })

  test("getCollection", async () => {
    const collection = await client.getCollection(_COLLECTION)
    expect(collection).not.toBeNull()
    console.log(collection.indexDescriptors[1].options)
  })

  test("getCollections", async () => {
    const collections = await client.getCollections([_COLLECTION])
    expect(collections).not.toBeNull()
  })

  test("dropCollections", async () => {
    await client.dropCollection(`${_COLLECTION_ALTER}`)
  })

  afterAll(async () => {
    await client.dropCollection(_COLLECTION)
    client.close()
  })
})
