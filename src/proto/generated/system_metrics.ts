// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.2
//   protoc               v4.25.1
// source: system_metrics.proto

/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "aeca.rpc";

export interface GetSystemMetricsSnapshotRequest {
  clientName: string;
  version: string;
}

export interface GetSystemMetricsSnapshotResponse {
  status: GetSystemMetricsSnapshotResponse_Status;
  snapshot: SystemMetricsSnapshot | undefined;
}

export enum GetSystemMetricsSnapshotResponse_Status {
  Success = 0,
  UNRECOGNIZED = -1,
}

export function getSystemMetricsSnapshotResponse_StatusFromJSON(object: any): GetSystemMetricsSnapshotResponse_Status {
  switch (object) {
    case 0:
    case "Success":
      return GetSystemMetricsSnapshotResponse_Status.Success;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetSystemMetricsSnapshotResponse_Status.UNRECOGNIZED;
  }
}

export function getSystemMetricsSnapshotResponse_StatusToJSON(object: GetSystemMetricsSnapshotResponse_Status): string {
  switch (object) {
    case GetSystemMetricsSnapshotResponse_Status.Success:
      return "Success";
    case GetSystemMetricsSnapshotResponse_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SystemMetricsSnapshot {
  appMetadata: ApplicationMetadata | undefined;
  clusterInfo: ClusterInfo | undefined;
}

export interface ApplicationMetadata {
  appName: string;
  version: string;
  persistentId: string;
}

export interface ClusterInfo {
  clusterName: string;
  clusterId: string;
  nodes: NodeInfo[];
}

export interface NodeInfo {
  nodeName: string;
  nodeId: string;
  nodeIp: string;
  nodePort: number;
}

function createBaseGetSystemMetricsSnapshotRequest(): GetSystemMetricsSnapshotRequest {
  return { clientName: "", version: "" };
}

export const GetSystemMetricsSnapshotRequest = {
  encode(message: GetSystemMetricsSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientName !== "") {
      writer.uint32(10).string(message.clientName);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSystemMetricsSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSystemMetricsSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSystemMetricsSnapshotRequest {
    return {
      clientName: isSet(object.clientName) ? globalThis.String(object.clientName) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
    };
  },

  toJSON(message: GetSystemMetricsSnapshotRequest): unknown {
    const obj: any = {};
    if (message.clientName !== "") {
      obj.clientName = message.clientName;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSystemMetricsSnapshotRequest>, I>>(base?: I): GetSystemMetricsSnapshotRequest {
    return GetSystemMetricsSnapshotRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSystemMetricsSnapshotRequest>, I>>(
    object: I,
  ): GetSystemMetricsSnapshotRequest {
    const message = createBaseGetSystemMetricsSnapshotRequest();
    message.clientName = object.clientName ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseGetSystemMetricsSnapshotResponse(): GetSystemMetricsSnapshotResponse {
  return { status: 0, snapshot: undefined };
}

export const GetSystemMetricsSnapshotResponse = {
  encode(message: GetSystemMetricsSnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.snapshot !== undefined) {
      SystemMetricsSnapshot.encode(message.snapshot, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSystemMetricsSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSystemMetricsSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapshot = SystemMetricsSnapshot.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSystemMetricsSnapshotResponse {
    return {
      status: isSet(object.status) ? getSystemMetricsSnapshotResponse_StatusFromJSON(object.status) : 0,
      snapshot: isSet(object.snapshot) ? SystemMetricsSnapshot.fromJSON(object.snapshot) : undefined,
    };
  },

  toJSON(message: GetSystemMetricsSnapshotResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = getSystemMetricsSnapshotResponse_StatusToJSON(message.status);
    }
    if (message.snapshot !== undefined) {
      obj.snapshot = SystemMetricsSnapshot.toJSON(message.snapshot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSystemMetricsSnapshotResponse>, I>>(
    base?: I,
  ): GetSystemMetricsSnapshotResponse {
    return GetSystemMetricsSnapshotResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSystemMetricsSnapshotResponse>, I>>(
    object: I,
  ): GetSystemMetricsSnapshotResponse {
    const message = createBaseGetSystemMetricsSnapshotResponse();
    message.status = object.status ?? 0;
    message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
      ? SystemMetricsSnapshot.fromPartial(object.snapshot)
      : undefined;
    return message;
  },
};

function createBaseSystemMetricsSnapshot(): SystemMetricsSnapshot {
  return { appMetadata: undefined, clusterInfo: undefined };
}

export const SystemMetricsSnapshot = {
  encode(message: SystemMetricsSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appMetadata !== undefined) {
      ApplicationMetadata.encode(message.appMetadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.clusterInfo !== undefined) {
      ClusterInfo.encode(message.clusterInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemMetricsSnapshot {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemMetricsSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appMetadata = ApplicationMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clusterInfo = ClusterInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SystemMetricsSnapshot {
    return {
      appMetadata: isSet(object.appMetadata) ? ApplicationMetadata.fromJSON(object.appMetadata) : undefined,
      clusterInfo: isSet(object.clusterInfo) ? ClusterInfo.fromJSON(object.clusterInfo) : undefined,
    };
  },

  toJSON(message: SystemMetricsSnapshot): unknown {
    const obj: any = {};
    if (message.appMetadata !== undefined) {
      obj.appMetadata = ApplicationMetadata.toJSON(message.appMetadata);
    }
    if (message.clusterInfo !== undefined) {
      obj.clusterInfo = ClusterInfo.toJSON(message.clusterInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SystemMetricsSnapshot>, I>>(base?: I): SystemMetricsSnapshot {
    return SystemMetricsSnapshot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SystemMetricsSnapshot>, I>>(object: I): SystemMetricsSnapshot {
    const message = createBaseSystemMetricsSnapshot();
    message.appMetadata = (object.appMetadata !== undefined && object.appMetadata !== null)
      ? ApplicationMetadata.fromPartial(object.appMetadata)
      : undefined;
    message.clusterInfo = (object.clusterInfo !== undefined && object.clusterInfo !== null)
      ? ClusterInfo.fromPartial(object.clusterInfo)
      : undefined;
    return message;
  },
};

function createBaseApplicationMetadata(): ApplicationMetadata {
  return { appName: "", version: "", persistentId: "" };
}

export const ApplicationMetadata = {
  encode(message: ApplicationMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.persistentId !== "") {
      writer.uint32(26).string(message.persistentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.persistentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplicationMetadata {
    return {
      appName: isSet(object.appName) ? globalThis.String(object.appName) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      persistentId: isSet(object.persistentId) ? globalThis.String(object.persistentId) : "",
    };
  },

  toJSON(message: ApplicationMetadata): unknown {
    const obj: any = {};
    if (message.appName !== "") {
      obj.appName = message.appName;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.persistentId !== "") {
      obj.persistentId = message.persistentId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplicationMetadata>, I>>(base?: I): ApplicationMetadata {
    return ApplicationMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplicationMetadata>, I>>(object: I): ApplicationMetadata {
    const message = createBaseApplicationMetadata();
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.persistentId = object.persistentId ?? "";
    return message;
  },
};

function createBaseClusterInfo(): ClusterInfo {
  return { clusterName: "", clusterId: "", nodes: [] };
}

export const ClusterInfo = {
  encode(message: ClusterInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clusterName !== "") {
      writer.uint32(10).string(message.clusterName);
    }
    if (message.clusterId !== "") {
      writer.uint32(18).string(message.clusterId);
    }
    for (const v of message.nodes) {
      NodeInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClusterInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClusterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clusterName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clusterId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodes.push(NodeInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClusterInfo {
    return {
      clusterName: isSet(object.clusterName) ? globalThis.String(object.clusterName) : "",
      clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : "",
      nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => NodeInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ClusterInfo): unknown {
    const obj: any = {};
    if (message.clusterName !== "") {
      obj.clusterName = message.clusterName;
    }
    if (message.clusterId !== "") {
      obj.clusterId = message.clusterId;
    }
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => NodeInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClusterInfo>, I>>(base?: I): ClusterInfo {
    return ClusterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClusterInfo>, I>>(object: I): ClusterInfo {
    const message = createBaseClusterInfo();
    message.clusterName = object.clusterName ?? "";
    message.clusterId = object.clusterId ?? "";
    message.nodes = object.nodes?.map((e) => NodeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeInfo(): NodeInfo {
  return { nodeName: "", nodeId: "", nodeIp: "", nodePort: 0 };
}

export const NodeInfo = {
  encode(message: NodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeName !== "") {
      writer.uint32(10).string(message.nodeName);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.nodeIp !== "") {
      writer.uint32(26).string(message.nodeIp);
    }
    if (message.nodePort !== 0) {
      writer.uint32(32).int32(message.nodePort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nodeIp = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nodePort = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeInfo {
    return {
      nodeName: isSet(object.nodeName) ? globalThis.String(object.nodeName) : "",
      nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
      nodeIp: isSet(object.nodeIp) ? globalThis.String(object.nodeIp) : "",
      nodePort: isSet(object.nodePort) ? globalThis.Number(object.nodePort) : 0,
    };
  },

  toJSON(message: NodeInfo): unknown {
    const obj: any = {};
    if (message.nodeName !== "") {
      obj.nodeName = message.nodeName;
    }
    if (message.nodeId !== "") {
      obj.nodeId = message.nodeId;
    }
    if (message.nodeIp !== "") {
      obj.nodeIp = message.nodeIp;
    }
    if (message.nodePort !== 0) {
      obj.nodePort = Math.round(message.nodePort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeInfo>, I>>(base?: I): NodeInfo {
    return NodeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeInfo>, I>>(object: I): NodeInfo {
    const message = createBaseNodeInfo();
    message.nodeName = object.nodeName ?? "";
    message.nodeId = object.nodeId ?? "";
    message.nodeIp = object.nodeIp ?? "";
    message.nodePort = object.nodePort ?? 0;
    return message;
  },
};

export type SystemMetricsServiceService = typeof SystemMetricsServiceService;
export const SystemMetricsServiceService = {
  getSnapshot: {
    path: "/aeca.rpc.SystemMetricsService/get_snapshot",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetSystemMetricsSnapshotRequest) =>
      Buffer.from(GetSystemMetricsSnapshotRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetSystemMetricsSnapshotRequest.decode(value),
    responseSerialize: (value: GetSystemMetricsSnapshotResponse) =>
      Buffer.from(GetSystemMetricsSnapshotResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetSystemMetricsSnapshotResponse.decode(value),
  },
} as const;

export interface SystemMetricsServiceServer extends UntypedServiceImplementation {
  getSnapshot: handleUnaryCall<GetSystemMetricsSnapshotRequest, GetSystemMetricsSnapshotResponse>;
}

export interface SystemMetricsServiceClient extends Client {
  getSnapshot(
    request: GetSystemMetricsSnapshotRequest,
    callback: (error: ServiceError | null, response: GetSystemMetricsSnapshotResponse) => void,
  ): ClientUnaryCall;
  getSnapshot(
    request: GetSystemMetricsSnapshotRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetSystemMetricsSnapshotResponse) => void,
  ): ClientUnaryCall;
  getSnapshot(
    request: GetSystemMetricsSnapshotRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetSystemMetricsSnapshotResponse) => void,
  ): ClientUnaryCall;
}

export const SystemMetricsServiceClient = makeGenericClientConstructor(
  SystemMetricsServiceService,
  "aeca.rpc.SystemMetricsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SystemMetricsServiceClient;
  service: typeof SystemMetricsServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}