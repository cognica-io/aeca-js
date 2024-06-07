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
import { Document } from "./document";

export const protobufPackage = "aeca.rpc.db.document";

export enum IndexType {
  kPrimaryKey = 0,
  kSecondaryKey = 1,
  kClusteredSecondaryKey = 2,
  kFullTextSearchIndex = 3,
  UNRECOGNIZED = -1,
}

export function indexTypeFromJSON(object: any): IndexType {
  switch (object) {
    case 0:
    case "kPrimaryKey":
      return IndexType.kPrimaryKey;
    case 1:
    case "kSecondaryKey":
      return IndexType.kSecondaryKey;
    case 2:
    case "kClusteredSecondaryKey":
      return IndexType.kClusteredSecondaryKey;
    case 3:
    case "kFullTextSearchIndex":
      return IndexType.kFullTextSearchIndex;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IndexType.UNRECOGNIZED;
  }
}

export function indexTypeToJSON(object: IndexType): string {
  switch (object) {
    case IndexType.kPrimaryKey:
      return "kPrimaryKey";
    case IndexType.kSecondaryKey:
      return "kSecondaryKey";
    case IndexType.kClusteredSecondaryKey:
      return "kClusteredSecondaryKey";
    case IndexType.kFullTextSearchIndex:
      return "kFullTextSearchIndex";
    case IndexType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum IndexStatus {
  /** kEnabled - Index is in use. */
  kEnabled = 0,
  /** kDisabled - Index is disabled. */
  kDisabled = 1,
  /** kReadyToUse - Index is ready to use and will be switched to */
  kReadyToUse = 2,
  /** kBuildInProgress - Index is being built. */
  kBuildInProgress = 3,
  /** kBuildFinished - Index was built successfully and will be */
  kBuildFinished = 4,
  /** kDropInProgress - Index is being dropped. */
  kDropInProgress = 5,
  /** kDropFinished - Index was dropped successfully and will be */
  kDropFinished = 6,
  UNRECOGNIZED = -1,
}

export function indexStatusFromJSON(object: any): IndexStatus {
  switch (object) {
    case 0:
    case "kEnabled":
      return IndexStatus.kEnabled;
    case 1:
    case "kDisabled":
      return IndexStatus.kDisabled;
    case 2:
    case "kReadyToUse":
      return IndexStatus.kReadyToUse;
    case 3:
    case "kBuildInProgress":
      return IndexStatus.kBuildInProgress;
    case 4:
    case "kBuildFinished":
      return IndexStatus.kBuildFinished;
    case 5:
    case "kDropInProgress":
      return IndexStatus.kDropInProgress;
    case 6:
    case "kDropFinished":
      return IndexStatus.kDropFinished;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IndexStatus.UNRECOGNIZED;
  }
}

export function indexStatusToJSON(object: IndexStatus): string {
  switch (object) {
    case IndexStatus.kEnabled:
      return "kEnabled";
    case IndexStatus.kDisabled:
      return "kDisabled";
    case IndexStatus.kReadyToUse:
      return "kReadyToUse";
    case IndexStatus.kBuildInProgress:
      return "kBuildInProgress";
    case IndexStatus.kBuildFinished:
      return "kBuildFinished";
    case IndexStatus.kDropInProgress:
      return "kDropInProgress";
    case IndexStatus.kDropFinished:
      return "kDropFinished";
    case IndexStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface IndexDescriptor {
  indexId: number;
  indexName: string;
  fields: string[];
  unique: boolean;
  indexType: IndexType;
  status: IndexStatus;
  options: Document | undefined;
}

export interface FTSFieldStats {
  fieldName: string;
  totalDocCount: number;
  totalDocSize: number;
  docCount: number;
  docSize: number;
  sumTermFreq: number;
  sumDocFreq: number;
}

export interface FTSIndexStats {
  docCount: number;
  docSize: number;
  fieldStats: FTSFieldStats[];
}

export interface IndexStats {
  indexId: number;
  indexName: string;
  approximatedSize: number;
  numDocs: number;
  accessed: number;
  added: number;
  updated: number;
  deleted: number;
  merged: number;
  accessedAt: number;
  addedAt: number;
  updatedAt: number;
  deletedAt: number;
  mergedAt: number;
  ftsStats: FTSIndexStats | undefined;
}

export interface CollectionInfo {
  collectionName: string;
  indexDescriptors: IndexDescriptor[];
  indexStats: IndexStats[];
}

export interface ProfileInfo {
  matched: number;
  scanned: number;
  filtered: number;
  queryDurationUs: number;
  serializationDurationUs: number;
}

export interface CreateCollectionRequest {
  collection: CollectionInfo | undefined;
}

export interface CreateCollectionResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface DropCollectionRequest {
  collectionName: string;
}

export interface DropCollectionResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface RenameCollectionRequest {
  oldCollectionName: string;
  newCollectionName: string;
}

export interface RenameCollectionResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface GetCollectionRequest {
  collectionName: string;
}

export interface GetCollectionResponse {
  status: number;
  message: string;
  collection: CollectionInfo | undefined;
  profile: ProfileInfo | undefined;
}

export interface GetCollectionsRequest {
  collectionNames: string[];
}

export interface GetCollectionsResponse {
  status: number;
  message: string;
  collections: CollectionInfo[];
  profile: ProfileInfo | undefined;
}

export interface CreateIndexRequest {
  collectionName: string;
  indexDesc: IndexDescriptor | undefined;
}

export interface CreateIndexResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface DropIndexRequest {
  collectionName: string;
  indexName: string;
}

export interface DropIndexResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface RenameIndexRequest {
  collectionName: string;
  oldIndexName: string;
  newIndexName: string;
}

export interface RenameIndexResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface GetIndexRequest {
  collectionName: string;
  indexName: string;
}

export interface GetIndexResponse {
  status: number;
  message: string;
  collectionName: string;
  indexDesc: IndexDescriptor | undefined;
  indexStats: IndexStats | undefined;
  profile: ProfileInfo | undefined;
}

export interface Query {
  collectionName: string;
  query: Document | undefined;
}

export interface FindRequest {
  query: Query | undefined;
  limit: number;
  indexColumns: string[];
  columns: string[];
  dtypes: { [key: string]: string };
}

export interface FindRequest_DtypesEntry {
  key: string;
  value: string;
}

export interface FindResponse {
  numColumns: number;
  numRows: number;
  buffer: Buffer;
  profile: ProfileInfo | undefined;
}

export interface FindBatchRequest {
  requests: FindRequest[];
}

export interface FindBatchResponse {
  responses: FindResponse[];
}

export interface CountRequest {
  query: Query | undefined;
}

export interface CountResponse {
  status: number;
  message: string;
  count: number;
  profile: ProfileInfo | undefined;
}

export interface ContainsRequest {
  query: Query | undefined;
}

export interface ContainsResponse {
  status: number;
  message: string;
  found: boolean;
  profile: ProfileInfo | undefined;
}

export interface InsertRequest {
  requests: Query[];
}

export interface InsertResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface UpdateRequest {
  collectionName: string;
  filter: Document | undefined;
  updates: Document | undefined;
}

export interface UpdateResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface RemoveRequest {
  requests: Query[];
}

export interface RemoveResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface ExplainRequest {
  queries: Query[];
}

export interface QueryPlan {
  status: number;
  message: string;
  collectionName: string;
  indexName: string;
  queryPlan: string;
}

export interface ExplainResponse {
  status: number;
  queryPlans: QueryPlan[];
}

export interface TruncateCollectionRequest {
  collectionName: string;
}

export interface TruncateCollectionResponse {
  status: number;
  message: string;
  profile: ProfileInfo | undefined;
}

export interface ListCollectionsRequest {
}

export interface ListCollectionsResponse {
  status: number;
  message: string;
  collectionNames: string[];
  profile: ProfileInfo | undefined;
}

function createBaseIndexDescriptor(): IndexDescriptor {
  return { indexId: 0, indexName: "", fields: [], unique: false, indexType: 0, status: 0, options: undefined };
}

export const IndexDescriptor = {
  encode(message: IndexDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indexId !== 0) {
      writer.uint32(8).uint32(message.indexId);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    for (const v of message.fields) {
      writer.uint32(26).string(v!);
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
    if (message.options !== undefined) {
      Document.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

          message.indexType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
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

  fromJSON(object: any): IndexDescriptor {
    return {
      indexId: isSet(object.indexId) ? globalThis.Number(object.indexId) : 0,
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
      fields: globalThis.Array.isArray(object?.fields) ? object.fields.map((e: any) => globalThis.String(e)) : [],
      unique: isSet(object.unique) ? globalThis.Boolean(object.unique) : false,
      indexType: isSet(object.indexType) ? indexTypeFromJSON(object.indexType) : 0,
      status: isSet(object.status) ? indexStatusFromJSON(object.status) : 0,
      options: isSet(object.options) ? Document.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: IndexDescriptor): unknown {
    const obj: any = {};
    if (message.indexId !== 0) {
      obj.indexId = Math.round(message.indexId);
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if (message.fields?.length) {
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
    if (message.options !== undefined) {
      obj.options = Document.toJSON(message.options);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexDescriptor>, I>>(base?: I): IndexDescriptor {
    return IndexDescriptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexDescriptor>, I>>(object: I): IndexDescriptor {
    const message = createBaseIndexDescriptor();
    message.indexId = object.indexId ?? 0;
    message.indexName = object.indexName ?? "";
    message.fields = object.fields?.map((e) => e) || [];
    message.unique = object.unique ?? false;
    message.indexType = object.indexType ?? 0;
    message.status = object.status ?? 0;
    message.options = (object.options !== undefined && object.options !== null)
      ? Document.fromPartial(object.options)
      : undefined;
    return message;
  },
};

function createBaseFTSFieldStats(): FTSFieldStats {
  return { fieldName: "", totalDocCount: 0, totalDocSize: 0, docCount: 0, docSize: 0, sumTermFreq: 0, sumDocFreq: 0 };
}

export const FTSFieldStats = {
  encode(message: FTSFieldStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FTSFieldStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

          message.totalDocCount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalDocSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.docCount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.docSize = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.sumTermFreq = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.sumDocFreq = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FTSFieldStats {
    return {
      fieldName: isSet(object.fieldName) ? globalThis.String(object.fieldName) : "",
      totalDocCount: isSet(object.totalDocCount) ? globalThis.Number(object.totalDocCount) : 0,
      totalDocSize: isSet(object.totalDocSize) ? globalThis.Number(object.totalDocSize) : 0,
      docCount: isSet(object.docCount) ? globalThis.Number(object.docCount) : 0,
      docSize: isSet(object.docSize) ? globalThis.Number(object.docSize) : 0,
      sumTermFreq: isSet(object.sumTermFreq) ? globalThis.Number(object.sumTermFreq) : 0,
      sumDocFreq: isSet(object.sumDocFreq) ? globalThis.Number(object.sumDocFreq) : 0,
    };
  },

  toJSON(message: FTSFieldStats): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<FTSFieldStats>, I>>(base?: I): FTSFieldStats {
    return FTSFieldStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTSFieldStats>, I>>(object: I): FTSFieldStats {
    const message = createBaseFTSFieldStats();
    message.fieldName = object.fieldName ?? "";
    message.totalDocCount = object.totalDocCount ?? 0;
    message.totalDocSize = object.totalDocSize ?? 0;
    message.docCount = object.docCount ?? 0;
    message.docSize = object.docSize ?? 0;
    message.sumTermFreq = object.sumTermFreq ?? 0;
    message.sumDocFreq = object.sumDocFreq ?? 0;
    return message;
  },
};

function createBaseFTSIndexStats(): FTSIndexStats {
  return { docCount: 0, docSize: 0, fieldStats: [] };
}

export const FTSIndexStats = {
  encode(message: FTSIndexStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.docCount !== 0) {
      writer.uint32(8).int64(message.docCount);
    }
    if (message.docSize !== 0) {
      writer.uint32(16).int64(message.docSize);
    }
    for (const v of message.fieldStats) {
      FTSFieldStats.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FTSIndexStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFTSIndexStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.docCount = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.docSize = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): FTSIndexStats {
    return {
      docCount: isSet(object.docCount) ? globalThis.Number(object.docCount) : 0,
      docSize: isSet(object.docSize) ? globalThis.Number(object.docSize) : 0,
      fieldStats: globalThis.Array.isArray(object?.fieldStats)
        ? object.fieldStats.map((e: any) => FTSFieldStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FTSIndexStats): unknown {
    const obj: any = {};
    if (message.docCount !== 0) {
      obj.docCount = Math.round(message.docCount);
    }
    if (message.docSize !== 0) {
      obj.docSize = Math.round(message.docSize);
    }
    if (message.fieldStats?.length) {
      obj.fieldStats = message.fieldStats.map((e) => FTSFieldStats.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FTSIndexStats>, I>>(base?: I): FTSIndexStats {
    return FTSIndexStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FTSIndexStats>, I>>(object: I): FTSIndexStats {
    const message = createBaseFTSIndexStats();
    message.docCount = object.docCount ?? 0;
    message.docSize = object.docSize ?? 0;
    message.fieldStats = object.fieldStats?.map((e) => FTSFieldStats.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndexStats(): IndexStats {
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
    ftsStats: undefined,
  };
}

export const IndexStats = {
  encode(message: IndexStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.ftsStats !== undefined) {
      FTSIndexStats.encode(message.ftsStats, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

          message.approximatedSize = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numDocs = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.accessed = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.added = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.updated = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.deleted = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.merged = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.accessedAt = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.addedAt = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.updatedAt = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.deletedAt = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.mergedAt = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): IndexStats {
    return {
      indexId: isSet(object.indexId) ? globalThis.Number(object.indexId) : 0,
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
      approximatedSize: isSet(object.approximatedSize) ? globalThis.Number(object.approximatedSize) : 0,
      numDocs: isSet(object.numDocs) ? globalThis.Number(object.numDocs) : 0,
      accessed: isSet(object.accessed) ? globalThis.Number(object.accessed) : 0,
      added: isSet(object.added) ? globalThis.Number(object.added) : 0,
      updated: isSet(object.updated) ? globalThis.Number(object.updated) : 0,
      deleted: isSet(object.deleted) ? globalThis.Number(object.deleted) : 0,
      merged: isSet(object.merged) ? globalThis.Number(object.merged) : 0,
      accessedAt: isSet(object.accessedAt) ? globalThis.Number(object.accessedAt) : 0,
      addedAt: isSet(object.addedAt) ? globalThis.Number(object.addedAt) : 0,
      updatedAt: isSet(object.updatedAt) ? globalThis.Number(object.updatedAt) : 0,
      deletedAt: isSet(object.deletedAt) ? globalThis.Number(object.deletedAt) : 0,
      mergedAt: isSet(object.mergedAt) ? globalThis.Number(object.mergedAt) : 0,
      ftsStats: isSet(object.ftsStats) ? FTSIndexStats.fromJSON(object.ftsStats) : undefined,
    };
  },

  toJSON(message: IndexStats): unknown {
    const obj: any = {};
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
    if (message.ftsStats !== undefined) {
      obj.ftsStats = FTSIndexStats.toJSON(message.ftsStats);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexStats>, I>>(base?: I): IndexStats {
    return IndexStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexStats>, I>>(object: I): IndexStats {
    const message = createBaseIndexStats();
    message.indexId = object.indexId ?? 0;
    message.indexName = object.indexName ?? "";
    message.approximatedSize = object.approximatedSize ?? 0;
    message.numDocs = object.numDocs ?? 0;
    message.accessed = object.accessed ?? 0;
    message.added = object.added ?? 0;
    message.updated = object.updated ?? 0;
    message.deleted = object.deleted ?? 0;
    message.merged = object.merged ?? 0;
    message.accessedAt = object.accessedAt ?? 0;
    message.addedAt = object.addedAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.deletedAt = object.deletedAt ?? 0;
    message.mergedAt = object.mergedAt ?? 0;
    message.ftsStats = (object.ftsStats !== undefined && object.ftsStats !== null)
      ? FTSIndexStats.fromPartial(object.ftsStats)
      : undefined;
    return message;
  },
};

function createBaseCollectionInfo(): CollectionInfo {
  return { collectionName: "", indexDescriptors: [], indexStats: [] };
}

export const CollectionInfo = {
  encode(message: CollectionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    for (const v of message.indexDescriptors) {
      IndexDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.indexStats) {
      IndexStats.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): CollectionInfo {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexDescriptors: globalThis.Array.isArray(object?.indexDescriptors)
        ? object.indexDescriptors.map((e: any) => IndexDescriptor.fromJSON(e))
        : [],
      indexStats: globalThis.Array.isArray(object?.indexStats)
        ? object.indexStats.map((e: any) => IndexStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CollectionInfo): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexDescriptors?.length) {
      obj.indexDescriptors = message.indexDescriptors.map((e) => IndexDescriptor.toJSON(e));
    }
    if (message.indexStats?.length) {
      obj.indexStats = message.indexStats.map((e) => IndexStats.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectionInfo>, I>>(base?: I): CollectionInfo {
    return CollectionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollectionInfo>, I>>(object: I): CollectionInfo {
    const message = createBaseCollectionInfo();
    message.collectionName = object.collectionName ?? "";
    message.indexDescriptors = object.indexDescriptors?.map((e) => IndexDescriptor.fromPartial(e)) || [];
    message.indexStats = object.indexStats?.map((e) => IndexStats.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProfileInfo(): ProfileInfo {
  return { matched: 0, scanned: 0, filtered: 0, queryDurationUs: 0, serializationDurationUs: 0 };
}

export const ProfileInfo = {
  encode(message: ProfileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

          message.matched = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.scanned = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.filtered = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.queryDurationUs = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.serializationDurationUs = longToNumber(reader.uint64() as Long);
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
    return {
      matched: isSet(object.matched) ? globalThis.Number(object.matched) : 0,
      scanned: isSet(object.scanned) ? globalThis.Number(object.scanned) : 0,
      filtered: isSet(object.filtered) ? globalThis.Number(object.filtered) : 0,
      queryDurationUs: isSet(object.queryDurationUs) ? globalThis.Number(object.queryDurationUs) : 0,
      serializationDurationUs: isSet(object.serializationDurationUs)
        ? globalThis.Number(object.serializationDurationUs)
        : 0,
    };
  },

  toJSON(message: ProfileInfo): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<ProfileInfo>, I>>(base?: I): ProfileInfo {
    return ProfileInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileInfo>, I>>(object: I): ProfileInfo {
    const message = createBaseProfileInfo();
    message.matched = object.matched ?? 0;
    message.scanned = object.scanned ?? 0;
    message.filtered = object.filtered ?? 0;
    message.queryDurationUs = object.queryDurationUs ?? 0;
    message.serializationDurationUs = object.serializationDurationUs ?? 0;
    return message;
  },
};

function createBaseCreateCollectionRequest(): CreateCollectionRequest {
  return { collection: undefined };
}

export const CreateCollectionRequest = {
  encode(message: CreateCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      CollectionInfo.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): CreateCollectionRequest {
    return { collection: isSet(object.collection) ? CollectionInfo.fromJSON(object.collection) : undefined };
  },

  toJSON(message: CreateCollectionRequest): unknown {
    const obj: any = {};
    if (message.collection !== undefined) {
      obj.collection = CollectionInfo.toJSON(message.collection);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCollectionRequest>, I>>(base?: I): CreateCollectionRequest {
    return CreateCollectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCollectionRequest>, I>>(object: I): CreateCollectionRequest {
    const message = createBaseCreateCollectionRequest();
    message.collection = (object.collection !== undefined && object.collection !== null)
      ? CollectionInfo.fromPartial(object.collection)
      : undefined;
    return message;
  },
};

function createBaseCreateCollectionResponse(): CreateCollectionResponse {
  return { status: 0, message: "", profile: undefined };
}

export const CreateCollectionResponse = {
  encode(message: CreateCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): CreateCollectionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: CreateCollectionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCollectionResponse>, I>>(base?: I): CreateCollectionResponse {
    return CreateCollectionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateCollectionResponse>, I>>(object: I): CreateCollectionResponse {
    const message = createBaseCreateCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseDropCollectionRequest(): DropCollectionRequest {
  return { collectionName: "" };
}

export const DropCollectionRequest = {
  encode(message: DropCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): DropCollectionRequest {
    return { collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "" };
  },

  toJSON(message: DropCollectionRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropCollectionRequest>, I>>(base?: I): DropCollectionRequest {
    return DropCollectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropCollectionRequest>, I>>(object: I): DropCollectionRequest {
    const message = createBaseDropCollectionRequest();
    message.collectionName = object.collectionName ?? "";
    return message;
  },
};

function createBaseDropCollectionResponse(): DropCollectionResponse {
  return { status: 0, message: "", profile: undefined };
}

export const DropCollectionResponse = {
  encode(message: DropCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DropCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): DropCollectionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: DropCollectionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropCollectionResponse>, I>>(base?: I): DropCollectionResponse {
    return DropCollectionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropCollectionResponse>, I>>(object: I): DropCollectionResponse {
    const message = createBaseDropCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseRenameCollectionRequest(): RenameCollectionRequest {
  return { oldCollectionName: "", newCollectionName: "" };
}

export const RenameCollectionRequest = {
  encode(message: RenameCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oldCollectionName !== "") {
      writer.uint32(10).string(message.oldCollectionName);
    }
    if (message.newCollectionName !== "") {
      writer.uint32(18).string(message.newCollectionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): RenameCollectionRequest {
    return {
      oldCollectionName: isSet(object.oldCollectionName) ? globalThis.String(object.oldCollectionName) : "",
      newCollectionName: isSet(object.newCollectionName) ? globalThis.String(object.newCollectionName) : "",
    };
  },

  toJSON(message: RenameCollectionRequest): unknown {
    const obj: any = {};
    if (message.oldCollectionName !== "") {
      obj.oldCollectionName = message.oldCollectionName;
    }
    if (message.newCollectionName !== "") {
      obj.newCollectionName = message.newCollectionName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenameCollectionRequest>, I>>(base?: I): RenameCollectionRequest {
    return RenameCollectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenameCollectionRequest>, I>>(object: I): RenameCollectionRequest {
    const message = createBaseRenameCollectionRequest();
    message.oldCollectionName = object.oldCollectionName ?? "";
    message.newCollectionName = object.newCollectionName ?? "";
    return message;
  },
};

function createBaseRenameCollectionResponse(): RenameCollectionResponse {
  return { status: 0, message: "", profile: undefined };
}

export const RenameCollectionResponse = {
  encode(message: RenameCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): RenameCollectionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: RenameCollectionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenameCollectionResponse>, I>>(base?: I): RenameCollectionResponse {
    return RenameCollectionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenameCollectionResponse>, I>>(object: I): RenameCollectionResponse {
    const message = createBaseRenameCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseGetCollectionRequest(): GetCollectionRequest {
  return { collectionName: "" };
}

export const GetCollectionRequest = {
  encode(message: GetCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetCollectionRequest {
    return { collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "" };
  },

  toJSON(message: GetCollectionRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCollectionRequest>, I>>(base?: I): GetCollectionRequest {
    return GetCollectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCollectionRequest>, I>>(object: I): GetCollectionRequest {
    const message = createBaseGetCollectionRequest();
    message.collectionName = object.collectionName ?? "";
    return message;
  },
};

function createBaseGetCollectionResponse(): GetCollectionResponse {
  return { status: 0, message: "", collection: undefined, profile: undefined };
}

export const GetCollectionResponse = {
  encode(message: GetCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.collection !== undefined) {
      CollectionInfo.encode(message.collection, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetCollectionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      collection: isSet(object.collection) ? CollectionInfo.fromJSON(object.collection) : undefined,
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: GetCollectionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collection !== undefined) {
      obj.collection = CollectionInfo.toJSON(message.collection);
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCollectionResponse>, I>>(base?: I): GetCollectionResponse {
    return GetCollectionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCollectionResponse>, I>>(object: I): GetCollectionResponse {
    const message = createBaseGetCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collection = (object.collection !== undefined && object.collection !== null)
      ? CollectionInfo.fromPartial(object.collection)
      : undefined;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseGetCollectionsRequest(): GetCollectionsRequest {
  return { collectionNames: [] };
}

export const GetCollectionsRequest = {
  encode(message: GetCollectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collectionNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetCollectionsRequest {
    return {
      collectionNames: globalThis.Array.isArray(object?.collectionNames)
        ? object.collectionNames.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetCollectionsRequest): unknown {
    const obj: any = {};
    if (message.collectionNames?.length) {
      obj.collectionNames = message.collectionNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCollectionsRequest>, I>>(base?: I): GetCollectionsRequest {
    return GetCollectionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCollectionsRequest>, I>>(object: I): GetCollectionsRequest {
    const message = createBaseGetCollectionsRequest();
    message.collectionNames = object.collectionNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetCollectionsResponse(): GetCollectionsResponse {
  return { status: 0, message: "", collections: [], profile: undefined };
}

export const GetCollectionsResponse = {
  encode(message: GetCollectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.collections) {
      CollectionInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetCollectionsResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      collections: globalThis.Array.isArray(object?.collections)
        ? object.collections.map((e: any) => CollectionInfo.fromJSON(e))
        : [],
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: GetCollectionsResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collections?.length) {
      obj.collections = message.collections.map((e) => CollectionInfo.toJSON(e));
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCollectionsResponse>, I>>(base?: I): GetCollectionsResponse {
    return GetCollectionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCollectionsResponse>, I>>(object: I): GetCollectionsResponse {
    const message = createBaseGetCollectionsResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collections = object.collections?.map((e) => CollectionInfo.fromPartial(e)) || [];
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseCreateIndexRequest(): CreateIndexRequest {
  return { collectionName: "", indexDesc: undefined };
}

export const CreateIndexRequest = {
  encode(message: CreateIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexDesc !== undefined) {
      IndexDescriptor.encode(message.indexDesc, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateIndexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): CreateIndexRequest {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexDesc: isSet(object.indexDesc) ? IndexDescriptor.fromJSON(object.indexDesc) : undefined,
    };
  },

  toJSON(message: CreateIndexRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexDesc !== undefined) {
      obj.indexDesc = IndexDescriptor.toJSON(message.indexDesc);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateIndexRequest>, I>>(base?: I): CreateIndexRequest {
    return CreateIndexRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateIndexRequest>, I>>(object: I): CreateIndexRequest {
    const message = createBaseCreateIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexDesc = (object.indexDesc !== undefined && object.indexDesc !== null)
      ? IndexDescriptor.fromPartial(object.indexDesc)
      : undefined;
    return message;
  },
};

function createBaseCreateIndexResponse(): CreateIndexResponse {
  return { status: 0, message: "", profile: undefined };
}

export const CreateIndexResponse = {
  encode(message: CreateIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateIndexResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): CreateIndexResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: CreateIndexResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateIndexResponse>, I>>(base?: I): CreateIndexResponse {
    return CreateIndexResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateIndexResponse>, I>>(object: I): CreateIndexResponse {
    const message = createBaseCreateIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseDropIndexRequest(): DropIndexRequest {
  return { collectionName: "", indexName: "" };
}

export const DropIndexRequest = {
  encode(message: DropIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): DropIndexRequest {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
    };
  },

  toJSON(message: DropIndexRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropIndexRequest>, I>>(base?: I): DropIndexRequest {
    return DropIndexRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropIndexRequest>, I>>(object: I): DropIndexRequest {
    const message = createBaseDropIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
    return message;
  },
};

function createBaseDropIndexResponse(): DropIndexResponse {
  return { status: 0, message: "", profile: undefined };
}

export const DropIndexResponse = {
  encode(message: DropIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): DropIndexResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: DropIndexResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropIndexResponse>, I>>(base?: I): DropIndexResponse {
    return DropIndexResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropIndexResponse>, I>>(object: I): DropIndexResponse {
    const message = createBaseDropIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseRenameIndexRequest(): RenameIndexRequest {
  return { collectionName: "", oldIndexName: "", newIndexName: "" };
}

export const RenameIndexRequest = {
  encode(message: RenameIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameIndexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): RenameIndexRequest {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      oldIndexName: isSet(object.oldIndexName) ? globalThis.String(object.oldIndexName) : "",
      newIndexName: isSet(object.newIndexName) ? globalThis.String(object.newIndexName) : "",
    };
  },

  toJSON(message: RenameIndexRequest): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<RenameIndexRequest>, I>>(base?: I): RenameIndexRequest {
    return RenameIndexRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenameIndexRequest>, I>>(object: I): RenameIndexRequest {
    const message = createBaseRenameIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.oldIndexName = object.oldIndexName ?? "";
    message.newIndexName = object.newIndexName ?? "";
    return message;
  },
};

function createBaseRenameIndexResponse(): RenameIndexResponse {
  return { status: 0, message: "", profile: undefined };
}

export const RenameIndexResponse = {
  encode(message: RenameIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameIndexResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): RenameIndexResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: RenameIndexResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenameIndexResponse>, I>>(base?: I): RenameIndexResponse {
    return RenameIndexResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenameIndexResponse>, I>>(object: I): RenameIndexResponse {
    const message = createBaseRenameIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseGetIndexRequest(): GetIndexRequest {
  return { collectionName: "", indexName: "" };
}

export const GetIndexRequest = {
  encode(message: GetIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetIndexRequest {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
    };
  },

  toJSON(message: GetIndexRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIndexRequest>, I>>(base?: I): GetIndexRequest {
    return GetIndexRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIndexRequest>, I>>(object: I): GetIndexRequest {
    const message = createBaseGetIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
    return message;
  },
};

function createBaseGetIndexResponse(): GetIndexResponse {
  return {
    status: 0,
    message: "",
    collectionName: "",
    indexDesc: undefined,
    indexStats: undefined,
    profile: undefined,
  };
}

export const GetIndexResponse = {
  encode(message: GetIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.collectionName !== "") {
      writer.uint32(26).string(message.collectionName);
    }
    if (message.indexDesc !== undefined) {
      IndexDescriptor.encode(message.indexDesc, writer.uint32(34).fork()).ldelim();
    }
    if (message.indexStats !== undefined) {
      IndexStats.encode(message.indexStats, writer.uint32(42).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): GetIndexResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexDesc: isSet(object.indexDesc) ? IndexDescriptor.fromJSON(object.indexDesc) : undefined,
      indexStats: isSet(object.indexStats) ? IndexStats.fromJSON(object.indexStats) : undefined,
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: GetIndexResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.indexDesc !== undefined) {
      obj.indexDesc = IndexDescriptor.toJSON(message.indexDesc);
    }
    if (message.indexStats !== undefined) {
      obj.indexStats = IndexStats.toJSON(message.indexStats);
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIndexResponse>, I>>(base?: I): GetIndexResponse {
    return GetIndexResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIndexResponse>, I>>(object: I): GetIndexResponse {
    const message = createBaseGetIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collectionName = object.collectionName ?? "";
    message.indexDesc = (object.indexDesc !== undefined && object.indexDesc !== null)
      ? IndexDescriptor.fromPartial(object.indexDesc)
      : undefined;
    message.indexStats = (object.indexStats !== undefined && object.indexStats !== null)
      ? IndexStats.fromPartial(object.indexStats)
      : undefined;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseQuery(): Query {
  return { collectionName: "", query: undefined };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.query !== undefined) {
      Document.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): Query {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      query: isSet(object.query) ? Document.fromJSON(object.query) : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.query !== undefined) {
      obj.query = Document.toJSON(message.query);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.collectionName = object.collectionName ?? "";
    message.query = (object.query !== undefined && object.query !== null)
      ? Document.fromPartial(object.query)
      : undefined;
    return message;
  },
};

function createBaseFindRequest(): FindRequest {
  return { query: undefined, limit: 0, indexColumns: [], columns: [], dtypes: {} };
}

export const FindRequest = {
  encode(message: FindRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    for (const v of message.indexColumns) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.columns) {
      writer.uint32(34).string(v!);
    }
    Object.entries(message.dtypes).forEach(([key, value]) => {
      FindRequest_DtypesEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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
          if (entry5.value !== undefined) {
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

  fromJSON(object: any): FindRequest {
    return {
      query: isSet(object.query) ? Query.fromJSON(object.query) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      indexColumns: globalThis.Array.isArray(object?.indexColumns)
        ? object.indexColumns.map((e: any) => globalThis.String(e))
        : [],
      columns: globalThis.Array.isArray(object?.columns) ? object.columns.map((e: any) => globalThis.String(e)) : [],
      dtypes: isObject(object.dtypes)
        ? Object.entries(object.dtypes).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FindRequest): unknown {
    const obj: any = {};
    if (message.query !== undefined) {
      obj.query = Query.toJSON(message.query);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.indexColumns?.length) {
      obj.indexColumns = message.indexColumns;
    }
    if (message.columns?.length) {
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

  create<I extends Exact<DeepPartial<FindRequest>, I>>(base?: I): FindRequest {
    return FindRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindRequest>, I>>(object: I): FindRequest {
    const message = createBaseFindRequest();
    message.query = (object.query !== undefined && object.query !== null) ? Query.fromPartial(object.query) : undefined;
    message.limit = object.limit ?? 0;
    message.indexColumns = object.indexColumns?.map((e) => e) || [];
    message.columns = object.columns?.map((e) => e) || [];
    message.dtypes = Object.entries(object.dtypes ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseFindRequest_DtypesEntry(): FindRequest_DtypesEntry {
  return { key: "", value: "" };
}

export const FindRequest_DtypesEntry = {
  encode(message: FindRequest_DtypesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindRequest_DtypesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): FindRequest_DtypesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: FindRequest_DtypesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindRequest_DtypesEntry>, I>>(base?: I): FindRequest_DtypesEntry {
    return FindRequest_DtypesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindRequest_DtypesEntry>, I>>(object: I): FindRequest_DtypesEntry {
    const message = createBaseFindRequest_DtypesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFindResponse(): FindResponse {
  return { numColumns: 0, numRows: 0, buffer: Buffer.alloc(0), profile: undefined };
}

export const FindResponse = {
  encode(message: FindResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numColumns !== 0) {
      writer.uint32(8).int32(message.numColumns);
    }
    if (message.numRows !== 0) {
      writer.uint32(16).int32(message.numRows);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(26).bytes(message.buffer);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

          message.buffer = reader.bytes() as Buffer;
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

  fromJSON(object: any): FindResponse {
    return {
      numColumns: isSet(object.numColumns) ? globalThis.Number(object.numColumns) : 0,
      numRows: isSet(object.numRows) ? globalThis.Number(object.numRows) : 0,
      buffer: isSet(object.buffer) ? Buffer.from(bytesFromBase64(object.buffer)) : Buffer.alloc(0),
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: FindResponse): unknown {
    const obj: any = {};
    if (message.numColumns !== 0) {
      obj.numColumns = Math.round(message.numColumns);
    }
    if (message.numRows !== 0) {
      obj.numRows = Math.round(message.numRows);
    }
    if (message.buffer.length !== 0) {
      obj.buffer = base64FromBytes(message.buffer);
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindResponse>, I>>(base?: I): FindResponse {
    return FindResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindResponse>, I>>(object: I): FindResponse {
    const message = createBaseFindResponse();
    message.numColumns = object.numColumns ?? 0;
    message.numRows = object.numRows ?? 0;
    message.buffer = object.buffer ?? Buffer.alloc(0);
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseFindBatchRequest(): FindBatchRequest {
  return { requests: [] };
}

export const FindBatchRequest = {
  encode(message: FindBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      FindRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindBatchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): FindBatchRequest {
    return {
      requests: globalThis.Array.isArray(object?.requests)
        ? object.requests.map((e: any) => FindRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FindBatchRequest): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => FindRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindBatchRequest>, I>>(base?: I): FindBatchRequest {
    return FindBatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindBatchRequest>, I>>(object: I): FindBatchRequest {
    const message = createBaseFindBatchRequest();
    message.requests = object.requests?.map((e) => FindRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFindBatchResponse(): FindBatchResponse {
  return { responses: [] };
}

export const FindBatchResponse = {
  encode(message: FindBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      FindResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindBatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): FindBatchResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => FindResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FindBatchResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => FindResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindBatchResponse>, I>>(base?: I): FindBatchResponse {
    return FindBatchResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindBatchResponse>, I>>(object: I): FindBatchResponse {
    const message = createBaseFindBatchResponse();
    message.responses = object.responses?.map((e) => FindResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCountRequest(): CountRequest {
  return { query: undefined };
}

export const CountRequest = {
  encode(message: CountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): CountRequest {
    return { query: isSet(object.query) ? Query.fromJSON(object.query) : undefined };
  },

  toJSON(message: CountRequest): unknown {
    const obj: any = {};
    if (message.query !== undefined) {
      obj.query = Query.toJSON(message.query);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CountRequest>, I>>(base?: I): CountRequest {
    return CountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CountRequest>, I>>(object: I): CountRequest {
    const message = createBaseCountRequest();
    message.query = (object.query !== undefined && object.query !== null) ? Query.fromPartial(object.query) : undefined;
    return message;
  },
};

function createBaseCountResponse(): CountResponse {
  return { status: 0, message: "", count: 0, profile: undefined };
}

export const CountResponse = {
  encode(message: CountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.count !== 0) {
      writer.uint32(24).int64(message.count);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

          message.count = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): CountResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: CountResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CountResponse>, I>>(base?: I): CountResponse {
    return CountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CountResponse>, I>>(object: I): CountResponse {
    const message = createBaseCountResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.count = object.count ?? 0;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseContainsRequest(): ContainsRequest {
  return { query: undefined };
}

export const ContainsRequest = {
  encode(message: ContainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== undefined) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): ContainsRequest {
    return { query: isSet(object.query) ? Query.fromJSON(object.query) : undefined };
  },

  toJSON(message: ContainsRequest): unknown {
    const obj: any = {};
    if (message.query !== undefined) {
      obj.query = Query.toJSON(message.query);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainsRequest>, I>>(base?: I): ContainsRequest {
    return ContainsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainsRequest>, I>>(object: I): ContainsRequest {
    const message = createBaseContainsRequest();
    message.query = (object.query !== undefined && object.query !== null) ? Query.fromPartial(object.query) : undefined;
    return message;
  },
};

function createBaseContainsResponse(): ContainsResponse {
  return { status: 0, message: "", found: false, profile: undefined };
}

export const ContainsResponse = {
  encode(message: ContainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.found === true) {
      writer.uint32(24).bool(message.found);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): ContainsResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      found: isSet(object.found) ? globalThis.Boolean(object.found) : false,
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: ContainsResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.found === true) {
      obj.found = message.found;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainsResponse>, I>>(base?: I): ContainsResponse {
    return ContainsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainsResponse>, I>>(object: I): ContainsResponse {
    const message = createBaseContainsResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.found = object.found ?? false;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseInsertRequest(): InsertRequest {
  return { requests: [] };
}

export const InsertRequest = {
  encode(message: InsertRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): InsertRequest {
    return {
      requests: globalThis.Array.isArray(object?.requests) ? object.requests.map((e: any) => Query.fromJSON(e)) : [],
    };
  },

  toJSON(message: InsertRequest): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => Query.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertRequest>, I>>(base?: I): InsertRequest {
    return InsertRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InsertRequest>, I>>(object: I): InsertRequest {
    const message = createBaseInsertRequest();
    message.requests = object.requests?.map((e) => Query.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInsertResponse(): InsertResponse {
  return { status: 0, message: "", profile: undefined };
}

export const InsertResponse = {
  encode(message: InsertResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): InsertResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: InsertResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertResponse>, I>>(base?: I): InsertResponse {
    return InsertResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InsertResponse>, I>>(object: I): InsertResponse {
    const message = createBaseInsertResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseUpdateRequest(): UpdateRequest {
  return { collectionName: "", filter: undefined, updates: undefined };
}

export const UpdateRequest = {
  encode(message: UpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.filter !== undefined) {
      Document.encode(message.filter, writer.uint32(18).fork()).ldelim();
    }
    if (message.updates !== undefined) {
      Document.encode(message.updates, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): UpdateRequest {
    return {
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      filter: isSet(object.filter) ? Document.fromJSON(object.filter) : undefined,
      updates: isSet(object.updates) ? Document.fromJSON(object.updates) : undefined,
    };
  },

  toJSON(message: UpdateRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    if (message.filter !== undefined) {
      obj.filter = Document.toJSON(message.filter);
    }
    if (message.updates !== undefined) {
      obj.updates = Document.toJSON(message.updates);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateRequest>, I>>(base?: I): UpdateRequest {
    return UpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateRequest>, I>>(object: I): UpdateRequest {
    const message = createBaseUpdateRequest();
    message.collectionName = object.collectionName ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? Document.fromPartial(object.filter)
      : undefined;
    message.updates = (object.updates !== undefined && object.updates !== null)
      ? Document.fromPartial(object.updates)
      : undefined;
    return message;
  },
};

function createBaseUpdateResponse(): UpdateResponse {
  return { status: 0, message: "", profile: undefined };
}

export const UpdateResponse = {
  encode(message: UpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): UpdateResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: UpdateResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateResponse>, I>>(base?: I): UpdateResponse {
    return UpdateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateResponse>, I>>(object: I): UpdateResponse {
    const message = createBaseUpdateResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseRemoveRequest(): RemoveRequest {
  return { requests: [] };
}

export const RemoveRequest = {
  encode(message: RemoveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
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

  fromJSON(object: any): RemoveRequest {
    return {
      requests: globalThis.Array.isArray(object?.requests) ? object.requests.map((e: any) => Query.fromJSON(e)) : [],
    };
  },

  toJSON(message: RemoveRequest): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => Query.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveRequest>, I>>(base?: I): RemoveRequest {
    return RemoveRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveRequest>, I>>(object: I): RemoveRequest {
    const message = createBaseRemoveRequest();
    message.requests = object.requests?.map((e) => Query.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRemoveResponse(): RemoveResponse {
  return { status: 0, message: "", profile: undefined };
}

export const RemoveResponse = {
  encode(message: RemoveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): RemoveResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: RemoveResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveResponse>, I>>(base?: I): RemoveResponse {
    return RemoveResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RemoveResponse>, I>>(object: I): RemoveResponse {
    const message = createBaseRemoveResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseExplainRequest(): ExplainRequest {
  return { queries: [] };
}

export const ExplainRequest = {
  encode(message: ExplainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExplainRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): ExplainRequest {
    return {
      queries: globalThis.Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExplainRequest): unknown {
    const obj: any = {};
    if (message.queries?.length) {
      obj.queries = message.queries.map((e) => Query.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExplainRequest>, I>>(base?: I): ExplainRequest {
    return ExplainRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExplainRequest>, I>>(object: I): ExplainRequest {
    const message = createBaseExplainRequest();
    message.queries = object.queries?.map((e) => Query.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPlan(): QueryPlan {
  return { status: 0, message: "", collectionName: "", indexName: "", queryPlan: "" };
}

export const QueryPlan = {
  encode(message: QueryPlan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPlan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): QueryPlan {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "",
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
      queryPlan: isSet(object.queryPlan) ? globalThis.String(object.queryPlan) : "",
    };
  },

  toJSON(message: QueryPlan): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<QueryPlan>, I>>(base?: I): QueryPlan {
    return QueryPlan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPlan>, I>>(object: I): QueryPlan {
    const message = createBaseQueryPlan();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
    message.queryPlan = object.queryPlan ?? "";
    return message;
  },
};

function createBaseExplainResponse(): ExplainResponse {
  return { status: 0, queryPlans: [] };
}

export const ExplainResponse = {
  encode(message: ExplainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.queryPlans) {
      QueryPlan.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExplainResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): ExplainResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      queryPlans: globalThis.Array.isArray(object?.queryPlans)
        ? object.queryPlans.map((e: any) => QueryPlan.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExplainResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.queryPlans?.length) {
      obj.queryPlans = message.queryPlans.map((e) => QueryPlan.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExplainResponse>, I>>(base?: I): ExplainResponse {
    return ExplainResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExplainResponse>, I>>(object: I): ExplainResponse {
    const message = createBaseExplainResponse();
    message.status = object.status ?? 0;
    message.queryPlans = object.queryPlans?.map((e) => QueryPlan.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTruncateCollectionRequest(): TruncateCollectionRequest {
  return { collectionName: "" };
}

export const TruncateCollectionRequest = {
  encode(message: TruncateCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TruncateCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): TruncateCollectionRequest {
    return { collectionName: isSet(object.collectionName) ? globalThis.String(object.collectionName) : "" };
  },

  toJSON(message: TruncateCollectionRequest): unknown {
    const obj: any = {};
    if (message.collectionName !== "") {
      obj.collectionName = message.collectionName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TruncateCollectionRequest>, I>>(base?: I): TruncateCollectionRequest {
    return TruncateCollectionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TruncateCollectionRequest>, I>>(object: I): TruncateCollectionRequest {
    const message = createBaseTruncateCollectionRequest();
    message.collectionName = object.collectionName ?? "";
    return message;
  },
};

function createBaseTruncateCollectionResponse(): TruncateCollectionResponse {
  return { status: 0, message: "", profile: undefined };
}

export const TruncateCollectionResponse = {
  encode(message: TruncateCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TruncateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): TruncateCollectionResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: TruncateCollectionResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TruncateCollectionResponse>, I>>(base?: I): TruncateCollectionResponse {
    return TruncateCollectionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TruncateCollectionResponse>, I>>(object: I): TruncateCollectionResponse {
    const message = createBaseTruncateCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseListCollectionsRequest(): ListCollectionsRequest {
  return {};
}

export const ListCollectionsRequest = {
  encode(_: ListCollectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(_: any): ListCollectionsRequest {
    return {};
  },

  toJSON(_: ListCollectionsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCollectionsRequest>, I>>(base?: I): ListCollectionsRequest {
    return ListCollectionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCollectionsRequest>, I>>(_: I): ListCollectionsRequest {
    const message = createBaseListCollectionsRequest();
    return message;
  },
};

function createBaseListCollectionsResponse(): ListCollectionsResponse {
  return { status: 0, message: "", collectionNames: [], profile: undefined };
}

export const ListCollectionsResponse = {
  encode(message: ListCollectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.collectionNames) {
      writer.uint32(26).string(v!);
    }
    if (message.profile !== undefined) {
      ProfileInfo.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
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

  fromJSON(object: any): ListCollectionsResponse {
    return {
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      collectionNames: globalThis.Array.isArray(object?.collectionNames)
        ? object.collectionNames.map((e: any) => globalThis.String(e))
        : [],
      profile: isSet(object.profile) ? ProfileInfo.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: ListCollectionsResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.collectionNames?.length) {
      obj.collectionNames = message.collectionNames;
    }
    if (message.profile !== undefined) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListCollectionsResponse>, I>>(base?: I): ListCollectionsResponse {
    return ListCollectionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListCollectionsResponse>, I>>(object: I): ListCollectionsResponse {
    const message = createBaseListCollectionsResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collectionNames = object.collectionNames?.map((e) => e) || [];
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? ProfileInfo.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

export type DocumentDBServiceService = typeof DocumentDBServiceService;
export const DocumentDBServiceService = {
  find: {
    path: "/aeca.rpc.db.document.DocumentDBService/find",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindRequest) => Buffer.from(FindRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindRequest.decode(value),
    responseSerialize: (value: FindResponse) => Buffer.from(FindResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FindResponse.decode(value),
  },
  findBatch: {
    path: "/aeca.rpc.db.document.DocumentDBService/find_batch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: FindBatchRequest) => Buffer.from(FindBatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindBatchRequest.decode(value),
    responseSerialize: (value: FindBatchResponse) => Buffer.from(FindBatchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => FindBatchResponse.decode(value),
  },
  count: {
    path: "/aeca.rpc.db.document.DocumentDBService/count",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CountRequest) => Buffer.from(CountRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CountRequest.decode(value),
    responseSerialize: (value: CountResponse) => Buffer.from(CountResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CountResponse.decode(value),
  },
  contains: {
    path: "/aeca.rpc.db.document.DocumentDBService/contains",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ContainsRequest) => Buffer.from(ContainsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ContainsRequest.decode(value),
    responseSerialize: (value: ContainsResponse) => Buffer.from(ContainsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ContainsResponse.decode(value),
  },
  insert: {
    path: "/aeca.rpc.db.document.DocumentDBService/insert",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InsertRequest) => Buffer.from(InsertRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InsertRequest.decode(value),
    responseSerialize: (value: InsertResponse) => Buffer.from(InsertResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InsertResponse.decode(value),
  },
  update: {
    path: "/aeca.rpc.db.document.DocumentDBService/update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateRequest) => Buffer.from(UpdateRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateRequest.decode(value),
    responseSerialize: (value: UpdateResponse) => Buffer.from(UpdateResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateResponse.decode(value),
  },
  remove: {
    path: "/aeca.rpc.db.document.DocumentDBService/remove",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveRequest) => Buffer.from(RemoveRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveRequest.decode(value),
    responseSerialize: (value: RemoveResponse) => Buffer.from(RemoveResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveResponse.decode(value),
  },
  explain: {
    path: "/aeca.rpc.db.document.DocumentDBService/explain",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ExplainRequest) => Buffer.from(ExplainRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExplainRequest.decode(value),
    responseSerialize: (value: ExplainResponse) => Buffer.from(ExplainResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ExplainResponse.decode(value),
  },
  createCollection: {
    path: "/aeca.rpc.db.document.DocumentDBService/create_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateCollectionRequest) => Buffer.from(CreateCollectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateCollectionRequest.decode(value),
    responseSerialize: (value: CreateCollectionResponse) =>
      Buffer.from(CreateCollectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateCollectionResponse.decode(value),
  },
  dropCollection: {
    path: "/aeca.rpc.db.document.DocumentDBService/drop_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DropCollectionRequest) => Buffer.from(DropCollectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DropCollectionRequest.decode(value),
    responseSerialize: (value: DropCollectionResponse) => Buffer.from(DropCollectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DropCollectionResponse.decode(value),
  },
  renameCollection: {
    path: "/aeca.rpc.db.document.DocumentDBService/rename_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RenameCollectionRequest) => Buffer.from(RenameCollectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RenameCollectionRequest.decode(value),
    responseSerialize: (value: RenameCollectionResponse) =>
      Buffer.from(RenameCollectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RenameCollectionResponse.decode(value),
  },
  getCollection: {
    path: "/aeca.rpc.db.document.DocumentDBService/get_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCollectionRequest) => Buffer.from(GetCollectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCollectionRequest.decode(value),
    responseSerialize: (value: GetCollectionResponse) => Buffer.from(GetCollectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetCollectionResponse.decode(value),
  },
  getCollections: {
    path: "/aeca.rpc.db.document.DocumentDBService/get_collections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetCollectionsRequest) => Buffer.from(GetCollectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCollectionsRequest.decode(value),
    responseSerialize: (value: GetCollectionsResponse) => Buffer.from(GetCollectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetCollectionsResponse.decode(value),
  },
  listCollections: {
    path: "/aeca.rpc.db.document.DocumentDBService/list_collections",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListCollectionsRequest) => Buffer.from(ListCollectionsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListCollectionsRequest.decode(value),
    responseSerialize: (value: ListCollectionsResponse) => Buffer.from(ListCollectionsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListCollectionsResponse.decode(value),
  },
  truncateCollection: {
    path: "/aeca.rpc.db.document.DocumentDBService/truncate_collection",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TruncateCollectionRequest) =>
      Buffer.from(TruncateCollectionRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TruncateCollectionRequest.decode(value),
    responseSerialize: (value: TruncateCollectionResponse) =>
      Buffer.from(TruncateCollectionResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TruncateCollectionResponse.decode(value),
  },
  createIndex: {
    path: "/aeca.rpc.db.document.DocumentDBService/create_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateIndexRequest) => Buffer.from(CreateIndexRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateIndexRequest.decode(value),
    responseSerialize: (value: CreateIndexResponse) => Buffer.from(CreateIndexResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateIndexResponse.decode(value),
  },
  dropIndex: {
    path: "/aeca.rpc.db.document.DocumentDBService/drop_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DropIndexRequest) => Buffer.from(DropIndexRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DropIndexRequest.decode(value),
    responseSerialize: (value: DropIndexResponse) => Buffer.from(DropIndexResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DropIndexResponse.decode(value),
  },
  renameIndex: {
    path: "/aeca.rpc.db.document.DocumentDBService/rename_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RenameIndexRequest) => Buffer.from(RenameIndexRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RenameIndexRequest.decode(value),
    responseSerialize: (value: RenameIndexResponse) => Buffer.from(RenameIndexResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RenameIndexResponse.decode(value),
  },
  getIndex: {
    path: "/aeca.rpc.db.document.DocumentDBService/get_index",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetIndexRequest) => Buffer.from(GetIndexRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetIndexRequest.decode(value),
    responseSerialize: (value: GetIndexResponse) => Buffer.from(GetIndexResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetIndexResponse.decode(value),
  },
} as const;

export interface DocumentDBServiceServer extends UntypedServiceImplementation {
  find: handleUnaryCall<FindRequest, FindResponse>;
  findBatch: handleUnaryCall<FindBatchRequest, FindBatchResponse>;
  count: handleUnaryCall<CountRequest, CountResponse>;
  contains: handleUnaryCall<ContainsRequest, ContainsResponse>;
  insert: handleUnaryCall<InsertRequest, InsertResponse>;
  update: handleUnaryCall<UpdateRequest, UpdateResponse>;
  remove: handleUnaryCall<RemoveRequest, RemoveResponse>;
  explain: handleUnaryCall<ExplainRequest, ExplainResponse>;
  createCollection: handleUnaryCall<CreateCollectionRequest, CreateCollectionResponse>;
  dropCollection: handleUnaryCall<DropCollectionRequest, DropCollectionResponse>;
  renameCollection: handleUnaryCall<RenameCollectionRequest, RenameCollectionResponse>;
  getCollection: handleUnaryCall<GetCollectionRequest, GetCollectionResponse>;
  getCollections: handleUnaryCall<GetCollectionsRequest, GetCollectionsResponse>;
  listCollections: handleUnaryCall<ListCollectionsRequest, ListCollectionsResponse>;
  truncateCollection: handleUnaryCall<TruncateCollectionRequest, TruncateCollectionResponse>;
  createIndex: handleUnaryCall<CreateIndexRequest, CreateIndexResponse>;
  dropIndex: handleUnaryCall<DropIndexRequest, DropIndexResponse>;
  renameIndex: handleUnaryCall<RenameIndexRequest, RenameIndexResponse>;
  getIndex: handleUnaryCall<GetIndexRequest, GetIndexResponse>;
}

export interface DocumentDBServiceClient extends Client {
  find(request: FindRequest, callback: (error: ServiceError | null, response: FindResponse) => void): ClientUnaryCall;
  find(
    request: FindRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FindResponse) => void,
  ): ClientUnaryCall;
  find(
    request: FindRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FindResponse) => void,
  ): ClientUnaryCall;
  findBatch(
    request: FindBatchRequest,
    callback: (error: ServiceError | null, response: FindBatchResponse) => void,
  ): ClientUnaryCall;
  findBatch(
    request: FindBatchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: FindBatchResponse) => void,
  ): ClientUnaryCall;
  findBatch(
    request: FindBatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: FindBatchResponse) => void,
  ): ClientUnaryCall;
  count(
    request: CountRequest,
    callback: (error: ServiceError | null, response: CountResponse) => void,
  ): ClientUnaryCall;
  count(
    request: CountRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CountResponse) => void,
  ): ClientUnaryCall;
  count(
    request: CountRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CountResponse) => void,
  ): ClientUnaryCall;
  contains(
    request: ContainsRequest,
    callback: (error: ServiceError | null, response: ContainsResponse) => void,
  ): ClientUnaryCall;
  contains(
    request: ContainsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ContainsResponse) => void,
  ): ClientUnaryCall;
  contains(
    request: ContainsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ContainsResponse) => void,
  ): ClientUnaryCall;
  insert(
    request: InsertRequest,
    callback: (error: ServiceError | null, response: InsertResponse) => void,
  ): ClientUnaryCall;
  insert(
    request: InsertRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InsertResponse) => void,
  ): ClientUnaryCall;
  insert(
    request: InsertRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InsertResponse) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRequest,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
  ): ClientUnaryCall;
  update(
    request: UpdateRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateResponse) => void,
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
  explain(
    request: ExplainRequest,
    callback: (error: ServiceError | null, response: ExplainResponse) => void,
  ): ClientUnaryCall;
  explain(
    request: ExplainRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ExplainResponse) => void,
  ): ClientUnaryCall;
  explain(
    request: ExplainRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ExplainResponse) => void,
  ): ClientUnaryCall;
  createCollection(
    request: CreateCollectionRequest,
    callback: (error: ServiceError | null, response: CreateCollectionResponse) => void,
  ): ClientUnaryCall;
  createCollection(
    request: CreateCollectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateCollectionResponse) => void,
  ): ClientUnaryCall;
  createCollection(
    request: CreateCollectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateCollectionResponse) => void,
  ): ClientUnaryCall;
  dropCollection(
    request: DropCollectionRequest,
    callback: (error: ServiceError | null, response: DropCollectionResponse) => void,
  ): ClientUnaryCall;
  dropCollection(
    request: DropCollectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DropCollectionResponse) => void,
  ): ClientUnaryCall;
  dropCollection(
    request: DropCollectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DropCollectionResponse) => void,
  ): ClientUnaryCall;
  renameCollection(
    request: RenameCollectionRequest,
    callback: (error: ServiceError | null, response: RenameCollectionResponse) => void,
  ): ClientUnaryCall;
  renameCollection(
    request: RenameCollectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RenameCollectionResponse) => void,
  ): ClientUnaryCall;
  renameCollection(
    request: RenameCollectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RenameCollectionResponse) => void,
  ): ClientUnaryCall;
  getCollection(
    request: GetCollectionRequest,
    callback: (error: ServiceError | null, response: GetCollectionResponse) => void,
  ): ClientUnaryCall;
  getCollection(
    request: GetCollectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetCollectionResponse) => void,
  ): ClientUnaryCall;
  getCollection(
    request: GetCollectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetCollectionResponse) => void,
  ): ClientUnaryCall;
  getCollections(
    request: GetCollectionsRequest,
    callback: (error: ServiceError | null, response: GetCollectionsResponse) => void,
  ): ClientUnaryCall;
  getCollections(
    request: GetCollectionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetCollectionsResponse) => void,
  ): ClientUnaryCall;
  getCollections(
    request: GetCollectionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetCollectionsResponse) => void,
  ): ClientUnaryCall;
  listCollections(
    request: ListCollectionsRequest,
    callback: (error: ServiceError | null, response: ListCollectionsResponse) => void,
  ): ClientUnaryCall;
  listCollections(
    request: ListCollectionsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListCollectionsResponse) => void,
  ): ClientUnaryCall;
  listCollections(
    request: ListCollectionsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListCollectionsResponse) => void,
  ): ClientUnaryCall;
  truncateCollection(
    request: TruncateCollectionRequest,
    callback: (error: ServiceError | null, response: TruncateCollectionResponse) => void,
  ): ClientUnaryCall;
  truncateCollection(
    request: TruncateCollectionRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TruncateCollectionResponse) => void,
  ): ClientUnaryCall;
  truncateCollection(
    request: TruncateCollectionRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TruncateCollectionResponse) => void,
  ): ClientUnaryCall;
  createIndex(
    request: CreateIndexRequest,
    callback: (error: ServiceError | null, response: CreateIndexResponse) => void,
  ): ClientUnaryCall;
  createIndex(
    request: CreateIndexRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateIndexResponse) => void,
  ): ClientUnaryCall;
  createIndex(
    request: CreateIndexRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateIndexResponse) => void,
  ): ClientUnaryCall;
  dropIndex(
    request: DropIndexRequest,
    callback: (error: ServiceError | null, response: DropIndexResponse) => void,
  ): ClientUnaryCall;
  dropIndex(
    request: DropIndexRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DropIndexResponse) => void,
  ): ClientUnaryCall;
  dropIndex(
    request: DropIndexRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DropIndexResponse) => void,
  ): ClientUnaryCall;
  renameIndex(
    request: RenameIndexRequest,
    callback: (error: ServiceError | null, response: RenameIndexResponse) => void,
  ): ClientUnaryCall;
  renameIndex(
    request: RenameIndexRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RenameIndexResponse) => void,
  ): ClientUnaryCall;
  renameIndex(
    request: RenameIndexRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RenameIndexResponse) => void,
  ): ClientUnaryCall;
  getIndex(
    request: GetIndexRequest,
    callback: (error: ServiceError | null, response: GetIndexResponse) => void,
  ): ClientUnaryCall;
  getIndex(
    request: GetIndexRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetIndexResponse) => void,
  ): ClientUnaryCall;
  getIndex(
    request: GetIndexRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetIndexResponse) => void,
  ): ClientUnaryCall;
}

export const DocumentDBServiceClient = makeGenericClientConstructor(
  DocumentDBServiceService,
  "aeca.rpc.db.document.DocumentDBService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): DocumentDBServiceClient;
  service: typeof DocumentDBServiceService;
  serviceName: string;
};

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
