/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "aeca.rpc.db.fts";

export interface ProfileInfo {
  durationUs: number;
}

export interface PipelineExecutionRequest {
  collectionName: string;
  indexName: string;
  fieldNames: string[];
  query: string;
}

export interface PipelineExecutionResponse {
  status: number;
  result: string;
  profile: ProfileInfo | undefined;
}

export interface AdhocPipelineExecutionRequest {
  pipelineDef: string;
  fieldNames: string[];
  query: string;
}

export interface AdhocPipelineExecutionResponse {
  status: number;
  result: string;
  profile: ProfileInfo | undefined;
}

function createBaseProfileInfo(): ProfileInfo {
  return { durationUs: 0 };
}

export const ProfileInfo = {
  encode(message: ProfileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.durationUs !== 0) {
      writer.uint32(8).uint64(message.durationUs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.durationUs = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProfileInfo {
    return { durationUs: isSet(object.durationUs) ? globalThis.Number(object.durationUs) : 0 };
  },

  toJSON(message: ProfileInfo): unknown {
    const obj: any = {};
    if (message.durationUs !== 0) {
      obj.durationUs = Math.round(message.durationUs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileInfo>, I>>(base?: I): ProfileInfo {
    return ProfileInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileInfo>, I>>(object: I): ProfileInfo {
    const message = createBaseProfileInfo();
    message.durationUs = object.durationUs ?? 0;
    return message;
  },
};

function createBasePipelineExecutionRequest(): PipelineExecutionRequest {
  return { collectionName: "", indexName: "", fieldNames: [], query: "" };
}

export const PipelineExecutionRequest = {
  encode(message: PipelineExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    for (const v of message.fieldNames) {
      writer.uint32(26).string(v!);
    }
    if (message.query !== "") {
      writer.uint32(34).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipelineExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipelineExecutionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collectionName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.indexName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fieldNames.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.query = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipelineExecutionRequest {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
      fieldNames: globalThis.Array.isArray(object?.fieldNames)
        ? object.fieldNames.map((e: any) => globalThis.String(e))
        : [],
      query: isSet(object.query) ? globalThis.String(object.query) : "",
    };
  },

  toJSON(message: PipelineExecutionRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if (message.fieldNames?.length) {
      obj.fieldNames = message.fieldNames;
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PipelineExecutionRequest>, I>>(base?: I): PipelineExecutionRequest {
    return PipelineExecutionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PipelineExecutionRequest>, I>>(object: I): PipelineExecutionRequest {
    const message = createBasePipelineExecutionRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
    message.fieldNames = object.fieldNames?.map((e) => e) || [];
    message.query = object.query ?? "";
    return message;
  },
};

function createBasePipelineExecutionResponse(): PipelineExecutionResponse {
  return { status: 0, result: "", profile: undefined };
}

export const PipelineExecutionResponse = {
  encode(message: PipelineExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipelineExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipelineExecutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.profile = ProfileInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipelineExecutionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      result: isSet(object.result) ? globalThis.String(object.result) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: PipelineExecutionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.result !== "") {
      obj.result = message.result;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PipelineExecutionResponse>, I>>(base?: I): PipelineExecutionResponse {
    return PipelineExecutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PipelineExecutionResponse>, I>>(object: I): PipelineExecutionResponse {
    const message = createBasePipelineExecutionResponse();
    message.status = object.status ?? 0;
    message.result = object.result ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseAdhocPipelineExecutionRequest(): AdhocPipelineExecutionRequest {
  return { pipelineDef: "", fieldNames: [], query: "" };
}

export const AdhocPipelineExecutionRequest = {
  encode(message: AdhocPipelineExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pipelineDef !== "") {
      writer.uint32(10).string(message.pipelineDef);
    }
    for (const v of message.fieldNames) {
      writer.uint32(18).string(v!);
    }
    if (message.query !== "") {
      writer.uint32(26).string(message.query);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdhocPipelineExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdhocPipelineExecutionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pipelineDef = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fieldNames.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.query = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdhocPipelineExecutionRequest {
    return {
      pipelineDef: isSet(object.pipelineDef) ? globalThis.String(object.pipelineDef) : "",
      fieldNames: globalThis.Array.isArray(object?.fieldNames)
        ? object.fieldNames.map((e: any) => globalThis.String(e))
        : [],
      query: isSet(object.query) ? globalThis.String(object.query) : "",
    };
  },

  toJSON(message: AdhocPipelineExecutionRequest): unknown {
    const obj: any = {};
    if (message.pipelineDef !== "") {
      obj.pipelineDef = message.pipelineDef;
    }
    if (message.fieldNames?.length) {
      obj.fieldNames = message.fieldNames;
    }
    if (message.query !== "") {
      obj.query = message.query;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AdhocPipelineExecutionRequest>, I>>(base?: I): AdhocPipelineExecutionRequest {
    return AdhocPipelineExecutionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AdhocPipelineExecutionRequest>, I>>(
    object: I,
  ): AdhocPipelineExecutionRequest {
    const message = createBaseAdhocPipelineExecutionRequest();
    message.pipelineDef = object.pipelineDef ?? "";
    message.fieldNames = object.fieldNames?.map((e) => e) || [];
    message.query = object.query ?? "";
    return message;
  },
};

function createBaseAdhocPipelineExecutionResponse(): AdhocPipelineExecutionResponse {
  return { status: 0, result: "", profile: undefined };
}

export const AdhocPipelineExecutionResponse = {
  encode(message: AdhocPipelineExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdhocPipelineExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdhocPipelineExecutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.profile = ProfileInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdhocPipelineExecutionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      result: isSet(object.result) ? globalThis.String(object.result) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: AdhocPipelineExecutionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.result !== "") {
      obj.result = message.result;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AdhocPipelineExecutionResponse>, I>>(base?: I): AdhocPipelineExecutionResponse {
    return AdhocPipelineExecutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AdhocPipelineExecutionResponse>, I>>(
    object: I,
  ): AdhocPipelineExecutionResponse {
    const message = createBaseAdhocPipelineExecutionResponse();
    message.status = object.status ?? 0;
    message.result = object.result ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

export type FTSAnalysisPipelineServiceService = typeof FTSAnalysisPipelineServiceService;
export const FTSAnalysisPipelineServiceService = {
  execute: {
    path: "/aeca.rpc.db.fts.FTSAnalysisPipelineService/execute",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PipelineExecutionRequest) => Buffer.from(PipelineExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PipelineExecutionRequest.decode(value),
    responseSerialize: (value: PipelineExecutionResponse) =>
      Buffer.from(PipelineExecutionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PipelineExecutionResponse.decode(value),
  },
  executeAdhoc: {
    path: "/aeca.rpc.db.fts.FTSAnalysisPipelineService/execute_adhoc",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AdhocPipelineExecutionRequest) =>
      Buffer.from(AdhocPipelineExecutionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AdhocPipelineExecutionRequest.decode(value),
    responseSerialize: (value: AdhocPipelineExecutionResponse) =>
      Buffer.from(AdhocPipelineExecutionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AdhocPipelineExecutionResponse.decode(value),
  },
} as const;

export interface FTSAnalysisPipelineServiceServer extends UntypedServiceImplementation {
  execute: handleUnaryCall<PipelineExecutionRequest, PipelineExecutionResponse>;
  executeAdhoc: handleUnaryCall<AdhocPipelineExecutionRequest, AdhocPipelineExecutionResponse>;
}

export interface FTSAnalysisPipelineServiceClient extends Client {
  execute(
    request: PipelineExecutionRequest,
    callback: (error: ServiceError | null, response: PipelineExecutionResponse) => void,
  ): ClientUnaryCall;
  execute(
    request: PipelineExecutionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PipelineExecutionResponse) => void,
  ): ClientUnaryCall;
  execute(
    request: PipelineExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PipelineExecutionResponse) => void,
  ): ClientUnaryCall;
  executeAdhoc(
    request: AdhocPipelineExecutionRequest,
    callback: (error: ServiceError | null, response: AdhocPipelineExecutionResponse) => void,
  ): ClientUnaryCall;
  executeAdhoc(
    request: AdhocPipelineExecutionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: AdhocPipelineExecutionResponse) => void,
  ): ClientUnaryCall;
  executeAdhoc(
    request: AdhocPipelineExecutionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: AdhocPipelineExecutionResponse) => void,
  ): ClientUnaryCall;
}

export const FTSAnalysisPipelineServiceClient = makeGenericClientConstructor(
  FTSAnalysisPipelineServiceService,
  "aeca.rpc.db.fts.FTSAnalysisPipelineService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): FTSAnalysisPipelineServiceClient;
  service: typeof FTSAnalysisPipelineServiceService;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
