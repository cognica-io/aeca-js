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

export const protobufPackage = "cognica.rpc.db.kv";

export enum StatusType {
  kOK = 0,
  kNotFound = 1,
  kInternal = 10,
  UNRECOGNIZED = -1,
}

export function statusTypeFromJSON(object: any): StatusType {
  switch (object) {
    case 0:
    case "kOK":
      return StatusType.kOK;
    case 1:
    case "kNotFound":
      return StatusType.kNotFound;
    case 10:
    case "kInternal":
      return StatusType.kInternal;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StatusType.UNRECOGNIZED;
  }
}

export function statusTypeToJSON(object: StatusType): string {
  switch (object) {
    case StatusType.kOK:
      return "kOK";
    case StatusType.kNotFound:
      return "kNotFound";
    case StatusType.kInternal:
      return "kInternal";
    case StatusType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ProfileInfo {
  durationUs: number;
}

export interface Response {
  status: StatusType;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface PutRequest {
  keyspaceName: string;
  key: Buffer;
  value: Buffer;
  ttl: number;
  createIfMissing: boolean;
}

export interface PutResponse {
  response: Response | undefined;
}

export interface RemoveRequest {
  keyspaceName: string;
  key: Buffer;
}

export interface RemoveResponse {
  response: Response | undefined;
}

export interface GetRequest {
  keyspaceName: string;
  key: Buffer;
}

export interface GetResponse {
  response: Response | undefined;
  value: Buffer;
}

export interface MultiGetRequest {
  keyspaceName: string;
  keys: Buffer[];
}

export interface MultiGetResponse {
  responses: Response[];
  values: Buffer[];
}

export interface BatchedPutRequest {
  keyspaceName: string;
  keys: Buffer[];
  values: Buffer[];
  ttls: number[];
  createIfMissing: boolean;
}

export interface BatchedPutResponse {
  responses: Response[];
}

export interface BatchedRemoveRequest {
  keyspaceName: string;
  keys: Buffer[];
}

export interface BatchedRemoveResponse {
  responses: Response[];
}

export interface BatchedGetRequest {
  keyspaceName: string;
  keys: Buffer[];
}

export interface BatchedGetResponse {
  responses: Response[];
  values: Buffer[];
}

export interface CreateKeyspaceRequest {
  keyspaceName: string;
}

export interface CreateKeyspaceResponse {
  response: Response | undefined;
}

export interface DropKeyspaceRequest {
  keyspaceName: string;
}

export interface DropKeyspaceResponse {
  response: Response | undefined;
}

export interface TruncateKeyspaceRequest {
  keyspaceName: string;
}

export interface TruncateKeyspaceResponse {
  response: Response | undefined;
}

export interface ListKeyspacesRequest {
}

export interface ListKeyspacesResponse {
  response: Response | undefined;
  keyspaceNames: string[];
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

function createBaseResponse(): Response {
  return { status: 0, message: "", profile: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
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

          message.message = reader.string();
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

  fromJSON(object: any): Response {
    return {
      status: isSet(object.status) ? statusTypeFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusTypeToJSON(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBasePutRequest(): PutRequest {
  return { keyspaceName: "", key: Buffer.alloc(0), value: Buffer.alloc(0), ttl: 0, createIfMissing: false };
}

export const PutRequest = {
  encode(message: PutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.ttl !== 0) {
      writer.uint32(32).int64(message.ttl);
    }
    if (message.createIfMissing === true) {
      writer.uint32(40).bool(message.createIfMissing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.ttl = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.createIfMissing = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      key: isSet(object.key) ? Buffer.from(bytesFromBase64(object.key)) : Buffer.alloc(0),
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
      ttl: isSet(object.ttl) ? globalThis.Number(object.ttl) : 0,
      createIfMissing: isSet(object.createIfMissing) ? globalThis.Boolean(object.createIfMissing) : false,
    };
  },

  toJSON(message: PutRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    if (message.ttl !== 0) {
      obj.ttl = Math.round(message.ttl);
    }
    if (message.createIfMissing === true) {
      obj.createIfMissing = message.createIfMissing;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PutRequest>, I>>(base?: I): PutRequest {
    return PutRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PutRequest>, I>>(object: I): PutRequest {
    const message = createBasePutRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.key = object.key ?? Buffer.alloc(0);
    message.value = object.value ?? Buffer.alloc(0);
    message.ttl = object.ttl ?? 0;
    message.createIfMissing = object.createIfMissing ?? false;
    return message;
  },
};

function createBasePutResponse(): PutResponse {
  return { response: undefined };
}

export const PutResponse = {
  encode(message: PutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PutResponse {
    return { response: isSet(object.response) ? Response.fromJSON(object.response) : undefined };
  },

  toJSON(message: PutResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PutResponse>, I>>(base?: I): PutResponse {
    return PutResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PutResponse>, I>>(object: I): PutResponse {
    const message = createBasePutResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseRemoveRequest(): RemoveRequest {
  return { keyspaceName: "", key: Buffer.alloc(0) };
}

export const RemoveRequest = {
  encode(message: RemoveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      key: isSet(object.key) ? Buffer.from(bytesFromBase64(object.key)) : Buffer.alloc(0),
    };
  },

  toJSON(message: RemoveRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveRequest>, I>>(base?: I): RemoveRequest {
    return RemoveRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveRequest>, I>>(object: I): RemoveRequest {
    const message = createBaseRemoveRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.key = object.key ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseRemoveResponse(): RemoveResponse {
  return { response: undefined };
}

export const RemoveResponse = {
  encode(message: RemoveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveResponse {
    return { response: isSet(object.response) ? Response.fromJSON(object.response) : undefined };
  },

  toJSON(message: RemoveResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveResponse>, I>>(base?: I): RemoveResponse {
    return RemoveResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveResponse>, I>>(object: I): RemoveResponse {
    const message = createBaseRemoveResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseGetRequest(): GetRequest {
  return { keyspaceName: "", key: Buffer.alloc(0) };
}

export const GetRequest = {
  encode(message: GetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      key: isSet(object.key) ? Buffer.from(bytesFromBase64(object.key)) : Buffer.alloc(0),
    };
  },

  toJSON(message: GetRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetRequest>, I>>(base?: I): GetRequest {
    return GetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetRequest>, I>>(object: I): GetRequest {
    const message = createBaseGetRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.key = object.key ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseGetResponse(): GetResponse {
  return { response: undefined, value: Buffer.alloc(0) };
}

export const GetResponse = {
  encode(message: GetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetResponse {
    return {
      response: isSet(object.response) ? Response.fromJSON(object.response) : undefined,
      value: isSet(object.value) ? Buffer.from(bytesFromBase64(object.value)) : Buffer.alloc(0),
    };
  },

  toJSON(message: GetResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetResponse>, I>>(base?: I): GetResponse {
    return GetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetResponse>, I>>(object: I): GetResponse {
    const message = createBaseGetResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    message.value = object.value ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseMultiGetRequest(): MultiGetRequest {
  return { keyspaceName: "", keys: [] };
}

export const MultiGetRequest = {
  encode(message: MultiGetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiGetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keys.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiGetRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: MultiGetRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiGetRequest>, I>>(base?: I): MultiGetRequest {
    return MultiGetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiGetRequest>, I>>(object: I): MultiGetRequest {
    const message = createBaseMultiGetRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseMultiGetResponse(): MultiGetResponse {
  return { responses: [], values: [] };
}

export const MultiGetResponse = {
  encode(message: MultiGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiGetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(Response.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.values.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiGetResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => Response.fromJSON(e))
        : [],
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: MultiGetResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiGetResponse>, I>>(base?: I): MultiGetResponse {
    return MultiGetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiGetResponse>, I>>(object: I): MultiGetResponse {
    const message = createBaseMultiGetResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseBatchedPutRequest(): BatchedPutRequest {
  return { keyspaceName: "", keys: [], values: [], ttls: [], createIfMissing: false };
}

export const BatchedPutRequest = {
  encode(message: BatchedPutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.values) {
      writer.uint32(26).bytes(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.ttls) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.createIfMissing === true) {
      writer.uint32(40).bool(message.createIfMissing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedPutRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedPutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keys.push(reader.bytes() as Buffer);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.values.push(reader.bytes() as Buffer);
          continue;
        case 4:
          if (tag === 32) {
            message.ttls.push(longToNumber(reader.int64() as Long));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ttls.push(longToNumber(reader.int64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.createIfMissing = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchedPutRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
      ttls: globalThis.Array.isArray(object?.ttls) ? object.ttls.map((e: any) => globalThis.Number(e)) : [],
      createIfMissing: isSet(object.createIfMissing) ? globalThis.Boolean(object.createIfMissing) : false,
    };
  },

  toJSON(message: BatchedPutRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => base64FromBytes(e));
    }
    if (message.ttls?.length) {
      obj.ttls = message.ttls.map((e) => Math.round(e));
    }
    if (message.createIfMissing === true) {
      obj.createIfMissing = message.createIfMissing;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchedPutRequest>, I>>(base?: I): BatchedPutRequest {
    return BatchedPutRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchedPutRequest>, I>>(object: I): BatchedPutRequest {
    const message = createBaseBatchedPutRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    message.values = object.values?.map((e) => e) || [];
    message.ttls = object.ttls?.map((e) => e) || [];
    message.createIfMissing = object.createIfMissing ?? false;
    return message;
  },
};

function createBaseBatchedPutResponse(): BatchedPutResponse {
  return { responses: [] };
}

export const BatchedPutResponse = {
  encode(message: BatchedPutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedPutResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(Response.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchedPutResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => Response.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchedPutResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchedPutResponse>, I>>(base?: I): BatchedPutResponse {
    return BatchedPutResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchedPutResponse>, I>>(object: I): BatchedPutResponse {
    const message = createBaseBatchedPutResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchedRemoveRequest(): BatchedRemoveRequest {
  return { keyspaceName: "", keys: [] };
}

export const BatchedRemoveRequest = {
  encode(message: BatchedRemoveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedRemoveRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedRemoveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keys.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchedRemoveRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: BatchedRemoveRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchedRemoveRequest>, I>>(base?: I): BatchedRemoveRequest {
    return BatchedRemoveRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchedRemoveRequest>, I>>(object: I): BatchedRemoveRequest {
    const message = createBaseBatchedRemoveRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseBatchedRemoveResponse(): BatchedRemoveResponse {
  return { responses: [] };
}

export const BatchedRemoveResponse = {
  encode(message: BatchedRemoveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedRemoveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedRemoveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(Response.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchedRemoveResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => Response.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchedRemoveResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchedRemoveResponse>, I>>(base?: I): BatchedRemoveResponse {
    return BatchedRemoveResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchedRemoveResponse>, I>>(object: I): BatchedRemoveResponse {
    const message = createBaseBatchedRemoveResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBatchedGetRequest(): BatchedGetRequest {
  return { keyspaceName: "", keys: [] };
}

export const BatchedGetRequest = {
  encode(message: BatchedGetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedGetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedGetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keys.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchedGetRequest {
    return {
      keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: BatchedGetRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchedGetRequest>, I>>(base?: I): BatchedGetRequest {
    return BatchedGetRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchedGetRequest>, I>>(object: I): BatchedGetRequest {
    const message = createBaseBatchedGetRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

function createBaseBatchedGetResponse(): BatchedGetResponse {
  return { responses: [], values: [] };
}

export const BatchedGetResponse = {
  encode(message: BatchedGetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchedGetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchedGetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.responses.push(Response.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.values.push(reader.bytes() as Buffer);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BatchedGetResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => Response.fromJSON(e))
        : [],
      values: globalThis.Array.isArray(object?.values)
        ? object.values.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: BatchedGetResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BatchedGetResponse>, I>>(base?: I): BatchedGetResponse {
    return BatchedGetResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BatchedGetResponse>, I>>(object: I): BatchedGetResponse {
    const message = createBaseBatchedGetResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseCreateKeyspaceRequest(): CreateKeyspaceRequest {
  return { keyspaceName: "" };
}

export const CreateKeyspaceRequest = {
  encode(message: CreateKeyspaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyspaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKeyspaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateKeyspaceRequest {
    return { keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "" };
  },

  toJSON(message: CreateKeyspaceRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateKeyspaceRequest>, I>>(base?: I): CreateKeyspaceRequest {
    return CreateKeyspaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateKeyspaceRequest>, I>>(object: I): CreateKeyspaceRequest {
    const message = createBaseCreateKeyspaceRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    return message;
  },
};

function createBaseCreateKeyspaceResponse(): CreateKeyspaceResponse {
  return { response: undefined };
}

export const CreateKeyspaceResponse = {
  encode(message: CreateKeyspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateKeyspaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKeyspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateKeyspaceResponse {
    return { response: isSet(object.response) ? Response.fromJSON(object.response) : undefined };
  },

  toJSON(message: CreateKeyspaceResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateKeyspaceResponse>, I>>(base?: I): CreateKeyspaceResponse {
    return CreateKeyspaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateKeyspaceResponse>, I>>(object: I): CreateKeyspaceResponse {
    const message = createBaseCreateKeyspaceResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseDropKeyspaceRequest(): DropKeyspaceRequest {
  return { keyspaceName: "" };
}

export const DropKeyspaceRequest = {
  encode(message: DropKeyspaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropKeyspaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropKeyspaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropKeyspaceRequest {
    return { keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "" };
  },

  toJSON(message: DropKeyspaceRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropKeyspaceRequest>, I>>(base?: I): DropKeyspaceRequest {
    return DropKeyspaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropKeyspaceRequest>, I>>(object: I): DropKeyspaceRequest {
    const message = createBaseDropKeyspaceRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    return message;
  },
};

function createBaseDropKeyspaceResponse(): DropKeyspaceResponse {
  return { response: undefined };
}

export const DropKeyspaceResponse = {
  encode(message: DropKeyspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropKeyspaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropKeyspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropKeyspaceResponse {
    return { response: isSet(object.response) ? Response.fromJSON(object.response) : undefined };
  },

  toJSON(message: DropKeyspaceResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropKeyspaceResponse>, I>>(base?: I): DropKeyspaceResponse {
    return DropKeyspaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropKeyspaceResponse>, I>>(object: I): DropKeyspaceResponse {
    const message = createBaseDropKeyspaceResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseTruncateKeyspaceRequest(): TruncateKeyspaceRequest {
  return { keyspaceName: "" };
}

export const TruncateKeyspaceRequest = {
  encode(message: TruncateKeyspaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TruncateKeyspaceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTruncateKeyspaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyspaceName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TruncateKeyspaceRequest {
    return { keyspaceName: isSet(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "" };
  },

  toJSON(message: TruncateKeyspaceRequest): unknown {
    const obj: any = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TruncateKeyspaceRequest>, I>>(base?: I): TruncateKeyspaceRequest {
    return TruncateKeyspaceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TruncateKeyspaceRequest>, I>>(object: I): TruncateKeyspaceRequest {
    const message = createBaseTruncateKeyspaceRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    return message;
  },
};

function createBaseTruncateKeyspaceResponse(): TruncateKeyspaceResponse {
  return { response: undefined };
}

export const TruncateKeyspaceResponse = {
  encode(message: TruncateKeyspaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TruncateKeyspaceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTruncateKeyspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TruncateKeyspaceResponse {
    return { response: isSet(object.response) ? Response.fromJSON(object.response) : undefined };
  },

  toJSON(message: TruncateKeyspaceResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TruncateKeyspaceResponse>, I>>(base?: I): TruncateKeyspaceResponse {
    return TruncateKeyspaceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TruncateKeyspaceResponse>, I>>(object: I): TruncateKeyspaceResponse {
    const message = createBaseTruncateKeyspaceResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseListKeyspacesRequest(): ListKeyspacesRequest {
  return {};
}

export const ListKeyspacesRequest = {
  encode(_: ListKeyspacesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyspacesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeyspacesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListKeyspacesRequest {
    return {};
  },

  toJSON(_: ListKeyspacesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListKeyspacesRequest>, I>>(base?: I): ListKeyspacesRequest {
    return ListKeyspacesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListKeyspacesRequest>, I>>(_: I): ListKeyspacesRequest {
    const message = createBaseListKeyspacesRequest();
    return message;
  },
};

function createBaseListKeyspacesResponse(): ListKeyspacesResponse {
  return { response: undefined, keyspaceNames: [] };
}

export const ListKeyspacesResponse = {
  encode(message: ListKeyspacesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.keyspaceNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListKeyspacesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeyspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = Response.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keyspaceNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListKeyspacesResponse {
    return {
      response: isSet(object.response) ? Response.fromJSON(object.response) : undefined,
      keyspaceNames: globalThis.Array.isArray(object?.keyspaceNames)
        ? object.keyspaceNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ListKeyspacesResponse): unknown {
    const obj: any = {};
    if (message.response !== undefined) {
      obj.response = Response.toJSON(message.response);
    }
    if (message.keyspaceNames?.length) {
      obj.keyspaceNames = message.keyspaceNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListKeyspacesResponse>, I>>(base?: I): ListKeyspacesResponse {
    return ListKeyspacesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListKeyspacesResponse>, I>>(object: I): ListKeyspacesResponse {
    const message = createBaseListKeyspacesResponse();
    message.response = (object.response !== undefined && object.response !== null)
      ? Response.fromPartial(object.response)
      : undefined;
    message.keyspaceNames = object.keyspaceNames?.map((e) => e) || [];
    return message;
  },
};

export type KeyValueDBServiceService = typeof KeyValueDBServiceService;
export const KeyValueDBServiceService = {
  put: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/put",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PutRequest) => Buffer.from(PutRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PutRequest.decode(value),
    responseSerialize: (value: PutResponse) => Buffer.from(PutResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PutResponse.decode(value),
  },
  remove: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveRequest) => Buffer.from(RemoveRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveRequest.decode(value),
    responseSerialize: (value: RemoveResponse) => Buffer.from(RemoveResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveResponse.decode(value),
  },
  get: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetRequest) => Buffer.from(GetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetRequest.decode(value),
    responseSerialize: (value: GetResponse) => Buffer.from(GetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetResponse.decode(value),
  },
  mget: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/mget",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: MultiGetRequest) => Buffer.from(MultiGetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => MultiGetRequest.decode(value),
    responseSerialize: (value: MultiGetResponse) => Buffer.from(MultiGetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => MultiGetResponse.decode(value),
  },
  putBatch: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/put_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BatchedPutRequest) => Buffer.from(BatchedPutRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BatchedPutRequest.decode(value),
    responseSerialize: (value: BatchedPutResponse) => Buffer.from(BatchedPutResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BatchedPutResponse.decode(value),
  },
  removeBatch: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/remove_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BatchedRemoveRequest) => Buffer.from(BatchedRemoveRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BatchedRemoveRequest.decode(value),
    responseSerialize: (value: BatchedRemoveResponse) => Buffer.from(BatchedRemoveResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BatchedRemoveResponse.decode(value),
  },
  getBatch: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/get_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BatchedGetRequest) => Buffer.from(BatchedGetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BatchedGetRequest.decode(value),
    responseSerialize: (value: BatchedGetResponse) => Buffer.from(BatchedGetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BatchedGetResponse.decode(value),
  },
} as const;

export interface KeyValueDBServiceServer extends UntypedServiceImplementation {
  put: handleUnaryCall<PutRequest, PutResponse>;
  remove: handleUnaryCall<RemoveRequest, RemoveResponse>;
  get: handleUnaryCall<GetRequest, GetResponse>;
  mget: handleUnaryCall<MultiGetRequest, MultiGetResponse>;
  putBatch: handleUnaryCall<BatchedPutRequest, BatchedPutResponse>;
  removeBatch: handleUnaryCall<BatchedRemoveRequest, BatchedRemoveResponse>;
  getBatch: handleUnaryCall<BatchedGetRequest, BatchedGetResponse>;
}

export interface KeyValueDBServiceClient extends Client {
  put(request: PutRequest, callback: (error: ServiceError | null, response: PutResponse) => void): ClientUnaryCall;
  put(
    request: PutRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PutResponse) => void,
  ): ClientUnaryCall;
  put(
    request: PutRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PutResponse) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveRequest,
    callback: (error: ServiceError | null, response: RemoveResponse) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RemoveResponse) => void,
  ): ClientUnaryCall;
  remove(
    request: RemoveRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RemoveResponse) => void,
  ): ClientUnaryCall;
  get(request: GetRequest, callback: (error: ServiceError | null, response: GetResponse) => void): ClientUnaryCall;
  get(
    request: GetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetResponse) => void,
  ): ClientUnaryCall;
  get(
    request: GetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetResponse) => void,
  ): ClientUnaryCall;
  mget(
    request: MultiGetRequest,
    callback: (error: ServiceError | null, response: MultiGetResponse) => void,
  ): ClientUnaryCall;
  mget(
    request: MultiGetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: MultiGetResponse) => void,
  ): ClientUnaryCall;
  mget(
    request: MultiGetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: MultiGetResponse) => void,
  ): ClientUnaryCall;
  putBatch(
    request: BatchedPutRequest,
    callback: (error: ServiceError | null, response: BatchedPutResponse) => void,
  ): ClientUnaryCall;
  putBatch(
    request: BatchedPutRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BatchedPutResponse) => void,
  ): ClientUnaryCall;
  putBatch(
    request: BatchedPutRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BatchedPutResponse) => void,
  ): ClientUnaryCall;
  removeBatch(
    request: BatchedRemoveRequest,
    callback: (error: ServiceError | null, response: BatchedRemoveResponse) => void,
  ): ClientUnaryCall;
  removeBatch(
    request: BatchedRemoveRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BatchedRemoveResponse) => void,
  ): ClientUnaryCall;
  removeBatch(
    request: BatchedRemoveRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BatchedRemoveResponse) => void,
  ): ClientUnaryCall;
  getBatch(
    request: BatchedGetRequest,
    callback: (error: ServiceError | null, response: BatchedGetResponse) => void,
  ): ClientUnaryCall;
  getBatch(
    request: BatchedGetRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BatchedGetResponse) => void,
  ): ClientUnaryCall;
  getBatch(
    request: BatchedGetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BatchedGetResponse) => void,
  ): ClientUnaryCall;
}

export const KeyValueDBServiceClient = makeGenericClientConstructor(
  KeyValueDBServiceService,
  "cognica.rpc.db.kv.KeyValueDBService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): KeyValueDBServiceClient;
  service: typeof KeyValueDBServiceService;
  serviceName: string;
};

export type KeyspaceManagerServiceService = typeof KeyspaceManagerServiceService;
export const KeyspaceManagerServiceService = {
  createKeyspace: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/create_keyspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateKeyspaceRequest) => Buffer.from(CreateKeyspaceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateKeyspaceRequest.decode(value),
    responseSerialize: (value: CreateKeyspaceResponse) => Buffer.from(CreateKeyspaceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateKeyspaceResponse.decode(value),
  },
  dropKeyspace: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/drop_keyspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DropKeyspaceRequest) => Buffer.from(DropKeyspaceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DropKeyspaceRequest.decode(value),
    responseSerialize: (value: DropKeyspaceResponse) => Buffer.from(DropKeyspaceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DropKeyspaceResponse.decode(value),
  },
  truncateKeyspace: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/truncate_keyspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TruncateKeyspaceRequest) => Buffer.from(TruncateKeyspaceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TruncateKeyspaceRequest.decode(value),
    responseSerialize: (value: TruncateKeyspaceResponse) =>
      Buffer.from(TruncateKeyspaceResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TruncateKeyspaceResponse.decode(value),
  },
  listKeyspaces: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/list_keyspaces",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListKeyspacesRequest) => Buffer.from(ListKeyspacesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListKeyspacesRequest.decode(value),
    responseSerialize: (value: ListKeyspacesResponse) => Buffer.from(ListKeyspacesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListKeyspacesResponse.decode(value),
  },
} as const;

export interface KeyspaceManagerServiceServer extends UntypedServiceImplementation {
  createKeyspace: handleUnaryCall<CreateKeyspaceRequest, CreateKeyspaceResponse>;
  dropKeyspace: handleUnaryCall<DropKeyspaceRequest, DropKeyspaceResponse>;
  truncateKeyspace: handleUnaryCall<TruncateKeyspaceRequest, TruncateKeyspaceResponse>;
  listKeyspaces: handleUnaryCall<ListKeyspacesRequest, ListKeyspacesResponse>;
}

export interface KeyspaceManagerServiceClient extends Client {
  createKeyspace(
    request: CreateKeyspaceRequest,
    callback: (error: ServiceError | null, response: CreateKeyspaceResponse) => void,
  ): ClientUnaryCall;
  createKeyspace(
    request: CreateKeyspaceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateKeyspaceResponse) => void,
  ): ClientUnaryCall;
  createKeyspace(
    request: CreateKeyspaceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateKeyspaceResponse) => void,
  ): ClientUnaryCall;
  dropKeyspace(
    request: DropKeyspaceRequest,
    callback: (error: ServiceError | null, response: DropKeyspaceResponse) => void,
  ): ClientUnaryCall;
  dropKeyspace(
    request: DropKeyspaceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DropKeyspaceResponse) => void,
  ): ClientUnaryCall;
  dropKeyspace(
    request: DropKeyspaceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DropKeyspaceResponse) => void,
  ): ClientUnaryCall;
  truncateKeyspace(
    request: TruncateKeyspaceRequest,
    callback: (error: ServiceError | null, response: TruncateKeyspaceResponse) => void,
  ): ClientUnaryCall;
  truncateKeyspace(
    request: TruncateKeyspaceRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TruncateKeyspaceResponse) => void,
  ): ClientUnaryCall;
  truncateKeyspace(
    request: TruncateKeyspaceRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TruncateKeyspaceResponse) => void,
  ): ClientUnaryCall;
  listKeyspaces(
    request: ListKeyspacesRequest,
    callback: (error: ServiceError | null, response: ListKeyspacesResponse) => void,
  ): ClientUnaryCall;
  listKeyspaces(
    request: ListKeyspacesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListKeyspacesResponse) => void,
  ): ClientUnaryCall;
  listKeyspaces(
    request: ListKeyspacesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListKeyspacesResponse) => void,
  ): ClientUnaryCall;
}

export const KeyspaceManagerServiceClient = makeGenericClientConstructor(
  KeyspaceManagerServiceService,
  "cognica.rpc.db.kv.KeyspaceManagerService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): KeyspaceManagerServiceClient;
  service: typeof KeyspaceManagerServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
