//
// Cognica
//
// Copyright (c) 2024 Cognica
//

import { Channel, SystemMetrics } from "@/index"

describe("SystemMetrics", () => {
  const channel = new Channel("localhost", 10080)
  const metrics = new SystemMetrics(channel)

  test("getSnapshot", async () => {
    const value = await metrics.getSnapshot()
    expect(value.appMetadata?.appName !== undefined).toBeTruthy()
  })
})
