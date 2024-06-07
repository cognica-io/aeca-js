/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "aeca.rpc.db.document";

export interface Value {
  null?: boolean | undefined;
  bool?: boolean | undefined;
  int64?: number | undefined;
  uint64?: number | undefined;
  double?: number | undefined;
  string?: string | undefined;
  array?: Array | undefined;
  object?: ObjectType | undefined;
}

export interface Array {
  value: Value[];
}

export interface ObjectType {
  value: { [key: string]: Value };
}

export interface ObjectType_ValueEntry {
  key: string;
  value: Value | undefined;
}

export interface Document {
  object?: ObjectType | undefined;
  json?: string | undefined;
}

function createBaseValue(): Value {
  return {
    null: undefined,
    bool: undefined,
    int64: undefined,
    uint64: undefined,
    double: undefined,
    string: undefined,
    array: undefined,
    object: undefined,
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null !== undefined) {
      writer.uint32(8).bool(message.null);
    }
    if (message.bool !== undefined) {
      writer.uint32(16).bool(message.bool);
    }
    if (message.int64 !== undefined) {
      writer.uint32(24).int64(message.int64);
    }
    if (message.uint64 !== undefined) {
      writer.uint32(32).uint64(message.uint64);
    }
    if (message.double !== undefined) {
      writer.uint32(41).double(message.double);
    }
    if (message.string !== undefined) {
      writer.uint32(50).string(message.string);
    }
    if (message.array !== undefined) {
      Array.encode(message.array, writer.uint32(58).fork()).ldelim();
    }
    if (message.object !== undefined) {
      ObjectType.encode(message.object, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.null = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bool = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.int64 = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.uint64 = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.double = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.string = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.array = Array.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.object = ObjectType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      null: isSet(object.null) ? globalThis.Boolean(object.null) : undefined,
      bool: isSet(object.bool) ? globalThis.Boolean(object.bool) : undefined,
      int64: isSet(object.int64) ? globalThis.Number(object.int64) : undefined,
      uint64: isSet(object.uint64) ? globalThis.Number(object.uint64) : undefined,
      double: isSet(object.double) ? globalThis.Number(object.double) : undefined,
      string: isSet(object.string) ? globalThis.String(object.string) : undefined,
      array: isSet(object.array) ? Array.fromJSON(object.array) : undefined,
      object: isSet(object.object) ? ObjectType.fromJSON(object.object) : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    if (message.null !== undefined) {
      obj.null = message.null;
    }
    if (message.bool !== undefined) {
      obj.bool = message.bool;
    }
    if (message.int64 !== undefined) {
      obj.int64 = Math.round(message.int64);
    }
    if (message.uint64 !== undefined) {
      obj.uint64 = Math.round(message.uint64);
    }
    if (message.double !== undefined) {
      obj.double = message.double;
    }
    if (message.string !== undefined) {
      obj.string = message.string;
    }
    if (message.array !== undefined) {
      obj.array = Array.toJSON(message.array);
    }
    if (message.object !== undefined) {
      obj.object = ObjectType.toJSON(message.object);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value>, I>>(base?: I): Value {
    return Value.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    message.null = object.null ?? undefined;
    message.bool = object.bool ?? undefined;
    message.int64 = object.int64 ?? undefined;
    message.uint64 = object.uint64 ?? undefined;
    message.double = object.double ?? undefined;
    message.string = object.string ?? undefined;
    message.array = (object.array !== undefined && object.array !== null) ? Array.fromPartial(object.array) : undefined;
    message.object = (object.object !== undefined && object.object !== null)
      ? ObjectType.fromPartial(object.object)
      : undefined;
    return message;
  },
};

function createBaseArray(): Array {
  return { value: [] };
}

export const Array = {
  encode(message: Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Array {
    return { value: globalThis.Array.isArray(object?.value) ? object.value.map((e: any) => Value.fromJSON(e)) : [] };
  },

  toJSON(message: Array): unknown {
    const obj: any = {};
    if (message.value?.length) {
      obj.value = message.value.map((e) => Value.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array>, I>>(base?: I): Array {
    return Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Array>, I>>(object: I): Array {
    const message = createBaseArray();
    message.value = object.value?.map((e) => Value.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectType(): ObjectType {
  return { value: {} };
}

export const ObjectType = {
  encode(message: ObjectType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.value).forEach(([key, value]) => {
      ObjectType_ValueEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = ObjectType_ValueEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.value[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectType {
    return {
      value: isObject(object.value)
        ? Object.entries(object.value).reduce<{ [key: string]: Value }>((acc, [key, value]) => {
          acc[key] = Value.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ObjectType): unknown {
    const obj: any = {};
    if (message.value) {
      const entries = Object.entries(message.value);
      if (entries.length > 0) {
        obj.value = {};
        entries.forEach(([k, v]) => {
          obj.value[k] = Value.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectType>, I>>(base?: I): ObjectType {
    return ObjectType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ObjectType>, I>>(object: I): ObjectType {
    const message = createBaseObjectType();
    message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: Value }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Value.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseObjectType_ValueEntry(): ObjectType_ValueEntry {
  return { key: "", value: undefined };
}

export const ObjectType_ValueEntry = {
  encode(message: ObjectType_ValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectType_ValueEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectType_ValueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ObjectType_ValueEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ObjectType_ValueEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectType_ValueEntry>, I>>(base?: I): ObjectType_ValueEntry {
    return ObjectType_ValueEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ObjectType_ValueEntry>, I>>(object: I): ObjectType_ValueEntry {
    const message = createBaseObjectType_ValueEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseDocument(): Document {
  return { object: undefined, json: undefined };
}

export const Document = {
  encode(message: Document, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.object !== undefined) {
      ObjectType.encode(message.object, writer.uint32(10).fork()).ldelim();
    }
    if (message.json !== undefined) {
      writer.uint32(18).string(message.json);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.object = ObjectType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.json = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Document {
    return {
      object: isSet(object.object) ? ObjectType.fromJSON(object.object) : undefined,
      json: isSet(object.json) ? globalThis.String(object.json) : undefined,
    };
  },

  toJSON(message: Document): unknown {
    const obj: any = {};
    if (message.object !== undefined) {
      obj.object = ObjectType.toJSON(message.object);
    }
    if (message.json !== undefined) {
      obj.json = message.json;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Document>, I>>(base?: I): Document {
    return Document.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.object = (object.object !== undefined && object.object !== null)
      ? ObjectType.fromPartial(object.object)
      : undefined;
    message.json = object.json ?? undefined;
    return message;
  },
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
