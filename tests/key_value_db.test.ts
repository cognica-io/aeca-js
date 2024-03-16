//
// Aeca
//
// Copyright (c) 2024 Aeca
//

import { Channel, KeyValueDB, KeyspaceManager } from "@/index"

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe("KeyValueDB", () => {
  const channel = new Channel("localhost", 10080)
  const kv_db = new KeyValueDB(channel)

  beforeAll(async () => {
    await kv_db.put("_aeca/tests", "key1", "value1")
    await kv_db.put("_aeca/tests", "key2", "value2")
  })

  test("get", async () => {
    const value = (await kv_db.get("_aeca/tests", "key1")).toString()
    expect(value).toEqual("value1")
  })

  test("getBatch", async () => {
    const value = (
      await kv_db.getBatch("_aeca/tests", ["key1"])
    )[0].toString()
    expect(value).toEqual("value1")
  })

  test("put", async () => {
    await kv_db.put("_aeca/tests", "key3", "value3")
  })

  test("putBatch", async () => {
    await kv_db.putBatch("_aeca/tests", ["key3"], ["value3"])
  })

  test("put.ttl", async () => {
    await kv_db.put("_aeca/tests", "key4", "value4", 1)
    await timeout(1100)

    const value = await kv_db.get("_aeca/tests", "key4")
    expect(value.length).toBe(0)
  })

  test("remove", async () => {
    const value = (await kv_db.remove("_aeca/tests", "key2")).toString()
    expect(value).toBeTruthy()
  })

  test("removeBatch", async () => {
    const value = (
      await kv_db.removeBatch("_aeca/tests", ["key2"])
    ).toString()
    expect(value).toBeTruthy()
  })

  afterAll(async () => {
    kv_db.close()
  })
})

describe("KeyspaceManager", () => {
  const channel = new Channel("localhost", 10080)
  const ks_manager = new KeyspaceManager(channel)
  const _KEYSPACE = "_aeca/tests/sub"

  beforeAll(async () => {
    await ks_manager.createKeyspace(_KEYSPACE)
  })

  test("listKeyspace", async () => {
    const spaces = await ks_manager.listKeyspace()
    expect(spaces.length).toBeGreaterThan(0)
  })

  test("truncateKeyspace", async () => {
    const result = await ks_manager.truncateKeyspace(_KEYSPACE)
    expect(result).toBeTruthy()
  })

  afterAll(async () => {
    ks_manager.dropKeyspace(_KEYSPACE)
  })
})
