import { Channel } from "@/channel"
import { DocumentDB } from "@/document_db"

describe("DocumentDB", () => {
  const channel = new Channel("localhost", 10080)
  const client = new DocumentDB(channel)

  test("list_collections", async () => {
    const collections = await client.listCollections()
    console.log(collections)
  })

  test("get_collection", async () => {
    const collection = await client.getCollection("imdb")
    console.log(collection)
  })

  afterAll(() => {
    client.close()
  })
})
