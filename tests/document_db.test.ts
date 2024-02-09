import { Channel, DocumentDB, IndexDescriptor } from "@/index"

describe("DocumentDB", () => {
  const _COLLECTION = "cognica.js.test"
  const channel = new Channel("localhost", 10080)
  const client = new DocumentDB(channel)

  test("createCollection", async () => {
    const collections = await client.listCollections()
    if (collections.includes(_COLLECTION)) {
      await client.dropCollection(_COLLECTION)
    }

    const indexes = [
      {
        indexType: "kPrimaryKey",
        fields: ["doc_id"],
      },
    ]
    await client.createCollection(_COLLECTION, indexes)
  })

  test("listCollections", async () => {
    const collections = await client.listCollections()
    expect(collections).toContain(_COLLECTION)
  })

  test("getCollection", async () => {
    const collection = await client.getCollection(_COLLECTION)
    expect(collection).not.toBeNull()
  })

  test("getCollections", async () => {
    const collections = await client.getCollections([_COLLECTION])
    expect(collections).not.toBeNull()
  })

  test("dropCollections", async () => {
    await client.dropCollection(_COLLECTION)
  })

  afterAll(() => {
    client.close()
  })
})
