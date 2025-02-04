//
// Cognica
//
// Copyright (c) 2025 Cognica
//

import * as proto from "@/proto/generated/system_metrics"

import { Channel } from "./channel"
import { GrpcClient } from "./client"

export type SystemMetricsSnapshot = proto.SystemMetricsSnapshot

export class SystemMetrics extends GrpcClient<proto.SystemMetricsServiceClient> {
  constructor(channel: Channel, timeout: number | undefined = undefined) {
    const client = new proto.SystemMetricsServiceClient(
      channel.address,
      channel.credential,
      channel.options,
    )
    super(channel, client, timeout)
  }

  getSnapshot(
    clientName: string = "",
    version: string = "",
  ): Promise<SystemMetricsSnapshot> {
    const request = {
      clientName: clientName,
      version: version,
    } as proto.GetSystemMetricsSnapshotRequest
    return this.createPromise<
      SystemMetricsSnapshot,
      proto.GetSystemMetricsSnapshotRequest,
      proto.GetSystemMetricsSnapshotResponse
    >(
      request,
      "getSnapshot",
      (response: proto.GetSystemMetricsSnapshotResponse) => {
        return response.snapshot
      },
    )
  }
}
