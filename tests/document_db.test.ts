import { Channel, DocumentDB, IndexDescriptor } from "@/index"

describe("DocumentDB", () => {
  const channel = new Channel("localhost", 10080)
  const client = new DocumentDB(channel)

  test("createCollection", async () => {
    const collections = (await client.listCollections()) as string[]
    if (collections.includes("test")) {
      await client.dropCollection("test")
    }
    const indexes = [
      {
        indexType: "kPrimaryKey",
        fields: ["doc_id"],
      },
    ]
    const status = await client.createCollection("test", indexes)
    console.log(status)
  })

  test("listCollections", async () => {
    const collections = await client.listCollections()
    console.log(collections)
  })

  test("getCollection", async () => {
    const collection = await client.getCollection("imdb")
    console.log(collection)
  })

  test("getCollections", async () => {
    const collections = await client.getCollections(["imdb"])
    console.log(collections)
  })

  test("dropCollections", async () => {
    const ststus = await client.dropCollection("test")
    console.log(ststus)
  })

  afterAll(() => {
    client.close()
  })
})
