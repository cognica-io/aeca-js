// src/channel.ts
import * as grpc from "@grpc/grpc-js";
var _Channel = class _Channel {
  constructor(host, port, useSSL = false) {
    this._address = `${host}:${port}`;
    this._useSSL = useSSL;
    if (this._useSSL) {
      this._credential = grpc.credentials.createSsl();
    } else {
      this._credential = grpc.credentials.createInsecure();
    }
  }
  get address() {
    return this._address;
  }
  get credential() {
    return this._credential;
  }
  get options() {
    return _Channel._OPTIONS;
  }
};
_Channel._OPTIONS = {
  "grpc.max_concurrent_streams": 4,
  "grpc.max_send_message_length": -1,
  "grpc.max_receive_message_length": -1,
  "grpc.http2.max_frame_size": 10 * 1024 * 1024
  // 10MB
};
var Channel = _Channel;

// src/proto/generated/document_db.ts
import { makeGenericClientConstructor } from "@grpc/grpc-js";
import Long2 from "long";
import _m02 from "protobufjs/minimal";

// src/proto/generated/document.ts
import Long from "long";
import _m0 from "protobufjs/minimal";
function createBaseValue() {
  return {
    null: void 0,
    bool: void 0,
    int64: void 0,
    uint64: void 0,
    double: void 0,
    string: void 0,
    array: void 0,
    object: void 0
  };
}
var Value = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.null !== void 0) {
      writer.uint32(8).bool(message.null);
    }
    if (message.bool !== void 0) {
      writer.uint32(16).bool(message.bool);
    }
    if (message.int64 !== void 0) {
      writer.uint32(24).int64(message.int64);
    }
    if (message.uint64 !== void 0) {
      writer.uint32(32).uint64(message.uint64);
    }
    if (message.double !== void 0) {
      writer.uint32(41).double(message.double);
    }
    if (message.string !== void 0) {
      writer.uint32(50).string(message.string);
    }
    if (message.array !== void 0) {
      Array2.encode(message.array, writer.uint32(58).fork()).ldelim();
    }
    if (message.object !== void 0) {
      ObjectType.encode(message.object, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.int64 = longToNumber(reader.int64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.uint64 = longToNumber(reader.uint64());
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
          message.array = Array2.decode(reader, reader.uint32());
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
  fromJSON(object) {
    return {
      null: isSet(object.null) ? globalThis.Boolean(object.null) : void 0,
      bool: isSet(object.bool) ? globalThis.Boolean(object.bool) : void 0,
      int64: isSet(object.int64) ? globalThis.Number(object.int64) : void 0,
      uint64: isSet(object.uint64) ? globalThis.Number(object.uint64) : void 0,
      double: isSet(object.double) ? globalThis.Number(object.double) : void 0,
      string: isSet(object.string) ? globalThis.String(object.string) : void 0,
      array: isSet(object.array) ? Array2.fromJSON(object.array) : void 0,
      object: isSet(object.object) ? ObjectType.fromJSON(object.object) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.null !== void 0) {
      obj.null = message.null;
    }
    if (message.bool !== void 0) {
      obj.bool = message.bool;
    }
    if (message.int64 !== void 0) {
      obj.int64 = Math.round(message.int64);
    }
    if (message.uint64 !== void 0) {
      obj.uint64 = Math.round(message.uint64);
    }
    if (message.double !== void 0) {
      obj.double = message.double;
    }
    if (message.string !== void 0) {
      obj.string = message.string;
    }
    if (message.array !== void 0) {
      obj.array = Array2.toJSON(message.array);
    }
    if (message.object !== void 0) {
      obj.object = ObjectType.toJSON(message.object);
    }
    return obj;
  },
  create(base) {
    return Value.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f;
    const message = createBaseValue();
    message.null = (_a = object.null) != null ? _a : void 0;
    message.bool = (_b = object.bool) != null ? _b : void 0;
    message.int64 = (_c = object.int64) != null ? _c : void 0;
    message.uint64 = (_d = object.uint64) != null ? _d : void 0;
    message.double = (_e = object.double) != null ? _e : void 0;
    message.string = (_f = object.string) != null ? _f : void 0;
    message.array = object.array !== void 0 && object.array !== null ? Array2.fromPartial(object.array) : void 0;
    message.object = object.object !== void 0 && object.object !== null ? ObjectType.fromPartial(object.object) : void 0;
    return message;
  }
};
function createBaseArray() {
  return { value: [] };
}
var Array2 = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.value) {
      Value.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { value: globalThis.Array.isArray(object == null ? void 0 : object.value) ? object.value.map((e) => Value.fromJSON(e)) : [] };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.value) == null ? void 0 : _a.length) {
      obj.value = message.value.map((e) => Value.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Array2.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseArray();
    message.value = ((_a = object.value) == null ? void 0 : _a.map((e) => Value.fromPartial(e))) || [];
    return message;
  }
};
function createBaseObjectType() {
  return { value: {} };
}
var ObjectType = {
  encode(message, writer = _m0.Writer.create()) {
    Object.entries(message.value).forEach(([key, value]) => {
      ObjectType_ValueEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseObjectType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          const entry1 = ObjectType_ValueEntry.decode(reader, reader.uint32());
          if (entry1.value !== void 0) {
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
  fromJSON(object) {
    return {
      value: isObject(object.value) ? Object.entries(object.value).reduce((acc, [key, value]) => {
        acc[key] = Value.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    const obj = {};
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
  create(base) {
    return ObjectType.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseObjectType();
    message.value = Object.entries((_a = object.value) != null ? _a : {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = Value.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseObjectType_ValueEntry() {
  return { key: "", value: void 0 };
}
var ObjectType_ValueEntry = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Value.fromJSON(object.value) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== void 0) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },
  create(base) {
    return ObjectType_ValueEntry.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseObjectType_ValueEntry();
    message.key = (_a = object.key) != null ? _a : "";
    message.value = object.value !== void 0 && object.value !== null ? Value.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseDocument() {
  return { object: void 0, json: void 0 };
}
var Document = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.object !== void 0) {
      ObjectType.encode(message.object, writer.uint32(10).fork()).ldelim();
    }
    if (message.json !== void 0) {
      writer.uint32(18).string(message.json);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      object: isSet(object.object) ? ObjectType.fromJSON(object.object) : void 0,
      json: isSet(object.json) ? globalThis.String(object.json) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.object !== void 0) {
      obj.object = ObjectType.toJSON(message.object);
    }
    if (message.json !== void 0) {
      obj.json = message.json;
    }
    return obj;
  },
  create(base) {
    return Document.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseDocument();
    message.object = object.object !== void 0 && object.object !== null ? ObjectType.fromPartial(object.object) : void 0;
    message.json = (_a = object.json) != null ? _a : void 0;
    return message;
  }
};
function longToNumber(long) {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long;
  _m0.configure();
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isSet(value) {
  return value !== null && value !== void 0;
}

// src/proto/generated/document_db.ts
function indexTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "kPrimaryKey":
      return 0 /* kPrimaryKey */;
    case 1:
    case "kSecondaryKey":
      return 1 /* kSecondaryKey */;
    case 2:
    case "kClusteredSecondaryKey":
      return 2 /* kClusteredSecondaryKey */;
    case 3:
    case "kFullTextSearchIndex":
      return 3 /* kFullTextSearchIndex */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function indexTypeToJSON(object) {
  switch (object) {
    case 0 /* kPrimaryKey */:
      return "kPrimaryKey";
    case 1 /* kSecondaryKey */:
      return "kSecondaryKey";
    case 2 /* kClusteredSecondaryKey */:
      return "kClusteredSecondaryKey";
    case 3 /* kFullTextSearchIndex */:
      return "kFullTextSearchIndex";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function indexStatusFromJSON(object) {
  switch (object) {
    case 0:
    case "kEnabled":
      return 0 /* kEnabled */;
    case 1:
    case "kDisabled":
      return 1 /* kDisabled */;
    case 2:
    case "kReadyToUse":
      return 2 /* kReadyToUse */;
    case 3:
    case "kBuildInProgress":
      return 3 /* kBuildInProgress */;
    case 4:
    case "kBuildFinished":
      return 4 /* kBuildFinished */;
    case 5:
    case "kDropInProgress":
      return 5 /* kDropInProgress */;
    case 6:
    case "kDropFinished":
      return 6 /* kDropFinished */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function indexStatusToJSON(object) {
  switch (object) {
    case 0 /* kEnabled */:
      return "kEnabled";
    case 1 /* kDisabled */:
      return "kDisabled";
    case 2 /* kReadyToUse */:
      return "kReadyToUse";
    case 3 /* kBuildInProgress */:
      return "kBuildInProgress";
    case 4 /* kBuildFinished */:
      return "kBuildFinished";
    case 5 /* kDropInProgress */:
      return "kDropInProgress";
    case 6 /* kDropFinished */:
      return "kDropFinished";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseIndexDescriptor() {
  return { indexId: 0, indexName: "", fields: [], unique: false, indexType: 0, status: 0, options: void 0 };
}
var IndexDescriptor = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.indexId !== 0) {
      writer.uint32(8).uint32(message.indexId);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    for (const v of message.fields) {
      writer.uint32(26).string(v);
    }
    if (message.unique === true) {
      writer.uint32(32).bool(message.unique);
    }
    if (message.indexType !== 0) {
      writer.uint32(40).int32(message.indexType);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.options !== void 0) {
      Document.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIndexDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.indexId = reader.uint32();
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
          message.fields.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.unique = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.indexType = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.status = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.options = Document.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      indexId: isSet2(object.indexId) ? globalThis.Number(object.indexId) : 0,
      indexName: isSet2(object.indexName) ? globalThis.String(object.indexName) : "",
      fields: globalThis.Array.isArray(object == null ? void 0 : object.fields) ? object.fields.map((e) => globalThis.String(e)) : [],
      unique: isSet2(object.unique) ? globalThis.Boolean(object.unique) : false,
      indexType: isSet2(object.indexType) ? indexTypeFromJSON(object.indexType) : 0,
      status: isSet2(object.status) ? indexStatusFromJSON(object.status) : 0,
      options: isSet2(object.options) ? Document.fromJSON(object.options) : void 0
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.indexId !== 0) {
      obj.indexId = Math.round(message.indexId);
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if ((_a = message.fields) == null ? void 0 : _a.length) {
      obj.fields = message.fields;
    }
    if (message.unique === true) {
      obj.unique = message.unique;
    }
    if (message.indexType !== 0) {
      obj.indexType = indexTypeToJSON(message.indexType);
    }
    if (message.status !== 0) {
      obj.status = indexStatusToJSON(message.status);
    }
    if (message.options !== void 0) {
      obj.options = Document.toJSON(message.options);
    }
    return obj;
  },
  create(base) {
    return IndexDescriptor.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f;
    const message = createBaseIndexDescriptor();
    message.indexId = (_a = object.indexId) != null ? _a : 0;
    message.indexName = (_b = object.indexName) != null ? _b : "";
    message.fields = ((_c = object.fields) == null ? void 0 : _c.map((e) => e)) || [];
    message.unique = (_d = object.unique) != null ? _d : false;
    message.indexType = (_e = object.indexType) != null ? _e : 0;
    message.status = (_f = object.status) != null ? _f : 0;
    message.options = object.options !== void 0 && object.options !== null ? Document.fromPartial(object.options) : void 0;
    return message;
  }
};
function createBaseFTSFieldStats() {
  return { fieldName: "", totalDocCount: 0, totalDocSize: 0, docCount: 0, docSize: 0, sumTermFreq: 0, sumDocFreq: 0 };
}
var FTSFieldStats = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.fieldName !== "") {
      writer.uint32(10).string(message.fieldName);
    }
    if (message.totalDocCount !== 0) {
      writer.uint32(16).int64(message.totalDocCount);
    }
    if (message.totalDocSize !== 0) {
      writer.uint32(24).int64(message.totalDocSize);
    }
    if (message.docCount !== 0) {
      writer.uint32(32).int64(message.docCount);
    }
    if (message.docSize !== 0) {
      writer.uint32(40).int64(message.docSize);
    }
    if (message.sumTermFreq !== 0) {
      writer.uint32(48).int64(message.sumTermFreq);
    }
    if (message.sumDocFreq !== 0) {
      writer.uint32(56).int64(message.sumDocFreq);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFTSFieldStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.fieldName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.totalDocCount = longToNumber2(reader.int64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.totalDocSize = longToNumber2(reader.int64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.docCount = longToNumber2(reader.int64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.docSize = longToNumber2(reader.int64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.sumTermFreq = longToNumber2(reader.int64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.sumDocFreq = longToNumber2(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      fieldName: isSet2(object.fieldName) ? globalThis.String(object.fieldName) : "",
      totalDocCount: isSet2(object.totalDocCount) ? globalThis.Number(object.totalDocCount) : 0,
      totalDocSize: isSet2(object.totalDocSize) ? globalThis.Number(object.totalDocSize) : 0,
      docCount: isSet2(object.docCount) ? globalThis.Number(object.docCount) : 0,
      docSize: isSet2(object.docSize) ? globalThis.Number(object.docSize) : 0,
      sumTermFreq: isSet2(object.sumTermFreq) ? globalThis.Number(object.sumTermFreq) : 0,
      sumDocFreq: isSet2(object.sumDocFreq) ? globalThis.Number(object.sumDocFreq) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.fieldName !== "") {
      obj.fieldName = message.fieldName;
    }
    if (message.totalDocCount !== 0) {
      obj.totalDocCount = Math.round(message.totalDocCount);
    }
    if (message.totalDocSize !== 0) {
      obj.totalDocSize = Math.round(message.totalDocSize);
    }
    if (message.docCount !== 0) {
      obj.docCount = Math.round(message.docCount);
    }
    if (message.docSize !== 0) {
      obj.docSize = Math.round(message.docSize);
    }
    if (message.sumTermFreq !== 0) {
      obj.sumTermFreq = Math.round(message.sumTermFreq);
    }
    if (message.sumDocFreq !== 0) {
      obj.sumDocFreq = Math.round(message.sumDocFreq);
    }
    return obj;
  },
  create(base) {
    return FTSFieldStats.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f, _g;
    const message = createBaseFTSFieldStats();
    message.fieldName = (_a = object.fieldName) != null ? _a : "";
    message.totalDocCount = (_b = object.totalDocCount) != null ? _b : 0;
    message.totalDocSize = (_c = object.totalDocSize) != null ? _c : 0;
    message.docCount = (_d = object.docCount) != null ? _d : 0;
    message.docSize = (_e = object.docSize) != null ? _e : 0;
    message.sumTermFreq = (_f = object.sumTermFreq) != null ? _f : 0;
    message.sumDocFreq = (_g = object.sumDocFreq) != null ? _g : 0;
    return message;
  }
};
function createBaseFTSIndexStats() {
  return { docCount: 0, docSize: 0, fieldStats: [] };
}
var FTSIndexStats = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.docCount !== 0) {
      writer.uint32(8).int64(message.docCount);
    }
    if (message.docSize !== 0) {
      writer.uint32(16).int64(message.docSize);
    }
    for (const v of message.fieldStats) {
      FTSFieldStats.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFTSIndexStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.docCount = longToNumber2(reader.int64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.docSize = longToNumber2(reader.int64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.fieldStats.push(FTSFieldStats.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      docCount: isSet2(object.docCount) ? globalThis.Number(object.docCount) : 0,
      docSize: isSet2(object.docSize) ? globalThis.Number(object.docSize) : 0,
      fieldStats: globalThis.Array.isArray(object == null ? void 0 : object.fieldStats) ? object.fieldStats.map((e) => FTSFieldStats.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.docCount !== 0) {
      obj.docCount = Math.round(message.docCount);
    }
    if (message.docSize !== 0) {
      obj.docSize = Math.round(message.docSize);
    }
    if ((_a = message.fieldStats) == null ? void 0 : _a.length) {
      obj.fieldStats = message.fieldStats.map((e) => FTSFieldStats.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return FTSIndexStats.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseFTSIndexStats();
    message.docCount = (_a = object.docCount) != null ? _a : 0;
    message.docSize = (_b = object.docSize) != null ? _b : 0;
    message.fieldStats = ((_c = object.fieldStats) == null ? void 0 : _c.map((e) => FTSFieldStats.fromPartial(e))) || [];
    return message;
  }
};
function createBaseIndexStats() {
  return {
    indexId: 0,
    indexName: "",
    approximatedSize: 0,
    numDocs: 0,
    accessed: 0,
    added: 0,
    updated: 0,
    deleted: 0,
    merged: 0,
    accessedAt: 0,
    addedAt: 0,
    updatedAt: 0,
    deletedAt: 0,
    mergedAt: 0,
    ftsStats: void 0
  };
}
var IndexStats = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.indexId !== 0) {
      writer.uint32(8).uint32(message.indexId);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    if (message.approximatedSize !== 0) {
      writer.uint32(24).uint64(message.approximatedSize);
    }
    if (message.numDocs !== 0) {
      writer.uint32(32).uint64(message.numDocs);
    }
    if (message.accessed !== 0) {
      writer.uint32(40).uint64(message.accessed);
    }
    if (message.added !== 0) {
      writer.uint32(48).uint64(message.added);
    }
    if (message.updated !== 0) {
      writer.uint32(56).uint64(message.updated);
    }
    if (message.deleted !== 0) {
      writer.uint32(64).uint64(message.deleted);
    }
    if (message.merged !== 0) {
      writer.uint32(72).uint64(message.merged);
    }
    if (message.accessedAt !== 0) {
      writer.uint32(80).int64(message.accessedAt);
    }
    if (message.addedAt !== 0) {
      writer.uint32(88).int64(message.addedAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(96).int64(message.updatedAt);
    }
    if (message.deletedAt !== 0) {
      writer.uint32(104).int64(message.deletedAt);
    }
    if (message.mergedAt !== 0) {
      writer.uint32(112).int64(message.mergedAt);
    }
    if (message.ftsStats !== void 0) {
      FTSIndexStats.encode(message.ftsStats, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseIndexStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.indexId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.indexName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.approximatedSize = longToNumber2(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.numDocs = longToNumber2(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.accessed = longToNumber2(reader.uint64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }
          message.added = longToNumber2(reader.uint64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }
          message.updated = longToNumber2(reader.uint64());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }
          message.deleted = longToNumber2(reader.uint64());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }
          message.merged = longToNumber2(reader.uint64());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }
          message.accessedAt = longToNumber2(reader.int64());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }
          message.addedAt = longToNumber2(reader.int64());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }
          message.updatedAt = longToNumber2(reader.int64());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }
          message.deletedAt = longToNumber2(reader.int64());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }
          message.mergedAt = longToNumber2(reader.int64());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }
          message.ftsStats = FTSIndexStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      indexId: isSet2(object.indexId) ? globalThis.Number(object.indexId) : 0,
      indexName: isSet2(object.indexName) ? globalThis.String(object.indexName) : "",
      approximatedSize: isSet2(object.approximatedSize) ? globalThis.Number(object.approximatedSize) : 0,
      numDocs: isSet2(object.numDocs) ? globalThis.Number(object.numDocs) : 0,
      accessed: isSet2(object.accessed) ? globalThis.Number(object.accessed) : 0,
      added: isSet2(object.added) ? globalThis.Number(object.added) : 0,
      updated: isSet2(object.updated) ? globalThis.Number(object.updated) : 0,
      deleted: isSet2(object.deleted) ? globalThis.Number(object.deleted) : 0,
      merged: isSet2(object.merged) ? globalThis.Number(object.merged) : 0,
      accessedAt: isSet2(object.accessedAt) ? globalThis.Number(object.accessedAt) : 0,
      addedAt: isSet2(object.addedAt) ? globalThis.Number(object.addedAt) : 0,
      updatedAt: isSet2(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      deletedAt: isSet2(object.deletedAt) ? globalThis.Number(object.deletedAt) : 0,
      mergedAt: isSet2(object.mergedAt) ? globalThis.Number(object.mergedAt) : 0,
      ftsStats: isSet2(object.ftsStats) ? FTSIndexStats.fromJSON(object.ftsStats) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.indexId !== 0) {
      obj.indexId = Math.round(message.indexId);
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if (message.approximatedSize !== 0) {
      obj.approximatedSize = Math.round(message.approximatedSize);
    }
    if (message.numDocs !== 0) {
      obj.numDocs = Math.round(message.numDocs);
    }
    if (message.accessed !== 0) {
      obj.accessed = Math.round(message.accessed);
    }
    if (message.added !== 0) {
      obj.added = Math.round(message.added);
    }
    if (message.updated !== 0) {
      obj.updated = Math.round(message.updated);
    }
    if (message.deleted !== 0) {
      obj.deleted = Math.round(message.deleted);
    }
    if (message.merged !== 0) {
      obj.merged = Math.round(message.merged);
    }
    if (message.accessedAt !== 0) {
      obj.accessedAt = Math.round(message.accessedAt);
    }
    if (message.addedAt !== 0) {
      obj.addedAt = Math.round(message.addedAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.deletedAt !== 0) {
      obj.deletedAt = Math.round(message.deletedAt);
    }
    if (message.mergedAt !== 0) {
      obj.mergedAt = Math.round(message.mergedAt);
    }
    if (message.ftsStats !== void 0) {
      obj.ftsStats = FTSIndexStats.toJSON(message.ftsStats);
    }
    return obj;
  },
  create(base) {
    return IndexStats.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    const message = createBaseIndexStats();
    message.indexId = (_a = object.indexId) != null ? _a : 0;
    message.indexName = (_b = object.indexName) != null ? _b : "";
    message.approximatedSize = (_c = object.approximatedSize) != null ? _c : 0;
    message.numDocs = (_d = object.numDocs) != null ? _d : 0;
    message.accessed = (_e = object.accessed) != null ? _e : 0;
    message.added = (_f = object.added) != null ? _f : 0;
    message.updated = (_g = object.updated) != null ? _g : 0;
    message.deleted = (_h = object.deleted) != null ? _h : 0;
    message.merged = (_i = object.merged) != null ? _i : 0;
    message.accessedAt = (_j = object.accessedAt) != null ? _j : 0;
    message.addedAt = (_k = object.addedAt) != null ? _k : 0;
    message.updatedAt = (_l = object.updatedAt) != null ? _l : 0;
    message.deletedAt = (_m = object.deletedAt) != null ? _m : 0;
    message.mergedAt = (_n = object.mergedAt) != null ? _n : 0;
    message.ftsStats = object.ftsStats !== void 0 && object.ftsStats !== null ? FTSIndexStats.fromPartial(object.ftsStats) : void 0;
    return message;
  }
};
function createBaseCollectionInfo() {
  return { collectionName: "", indexDescriptors: [], indexStats: [] };
}
var CollectionInfo = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    for (const v of message.indexDescriptors) {
      IndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.indexStats) {
      IndexStats.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCollectionInfo();
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
          message.indexDescriptors.push(IndexDescriptor.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.indexStats.push(IndexStats.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexDescriptors: globalThis.Array.isArray(object == null ? void 0 : object.indexDescriptors) ? object.indexDescriptors.map((e) => IndexDescriptor.fromJSON(e)) : [],
      indexStats: globalThis.Array.isArray(object == null ? void 0 : object.indexStats) ? object.indexStats.map((e) => IndexStats.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a, _b;
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if ((_a = message.indexDescriptors) == null ? void 0 : _a.length) {
      obj.indexDescriptors = message.indexDescriptors.map((e) => IndexDescriptor.toJSON(e));
    }
    if ((_b = message.indexStats) == null ? void 0 : _b.length) {
      obj.indexStats = message.indexStats.map((e) => IndexStats.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return CollectionInfo.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseCollectionInfo();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.indexDescriptors = ((_b = object.indexDescriptors) == null ? void 0 : _b.map((e) => IndexDescriptor.fromPartial(e))) || [];
    message.indexStats = ((_c = object.indexStats) == null ? void 0 : _c.map((e) => IndexStats.fromPartial(e))) || [];
    return message;
  }
};
function createBaseProfileInfo() {
  return { matched: 0, scanned: 0, filtered: 0, queryDurationUs: 0, serializationDurationUs: 0 };
}
var ProfileInfo = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.matched !== 0) {
      writer.uint32(8).uint64(message.matched);
    }
    if (message.scanned !== 0) {
      writer.uint32(16).uint64(message.scanned);
    }
    if (message.filtered !== 0) {
      writer.uint32(24).uint64(message.filtered);
    }
    if (message.queryDurationUs !== 0) {
      writer.uint32(32).uint64(message.queryDurationUs);
    }
    if (message.serializationDurationUs !== 0) {
      writer.uint32(40).uint64(message.serializationDurationUs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProfileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.matched = longToNumber2(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.scanned = longToNumber2(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.filtered = longToNumber2(reader.uint64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.queryDurationUs = longToNumber2(reader.uint64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.serializationDurationUs = longToNumber2(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      matched: isSet2(object.matched) ? globalThis.Number(object.matched) : 0,
      scanned: isSet2(object.scanned) ? globalThis.Number(object.scanned) : 0,
      filtered: isSet2(object.filtered) ? globalThis.Number(object.filtered) : 0,
      queryDurationUs: isSet2(object.queryDurationUs) ? globalThis.Number(object.queryDurationUs) : 0,
      serializationDurationUs: isSet2(object.serializationDurationUs) ? globalThis.Number(object.serializationDurationUs) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.matched !== 0) {
      obj.matched = Math.round(message.matched);
    }
    if (message.scanned !== 0) {
      obj.scanned = Math.round(message.scanned);
    }
    if (message.filtered !== 0) {
      obj.filtered = Math.round(message.filtered);
    }
    if (message.queryDurationUs !== 0) {
      obj.queryDurationUs = Math.round(message.queryDurationUs);
    }
    if (message.serializationDurationUs !== 0) {
      obj.serializationDurationUs = Math.round(message.serializationDurationUs);
    }
    return obj;
  },
  create(base) {
    return ProfileInfo.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBaseProfileInfo();
    message.matched = (_a = object.matched) != null ? _a : 0;
    message.scanned = (_b = object.scanned) != null ? _b : 0;
    message.filtered = (_c = object.filtered) != null ? _c : 0;
    message.queryDurationUs = (_d = object.queryDurationUs) != null ? _d : 0;
    message.serializationDurationUs = (_e = object.serializationDurationUs) != null ? _e : 0;
    return message;
  }
};
function createBaseCreateCollectionRequest() {
  return { collection: void 0 };
}
var CreateCollectionRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collection !== void 0) {
      CollectionInfo.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreateCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.collection = CollectionInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { collection: isSet2(object.collection) ? CollectionInfo.fromJSON(object.collection) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.collection !== void 0) {
      obj.collection = CollectionInfo.toJSON(message.collection);
    }
    return obj;
  },
  create(base) {
    return CreateCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseCreateCollectionRequest();
    message.collection = object.collection !== void 0 && object.collection !== null ? CollectionInfo.fromPartial(object.collection) : void 0;
    return message;
  }
};
function createBaseCreateCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var CreateCollectionResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreateCollectionResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return CreateCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseCreateCollectionResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseDropCollectionRequest() {
  return { collectionName: "" };
}
var DropCollectionRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDropCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.collectionName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },
  create(base) {
    return DropCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseDropCollectionRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    return message;
  }
};
function createBaseDropCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var DropCollectionResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDropCollectionResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return DropCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseDropCollectionResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseRenameCollectionRequest() {
  return { oldCollectionName: "", newCollectionName: "" };
}
var RenameCollectionRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.oldCollectionName !== "") {
      writer.uint32(10).string(message.oldCollectionName);
    }
    if (message.newCollectionName !== "") {
      writer.uint32(18).string(message.newCollectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRenameCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.oldCollectionName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.newCollectionName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      oldCollectionName: isSet2(object.oldCollectionName) ? globalThis.String(object.oldCollectionName) : "",
      newCollectionName: isSet2(object.newCollectionName) ? globalThis.String(object.newCollectionName) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.oldCollectionName !== "") {
      obj.oldCollectionName = message.oldCollectionName;
    }
    if (message.newCollectionName !== "") {
      obj.newCollectionName = message.newCollectionName;
    }
    return obj;
  },
  create(base) {
    return RenameCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseRenameCollectionRequest();
    message.oldCollectionName = (_a = object.oldCollectionName) != null ? _a : "";
    message.newCollectionName = (_b = object.newCollectionName) != null ? _b : "";
    return message;
  }
};
function createBaseRenameCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var RenameCollectionResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRenameCollectionResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return RenameCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseRenameCollectionResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseGetCollectionRequest() {
  return { collectionName: "" };
}
var GetCollectionRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.collectionName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },
  create(base) {
    return GetCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseGetCollectionRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    return message;
  }
};
function createBaseGetCollectionResponse() {
  return { status: 0, message: "", collection: void 0, profile: void 0 };
}
var GetCollectionResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.collection !== void 0) {
      CollectionInfo.encode(message.collection, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.collection = CollectionInfo.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      collection: isSet2(object.collection) ? CollectionInfo.fromJSON(object.collection) : void 0,
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collection !== void 0) {
      obj.collection = CollectionInfo.toJSON(message.collection);
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return GetCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseGetCollectionResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.collection = object.collection !== void 0 && object.collection !== null ? CollectionInfo.fromPartial(object.collection) : void 0;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseGetCollectionsRequest() {
  return { collectionNames: [] };
}
var GetCollectionsRequest = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.collectionNames) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.collectionNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionNames: globalThis.Array.isArray(object == null ? void 0 : object.collectionNames) ? object.collectionNames.map((e) => globalThis.String(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.collectionNames) == null ? void 0 : _a.length) {
      obj.collectionNames = message.collectionNames;
    }
    return obj;
  },
  create(base) {
    return GetCollectionsRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseGetCollectionsRequest();
    message.collectionNames = ((_a = object.collectionNames) == null ? void 0 : _a.map((e) => e)) || [];
    return message;
  }
};
function createBaseGetCollectionsResponse() {
  return { status: 0, message: "", collections: [], profile: void 0 };
}
var GetCollectionsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.collections) {
      CollectionInfo.encode(v, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetCollectionsResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.collections.push(CollectionInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      collections: globalThis.Array.isArray(object == null ? void 0 : object.collections) ? object.collections.map((e) => CollectionInfo.fromJSON(e)) : [],
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if ((_a = message.collections) == null ? void 0 : _a.length) {
      obj.collections = message.collections.map((e) => CollectionInfo.toJSON(e));
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return GetCollectionsResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseGetCollectionsResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.collections = ((_c = object.collections) == null ? void 0 : _c.map((e) => CollectionInfo.fromPartial(e))) || [];
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseCreateIndexRequest() {
  return { collectionName: "", indexDesc: void 0 };
}
var CreateIndexRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexDesc !== void 0) {
      IndexDescriptor.encode(message.indexDesc, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreateIndexRequest();
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
          message.indexDesc = IndexDescriptor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexDesc: isSet2(object.indexDesc) ? IndexDescriptor.fromJSON(object.indexDesc) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexDesc !== void 0) {
      obj.indexDesc = IndexDescriptor.toJSON(message.indexDesc);
    }
    return obj;
  },
  create(base) {
    return CreateIndexRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseCreateIndexRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.indexDesc = object.indexDesc !== void 0 && object.indexDesc !== null ? IndexDescriptor.fromPartial(object.indexDesc) : void 0;
    return message;
  }
};
function createBaseCreateIndexResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var CreateIndexResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCreateIndexResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return CreateIndexResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseCreateIndexResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseDropIndexRequest() {
  return { collectionName: "", indexName: "" };
}
var DropIndexRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDropIndexRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet2(object.indexName) ? globalThis.String(object.indexName) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    return obj;
  },
  create(base) {
    return DropIndexRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseDropIndexRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.indexName = (_b = object.indexName) != null ? _b : "";
    return message;
  }
};
function createBaseDropIndexResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var DropIndexResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseDropIndexResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return DropIndexResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseDropIndexResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseRenameIndexRequest() {
  return { collectionName: "", oldIndexName: "", newIndexName: "" };
}
var RenameIndexRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.oldIndexName !== "") {
      writer.uint32(18).string(message.oldIndexName);
    }
    if (message.newIndexName !== "") {
      writer.uint32(26).string(message.newIndexName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRenameIndexRequest();
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
          message.oldIndexName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.newIndexName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      oldIndexName: isSet2(object.oldIndexName) ? globalThis.String(object.oldIndexName) : "",
      newIndexName: isSet2(object.newIndexName) ? globalThis.String(object.newIndexName) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.oldIndexName !== "") {
      obj.oldIndexName = message.oldIndexName;
    }
    if (message.newIndexName !== "") {
      obj.newIndexName = message.newIndexName;
    }
    return obj;
  },
  create(base) {
    return RenameIndexRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseRenameIndexRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.oldIndexName = (_b = object.oldIndexName) != null ? _b : "";
    message.newIndexName = (_c = object.newIndexName) != null ? _c : "";
    return message;
  }
};
function createBaseRenameIndexResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var RenameIndexResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRenameIndexResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return RenameIndexResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseRenameIndexResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseGetIndexRequest() {
  return { collectionName: "", indexName: "" };
}
var GetIndexRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetIndexRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet2(object.indexName) ? globalThis.String(object.indexName) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    return obj;
  },
  create(base) {
    return GetIndexRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseGetIndexRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.indexName = (_b = object.indexName) != null ? _b : "";
    return message;
  }
};
function createBaseGetIndexResponse() {
  return {
    status: 0,
    message: "",
    collectionName: "",
    indexDesc: void 0,
    indexStats: void 0,
    profile: void 0
  };
}
var GetIndexResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.collectionName !== "") {
      writer.uint32(26).string(message.collectionName);
    }
    if (message.indexDesc !== void 0) {
      IndexDescriptor.encode(message.indexDesc, writer.uint32(34).fork()).ldelim();
    }
    if (message.indexStats !== void 0) {
      IndexStats.encode(message.indexStats, writer.uint32(42).fork()).ldelim();
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGetIndexResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.collectionName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.indexDesc = IndexDescriptor.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.indexStats = IndexStats.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexDesc: isSet2(object.indexDesc) ? IndexDescriptor.fromJSON(object.indexDesc) : void 0,
      indexStats: isSet2(object.indexStats) ? IndexStats.fromJSON(object.indexStats) : void 0,
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexDesc !== void 0) {
      obj.indexDesc = IndexDescriptor.toJSON(message.indexDesc);
    }
    if (message.indexStats !== void 0) {
      obj.indexStats = IndexStats.toJSON(message.indexStats);
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return GetIndexResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseGetIndexResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.collectionName = (_c = object.collectionName) != null ? _c : "";
    message.indexDesc = object.indexDesc !== void 0 && object.indexDesc !== null ? IndexDescriptor.fromPartial(object.indexDesc) : void 0;
    message.indexStats = object.indexStats !== void 0 && object.indexStats !== null ? IndexStats.fromPartial(object.indexStats) : void 0;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseQuery() {
  return { collectionName: "", query: void 0 };
}
var Query = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.query !== void 0) {
      Document.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuery();
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
          message.query = Document.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      query: isSet2(object.query) ? Document.fromJSON(object.query) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.query !== void 0) {
      obj.query = Document.toJSON(message.query);
    }
    return obj;
  },
  create(base) {
    return Query.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseQuery();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.query = object.query !== void 0 && object.query !== null ? Document.fromPartial(object.query) : void 0;
    return message;
  }
};
function createBaseFindRequest() {
  return { query: void 0, limit: 0, indexColumns: [], columns: [], dtypes: {} };
}
var FindRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.query !== void 0) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    for (const v of message.indexColumns) {
      writer.uint32(26).string(v);
    }
    for (const v of message.columns) {
      writer.uint32(34).string(v);
    }
    Object.entries(message.dtypes).forEach(([key, value]) => {
      FindRequest_DtypesEntry.encode({ key, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFindRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.query = Query.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.limit = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.indexColumns.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.columns.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          const entry5 = FindRequest_DtypesEntry.decode(reader, reader.uint32());
          if (entry5.value !== void 0) {
            message.dtypes[entry5.key] = entry5.value;
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
  fromJSON(object) {
    return {
      query: isSet2(object.query) ? Query.fromJSON(object.query) : void 0,
      limit: isSet2(object.limit) ? globalThis.Number(object.limit) : 0,
      indexColumns: globalThis.Array.isArray(object == null ? void 0 : object.indexColumns) ? object.indexColumns.map((e) => globalThis.String(e)) : [],
      columns: globalThis.Array.isArray(object == null ? void 0 : object.columns) ? object.columns.map((e) => globalThis.String(e)) : [],
      dtypes: isObject2(object.dtypes) ? Object.entries(object.dtypes).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    var _a, _b;
    const obj = {};
    if (message.query !== void 0) {
      obj.query = Query.toJSON(message.query);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if ((_a = message.indexColumns) == null ? void 0 : _a.length) {
      obj.indexColumns = message.indexColumns;
    }
    if ((_b = message.columns) == null ? void 0 : _b.length) {
      obj.columns = message.columns;
    }
    if (message.dtypes) {
      const entries = Object.entries(message.dtypes);
      if (entries.length > 0) {
        obj.dtypes = {};
        entries.forEach(([k, v]) => {
          obj.dtypes[k] = v;
        });
      }
    }
    return obj;
  },
  create(base) {
    return FindRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d;
    const message = createBaseFindRequest();
    message.query = object.query !== void 0 && object.query !== null ? Query.fromPartial(object.query) : void 0;
    message.limit = (_a = object.limit) != null ? _a : 0;
    message.indexColumns = ((_b = object.indexColumns) == null ? void 0 : _b.map((e) => e)) || [];
    message.columns = ((_c = object.columns) == null ? void 0 : _c.map((e) => e)) || [];
    message.dtypes = Object.entries((_d = object.dtypes) != null ? _d : {}).reduce((acc, [key, value]) => {
      if (value !== void 0) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseFindRequest_DtypesEntry() {
  return { key: "", value: "" };
}
var FindRequest_DtypesEntry = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFindRequest_DtypesEntry();
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
          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      key: isSet2(object.key) ? globalThis.String(object.key) : "",
      value: isSet2(object.value) ? globalThis.String(object.value) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
  create(base) {
    return FindRequest_DtypesEntry.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseFindRequest_DtypesEntry();
    message.key = (_a = object.key) != null ? _a : "";
    message.value = (_b = object.value) != null ? _b : "";
    return message;
  }
};
function createBaseFindResponse() {
  return { numColumns: 0, numRows: 0, buffer: Buffer.alloc(0), profile: void 0 };
}
var FindResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.numColumns !== 0) {
      writer.uint32(8).int32(message.numColumns);
    }
    if (message.numRows !== 0) {
      writer.uint32(16).int32(message.numRows);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(26).bytes(message.buffer);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFindResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.numColumns = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.numRows = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.buffer = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
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
  fromJSON(object) {
    return {
      numColumns: isSet2(object.numColumns) ? globalThis.Number(object.numColumns) : 0,
      numRows: isSet2(object.numRows) ? globalThis.Number(object.numRows) : 0,
      buffer: isSet2(object.buffer) ? Buffer.from(bytesFromBase64(object.buffer)) : Buffer.alloc(0),
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.numColumns !== 0) {
      obj.numColumns = Math.round(message.numColumns);
    }
    if (message.numRows !== 0) {
      obj.numRows = Math.round(message.numRows);
    }
    if (message.buffer.length !== 0) {
      obj.buffer = base64FromBytes(message.buffer);
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return FindResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseFindResponse();
    message.numColumns = (_a = object.numColumns) != null ? _a : 0;
    message.numRows = (_b = object.numRows) != null ? _b : 0;
    message.buffer = (_c = object.buffer) != null ? _c : Buffer.alloc(0);
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseFindBatchRequest() {
  return { requests: [] };
}
var FindBatchRequest = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.requests) {
      FindRequest.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFindBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.requests.push(FindRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      requests: globalThis.Array.isArray(object == null ? void 0 : object.requests) ? object.requests.map((e) => FindRequest.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.requests) == null ? void 0 : _a.length) {
      obj.requests = message.requests.map((e) => FindRequest.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return FindBatchRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseFindBatchRequest();
    message.requests = ((_a = object.requests) == null ? void 0 : _a.map((e) => FindRequest.fromPartial(e))) || [];
    return message;
  }
};
function createBaseFindBatchResponse() {
  return { responses: [] };
}
var FindBatchResponse = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.responses) {
      FindResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseFindBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.responses.push(FindResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      responses: globalThis.Array.isArray(object == null ? void 0 : object.responses) ? object.responses.map((e) => FindResponse.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.responses) == null ? void 0 : _a.length) {
      obj.responses = message.responses.map((e) => FindResponse.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return FindBatchResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseFindBatchResponse();
    message.responses = ((_a = object.responses) == null ? void 0 : _a.map((e) => FindResponse.fromPartial(e))) || [];
    return message;
  }
};
function createBaseCountRequest() {
  return { query: void 0 };
}
var CountRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.query !== void 0) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.query = Query.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { query: isSet2(object.query) ? Query.fromJSON(object.query) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.query !== void 0) {
      obj.query = Query.toJSON(message.query);
    }
    return obj;
  },
  create(base) {
    return CountRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseCountRequest();
    message.query = object.query !== void 0 && object.query !== null ? Query.fromPartial(object.query) : void 0;
    return message;
  }
};
function createBaseCountResponse() {
  return { status: 0, message: "", count: 0, profile: void 0 };
}
var CountResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.count !== 0) {
      writer.uint32(24).int64(message.count);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCountResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.count = longToNumber2(reader.int64());
          continue;
        case 4:
          if (tag !== 34) {
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      count: isSet2(object.count) ? globalThis.Number(object.count) : 0,
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return CountResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseCountResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.count = (_c = object.count) != null ? _c : 0;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseContainsRequest() {
  return { query: void 0 };
}
var ContainsRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.query !== void 0) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContainsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.query = Query.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { query: isSet2(object.query) ? Query.fromJSON(object.query) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.query !== void 0) {
      obj.query = Query.toJSON(message.query);
    }
    return obj;
  },
  create(base) {
    return ContainsRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseContainsRequest();
    message.query = object.query !== void 0 && object.query !== null ? Query.fromPartial(object.query) : void 0;
    return message;
  }
};
function createBaseContainsResponse() {
  return { status: 0, message: "", found: false, profile: void 0 };
}
var ContainsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.found === true) {
      writer.uint32(24).bool(message.found);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContainsResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.found = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      found: isSet2(object.found) ? globalThis.Boolean(object.found) : false,
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.found === true) {
      obj.found = message.found;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return ContainsResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseContainsResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.found = (_c = object.found) != null ? _c : false;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseInsertRequest() {
  return { requests: [] };
}
var InsertRequest = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.requests) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInsertRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.requests.push(Query.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      requests: globalThis.Array.isArray(object == null ? void 0 : object.requests) ? object.requests.map((e) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.requests) == null ? void 0 : _a.length) {
      obj.requests = message.requests.map((e) => Query.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return InsertRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseInsertRequest();
    message.requests = ((_a = object.requests) == null ? void 0 : _a.map((e) => Query.fromPartial(e))) || [];
    return message;
  }
};
function createBaseInsertResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var InsertResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseInsertResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return InsertResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseInsertResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseUpdateRequest() {
  return { collectionName: "", filter: void 0, updates: void 0 };
}
var UpdateRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.filter !== void 0) {
      Document.encode(message.filter, writer.uint32(18).fork()).ldelim();
    }
    if (message.updates !== void 0) {
      Document.encode(message.updates, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateRequest();
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
          message.filter = Document.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.updates = Document.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      filter: isSet2(object.filter) ? Document.fromJSON(object.filter) : void 0,
      updates: isSet2(object.updates) ? Document.fromJSON(object.updates) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.filter !== void 0) {
      obj.filter = Document.toJSON(message.filter);
    }
    if (message.updates !== void 0) {
      obj.updates = Document.toJSON(message.updates);
    }
    return obj;
  },
  create(base) {
    return UpdateRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseUpdateRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    message.filter = object.filter !== void 0 && object.filter !== null ? Document.fromPartial(object.filter) : void 0;
    message.updates = object.updates !== void 0 && object.updates !== null ? Document.fromPartial(object.updates) : void 0;
    return message;
  }
};
function createBaseUpdateResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var UpdateResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseUpdateResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return UpdateResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseUpdateResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseRemoveRequest() {
  return { requests: [] };
}
var RemoveRequest = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.requests) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.requests.push(Query.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      requests: globalThis.Array.isArray(object == null ? void 0 : object.requests) ? object.requests.map((e) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.requests) == null ? void 0 : _a.length) {
      obj.requests = message.requests.map((e) => Query.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return RemoveRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseRemoveRequest();
    message.requests = ((_a = object.requests) == null ? void 0 : _a.map((e) => Query.fromPartial(e))) || [];
    return message;
  }
};
function createBaseRemoveResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var RemoveResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoveResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return RemoveResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseRemoveResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseExplainRequest() {
  return { queries: [] };
}
var ExplainRequest = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.queries) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExplainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.queries.push(Query.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      queries: globalThis.Array.isArray(object == null ? void 0 : object.queries) ? object.queries.map((e) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.queries) == null ? void 0 : _a.length) {
      obj.queries = message.queries.map((e) => Query.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return ExplainRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseExplainRequest();
    message.queries = ((_a = object.queries) == null ? void 0 : _a.map((e) => Query.fromPartial(e))) || [];
    return message;
  }
};
function createBaseQueryPlan() {
  return { status: 0, message: "", collectionName: "", indexName: "", queryPlan: "" };
}
var QueryPlan = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.collectionName !== "") {
      writer.uint32(26).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(34).string(message.indexName);
    }
    if (message.queryPlan !== "") {
      writer.uint32(42).string(message.queryPlan);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPlan();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.collectionName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.indexName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.queryPlan = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet2(object.indexName) ? globalThis.String(object.indexName) : "",
      queryPlan: isSet2(object.queryPlan) ? globalThis.String(object.queryPlan) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if (message.queryPlan !== "") {
      obj.queryPlan = message.queryPlan;
    }
    return obj;
  },
  create(base) {
    return QueryPlan.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBaseQueryPlan();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.collectionName = (_c = object.collectionName) != null ? _c : "";
    message.indexName = (_d = object.indexName) != null ? _d : "";
    message.queryPlan = (_e = object.queryPlan) != null ? _e : "";
    return message;
  }
};
function createBaseExplainResponse() {
  return { status: 0, queryPlans: [] };
}
var ExplainResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.queryPlans) {
      QueryPlan.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseExplainResponse();
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
          message.queryPlans.push(QueryPlan.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      queryPlans: globalThis.Array.isArray(object == null ? void 0 : object.queryPlans) ? object.queryPlans.map((e) => QueryPlan.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if ((_a = message.queryPlans) == null ? void 0 : _a.length) {
      obj.queryPlans = message.queryPlans.map((e) => QueryPlan.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return ExplainResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseExplainResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.queryPlans = ((_b = object.queryPlans) == null ? void 0 : _b.map((e) => QueryPlan.fromPartial(e))) || [];
    return message;
  }
};
function createBaseTruncateCollectionRequest() {
  return { collectionName: "" };
}
var TruncateCollectionRequest = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTruncateCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.collectionName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { collectionName: isSet2(object.collectionName) ? globalThis.String(object.collectionName) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },
  create(base) {
    return TruncateCollectionRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseTruncateCollectionRequest();
    message.collectionName = (_a = object.collectionName) != null ? _a : "";
    return message;
  }
};
function createBaseTruncateCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var TruncateCollectionResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTruncateCollectionResponse();
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return TruncateCollectionResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseTruncateCollectionResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseListCollectionsRequest() {
  return {};
}
var ListCollectionsRequest = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListCollectionsRequest();
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return ListCollectionsRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(_) {
    const message = createBaseListCollectionsRequest();
    return message;
  }
};
function createBaseListCollectionsResponse() {
  return { status: 0, message: "", collectionNames: [], profile: void 0 };
}
var ListCollectionsResponse = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.collectionNames) {
      writer.uint32(26).string(v);
    }
    if (message.profile !== void 0) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseListCollectionsResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.collectionNames.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
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
  fromJSON(object) {
    return {
      status: isSet2(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet2(object.message) ? globalThis.String(object.message) : "",
      collectionNames: globalThis.Array.isArray(object == null ? void 0 : object.collectionNames) ? object.collectionNames.map((e) => globalThis.String(e)) : [],
      profile: isSet2(object.profile) ? ProfileInfo.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if ((_a = message.collectionNames) == null ? void 0 : _a.length) {
      obj.collectionNames = message.collectionNames;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return ListCollectionsResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c;
    const message = createBaseListCollectionsResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.collectionNames = ((_c = object.collectionNames) == null ? void 0 : _c.map((e) => e)) || [];
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
var DocumentDBServiceService = {
  find: {
    path: "/cognica.rpc.db.document.DocumentDBService/find",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(FindRequest.encode(value).finish()),
    requestDeserialize: (value) => FindRequest.decode(value),
    responseSerialize: (value) => Buffer.from(FindResponse.encode(value).finish()),
    responseDeserialize: (value) => FindResponse.decode(value)
  },
  findBatch: {
    path: "/cognica.rpc.db.document.DocumentDBService/find_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(FindBatchRequest.encode(value).finish()),
    requestDeserialize: (value) => FindBatchRequest.decode(value),
    responseSerialize: (value) => Buffer.from(FindBatchResponse.encode(value).finish()),
    responseDeserialize: (value) => FindBatchResponse.decode(value)
  },
  count: {
    path: "/cognica.rpc.db.document.DocumentDBService/count",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(CountRequest.encode(value).finish()),
    requestDeserialize: (value) => CountRequest.decode(value),
    responseSerialize: (value) => Buffer.from(CountResponse.encode(value).finish()),
    responseDeserialize: (value) => CountResponse.decode(value)
  },
  contains: {
    path: "/cognica.rpc.db.document.DocumentDBService/contains",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ContainsRequest.encode(value).finish()),
    requestDeserialize: (value) => ContainsRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ContainsResponse.encode(value).finish()),
    responseDeserialize: (value) => ContainsResponse.decode(value)
  },
  insert: {
    path: "/cognica.rpc.db.document.DocumentDBService/insert",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(InsertRequest.encode(value).finish()),
    requestDeserialize: (value) => InsertRequest.decode(value),
    responseSerialize: (value) => Buffer.from(InsertResponse.encode(value).finish()),
    responseDeserialize: (value) => InsertResponse.decode(value)
  },
  update: {
    path: "/cognica.rpc.db.document.DocumentDBService/update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(UpdateRequest.encode(value).finish()),
    requestDeserialize: (value) => UpdateRequest.decode(value),
    responseSerialize: (value) => Buffer.from(UpdateResponse.encode(value).finish()),
    responseDeserialize: (value) => UpdateResponse.decode(value)
  },
  remove: {
    path: "/cognica.rpc.db.document.DocumentDBService/remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(RemoveRequest.encode(value).finish()),
    requestDeserialize: (value) => RemoveRequest.decode(value),
    responseSerialize: (value) => Buffer.from(RemoveResponse.encode(value).finish()),
    responseDeserialize: (value) => RemoveResponse.decode(value)
  },
  explain: {
    path: "/cognica.rpc.db.document.DocumentDBService/explain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ExplainRequest.encode(value).finish()),
    requestDeserialize: (value) => ExplainRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ExplainResponse.encode(value).finish()),
    responseDeserialize: (value) => ExplainResponse.decode(value)
  },
  createCollection: {
    path: "/cognica.rpc.db.document.DocumentDBService/create_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(CreateCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => CreateCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(CreateCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => CreateCollectionResponse.decode(value)
  },
  dropCollection: {
    path: "/cognica.rpc.db.document.DocumentDBService/drop_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(DropCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => DropCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(DropCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => DropCollectionResponse.decode(value)
  },
  renameCollection: {
    path: "/cognica.rpc.db.document.DocumentDBService/rename_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(RenameCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => RenameCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(RenameCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => RenameCollectionResponse.decode(value)
  },
  getCollection: {
    path: "/cognica.rpc.db.document.DocumentDBService/get_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(GetCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => GetCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => GetCollectionResponse.decode(value)
  },
  getCollections: {
    path: "/cognica.rpc.db.document.DocumentDBService/get_collections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(GetCollectionsRequest.encode(value).finish()),
    requestDeserialize: (value) => GetCollectionsRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetCollectionsResponse.encode(value).finish()),
    responseDeserialize: (value) => GetCollectionsResponse.decode(value)
  },
  listCollections: {
    path: "/cognica.rpc.db.document.DocumentDBService/list_collections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ListCollectionsRequest.encode(value).finish()),
    requestDeserialize: (value) => ListCollectionsRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ListCollectionsResponse.encode(value).finish()),
    responseDeserialize: (value) => ListCollectionsResponse.decode(value)
  },
  truncateCollection: {
    path: "/cognica.rpc.db.document.DocumentDBService/truncate_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(TruncateCollectionRequest.encode(value).finish()),
    requestDeserialize: (value) => TruncateCollectionRequest.decode(value),
    responseSerialize: (value) => Buffer.from(TruncateCollectionResponse.encode(value).finish()),
    responseDeserialize: (value) => TruncateCollectionResponse.decode(value)
  },
  createIndex: {
    path: "/cognica.rpc.db.document.DocumentDBService/create_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(CreateIndexRequest.encode(value).finish()),
    requestDeserialize: (value) => CreateIndexRequest.decode(value),
    responseSerialize: (value) => Buffer.from(CreateIndexResponse.encode(value).finish()),
    responseDeserialize: (value) => CreateIndexResponse.decode(value)
  },
  dropIndex: {
    path: "/cognica.rpc.db.document.DocumentDBService/drop_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(DropIndexRequest.encode(value).finish()),
    requestDeserialize: (value) => DropIndexRequest.decode(value),
    responseSerialize: (value) => Buffer.from(DropIndexResponse.encode(value).finish()),
    responseDeserialize: (value) => DropIndexResponse.decode(value)
  },
  renameIndex: {
    path: "/cognica.rpc.db.document.DocumentDBService/rename_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(RenameIndexRequest.encode(value).finish()),
    requestDeserialize: (value) => RenameIndexRequest.decode(value),
    responseSerialize: (value) => Buffer.from(RenameIndexResponse.encode(value).finish()),
    responseDeserialize: (value) => RenameIndexResponse.decode(value)
  },
  getIndex: {
    path: "/cognica.rpc.db.document.DocumentDBService/get_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(GetIndexRequest.encode(value).finish()),
    requestDeserialize: (value) => GetIndexRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetIndexResponse.encode(value).finish()),
    responseDeserialize: (value) => GetIndexResponse.decode(value)
  }
};
var DocumentDBServiceClient = makeGenericClientConstructor(
  DocumentDBServiceService,
  "cognica.rpc.db.document.DocumentDBService"
);
function bytesFromBase64(b64) {
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
function base64FromBytes(arr) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}
function longToNumber2(long) {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
if (_m02.util.Long !== Long2) {
  _m02.util.Long = Long2;
  _m02.configure();
}
function isObject2(value) {
  return typeof value === "object" && value !== null;
}
function isSet2(value) {
  return value !== null && value !== void 0;
}

// src/client.ts
import { Metadata as Metadata2 } from "@grpc/grpc-js";
import { status } from "@grpc/grpc-js";
var GrpcClient = class {
  constructor(channel, client, timeout = void 0) {
    this._channel = channel;
    this._client = client;
    this._timeout = timeout;
  }
  createPromise(request, methodName, response_mapper = () => null, waitForReady = true) {
    const metadata = new Metadata2();
    if (waitForReady) {
      metadata.setOptions({ waitForReady });
    }
    if (this._timeout) {
      metadata.set("grpc-timeout", `${this._timeout}m`);
    }
    return new Promise((resove, reject) => {
      ;
      this._client[methodName](
        request,
        metadata,
        (error, response) => {
          if (error) {
            reject(error);
          } else {
            resove(response_mapper(response));
          }
        }
      );
    });
  }
  static toDocument(doc) {
    let result;
    if (doc.json === void 0) {
      result = Document.fromJSON({ json: JSON.stringify(doc) });
    } else {
      result = doc;
    }
    return result;
  }
  get channel() {
    return this._channel;
  }
  get timeout() {
    return this._timeout;
  }
  close() {
    ;
    this._client.close();
  }
};

// src/document_db.ts
var IndexType = /* @__PURE__ */ ((IndexType2) => {
  IndexType2[IndexType2["kPrimaryKey"] = 0] = "kPrimaryKey";
  IndexType2[IndexType2["kSecondaryKey"] = 1] = "kSecondaryKey";
  IndexType2[IndexType2["kClusteredSecondaryKey"] = 2] = "kClusteredSecondaryKey";
  IndexType2[IndexType2["kFullTextSearchIndex"] = 3] = "kFullTextSearchIndex";
  IndexType2[IndexType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return IndexType2;
})(IndexType || {});
var indexTypeFromJSON2 = indexTypeFromJSON;
var indexStatusFromJSON2 = indexStatusFromJSON;
var DocumentDB = class _DocumentDB extends GrpcClient {
  constructor(channel, timeout = void 0) {
    const client = new DocumentDBServiceClient(
      channel.address,
      channel.credential,
      channel.options
    );
    super(channel, client, timeout);
  }
  // find(
  //   collectionName: string,
  //   query: Document,
  //   limit?: number,
  //   indexColumns?: string[],
  //   columns?: string[],
  //   dtypes?: { [key: string]: string },
  // ): Promise<DataFrame | null>
  // find(request: Request): Promise<DataFrame | null>
  // find(
  //   request: string | Request,
  //   query?: Document,
  //   limit?: number,
  //   indexColumns?: string[],
  //   columns?: string[],
  //   dtypes?: { [key: string]: string },
  // ) {
  //   let findRequest
  //   if (typeof request === "string") {
  //     findRequest = DocumentDB.toFindRequest({
  //       collectionName: request,
  //       query: query!,
  //       limit: limit,
  //       indexColumns: indexColumns,
  //       columns: columns,
  //       dtypes: dtypes,
  //     })
  //   } else {
  //     findRequest = DocumentDB.toFindRequest(request)
  //   }
  //   return this.createPromise<
  //     DataFrame | null,
  //     proto.FindRequest,
  //     proto.FindResponse
  //   >(findRequest, "find", (response: proto.FindResponse) => {
  //     return DocumentDB.toDataFrame(response)
  //   })
  // }
  findRaw(request) {
    const findRequest = _DocumentDB.toFindRequest(request);
    return this.createPromise(findRequest, "find", (response) => {
      return response.buffer;
    });
  }
  // findBatch(requests: Request[]) {
  //   const findRequests: proto.FindBatchRequest = {
  //     requests: requests.map((request) => {
  //       return DocumentDB.toFindRequest(request)
  //     }),
  //   }
  //   return this.createPromise<
  //     (DataFrame | null)[],
  //     proto.FindBatchRequest,
  //     proto.FindBatchResponse
  //   >(findRequests, "findBatch", (response: proto.FindBatchResponse) => {
  //     return response.responses.map((response) => DocumentDB.toDataFrame(response))
  //   })
  // }
  insert(collectionName, docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    const queries = docs.map((doc) => {
      return {
        collectionName,
        query: _DocumentDB.toDocument(doc)
      };
    });
    const request = {
      requests: queries
    };
    return this.createPromise(request, "insert");
  }
  update(collectionName, filter, updates) {
    const request = {
      collectionName,
      filter: _DocumentDB.toDocument(filter),
      updates: _DocumentDB.toDocument(updates)
    };
    return this.createPromise(request, "update");
  }
  remove(collectionName, docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    const queries = docs.map((doc) => {
      return {
        collectionName,
        query: _DocumentDB.toDocument(doc)
      };
    });
    const request = {
      requests: queries
    };
    return this.createPromise(request, "remove");
  }
  createCollection(collectionName, indexDescriptors) {
    const indexes = indexDescriptors.map((index) => {
      return _DocumentDB.toIndexDescriptor(index);
    });
    return this.createPromise(
      {
        collection: {
          collectionName,
          indexDescriptors: indexes,
          indexStats: []
        }
      },
      "createCollection"
    );
  }
  getCollection(collectionName) {
    return this.createPromise(
      { collectionName },
      "getCollection",
      (response) => {
        if (response && response.collection) {
          return _DocumentDB.fromCollectionInfo(response.collection);
        }
        return null;
      }
    );
  }
  getCollections(collectionNames) {
    return this.createPromise(
      { collectionNames },
      "getCollections",
      (response) => {
        if (response && response.collections) {
          return response.collections.map(_DocumentDB.fromCollectionInfo);
        }
        return null;
      }
    );
  }
  listCollections() {
    return this.createPromise(
      {},
      "listCollections",
      (response) => {
        if (response) {
          return response.collectionNames;
        }
        return null;
      }
    );
  }
  renameCollection(oldCollectionName, newCollectionName) {
    return this.createPromise(
      {
        oldCollectionName,
        newCollectionName
      },
      "renameCollection"
    );
  }
  truncateCollection(collectionName) {
    return this.createPromise(
      {
        collectionName
      },
      "truncateCollection"
    );
  }
  dropCollection(collectionName) {
    return this.createPromise(
      {
        collectionName
      },
      "dropCollection"
    );
  }
  createIndex(collectionName, indexDescriptor) {
    const index = _DocumentDB.toIndexDescriptor(indexDescriptor);
    return this.createPromise(
      {
        collectionName,
        indexDesc: index
      },
      "createIndex"
    );
  }
  getIndex(collectionName, indexName) {
    return this.createPromise(
      {
        collectionName,
        indexName
      },
      "getIndex",
      (response) => response
    );
  }
  renameIndex(collectionName, oldIndexName, newIndexName) {
    return this.createPromise(
      {
        collectionName,
        oldIndexName,
        newIndexName
      },
      "renameIndex"
    );
  }
  dropIndex(collectionName, indexName) {
    return this.createPromise(
      {
        collectionName,
        indexName
      },
      "dropIndex"
    );
  }
  // empty(
  //   collectionName: string,
  //   query: Document,
  //   dtypes: { [key: string]: string } | undefined = undefined,
  // ) {
  //   return this.find({
  //     collectionName: collectionName,
  //     query: query,
  //     dtypes: dtypes,
  //   }).then((result): boolean => {
  //     if (result) {
  //       return result.numRows == 0
  //     }
  //     return true
  //   })
  // }
  static toFindRequest(request) {
    return FindRequest.fromJSON({
      query: {
        collectionName: request.collectionName,
        query: _DocumentDB.toDocument(request.query)
      },
      limit: request.limit,
      indexColumns: request.indexColumns,
      columns: request.columns,
      dtypes: request.dtypes
    });
  }
  // private static toDataFrame(response: proto.FindResponse): DataFrame | null {
  //   if (response.numRows) {
  //     const arrowBuffer = readParquet(response.buffer)
  //     const df = tableFromIPC(arrowBuffer.intoIPCStream())
  //     return df
  //   }
  //   return null
  // }
  static fromCollectionInfo(collection) {
    return {
      collectionName: collection.collectionName,
      indexDescriptors: collection.indexDescriptors.map(
        (index) => _DocumentDB.fromIndexDescriptor(index)
      ),
      indexStats: collection.indexStats
    };
  }
  static toIndexDescriptor(index) {
    let options;
    if (index.options) {
      options = _DocumentDB.toDocument(index.options);
    }
    const descriptor = {
      indexName: index.name,
      fields: index.fields,
      unique: index.unique,
      indexType: index.index_type,
      status: index.status,
      options
    };
    return IndexDescriptor.fromJSON(descriptor);
  }
  static fromIndexDescriptor(index) {
    const descriptor = {
      name: index.indexName,
      fields: index.fields,
      unique: index.unique,
      index_type: indexTypeToJSON(index.indexType),
      status: indexStatusToJSON(index.status),
      options: index.options
    };
    return descriptor;
  }
};

// src/proto/generated/key_value_db.ts
import { makeGenericClientConstructor as makeGenericClientConstructor2 } from "@grpc/grpc-js";
import Long3 from "long";
import _m03 from "protobufjs/minimal";
function statusTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "kOK":
      return 0 /* kOK */;
    case 1:
    case "kNotFound":
      return 1 /* kNotFound */;
    case 10:
    case "kInternal":
      return 10 /* kInternal */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function statusTypeToJSON(object) {
  switch (object) {
    case 0 /* kOK */:
      return "kOK";
    case 1 /* kNotFound */:
      return "kNotFound";
    case 10 /* kInternal */:
      return "kInternal";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseProfileInfo2() {
  return { durationUs: 0 };
}
var ProfileInfo2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.durationUs !== 0) {
      writer.uint32(8).uint64(message.durationUs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseProfileInfo2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.durationUs = longToNumber3(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { durationUs: isSet3(object.durationUs) ? globalThis.Number(object.durationUs) : 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.durationUs !== 0) {
      obj.durationUs = Math.round(message.durationUs);
    }
    return obj;
  },
  create(base) {
    return ProfileInfo2.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseProfileInfo2();
    message.durationUs = (_a = object.durationUs) != null ? _a : 0;
    return message;
  }
};
function createBaseResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var Response = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.profile !== void 0) {
      ProfileInfo2.encode(message.profile, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse();
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
          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.profile = ProfileInfo2.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      status: isSet3(object.status) ? statusTypeFromJSON(object.status) : 0,
      message: isSet3(object.message) ? globalThis.String(object.message) : "",
      profile: isSet3(object.profile) ? ProfileInfo2.fromJSON(object.profile) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = statusTypeToJSON(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo2.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return Response.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseResponse();
    message.status = (_a = object.status) != null ? _a : 0;
    message.message = (_b = object.message) != null ? _b : "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo2.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBasePutRequest() {
  return { keyspaceName: "", key: Buffer.alloc(0), value: Buffer.alloc(0), ttl: 0, createIfMissing: false };
}
var PutRequest = {
  encode(message, writer = _m03.Writer.create()) {
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
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.key = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.value = reader.bytes();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.ttl = longToNumber3(reader.int64());
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
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      key: isSet3(object.key) ? Buffer.from(bytesFromBase642(object.key)) : Buffer.alloc(0),
      value: isSet3(object.value) ? Buffer.from(bytesFromBase642(object.value)) : Buffer.alloc(0),
      ttl: isSet3(object.ttl) ? globalThis.Number(object.ttl) : 0,
      createIfMissing: isSet3(object.createIfMissing) ? globalThis.Boolean(object.createIfMissing) : false
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes2(message.key);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes2(message.value);
    }
    if (message.ttl !== 0) {
      obj.ttl = Math.round(message.ttl);
    }
    if (message.createIfMissing === true) {
      obj.createIfMissing = message.createIfMissing;
    }
    return obj;
  },
  create(base) {
    return PutRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBasePutRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.key = (_b = object.key) != null ? _b : Buffer.alloc(0);
    message.value = (_c = object.value) != null ? _c : Buffer.alloc(0);
    message.ttl = (_d = object.ttl) != null ? _d : 0;
    message.createIfMissing = (_e = object.createIfMissing) != null ? _e : false;
    return message;
  }
};
function createBasePutResponse() {
  return { response: void 0 };
}
var PutResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },
  create(base) {
    return PutResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBasePutResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    return message;
  }
};
function createBaseRemoveRequest2() {
  return { keyspaceName: "", key: Buffer.alloc(0) };
}
var RemoveRequest2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoveRequest2();
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
          message.key = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      key: isSet3(object.key) ? Buffer.from(bytesFromBase642(object.key)) : Buffer.alloc(0)
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes2(message.key);
    }
    return obj;
  },
  create(base) {
    return RemoveRequest2.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseRemoveRequest2();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.key = (_b = object.key) != null ? _b : Buffer.alloc(0);
    return message;
  }
};
function createBaseRemoveResponse2() {
  return { response: void 0 };
}
var RemoveResponse2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoveResponse2();
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
  fromJSON(object) {
    return { response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },
  create(base) {
    return RemoveResponse2.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseRemoveResponse2();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    return message;
  }
};
function createBaseGetRequest() {
  return { keyspaceName: "", key: Buffer.alloc(0) };
}
var GetRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.key = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      key: isSet3(object.key) ? Buffer.from(bytesFromBase642(object.key)) : Buffer.alloc(0)
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.key.length !== 0) {
      obj.key = base64FromBytes2(message.key);
    }
    return obj;
  },
  create(base) {
    return GetRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseGetRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.key = (_b = object.key) != null ? _b : Buffer.alloc(0);
    return message;
  }
};
function createBaseGetResponse() {
  return { response: void 0, value: Buffer.alloc(0) };
}
var GetResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0,
      value: isSet3(object.value) ? Buffer.from(bytesFromBase642(object.value)) : Buffer.alloc(0)
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    if (message.value.length !== 0) {
      obj.value = base64FromBytes2(message.value);
    }
    return obj;
  },
  create(base) {
    return GetResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseGetResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    message.value = (_a = object.value) != null ? _a : Buffer.alloc(0);
    return message;
  }
};
function createBaseMultiGetRequest() {
  return { keyspaceName: "", keys: [] };
}
var MultiGetRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.keys.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object == null ? void 0 : object.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if ((_a = message.keys) == null ? void 0 : _a.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return MultiGetRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseMultiGetRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.keys = ((_b = object.keys) == null ? void 0 : _b.map((e) => e)) || [];
    return message;
  }
};
function createBaseMultiGetResponse() {
  return { responses: [], values: [] };
}
var MultiGetResponse = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.values.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      responses: globalThis.Array.isArray(object == null ? void 0 : object.responses) ? object.responses.map((e) => Response.fromJSON(e)) : [],
      values: globalThis.Array.isArray(object == null ? void 0 : object.values) ? object.values.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    var _a, _b;
    const obj = {};
    if ((_a = message.responses) == null ? void 0 : _a.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if ((_b = message.values) == null ? void 0 : _b.length) {
      obj.values = message.values.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return MultiGetResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseMultiGetResponse();
    message.responses = ((_a = object.responses) == null ? void 0 : _a.map((e) => Response.fromPartial(e))) || [];
    message.values = ((_b = object.values) == null ? void 0 : _b.map((e) => e)) || [];
    return message;
  }
};
function createBaseBatchedPutRequest() {
  return { keyspaceName: "", keys: [], values: [], ttls: [], createIfMissing: false };
}
var BatchedPutRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    for (const v of message.values) {
      writer.uint32(26).bytes(v);
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
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.keys.push(reader.bytes());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.values.push(reader.bytes());
          continue;
        case 4:
          if (tag === 32) {
            message.ttls.push(longToNumber3(reader.int64()));
            continue;
          }
          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ttls.push(longToNumber3(reader.int64()));
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
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object == null ? void 0 : object.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : [],
      values: globalThis.Array.isArray(object == null ? void 0 : object.values) ? object.values.map((e) => Buffer.from(bytesFromBase642(e))) : [],
      ttls: globalThis.Array.isArray(object == null ? void 0 : object.ttls) ? object.ttls.map((e) => globalThis.Number(e)) : [],
      createIfMissing: isSet3(object.createIfMissing) ? globalThis.Boolean(object.createIfMissing) : false
    };
  },
  toJSON(message) {
    var _a, _b, _c;
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if ((_a = message.keys) == null ? void 0 : _a.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    if ((_b = message.values) == null ? void 0 : _b.length) {
      obj.values = message.values.map((e) => base64FromBytes2(e));
    }
    if ((_c = message.ttls) == null ? void 0 : _c.length) {
      obj.ttls = message.ttls.map((e) => Math.round(e));
    }
    if (message.createIfMissing === true) {
      obj.createIfMissing = message.createIfMissing;
    }
    return obj;
  },
  create(base) {
    return BatchedPutRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b, _c, _d, _e;
    const message = createBaseBatchedPutRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.keys = ((_b = object.keys) == null ? void 0 : _b.map((e) => e)) || [];
    message.values = ((_c = object.values) == null ? void 0 : _c.map((e) => e)) || [];
    message.ttls = ((_d = object.ttls) == null ? void 0 : _d.map((e) => e)) || [];
    message.createIfMissing = (_e = object.createIfMissing) != null ? _e : false;
    return message;
  }
};
function createBaseBatchedPutResponse() {
  return { responses: [] };
}
var BatchedPutResponse = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      responses: globalThis.Array.isArray(object == null ? void 0 : object.responses) ? object.responses.map((e) => Response.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.responses) == null ? void 0 : _a.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return BatchedPutResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseBatchedPutResponse();
    message.responses = ((_a = object.responses) == null ? void 0 : _a.map((e) => Response.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBatchedRemoveRequest() {
  return { keyspaceName: "", keys: [] };
}
var BatchedRemoveRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.keys.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object == null ? void 0 : object.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if ((_a = message.keys) == null ? void 0 : _a.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return BatchedRemoveRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseBatchedRemoveRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.keys = ((_b = object.keys) == null ? void 0 : _b.map((e) => e)) || [];
    return message;
  }
};
function createBaseBatchedRemoveResponse() {
  return { responses: [] };
}
var BatchedRemoveResponse = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      responses: globalThis.Array.isArray(object == null ? void 0 : object.responses) ? object.responses.map((e) => Response.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if ((_a = message.responses) == null ? void 0 : _a.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return BatchedRemoveResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseBatchedRemoveResponse();
    message.responses = ((_a = object.responses) == null ? void 0 : _a.map((e) => Response.fromPartial(e))) || [];
    return message;
  }
};
function createBaseBatchedGetRequest() {
  return { keyspaceName: "", keys: [] };
}
var BatchedGetRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.keys.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "",
      keys: globalThis.Array.isArray(object == null ? void 0 : object.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if ((_a = message.keys) == null ? void 0 : _a.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return BatchedGetRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseBatchedGetRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    message.keys = ((_b = object.keys) == null ? void 0 : _b.map((e) => e)) || [];
    return message;
  }
};
function createBaseBatchedGetResponse() {
  return { responses: [], values: [] };
}
var BatchedGetResponse = {
  encode(message, writer = _m03.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
          message.values.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      responses: globalThis.Array.isArray(object == null ? void 0 : object.responses) ? object.responses.map((e) => Response.fromJSON(e)) : [],
      values: globalThis.Array.isArray(object == null ? void 0 : object.values) ? object.values.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    var _a, _b;
    const obj = {};
    if ((_a = message.responses) == null ? void 0 : _a.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if ((_b = message.values) == null ? void 0 : _b.length) {
      obj.values = message.values.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return BatchedGetResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a, _b;
    const message = createBaseBatchedGetResponse();
    message.responses = ((_a = object.responses) == null ? void 0 : _a.map((e) => Response.fromPartial(e))) || [];
    message.values = ((_b = object.values) == null ? void 0 : _b.map((e) => e)) || [];
    return message;
  }
};
function createBaseCreateKeyspaceRequest() {
  return { keyspaceName: "" };
}
var CreateKeyspaceRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    return obj;
  },
  create(base) {
    return CreateKeyspaceRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseCreateKeyspaceRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    return message;
  }
};
function createBaseCreateKeyspaceResponse() {
  return { response: void 0 };
}
var CreateKeyspaceResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },
  create(base) {
    return CreateKeyspaceResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseCreateKeyspaceResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    return message;
  }
};
function createBaseDropKeyspaceRequest() {
  return { keyspaceName: "" };
}
var DropKeyspaceRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    return obj;
  },
  create(base) {
    return DropKeyspaceRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseDropKeyspaceRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    return message;
  }
};
function createBaseDropKeyspaceResponse() {
  return { response: void 0 };
}
var DropKeyspaceResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },
  create(base) {
    return DropKeyspaceResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseDropKeyspaceResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    return message;
  }
};
function createBaseTruncateKeyspaceRequest() {
  return { keyspaceName: "" };
}
var TruncateKeyspaceRequest = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { keyspaceName: isSet3(object.keyspaceName) ? globalThis.String(object.keyspaceName) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    return obj;
  },
  create(base) {
    return TruncateKeyspaceRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseTruncateKeyspaceRequest();
    message.keyspaceName = (_a = object.keyspaceName) != null ? _a : "";
    return message;
  }
};
function createBaseTruncateKeyspaceResponse() {
  return { response: void 0 };
}
var TruncateKeyspaceResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return { response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    return obj;
  },
  create(base) {
    return TruncateKeyspaceResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    const message = createBaseTruncateKeyspaceResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    return message;
  }
};
function createBaseListKeyspacesRequest() {
  return {};
}
var ListKeyspacesRequest = {
  encode(_, writer = _m03.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return ListKeyspacesRequest.fromPartial(base != null ? base : {});
  },
  fromPartial(_) {
    const message = createBaseListKeyspacesRequest();
    return message;
  }
};
function createBaseListKeyspacesResponse() {
  return { response: void 0, keyspaceNames: [] };
}
var ListKeyspacesResponse = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.keyspaceNames) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromJSON(object) {
    return {
      response: isSet3(object.response) ? Response.fromJSON(object.response) : void 0,
      keyspaceNames: globalThis.Array.isArray(object == null ? void 0 : object.keyspaceNames) ? object.keyspaceNames.map((e) => globalThis.String(e)) : []
    };
  },
  toJSON(message) {
    var _a;
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    if ((_a = message.keyspaceNames) == null ? void 0 : _a.length) {
      obj.keyspaceNames = message.keyspaceNames;
    }
    return obj;
  },
  create(base) {
    return ListKeyspacesResponse.fromPartial(base != null ? base : {});
  },
  fromPartial(object) {
    var _a;
    const message = createBaseListKeyspacesResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    message.keyspaceNames = ((_a = object.keyspaceNames) == null ? void 0 : _a.map((e) => e)) || [];
    return message;
  }
};
var KeyValueDBServiceService = {
  put: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/put",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(PutRequest.encode(value).finish()),
    requestDeserialize: (value) => PutRequest.decode(value),
    responseSerialize: (value) => Buffer.from(PutResponse.encode(value).finish()),
    responseDeserialize: (value) => PutResponse.decode(value)
  },
  remove: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(RemoveRequest2.encode(value).finish()),
    requestDeserialize: (value) => RemoveRequest2.decode(value),
    responseSerialize: (value) => Buffer.from(RemoveResponse2.encode(value).finish()),
    responseDeserialize: (value) => RemoveResponse2.decode(value)
  },
  get: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(GetRequest.encode(value).finish()),
    requestDeserialize: (value) => GetRequest.decode(value),
    responseSerialize: (value) => Buffer.from(GetResponse.encode(value).finish()),
    responseDeserialize: (value) => GetResponse.decode(value)
  },
  mget: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/mget",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(MultiGetRequest.encode(value).finish()),
    requestDeserialize: (value) => MultiGetRequest.decode(value),
    responseSerialize: (value) => Buffer.from(MultiGetResponse.encode(value).finish()),
    responseDeserialize: (value) => MultiGetResponse.decode(value)
  },
  putBatch: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/put_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(BatchedPutRequest.encode(value).finish()),
    requestDeserialize: (value) => BatchedPutRequest.decode(value),
    responseSerialize: (value) => Buffer.from(BatchedPutResponse.encode(value).finish()),
    responseDeserialize: (value) => BatchedPutResponse.decode(value)
  },
  removeBatch: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/remove_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(BatchedRemoveRequest.encode(value).finish()),
    requestDeserialize: (value) => BatchedRemoveRequest.decode(value),
    responseSerialize: (value) => Buffer.from(BatchedRemoveResponse.encode(value).finish()),
    responseDeserialize: (value) => BatchedRemoveResponse.decode(value)
  },
  getBatch: {
    path: "/cognica.rpc.db.kv.KeyValueDBService/get_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(BatchedGetRequest.encode(value).finish()),
    requestDeserialize: (value) => BatchedGetRequest.decode(value),
    responseSerialize: (value) => Buffer.from(BatchedGetResponse.encode(value).finish()),
    responseDeserialize: (value) => BatchedGetResponse.decode(value)
  }
};
var KeyValueDBServiceClient = makeGenericClientConstructor2(
  KeyValueDBServiceService,
  "cognica.rpc.db.kv.KeyValueDBService"
);
var KeyspaceManagerServiceService = {
  createKeyspace: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/create_keyspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(CreateKeyspaceRequest.encode(value).finish()),
    requestDeserialize: (value) => CreateKeyspaceRequest.decode(value),
    responseSerialize: (value) => Buffer.from(CreateKeyspaceResponse.encode(value).finish()),
    responseDeserialize: (value) => CreateKeyspaceResponse.decode(value)
  },
  dropKeyspace: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/drop_keyspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(DropKeyspaceRequest.encode(value).finish()),
    requestDeserialize: (value) => DropKeyspaceRequest.decode(value),
    responseSerialize: (value) => Buffer.from(DropKeyspaceResponse.encode(value).finish()),
    responseDeserialize: (value) => DropKeyspaceResponse.decode(value)
  },
  truncateKeyspace: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/truncate_keyspace",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(TruncateKeyspaceRequest.encode(value).finish()),
    requestDeserialize: (value) => TruncateKeyspaceRequest.decode(value),
    responseSerialize: (value) => Buffer.from(TruncateKeyspaceResponse.encode(value).finish()),
    responseDeserialize: (value) => TruncateKeyspaceResponse.decode(value)
  },
  listKeyspaces: {
    path: "/cognica.rpc.db.kv.KeyspaceManagerService/list_keyspaces",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(ListKeyspacesRequest.encode(value).finish()),
    requestDeserialize: (value) => ListKeyspacesRequest.decode(value),
    responseSerialize: (value) => Buffer.from(ListKeyspacesResponse.encode(value).finish()),
    responseDeserialize: (value) => ListKeyspacesResponse.decode(value)
  }
};
var KeyspaceManagerServiceClient = makeGenericClientConstructor2(
  KeyspaceManagerServiceService,
  "cognica.rpc.db.kv.KeyspaceManagerService"
);
function bytesFromBase642(b64) {
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
function base64FromBytes2(arr) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}
function longToNumber3(long) {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
if (_m03.util.Long !== Long3) {
  _m03.util.Long = Long3;
  _m03.configure();
}
function isSet3(value) {
  return value !== null && value !== void 0;
}

// src/key_value_db.ts
var KeyValueDB = class extends GrpcClient {
  constructor(channel, timeout = void 0) {
    const client = new KeyValueDBServiceClient(
      channel.address,
      channel.credential,
      channel.options
    );
    super(channel, client, timeout);
  }
  get(keyspaceName, key) {
    const request = {
      keyspaceName,
      key: this.toBuffer(key)
    };
    return this.createPromise(
      request,
      "get",
      (response) => {
        return response.value;
      }
    );
  }
  getBatch(keyspaceName, keys) {
    const request = {
      keyspaceName,
      keys: keys.map((key) => this.toBuffer(key))
    };
    return this.createPromise(request, "getBatch", (response) => {
      return response.values;
    });
  }
  put(request, key, value, ttl = 0, createIfMissing = true) {
    let putRequest;
    if (typeof request === "string") {
      putRequest = {
        keyspaceName: request,
        key: this.toBuffer(key),
        value: this.toBuffer(value),
        ttl,
        createIfMissing
      };
    } else {
      putRequest = PutRequest.fromJSON(request);
    }
    return this.createPromise(
      putRequest,
      "put",
      (response) => {
        var _a;
        return ((_a = response.response) == null ? void 0 : _a.status) == 0 /* kOK */;
      }
    );
  }
  putBatch(requests, keys, values, ttls, createIfMissing = true) {
    let batchedRequest;
    if (typeof requests === "string") {
      batchedRequest = {
        keyspaceName: requests,
        keys: keys == null ? void 0 : keys.map((key) => this.toBuffer(key)),
        values: values == null ? void 0 : values.map((value) => this.toBuffer(value)),
        ttls: ttls || Array(keys.length).fill(0),
        createIfMissing
      };
    } else {
      batchedRequest = BatchedPutRequest.fromJSON(requests);
    }
    return this.createPromise(batchedRequest, "putBatch", (response) => {
      return response.responses.map(
        (response2) => response2.status == 0 /* kOK */
      );
    });
  }
  remove(keyspaceName, key) {
    const request = {
      keyspaceName,
      key: this.toBuffer(key)
    };
    return this.createPromise(request, "remove", (response) => {
      var _a;
      return ((_a = response.response) == null ? void 0 : _a.status) == 0 /* kOK */;
    });
  }
  removeBatch(keyspaceName, keys) {
    const request = {
      keyspaceName,
      keys: keys.map((key) => this.toBuffer(key))
    };
    return this.createPromise(request, "removeBatch", (response) => {
      var _a;
      return (_a = response.responses) == null ? void 0 : _a.map(
        (response2) => response2.status == 0 /* kOK */
      );
    });
  }
  toBuffer(value) {
    if (typeof value === "string") {
      return Buffer.from(value, "utf-8");
    }
    return value;
  }
};
var KeyspaceManager = class extends GrpcClient {
  constructor(channel, timeout = void 0) {
    const client = new KeyspaceManagerServiceClient(
      channel.address,
      channel.credential,
      channel.options
    );
    super(channel, client, timeout);
  }
  createKeyspace(keyspaceName) {
    return this.createPromise(
      { keyspaceName },
      "createKeyspace",
      (response) => {
        var _a;
        return ((_a = response.response) == null ? void 0 : _a.status) === 0 /* kOK */;
      }
    );
  }
  listKeyspace() {
    return this.createPromise({}, "listKeyspaces", (response) => {
      return response.keyspaceNames;
    });
  }
  truncateKeyspace(keyspaceName) {
    return this.createPromise(
      {
        keyspaceName
      },
      "truncateKeyspace",
      (response) => {
        var _a;
        return ((_a = response.response) == null ? void 0 : _a.status) === 0 /* kOK */;
      }
    );
  }
  dropKeyspace(keyspaceName) {
    return this.createPromise(
      { keyspaceName },
      "dropKeyspace",
      (response) => {
        var _a;
        return ((_a = response.response) == null ? void 0 : _a.status) === 0 /* kOK */;
      }
    );
  }
};
export {
  Channel,
  DocumentDB,
  IndexType,
  KeyValueDB,
  KeyspaceManager,
  indexStatusFromJSON2 as indexStatusFromJSON,
  indexTypeFromJSON2 as indexTypeFromJSON
};
