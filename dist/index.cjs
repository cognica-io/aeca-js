"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = exports2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = exports2.Propagate = exports2.LogVerbosity = exports2.Status = void 0;
    var Status;
    (function(Status2) {
      Status2[Status2["OK"] = 0] = "OK";
      Status2[Status2["CANCELLED"] = 1] = "CANCELLED";
      Status2[Status2["UNKNOWN"] = 2] = "UNKNOWN";
      Status2[Status2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
      Status2[Status2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
      Status2[Status2["NOT_FOUND"] = 5] = "NOT_FOUND";
      Status2[Status2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
      Status2[Status2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
      Status2[Status2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
      Status2[Status2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
      Status2[Status2["ABORTED"] = 10] = "ABORTED";
      Status2[Status2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
      Status2[Status2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
      Status2[Status2["INTERNAL"] = 13] = "INTERNAL";
      Status2[Status2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
      Status2[Status2["DATA_LOSS"] = 15] = "DATA_LOSS";
      Status2[Status2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
    })(Status || (exports2.Status = Status = {}));
    var LogVerbosity;
    (function(LogVerbosity2) {
      LogVerbosity2[LogVerbosity2["DEBUG"] = 0] = "DEBUG";
      LogVerbosity2[LogVerbosity2["INFO"] = 1] = "INFO";
      LogVerbosity2[LogVerbosity2["ERROR"] = 2] = "ERROR";
      LogVerbosity2[LogVerbosity2["NONE"] = 3] = "NONE";
    })(LogVerbosity || (exports2.LogVerbosity = LogVerbosity = {}));
    var Propagate;
    (function(Propagate2) {
      Propagate2[Propagate2["DEADLINE"] = 1] = "DEADLINE";
      Propagate2[Propagate2["CENSUS_STATS_CONTEXT"] = 2] = "CENSUS_STATS_CONTEXT";
      Propagate2[Propagate2["CENSUS_TRACING_CONTEXT"] = 4] = "CENSUS_TRACING_CONTEXT";
      Propagate2[Propagate2["CANCELLATION"] = 8] = "CANCELLATION";
      Propagate2[Propagate2["DEFAULTS"] = 65535] = "DEFAULTS";
    })(Propagate || (exports2.Propagate = Propagate = {}));
    exports2.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
    exports2.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4 * 1024 * 1024;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/package.json"(exports2, module2) {
    module2.exports = {
      name: "@grpc/grpc-js",
      version: "1.10.1",
      description: "gRPC Library for Node - pure JS implementation",
      homepage: "https://grpc.io/",
      repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js",
      main: "build/src/index.js",
      engines: {
        node: "^8.13.0 || >=10.10.0"
      },
      keywords: [],
      author: {
        name: "Google Inc."
      },
      types: "build/src/index.d.ts",
      license: "Apache-2.0",
      devDependencies: {
        "@types/gulp": "^4.0.6",
        "@types/gulp-mocha": "0.0.32",
        "@types/lodash": "^4.14.186",
        "@types/mocha": "^5.2.6",
        "@types/ncp": "^2.0.1",
        "@types/pify": "^3.0.2",
        "@types/semver": "^7.3.9",
        "@typescript-eslint/eslint-plugin": "^5.59.11",
        "@typescript-eslint/parser": "^5.59.11",
        "@typescript-eslint/typescript-estree": "^5.59.11",
        "clang-format": "^1.0.55",
        eslint: "^8.42.0",
        "eslint-config-prettier": "^8.8.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^4.2.1",
        execa: "^2.0.3",
        gulp: "^4.0.2",
        "gulp-mocha": "^6.0.0",
        lodash: "^4.17.4",
        madge: "^5.0.1",
        "mocha-jenkins-reporter": "^0.4.1",
        ncp: "^2.0.0",
        pify: "^4.0.1",
        prettier: "^2.8.8",
        rimraf: "^3.0.2",
        semver: "^7.3.5",
        "ts-node": "^10.9.1",
        typescript: "^5.1.3"
      },
      contributors: [
        {
          name: "Google Inc."
        }
      ],
      scripts: {
        build: "npm run compile",
        clean: "rimraf ./build",
        compile: "tsc -p .",
        format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
        lint: "eslint src/*.ts test/*.ts",
        prepare: "npm run generate-types && npm run compile",
        test: "gulp test",
        check: "npm run lint",
        fix: "eslint --fix src/*.ts test/*.ts",
        pretest: "npm run generate-types && npm run generate-test-types && npm run compile",
        posttest: "npm run check && madge -c ./build/src",
        "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs test/fixtures/ -O src/generated/ --grpcLib ../index channelz.proto",
        "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto"
      },
      dependencies: {
        "@grpc/proto-loader": "^0.7.8",
        "@types/node": ">=12.12.47"
      },
      files: [
        "src/**/*.ts",
        "build/src/**/*.{js,d.ts,js.map}",
        "proto/*.proto",
        "LICENSE",
        "deps/envoy-api/envoy/api/v2/**/*.proto",
        "deps/envoy-api/envoy/config/**/*.proto",
        "deps/envoy-api/envoy/service/**/*.proto",
        "deps/envoy-api/envoy/type/**/*.proto",
        "deps/udpa/udpa/**/*.proto",
        "deps/googleapis/google/api/*.proto",
        "deps/googleapis/google/rpc/*.proto",
        "deps/protoc-gen-validate/validate/**/*.proto"
      ]
    };
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/logging.js
var require_logging = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/logging.js"(exports2) {
    "use strict";
    var _a;
    var _b;
    var _c;
    var _d;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isTracerEnabled = exports2.trace = exports2.log = exports2.setLoggerVerbosity = exports2.setLogger = exports2.getLogger = void 0;
    var constants_1 = require_constants();
    var process_1 = require("process");
    var clientVersion = require_package().version;
    var DEFAULT_LOGGER = {
      error: (message, ...optionalParams) => {
        console.error("E " + message, ...optionalParams);
      },
      info: (message, ...optionalParams) => {
        console.error("I " + message, ...optionalParams);
      },
      debug: (message, ...optionalParams) => {
        console.error("D " + message, ...optionalParams);
      }
    };
    var _logger = DEFAULT_LOGGER;
    var _logVerbosity = constants_1.LogVerbosity.ERROR;
    var verbosityString = (_b = (_a = process.env.GRPC_NODE_VERBOSITY) !== null && _a !== void 0 ? _a : process.env.GRPC_VERBOSITY) !== null && _b !== void 0 ? _b : "";
    switch (verbosityString.toUpperCase()) {
      case "DEBUG":
        _logVerbosity = constants_1.LogVerbosity.DEBUG;
        break;
      case "INFO":
        _logVerbosity = constants_1.LogVerbosity.INFO;
        break;
      case "ERROR":
        _logVerbosity = constants_1.LogVerbosity.ERROR;
        break;
      case "NONE":
        _logVerbosity = constants_1.LogVerbosity.NONE;
        break;
      default:
    }
    var getLogger = () => {
      return _logger;
    };
    exports2.getLogger = getLogger;
    var setLogger = (logger) => {
      _logger = logger;
    };
    exports2.setLogger = setLogger;
    var setLoggerVerbosity = (verbosity) => {
      _logVerbosity = verbosity;
    };
    exports2.setLoggerVerbosity = setLoggerVerbosity;
    var log = (severity, ...args) => {
      let logFunction;
      if (severity >= _logVerbosity) {
        switch (severity) {
          case constants_1.LogVerbosity.DEBUG:
            logFunction = _logger.debug;
            break;
          case constants_1.LogVerbosity.INFO:
            logFunction = _logger.info;
            break;
          case constants_1.LogVerbosity.ERROR:
            logFunction = _logger.error;
            break;
        }
        if (!logFunction) {
          logFunction = _logger.error;
        }
        if (logFunction) {
          logFunction.bind(_logger)(...args);
        }
      }
    };
    exports2.log = log;
    var tracersString = (_d = (_c = process.env.GRPC_NODE_TRACE) !== null && _c !== void 0 ? _c : process.env.GRPC_TRACE) !== null && _d !== void 0 ? _d : "";
    var enabledTracers = /* @__PURE__ */ new Set();
    var disabledTracers = /* @__PURE__ */ new Set();
    for (const tracerName of tracersString.split(",")) {
      if (tracerName.startsWith("-")) {
        disabledTracers.add(tracerName.substring(1));
      } else {
        enabledTracers.add(tracerName);
      }
    }
    var allEnabled = enabledTracers.has("all");
    function trace(severity, tracer, text) {
      if (isTracerEnabled(tracer)) {
        (0, exports2.log)(severity, (/* @__PURE__ */ new Date()).toISOString() + " | v" + clientVersion + " " + process_1.pid + " | " + tracer + " | " + text);
      }
    }
    exports2.trace = trace;
    function isTracerEnabled(tracer) {
      return !disabledTracers.has(tracer) && (allEnabled || enabledTracers.has(tracer));
    }
    exports2.isTracerEnabled = isTracerEnabled;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getErrorCode = exports2.getErrorMessage = void 0;
    function getErrorMessage(error) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return String(error);
      }
    }
    exports2.getErrorMessage = getErrorMessage;
    function getErrorCode(error) {
      if (typeof error === "object" && error !== null && "code" in error && typeof error.code === "number") {
        return error.code;
      } else {
        return null;
      }
    }
    exports2.getErrorCode = getErrorCode;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/metadata.js
var require_metadata = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/metadata.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Metadata = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    var error_1 = require_error();
    var LEGAL_KEY_REGEX = /^[0-9a-z_.-]+$/;
    var LEGAL_NON_BINARY_VALUE_REGEX = /^[ -~]*$/;
    function isLegalKey(key) {
      return LEGAL_KEY_REGEX.test(key);
    }
    function isLegalNonBinaryValue(value) {
      return LEGAL_NON_BINARY_VALUE_REGEX.test(value);
    }
    function isBinaryKey(key) {
      return key.endsWith("-bin");
    }
    function isCustomMetadata(key) {
      return !key.startsWith("grpc-");
    }
    function normalizeKey(key) {
      return key.toLowerCase();
    }
    function validate(key, value) {
      if (!isLegalKey(key)) {
        throw new Error('Metadata key "' + key + '" contains illegal characters');
      }
      if (value !== null && value !== void 0) {
        if (isBinaryKey(key)) {
          if (!Buffer.isBuffer(value)) {
            throw new Error("keys that end with '-bin' must have Buffer values");
          }
        } else {
          if (Buffer.isBuffer(value)) {
            throw new Error("keys that don't end with '-bin' must have String values");
          }
          if (!isLegalNonBinaryValue(value)) {
            throw new Error('Metadata string value "' + value + '" contains illegal characters');
          }
        }
      }
    }
    var Metadata4 = class _Metadata {
      constructor(options = {}) {
        this.internalRepr = /* @__PURE__ */ new Map();
        this.options = options;
      }
      /**
       * Sets the given value for the given key by replacing any other values
       * associated with that key. Normalizes the key.
       * @param key The key to whose value should be set.
       * @param value The value to set. Must be a buffer if and only
       *   if the normalized key ends with '-bin'.
       */
      set(key, value) {
        key = normalizeKey(key);
        validate(key, value);
        this.internalRepr.set(key, [value]);
      }
      /**
       * Adds the given value for the given key by appending to a list of previous
       * values associated with that key. Normalizes the key.
       * @param key The key for which a new value should be appended.
       * @param value The value to add. Must be a buffer if and only
       *   if the normalized key ends with '-bin'.
       */
      add(key, value) {
        key = normalizeKey(key);
        validate(key, value);
        const existingValue = this.internalRepr.get(key);
        if (existingValue === void 0) {
          this.internalRepr.set(key, [value]);
        } else {
          existingValue.push(value);
        }
      }
      /**
       * Removes the given key and any associated values. Normalizes the key.
       * @param key The key whose values should be removed.
       */
      remove(key) {
        key = normalizeKey(key);
        this.internalRepr.delete(key);
      }
      /**
       * Gets a list of all values associated with the key. Normalizes the key.
       * @param key The key whose value should be retrieved.
       * @return A list of values associated with the given key.
       */
      get(key) {
        key = normalizeKey(key);
        return this.internalRepr.get(key) || [];
      }
      /**
       * Gets a plain object mapping each key to the first value associated with it.
       * This reflects the most common way that people will want to see metadata.
       * @return A key/value mapping of the metadata.
       */
      getMap() {
        const result = {};
        for (const [key, values] of this.internalRepr) {
          if (values.length > 0) {
            const v = values[0];
            result[key] = Buffer.isBuffer(v) ? Buffer.from(v) : v;
          }
        }
        return result;
      }
      /**
       * Clones the metadata object.
       * @return The newly cloned object.
       */
      clone() {
        const newMetadata = new _Metadata(this.options);
        const newInternalRepr = newMetadata.internalRepr;
        for (const [key, value] of this.internalRepr) {
          const clonedValue = value.map((v) => {
            if (Buffer.isBuffer(v)) {
              return Buffer.from(v);
            } else {
              return v;
            }
          });
          newInternalRepr.set(key, clonedValue);
        }
        return newMetadata;
      }
      /**
       * Merges all key-value pairs from a given Metadata object into this one.
       * If both this object and the given object have values in the same key,
       * values from the other Metadata object will be appended to this object's
       * values.
       * @param other A Metadata object.
       */
      merge(other) {
        for (const [key, values] of other.internalRepr) {
          const mergedValue = (this.internalRepr.get(key) || []).concat(values);
          this.internalRepr.set(key, mergedValue);
        }
      }
      setOptions(options) {
        this.options = options;
      }
      getOptions() {
        return this.options;
      }
      /**
       * Creates an OutgoingHttpHeaders object that can be used with the http2 API.
       */
      toHttp2Headers() {
        const result = {};
        for (const [key, values] of this.internalRepr) {
          result[key] = values.map(bufToString);
        }
        return result;
      }
      /**
       * This modifies the behavior of JSON.stringify to show an object
       * representation of the metadata map.
       */
      toJSON() {
        const result = {};
        for (const [key, values] of this.internalRepr) {
          result[key] = values;
        }
        return result;
      }
      /**
       * Returns a new Metadata object based fields in a given IncomingHttpHeaders
       * object.
       * @param headers An IncomingHttpHeaders object.
       */
      static fromHttp2Headers(headers) {
        const result = new _Metadata();
        for (const key of Object.keys(headers)) {
          if (key.charAt(0) === ":") {
            continue;
          }
          const values = headers[key];
          try {
            if (isBinaryKey(key)) {
              if (Array.isArray(values)) {
                values.forEach((value) => {
                  result.add(key, Buffer.from(value, "base64"));
                });
              } else if (values !== void 0) {
                if (isCustomMetadata(key)) {
                  values.split(",").forEach((v) => {
                    result.add(key, Buffer.from(v.trim(), "base64"));
                  });
                } else {
                  result.add(key, Buffer.from(values, "base64"));
                }
              }
            } else {
              if (Array.isArray(values)) {
                values.forEach((value) => {
                  result.add(key, value);
                });
              } else if (values !== void 0) {
                result.add(key, values);
              }
            }
          } catch (error) {
            const message = `Failed to add metadata entry ${key}: ${values}. ${(0, error_1.getErrorMessage)(error)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
            (0, logging_1.log)(constants_1.LogVerbosity.ERROR, message);
          }
        }
        return result;
      }
    };
    exports2.Metadata = Metadata4;
    var bufToString = (val) => {
      return Buffer.isBuffer(val) ? val.toString("base64") : val;
    };
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call-credentials.js
var require_call_credentials = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallCredentials = void 0;
    var metadata_1 = require_metadata();
    function isCurrentOauth2Client(client) {
      return "getRequestHeaders" in client && typeof client.getRequestHeaders === "function";
    }
    var CallCredentials = class _CallCredentials {
      /**
       * Creates a new CallCredentials object from a given function that generates
       * Metadata objects.
       * @param metadataGenerator A function that accepts a set of options, and
       * generates a Metadata object based on these options, which is passed back
       * to the caller via a supplied (err, metadata) callback.
       */
      static createFromMetadataGenerator(metadataGenerator) {
        return new SingleCallCredentials(metadataGenerator);
      }
      /**
       * Create a gRPC credential from a Google credential object.
       * @param googleCredentials The authentication client to use.
       * @return The resulting CallCredentials object.
       */
      static createFromGoogleCredential(googleCredentials) {
        return _CallCredentials.createFromMetadataGenerator((options, callback) => {
          let getHeaders;
          if (isCurrentOauth2Client(googleCredentials)) {
            getHeaders = googleCredentials.getRequestHeaders(options.service_url);
          } else {
            getHeaders = new Promise((resolve, reject) => {
              googleCredentials.getRequestMetadata(options.service_url, (err, headers) => {
                if (err) {
                  reject(err);
                  return;
                }
                if (!headers) {
                  reject(new Error("Headers not set by metadata plugin"));
                  return;
                }
                resolve(headers);
              });
            });
          }
          getHeaders.then((headers) => {
            const metadata = new metadata_1.Metadata();
            for (const key of Object.keys(headers)) {
              metadata.add(key, headers[key]);
            }
            callback(null, metadata);
          }, (err) => {
            callback(err);
          });
        });
      }
      static createEmpty() {
        return new EmptyCallCredentials();
      }
    };
    exports2.CallCredentials = CallCredentials;
    var ComposedCallCredentials = class _ComposedCallCredentials extends CallCredentials {
      constructor(creds) {
        super();
        this.creds = creds;
      }
      async generateMetadata(options) {
        const base = new metadata_1.Metadata();
        const generated = await Promise.all(this.creds.map((cred) => cred.generateMetadata(options)));
        for (const gen of generated) {
          base.merge(gen);
        }
        return base;
      }
      compose(other) {
        return new _ComposedCallCredentials(this.creds.concat([other]));
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof _ComposedCallCredentials) {
          return this.creds.every((value, index) => value._equals(other.creds[index]));
        } else {
          return false;
        }
      }
    };
    var SingleCallCredentials = class _SingleCallCredentials extends CallCredentials {
      constructor(metadataGenerator) {
        super();
        this.metadataGenerator = metadataGenerator;
      }
      generateMetadata(options) {
        return new Promise((resolve, reject) => {
          this.metadataGenerator(options, (err, metadata) => {
            if (metadata !== void 0) {
              resolve(metadata);
            } else {
              reject(err);
            }
          });
        });
      }
      compose(other) {
        return new ComposedCallCredentials([this, other]);
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof _SingleCallCredentials) {
          return this.metadataGenerator === other.metadataGenerator;
        } else {
          return false;
        }
      }
    };
    var EmptyCallCredentials = class _EmptyCallCredentials extends CallCredentials {
      generateMetadata(options) {
        return Promise.resolve(new metadata_1.Metadata());
      }
      compose(other) {
        return other;
      }
      _equals(other) {
        return other instanceof _EmptyCallCredentials;
      }
    };
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/tls-helpers.js
var require_tls_helpers = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/tls-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getDefaultRootsData = exports2.CIPHER_SUITES = void 0;
    var fs = require("fs");
    exports2.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
    var DEFAULT_ROOTS_FILE_PATH = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH;
    var defaultRootsData = null;
    function getDefaultRootsData() {
      if (DEFAULT_ROOTS_FILE_PATH) {
        if (defaultRootsData === null) {
          defaultRootsData = fs.readFileSync(DEFAULT_ROOTS_FILE_PATH);
        }
        return defaultRootsData;
      }
      return null;
    }
    exports2.getDefaultRootsData = getDefaultRootsData;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channel-credentials.js
var require_channel_credentials = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channel-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelCredentials = void 0;
    var tls_1 = require("tls");
    var call_credentials_1 = require_call_credentials();
    var tls_helpers_1 = require_tls_helpers();
    function verifyIsBufferOrNull(obj, friendlyName) {
      if (obj && !(obj instanceof Buffer)) {
        throw new TypeError(`${friendlyName}, if provided, must be a Buffer.`);
      }
    }
    var ChannelCredentials3 = class {
      constructor(callCredentials) {
        this.callCredentials = callCredentials || call_credentials_1.CallCredentials.createEmpty();
      }
      /**
       * Gets the set of per-call credentials associated with this instance.
       */
      _getCallCredentials() {
        return this.callCredentials;
      }
      /**
       * Return a new ChannelCredentials instance with a given set of credentials.
       * The resulting instance can be used to construct a Channel that communicates
       * over TLS.
       * @param rootCerts The root certificate data.
       * @param privateKey The client certificate private key, if available.
       * @param certChain The client certificate key chain, if available.
       * @param verifyOptions Additional options to modify certificate verification
       */
      static createSsl(rootCerts, privateKey, certChain, verifyOptions) {
        var _a;
        verifyIsBufferOrNull(rootCerts, "Root certificate");
        verifyIsBufferOrNull(privateKey, "Private key");
        verifyIsBufferOrNull(certChain, "Certificate chain");
        if (privateKey && !certChain) {
          throw new Error("Private key must be given with accompanying certificate chain");
        }
        if (!privateKey && certChain) {
          throw new Error("Certificate chain must be given with accompanying private key");
        }
        const secureContext = (0, tls_1.createSecureContext)({
          ca: (_a = rootCerts !== null && rootCerts !== void 0 ? rootCerts : (0, tls_helpers_1.getDefaultRootsData)()) !== null && _a !== void 0 ? _a : void 0,
          key: privateKey !== null && privateKey !== void 0 ? privateKey : void 0,
          cert: certChain !== null && certChain !== void 0 ? certChain : void 0,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
        return new SecureChannelCredentialsImpl(secureContext, verifyOptions !== null && verifyOptions !== void 0 ? verifyOptions : {});
      }
      /**
       * Return a new ChannelCredentials instance with credentials created using
       * the provided secureContext. The resulting instances can be used to
       * construct a Channel that communicates over TLS. gRPC will not override
       * anything in the provided secureContext, so the environment variables
       * GRPC_SSL_CIPHER_SUITES and GRPC_DEFAULT_SSL_ROOTS_FILE_PATH will
       * not be applied.
       * @param secureContext The return value of tls.createSecureContext()
       * @param verifyOptions Additional options to modify certificate verification
       */
      static createFromSecureContext(secureContext, verifyOptions) {
        return new SecureChannelCredentialsImpl(secureContext, verifyOptions !== null && verifyOptions !== void 0 ? verifyOptions : {});
      }
      /**
       * Return a new ChannelCredentials instance with no credentials.
       */
      static createInsecure() {
        return new InsecureChannelCredentialsImpl();
      }
    };
    exports2.ChannelCredentials = ChannelCredentials3;
    var InsecureChannelCredentialsImpl = class _InsecureChannelCredentialsImpl extends ChannelCredentials3 {
      constructor() {
        super();
      }
      compose(callCredentials) {
        throw new Error("Cannot compose insecure credentials");
      }
      _getConnectionOptions() {
        return null;
      }
      _isSecure() {
        return false;
      }
      _equals(other) {
        return other instanceof _InsecureChannelCredentialsImpl;
      }
    };
    var SecureChannelCredentialsImpl = class _SecureChannelCredentialsImpl extends ChannelCredentials3 {
      constructor(secureContext, verifyOptions) {
        super();
        this.secureContext = secureContext;
        this.verifyOptions = verifyOptions;
        this.connectionOptions = {
          secureContext
        };
        if (verifyOptions === null || verifyOptions === void 0 ? void 0 : verifyOptions.checkServerIdentity) {
          this.connectionOptions.checkServerIdentity = verifyOptions.checkServerIdentity;
        }
      }
      compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new ComposedChannelCredentialsImpl(this, combinedCallCredentials);
      }
      _getConnectionOptions() {
        return Object.assign({}, this.connectionOptions);
      }
      _isSecure() {
        return true;
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof _SecureChannelCredentialsImpl) {
          return this.secureContext === other.secureContext && this.verifyOptions.checkServerIdentity === other.verifyOptions.checkServerIdentity;
        } else {
          return false;
        }
      }
    };
    var ComposedChannelCredentialsImpl = class _ComposedChannelCredentialsImpl extends ChannelCredentials3 {
      constructor(channelCredentials, callCreds) {
        super(callCreds);
        this.channelCredentials = channelCredentials;
      }
      compose(callCredentials) {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new _ComposedChannelCredentialsImpl(this.channelCredentials, combinedCallCredentials);
      }
      _getConnectionOptions() {
        return this.channelCredentials._getConnectionOptions();
      }
      _isSecure() {
        return true;
      }
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (other instanceof _ComposedChannelCredentialsImpl) {
          return this.channelCredentials._equals(other.channelCredentials) && this.callCredentials._equals(other.callCredentials);
        } else {
          return false;
        }
      }
    };
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer.js
var require_load_balancer = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.selectLbConfigFromList = exports2.getDefaultConfig = exports2.parseLoadBalancingConfig = exports2.isLoadBalancerNameRegistered = exports2.createLoadBalancer = exports2.registerDefaultLoadBalancerType = exports2.registerLoadBalancerType = exports2.createChildChannelControlHelper = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    function createChildChannelControlHelper(parent, overrides) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      return {
        createSubchannel: (_b = (_a = overrides.createSubchannel) === null || _a === void 0 ? void 0 : _a.bind(overrides)) !== null && _b !== void 0 ? _b : parent.createSubchannel.bind(parent),
        updateState: (_d = (_c = overrides.updateState) === null || _c === void 0 ? void 0 : _c.bind(overrides)) !== null && _d !== void 0 ? _d : parent.updateState.bind(parent),
        requestReresolution: (_f = (_e = overrides.requestReresolution) === null || _e === void 0 ? void 0 : _e.bind(overrides)) !== null && _f !== void 0 ? _f : parent.requestReresolution.bind(parent),
        addChannelzChild: (_h = (_g = overrides.addChannelzChild) === null || _g === void 0 ? void 0 : _g.bind(overrides)) !== null && _h !== void 0 ? _h : parent.addChannelzChild.bind(parent),
        removeChannelzChild: (_k = (_j = overrides.removeChannelzChild) === null || _j === void 0 ? void 0 : _j.bind(overrides)) !== null && _k !== void 0 ? _k : parent.removeChannelzChild.bind(parent)
      };
    }
    exports2.createChildChannelControlHelper = createChildChannelControlHelper;
    var registeredLoadBalancerTypes = {};
    var defaultLoadBalancerType = null;
    function registerLoadBalancerType(typeName, loadBalancerType, loadBalancingConfigType) {
      registeredLoadBalancerTypes[typeName] = {
        LoadBalancer: loadBalancerType,
        LoadBalancingConfig: loadBalancingConfigType
      };
    }
    exports2.registerLoadBalancerType = registerLoadBalancerType;
    function registerDefaultLoadBalancerType(typeName) {
      defaultLoadBalancerType = typeName;
    }
    exports2.registerDefaultLoadBalancerType = registerDefaultLoadBalancerType;
    function createLoadBalancer(config, channelControlHelper, options) {
      const typeName = config.getLoadBalancerName();
      if (typeName in registeredLoadBalancerTypes) {
        return new registeredLoadBalancerTypes[typeName].LoadBalancer(channelControlHelper, options);
      } else {
        return null;
      }
    }
    exports2.createLoadBalancer = createLoadBalancer;
    function isLoadBalancerNameRegistered(typeName) {
      return typeName in registeredLoadBalancerTypes;
    }
    exports2.isLoadBalancerNameRegistered = isLoadBalancerNameRegistered;
    function parseLoadBalancingConfig(rawConfig) {
      const keys = Object.keys(rawConfig);
      if (keys.length !== 1) {
        throw new Error("Provided load balancing config has multiple conflicting entries");
      }
      const typeName = keys[0];
      if (typeName in registeredLoadBalancerTypes) {
        try {
          return registeredLoadBalancerTypes[typeName].LoadBalancingConfig.createFromJson(rawConfig[typeName]);
        } catch (e) {
          throw new Error(`${typeName}: ${e.message}`);
        }
      } else {
        throw new Error(`Unrecognized load balancing config name ${typeName}`);
      }
    }
    exports2.parseLoadBalancingConfig = parseLoadBalancingConfig;
    function getDefaultConfig() {
      if (!defaultLoadBalancerType) {
        throw new Error("No default load balancer type registered");
      }
      return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig();
    }
    exports2.getDefaultConfig = getDefaultConfig;
    function selectLbConfigFromList(configs, fallbackTodefault = false) {
      for (const config of configs) {
        try {
          return parseLoadBalancingConfig(config);
        } catch (e) {
          (0, logging_1.log)(constants_1.LogVerbosity.DEBUG, "Config parsing failed with error", e.message);
          continue;
        }
      }
      if (fallbackTodefault) {
        if (defaultLoadBalancerType) {
          return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig();
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    exports2.selectLbConfigFromList = selectLbConfigFromList;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/service-config.js
var require_service_config = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/service-config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extractAndSelectServiceConfig = exports2.validateServiceConfig = exports2.validateRetryThrottling = void 0;
    var os = require("os");
    var constants_1 = require_constants();
    var DURATION_REGEX = /^\d+(\.\d{1,9})?s$/;
    var CLIENT_LANGUAGE_STRING = "node";
    function validateName(obj) {
      if ("service" in obj && obj.service !== "") {
        if (typeof obj.service !== "string") {
          throw new Error(`Invalid method config name: invalid service: expected type string, got ${typeof obj.service}`);
        }
        if ("method" in obj && obj.method !== "") {
          if (typeof obj.method !== "string") {
            throw new Error(`Invalid method config name: invalid method: expected type string, got ${typeof obj.service}`);
          }
          return {
            service: obj.service,
            method: obj.method
          };
        } else {
          return {
            service: obj.service
          };
        }
      } else {
        if ("method" in obj && obj.method !== void 0) {
          throw new Error(`Invalid method config name: method set with empty or unset service`);
        }
        return {};
      }
    }
    function validateRetryPolicy(obj) {
      if (!("maxAttempts" in obj) || !Number.isInteger(obj.maxAttempts) || obj.maxAttempts < 2) {
        throw new Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
      }
      if (!("initialBackoff" in obj) || typeof obj.initialBackoff !== "string" || !DURATION_REGEX.test(obj.initialBackoff)) {
        throw new Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer followed by s");
      }
      if (!("maxBackoff" in obj) || typeof obj.maxBackoff !== "string" || !DURATION_REGEX.test(obj.maxBackoff)) {
        throw new Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer followed by s");
      }
      if (!("backoffMultiplier" in obj) || typeof obj.backoffMultiplier !== "number" || obj.backoffMultiplier <= 0) {
        throw new Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
      }
      if (!("retryableStatusCodes" in obj && Array.isArray(obj.retryableStatusCodes))) {
        throw new Error("Invalid method config retry policy: retryableStatusCodes is required");
      }
      if (obj.retryableStatusCodes.length === 0) {
        throw new Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
      }
      for (const value of obj.retryableStatusCodes) {
        if (typeof value === "number") {
          if (!Object.values(constants_1.Status).includes(value)) {
            throw new Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
          }
        } else if (typeof value === "string") {
          if (!Object.values(constants_1.Status).includes(value.toUpperCase())) {
            throw new Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
          }
        } else {
          throw new Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
        }
      }
      return {
        maxAttempts: obj.maxAttempts,
        initialBackoff: obj.initialBackoff,
        maxBackoff: obj.maxBackoff,
        backoffMultiplier: obj.backoffMultiplier,
        retryableStatusCodes: obj.retryableStatusCodes
      };
    }
    function validateHedgingPolicy(obj) {
      if (!("maxAttempts" in obj) || !Number.isInteger(obj.maxAttempts) || obj.maxAttempts < 2) {
        throw new Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
      }
      if ("hedgingDelay" in obj && (typeof obj.hedgingDelay !== "string" || !DURATION_REGEX.test(obj.hedgingDelay))) {
        throw new Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
      }
      if ("nonFatalStatusCodes" in obj && Array.isArray(obj.nonFatalStatusCodes)) {
        for (const value of obj.nonFatalStatusCodes) {
          if (typeof value === "number") {
            if (!Object.values(constants_1.Status).includes(value)) {
              throw new Error("Invlid method config hedging policy: nonFatalStatusCodes value not in status code range");
            }
          } else if (typeof value === "string") {
            if (!Object.values(constants_1.Status).includes(value.toUpperCase())) {
              throw new Error("Invlid method config hedging policy: nonFatalStatusCodes value not a status code name");
            }
          } else {
            throw new Error("Invlid method config hedging policy: nonFatalStatusCodes value must be a string or number");
          }
        }
      }
      const result = {
        maxAttempts: obj.maxAttempts
      };
      if (obj.hedgingDelay) {
        result.hedgingDelay = obj.hedgingDelay;
      }
      if (obj.nonFatalStatusCodes) {
        result.nonFatalStatusCodes = obj.nonFatalStatusCodes;
      }
      return result;
    }
    function validateMethodConfig(obj) {
      var _a;
      const result = {
        name: []
      };
      if (!("name" in obj) || !Array.isArray(obj.name)) {
        throw new Error("Invalid method config: invalid name array");
      }
      for (const name of obj.name) {
        result.name.push(validateName(name));
      }
      if ("waitForReady" in obj) {
        if (typeof obj.waitForReady !== "boolean") {
          throw new Error("Invalid method config: invalid waitForReady");
        }
        result.waitForReady = obj.waitForReady;
      }
      if ("timeout" in obj) {
        if (typeof obj.timeout === "object") {
          if (!("seconds" in obj.timeout) || !(typeof obj.timeout.seconds === "number")) {
            throw new Error("Invalid method config: invalid timeout.seconds");
          }
          if (!("nanos" in obj.timeout) || !(typeof obj.timeout.nanos === "number")) {
            throw new Error("Invalid method config: invalid timeout.nanos");
          }
          result.timeout = obj.timeout;
        } else if (typeof obj.timeout === "string" && DURATION_REGEX.test(obj.timeout)) {
          const timeoutParts = obj.timeout.substring(0, obj.timeout.length - 1).split(".");
          result.timeout = {
            seconds: timeoutParts[0] | 0,
            nanos: ((_a = timeoutParts[1]) !== null && _a !== void 0 ? _a : 0) | 0
          };
        } else {
          throw new Error("Invalid method config: invalid timeout");
        }
      }
      if ("maxRequestBytes" in obj) {
        if (typeof obj.maxRequestBytes !== "number") {
          throw new Error("Invalid method config: invalid maxRequestBytes");
        }
        result.maxRequestBytes = obj.maxRequestBytes;
      }
      if ("maxResponseBytes" in obj) {
        if (typeof obj.maxResponseBytes !== "number") {
          throw new Error("Invalid method config: invalid maxRequestBytes");
        }
        result.maxResponseBytes = obj.maxResponseBytes;
      }
      if ("retryPolicy" in obj) {
        if ("hedgingPolicy" in obj) {
          throw new Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
        } else {
          result.retryPolicy = validateRetryPolicy(obj.retryPolicy);
        }
      } else if ("hedgingPolicy" in obj) {
        result.hedgingPolicy = validateHedgingPolicy(obj.hedgingPolicy);
      }
      return result;
    }
    function validateRetryThrottling(obj) {
      if (!("maxTokens" in obj) || typeof obj.maxTokens !== "number" || obj.maxTokens <= 0 || obj.maxTokens > 1e3) {
        throw new Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
      }
      if (!("tokenRatio" in obj) || typeof obj.tokenRatio !== "number" || obj.tokenRatio <= 0) {
        throw new Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
      }
      return {
        maxTokens: +obj.maxTokens.toFixed(3),
        tokenRatio: +obj.tokenRatio.toFixed(3)
      };
    }
    exports2.validateRetryThrottling = validateRetryThrottling;
    function validateLoadBalancingConfig(obj) {
      if (!(typeof obj === "object" && obj !== null)) {
        throw new Error(`Invalid loadBalancingConfig: unexpected type ${typeof obj}`);
      }
      const keys = Object.keys(obj);
      if (keys.length > 1) {
        throw new Error(`Invalid loadBalancingConfig: unexpected multiple keys ${keys}`);
      }
      if (keys.length === 0) {
        throw new Error("Invalid loadBalancingConfig: load balancing policy name required");
      }
      return {
        [keys[0]]: obj[keys[0]]
      };
    }
    function validateServiceConfig(obj) {
      const result = {
        loadBalancingConfig: [],
        methodConfig: []
      };
      if ("loadBalancingPolicy" in obj) {
        if (typeof obj.loadBalancingPolicy === "string") {
          result.loadBalancingPolicy = obj.loadBalancingPolicy;
        } else {
          throw new Error("Invalid service config: invalid loadBalancingPolicy");
        }
      }
      if ("loadBalancingConfig" in obj) {
        if (Array.isArray(obj.loadBalancingConfig)) {
          for (const config of obj.loadBalancingConfig) {
            result.loadBalancingConfig.push(validateLoadBalancingConfig(config));
          }
        } else {
          throw new Error("Invalid service config: invalid loadBalancingConfig");
        }
      }
      if ("methodConfig" in obj) {
        if (Array.isArray(obj.methodConfig)) {
          for (const methodConfig of obj.methodConfig) {
            result.methodConfig.push(validateMethodConfig(methodConfig));
          }
        }
      }
      if ("retryThrottling" in obj) {
        result.retryThrottling = validateRetryThrottling(obj.retryThrottling);
      }
      const seenMethodNames = [];
      for (const methodConfig of result.methodConfig) {
        for (const name of methodConfig.name) {
          for (const seenName of seenMethodNames) {
            if (name.service === seenName.service && name.method === seenName.method) {
              throw new Error(`Invalid service config: duplicate name ${name.service}/${name.method}`);
            }
          }
          seenMethodNames.push(name);
        }
      }
      return result;
    }
    exports2.validateServiceConfig = validateServiceConfig;
    function validateCanaryConfig(obj) {
      if (!("serviceConfig" in obj)) {
        throw new Error("Invalid service config choice: missing service config");
      }
      const result = {
        serviceConfig: validateServiceConfig(obj.serviceConfig)
      };
      if ("clientLanguage" in obj) {
        if (Array.isArray(obj.clientLanguage)) {
          result.clientLanguage = [];
          for (const lang of obj.clientLanguage) {
            if (typeof lang === "string") {
              result.clientLanguage.push(lang);
            } else {
              throw new Error("Invalid service config choice: invalid clientLanguage");
            }
          }
        } else {
          throw new Error("Invalid service config choice: invalid clientLanguage");
        }
      }
      if ("clientHostname" in obj) {
        if (Array.isArray(obj.clientHostname)) {
          result.clientHostname = [];
          for (const lang of obj.clientHostname) {
            if (typeof lang === "string") {
              result.clientHostname.push(lang);
            } else {
              throw new Error("Invalid service config choice: invalid clientHostname");
            }
          }
        } else {
          throw new Error("Invalid service config choice: invalid clientHostname");
        }
      }
      if ("percentage" in obj) {
        if (typeof obj.percentage === "number" && 0 <= obj.percentage && obj.percentage <= 100) {
          result.percentage = obj.percentage;
        } else {
          throw new Error("Invalid service config choice: invalid percentage");
        }
      }
      const allowedFields = [
        "clientLanguage",
        "percentage",
        "clientHostname",
        "serviceConfig"
      ];
      for (const field in obj) {
        if (!allowedFields.includes(field)) {
          throw new Error(`Invalid service config choice: unexpected field ${field}`);
        }
      }
      return result;
    }
    function validateAndSelectCanaryConfig(obj, percentage) {
      if (!Array.isArray(obj)) {
        throw new Error("Invalid service config list");
      }
      for (const config of obj) {
        const validatedConfig = validateCanaryConfig(config);
        if (typeof validatedConfig.percentage === "number" && percentage > validatedConfig.percentage) {
          continue;
        }
        if (Array.isArray(validatedConfig.clientHostname)) {
          let hostnameMatched = false;
          for (const hostname of validatedConfig.clientHostname) {
            if (hostname === os.hostname()) {
              hostnameMatched = true;
            }
          }
          if (!hostnameMatched) {
            continue;
          }
        }
        if (Array.isArray(validatedConfig.clientLanguage)) {
          let languageMatched = false;
          for (const language of validatedConfig.clientLanguage) {
            if (language === CLIENT_LANGUAGE_STRING) {
              languageMatched = true;
            }
          }
          if (!languageMatched) {
            continue;
          }
        }
        return validatedConfig.serviceConfig;
      }
      throw new Error("No matching service config found");
    }
    function extractAndSelectServiceConfig(txtRecord, percentage) {
      for (const record of txtRecord) {
        if (record.length > 0 && record[0].startsWith("grpc_config=")) {
          const recordString = record.join("").substring("grpc_config=".length);
          const recordJson = JSON.parse(recordString);
          return validateAndSelectCanaryConfig(recordJson, percentage);
        }
      }
      return null;
    }
    exports2.extractAndSelectServiceConfig = extractAndSelectServiceConfig;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/connectivity-state.js
var require_connectivity_state = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/connectivity-state.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectivityState = void 0;
    var ConnectivityState;
    (function(ConnectivityState2) {
      ConnectivityState2[ConnectivityState2["IDLE"] = 0] = "IDLE";
      ConnectivityState2[ConnectivityState2["CONNECTING"] = 1] = "CONNECTING";
      ConnectivityState2[ConnectivityState2["READY"] = 2] = "READY";
      ConnectivityState2[ConnectivityState2["TRANSIENT_FAILURE"] = 3] = "TRANSIENT_FAILURE";
      ConnectivityState2[ConnectivityState2["SHUTDOWN"] = 4] = "SHUTDOWN";
    })(ConnectivityState || (exports2.ConnectivityState = ConnectivityState = {}));
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/uri-parser.js
var require_uri_parser = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/uri-parser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uriToString = exports2.combineHostPort = exports2.splitHostPort = exports2.parseUri = void 0;
    var URI_REGEX = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
    function parseUri(uriString) {
      const parsedUri = URI_REGEX.exec(uriString);
      if (parsedUri === null) {
        return null;
      }
      return {
        scheme: parsedUri[1],
        authority: parsedUri[2],
        path: parsedUri[3]
      };
    }
    exports2.parseUri = parseUri;
    var NUMBER_REGEX = /^\d+$/;
    function splitHostPort(path) {
      if (path.startsWith("[")) {
        const hostEnd = path.indexOf("]");
        if (hostEnd === -1) {
          return null;
        }
        const host = path.substring(1, hostEnd);
        if (host.indexOf(":") === -1) {
          return null;
        }
        if (path.length > hostEnd + 1) {
          if (path[hostEnd + 1] === ":") {
            const portString = path.substring(hostEnd + 2);
            if (NUMBER_REGEX.test(portString)) {
              return {
                host,
                port: +portString
              };
            } else {
              return null;
            }
          } else {
            return null;
          }
        } else {
          return {
            host
          };
        }
      } else {
        const splitPath = path.split(":");
        if (splitPath.length === 2) {
          if (NUMBER_REGEX.test(splitPath[1])) {
            return {
              host: splitPath[0],
              port: +splitPath[1]
            };
          } else {
            return null;
          }
        } else {
          return {
            host: path
          };
        }
      }
    }
    exports2.splitHostPort = splitHostPort;
    function combineHostPort(hostPort) {
      if (hostPort.port === void 0) {
        return hostPort.host;
      } else {
        if (hostPort.host.includes(":")) {
          return `[${hostPort.host}]:${hostPort.port}`;
        } else {
          return `${hostPort.host}:${hostPort.port}`;
        }
      }
    }
    exports2.combineHostPort = combineHostPort;
    function uriToString(uri) {
      let result = "";
      if (uri.scheme !== void 0) {
        result += uri.scheme + ":";
      }
      if (uri.authority !== void 0) {
        result += "//" + uri.authority + "/";
      }
      result += uri.path;
      return result;
    }
    exports2.uriToString = uriToString;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver.js
var require_resolver = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mapUriDefaultScheme = exports2.getDefaultAuthority = exports2.createResolver = exports2.registerDefaultScheme = exports2.registerResolver = void 0;
    var uri_parser_1 = require_uri_parser();
    var registeredResolvers = {};
    var defaultScheme = null;
    function registerResolver(scheme, resolverClass) {
      registeredResolvers[scheme] = resolverClass;
    }
    exports2.registerResolver = registerResolver;
    function registerDefaultScheme(scheme) {
      defaultScheme = scheme;
    }
    exports2.registerDefaultScheme = registerDefaultScheme;
    function createResolver(target, listener, options) {
      if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
        return new registeredResolvers[target.scheme](target, listener, options);
      } else {
        throw new Error(`No resolver could be created for target ${(0, uri_parser_1.uriToString)(target)}`);
      }
    }
    exports2.createResolver = createResolver;
    function getDefaultAuthority(target) {
      if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
        return registeredResolvers[target.scheme].getDefaultAuthority(target);
      } else {
        throw new Error(`Invalid target ${(0, uri_parser_1.uriToString)(target)}`);
      }
    }
    exports2.getDefaultAuthority = getDefaultAuthority;
    function mapUriDefaultScheme(target) {
      if (target.scheme === void 0 || !(target.scheme in registeredResolvers)) {
        if (defaultScheme !== null) {
          return {
            scheme: defaultScheme,
            authority: void 0,
            path: (0, uri_parser_1.uriToString)(target)
          };
        } else {
          return null;
        }
      }
      return target;
    }
    exports2.mapUriDefaultScheme = mapUriDefaultScheme;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/picker.js
var require_picker = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/picker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueuePicker = exports2.UnavailablePicker = exports2.PickResultType = void 0;
    var metadata_1 = require_metadata();
    var constants_1 = require_constants();
    var PickResultType;
    (function(PickResultType2) {
      PickResultType2[PickResultType2["COMPLETE"] = 0] = "COMPLETE";
      PickResultType2[PickResultType2["QUEUE"] = 1] = "QUEUE";
      PickResultType2[PickResultType2["TRANSIENT_FAILURE"] = 2] = "TRANSIENT_FAILURE";
      PickResultType2[PickResultType2["DROP"] = 3] = "DROP";
    })(PickResultType || (exports2.PickResultType = PickResultType = {}));
    var UnavailablePicker = class {
      constructor(status2) {
        this.status = Object.assign({ code: constants_1.Status.UNAVAILABLE, details: "No connection established", metadata: new metadata_1.Metadata() }, status2);
      }
      pick(pickArgs) {
        return {
          pickResultType: PickResultType.TRANSIENT_FAILURE,
          subchannel: null,
          status: this.status,
          onCallStarted: null,
          onCallEnded: null
        };
      }
    };
    exports2.UnavailablePicker = UnavailablePicker;
    var QueuePicker = class {
      // Constructed with a load balancer. Calls exitIdle on it the first time pick is called
      constructor(loadBalancer, childPicker) {
        this.loadBalancer = loadBalancer;
        this.childPicker = childPicker;
        this.calledExitIdle = false;
      }
      pick(pickArgs) {
        if (!this.calledExitIdle) {
          process.nextTick(() => {
            this.loadBalancer.exitIdle();
          });
          this.calledExitIdle = true;
        }
        if (this.childPicker) {
          return this.childPicker.pick(pickArgs);
        } else {
          return {
            pickResultType: PickResultType.QUEUE,
            subchannel: null,
            status: null,
            onCallStarted: null,
            onCallEnded: null
          };
        }
      }
    };
    exports2.QueuePicker = QueuePicker;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/backoff-timeout.js
var require_backoff_timeout = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/backoff-timeout.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BackoffTimeout = void 0;
    var INITIAL_BACKOFF_MS = 1e3;
    var BACKOFF_MULTIPLIER = 1.6;
    var MAX_BACKOFF_MS = 12e4;
    var BACKOFF_JITTER = 0.2;
    function uniformRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    var BackoffTimeout = class {
      constructor(callback, options) {
        this.callback = callback;
        this.initialDelay = INITIAL_BACKOFF_MS;
        this.multiplier = BACKOFF_MULTIPLIER;
        this.maxDelay = MAX_BACKOFF_MS;
        this.jitter = BACKOFF_JITTER;
        this.running = false;
        this.hasRef = true;
        this.startTime = /* @__PURE__ */ new Date();
        this.endTime = /* @__PURE__ */ new Date();
        if (options) {
          if (options.initialDelay) {
            this.initialDelay = options.initialDelay;
          }
          if (options.multiplier) {
            this.multiplier = options.multiplier;
          }
          if (options.jitter) {
            this.jitter = options.jitter;
          }
          if (options.maxDelay) {
            this.maxDelay = options.maxDelay;
          }
        }
        this.nextDelay = this.initialDelay;
        this.timerId = setTimeout(() => {
        }, 0);
        clearTimeout(this.timerId);
      }
      runTimer(delay) {
        var _a, _b;
        this.endTime = this.startTime;
        this.endTime.setMilliseconds(this.endTime.getMilliseconds() + this.nextDelay);
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
          this.callback();
          this.running = false;
        }, delay);
        if (!this.hasRef) {
          (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      /**
       * Call the callback after the current amount of delay time
       */
      runOnce() {
        this.running = true;
        this.startTime = /* @__PURE__ */ new Date();
        this.runTimer(this.nextDelay);
        const nextBackoff = Math.min(this.nextDelay * this.multiplier, this.maxDelay);
        const jitterMagnitude = nextBackoff * this.jitter;
        this.nextDelay = nextBackoff + uniformRandom(-jitterMagnitude, jitterMagnitude);
      }
      /**
       * Stop the timer. The callback will not be called until `runOnce` is called
       * again.
       */
      stop() {
        clearTimeout(this.timerId);
        this.running = false;
      }
      /**
       * Reset the delay time to its initial value. If the timer is still running,
       * retroactively apply that reset to the current timer.
       */
      reset() {
        this.nextDelay = this.initialDelay;
        if (this.running) {
          const now = /* @__PURE__ */ new Date();
          const newEndTime = this.startTime;
          newEndTime.setMilliseconds(newEndTime.getMilliseconds() + this.nextDelay);
          clearTimeout(this.timerId);
          if (now < newEndTime) {
            this.runTimer(newEndTime.getTime() - now.getTime());
          } else {
            this.running = false;
          }
        }
      }
      /**
       * Check whether the timer is currently running.
       */
      isRunning() {
        return this.running;
      }
      /**
       * Set that while the timer is running, it should keep the Node process
       * running.
       */
      ref() {
        var _a, _b;
        this.hasRef = true;
        (_b = (_a = this.timerId).ref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      /**
       * Set that while the timer is running, it should not keep the Node process
       * running.
       */
      unref() {
        var _a, _b;
        this.hasRef = false;
        (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      /**
       * Get the approximate timestamp of when the timer will fire. Only valid if
       * this.isRunning() is true.
       */
      getEndTime() {
        return this.endTime;
      }
    };
    exports2.BackoffTimeout = BackoffTimeout;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js
var require_load_balancer_child_handler = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-child-handler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChildLoadBalancerHandler = void 0;
    var load_balancer_1 = require_load_balancer();
    var connectivity_state_1 = require_connectivity_state();
    var TYPE_NAME = "child_load_balancer_helper";
    var ChildLoadBalancerHandler = class {
      constructor(channelControlHelper, options) {
        this.channelControlHelper = channelControlHelper;
        this.options = options;
        this.currentChild = null;
        this.pendingChild = null;
        this.latestConfig = null;
        this.ChildPolicyHelper = class {
          constructor(parent) {
            this.parent = parent;
            this.child = null;
          }
          createSubchannel(subchannelAddress, subchannelArgs) {
            return this.parent.channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
          }
          updateState(connectivityState, picker) {
            var _a;
            if (this.calledByPendingChild()) {
              if (connectivityState === connectivity_state_1.ConnectivityState.CONNECTING) {
                return;
              }
              (_a = this.parent.currentChild) === null || _a === void 0 ? void 0 : _a.destroy();
              this.parent.currentChild = this.parent.pendingChild;
              this.parent.pendingChild = null;
            } else if (!this.calledByCurrentChild()) {
              return;
            }
            this.parent.channelControlHelper.updateState(connectivityState, picker);
          }
          requestReresolution() {
            var _a;
            const latestChild = (_a = this.parent.pendingChild) !== null && _a !== void 0 ? _a : this.parent.currentChild;
            if (this.child === latestChild) {
              this.parent.channelControlHelper.requestReresolution();
            }
          }
          setChild(newChild) {
            this.child = newChild;
          }
          addChannelzChild(child) {
            this.parent.channelControlHelper.addChannelzChild(child);
          }
          removeChannelzChild(child) {
            this.parent.channelControlHelper.removeChannelzChild(child);
          }
          calledByPendingChild() {
            return this.child === this.parent.pendingChild;
          }
          calledByCurrentChild() {
            return this.child === this.parent.currentChild;
          }
        };
      }
      configUpdateRequiresNewPolicyInstance(oldConfig, newConfig) {
        return oldConfig.getLoadBalancerName() !== newConfig.getLoadBalancerName();
      }
      /**
       * Prerequisites: lbConfig !== null and lbConfig.name is registered
       * @param endpointList
       * @param lbConfig
       * @param attributes
       */
      updateAddressList(endpointList, lbConfig, attributes) {
        let childToUpdate;
        if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, lbConfig)) {
          const newHelper = new this.ChildPolicyHelper(this);
          const newChild = (0, load_balancer_1.createLoadBalancer)(lbConfig, newHelper, this.options);
          newHelper.setChild(newChild);
          if (this.currentChild === null) {
            this.currentChild = newChild;
            childToUpdate = this.currentChild;
          } else {
            if (this.pendingChild) {
              this.pendingChild.destroy();
            }
            this.pendingChild = newChild;
            childToUpdate = this.pendingChild;
          }
        } else {
          if (this.pendingChild === null) {
            childToUpdate = this.currentChild;
          } else {
            childToUpdate = this.pendingChild;
          }
        }
        this.latestConfig = lbConfig;
        childToUpdate.updateAddressList(endpointList, lbConfig, attributes);
      }
      exitIdle() {
        if (this.currentChild) {
          this.currentChild.exitIdle();
          if (this.pendingChild) {
            this.pendingChild.exitIdle();
          }
        }
      }
      resetBackoff() {
        if (this.currentChild) {
          this.currentChild.resetBackoff();
          if (this.pendingChild) {
            this.pendingChild.resetBackoff();
          }
        }
      }
      destroy() {
        if (this.currentChild) {
          this.currentChild.destroy();
          this.currentChild = null;
        }
        if (this.pendingChild) {
          this.pendingChild.destroy();
          this.pendingChild = null;
        }
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.ChildLoadBalancerHandler = ChildLoadBalancerHandler;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js
var require_resolving_load_balancer = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolving-load-balancer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ResolvingLoadBalancer = void 0;
    var load_balancer_1 = require_load_balancer();
    var service_config_1 = require_service_config();
    var connectivity_state_1 = require_connectivity_state();
    var resolver_1 = require_resolver();
    var picker_1 = require_picker();
    var backoff_timeout_1 = require_backoff_timeout();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var constants_2 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    var TRACER_NAME = "resolving_load_balancer";
    function trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var NAME_MATCH_LEVEL_ORDER = [
      "SERVICE_AND_METHOD",
      "SERVICE",
      "EMPTY"
    ];
    function hasMatchingName(service, method, methodConfig, matchLevel) {
      for (const name of methodConfig.name) {
        switch (matchLevel) {
          case "EMPTY":
            if (!name.service && !name.method) {
              return true;
            }
            break;
          case "SERVICE":
            if (name.service === service && !name.method) {
              return true;
            }
            break;
          case "SERVICE_AND_METHOD":
            if (name.service === service && name.method === method) {
              return true;
            }
        }
      }
      return false;
    }
    function findMatchingConfig(service, method, methodConfigs, matchLevel) {
      for (const config of methodConfigs) {
        if (hasMatchingName(service, method, config, matchLevel)) {
          return config;
        }
      }
      return null;
    }
    function getDefaultConfigSelector(serviceConfig) {
      return function defaultConfigSelector(methodName, metadata) {
        var _a, _b;
        const splitName = methodName.split("/").filter((x) => x.length > 0);
        const service = (_a = splitName[0]) !== null && _a !== void 0 ? _a : "";
        const method = (_b = splitName[1]) !== null && _b !== void 0 ? _b : "";
        if (serviceConfig && serviceConfig.methodConfig) {
          for (const matchLevel of NAME_MATCH_LEVEL_ORDER) {
            const matchingConfig = findMatchingConfig(service, method, serviceConfig.methodConfig, matchLevel);
            if (matchingConfig) {
              return {
                methodConfig: matchingConfig,
                pickInformation: {},
                status: constants_1.Status.OK,
                dynamicFilterFactories: []
              };
            }
          }
        }
        return {
          methodConfig: { name: [] },
          pickInformation: {},
          status: constants_1.Status.OK,
          dynamicFilterFactories: []
        };
      };
    }
    var ResolvingLoadBalancer = class {
      /**
       * Wrapper class that behaves like a `LoadBalancer` and also handles name
       * resolution internally.
       * @param target The address of the backend to connect to.
       * @param channelControlHelper `ChannelControlHelper` instance provided by
       *     this load balancer's owner.
       * @param defaultServiceConfig The default service configuration to be used
       *     if none is provided by the name resolver. A `null` value indicates
       *     that the default behavior should be the default unconfigured behavior.
       *     In practice, that means using the "pick first" load balancer
       *     implmentation
       */
      constructor(target, channelControlHelper, channelOptions, onSuccessfulResolution, onFailedResolution) {
        this.target = target;
        this.channelControlHelper = channelControlHelper;
        this.onSuccessfulResolution = onSuccessfulResolution;
        this.onFailedResolution = onFailedResolution;
        this.latestChildState = connectivity_state_1.ConnectivityState.IDLE;
        this.latestChildPicker = new picker_1.QueuePicker(this);
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.previousServiceConfig = null;
        this.continueResolving = false;
        if (channelOptions["grpc.service_config"]) {
          this.defaultServiceConfig = (0, service_config_1.validateServiceConfig)(JSON.parse(channelOptions["grpc.service_config"]));
        } else {
          this.defaultServiceConfig = {
            loadBalancingConfig: [],
            methodConfig: []
          };
        }
        this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        this.childLoadBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
          createSubchannel: channelControlHelper.createSubchannel.bind(channelControlHelper),
          requestReresolution: () => {
            if (this.backoffTimeout.isRunning()) {
              trace("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString());
              this.continueResolving = true;
            } else {
              this.updateResolution();
            }
          },
          updateState: (newState, picker) => {
            this.latestChildState = newState;
            this.latestChildPicker = picker;
            this.updateState(newState, picker);
          },
          addChannelzChild: channelControlHelper.addChannelzChild.bind(channelControlHelper),
          removeChannelzChild: channelControlHelper.removeChannelzChild.bind(channelControlHelper)
        }, channelOptions);
        this.innerResolver = (0, resolver_1.createResolver)(target, {
          onSuccessfulResolution: (endpointList, serviceConfig, serviceConfigError, configSelector, attributes) => {
            var _a;
            this.backoffTimeout.stop();
            this.backoffTimeout.reset();
            let workingServiceConfig = null;
            if (serviceConfig === null) {
              if (serviceConfigError === null) {
                this.previousServiceConfig = null;
                workingServiceConfig = this.defaultServiceConfig;
              } else {
                if (this.previousServiceConfig === null) {
                  this.handleResolutionFailure(serviceConfigError);
                } else {
                  workingServiceConfig = this.previousServiceConfig;
                }
              }
            } else {
              workingServiceConfig = serviceConfig;
              this.previousServiceConfig = serviceConfig;
            }
            const workingConfigList = (_a = workingServiceConfig === null || workingServiceConfig === void 0 ? void 0 : workingServiceConfig.loadBalancingConfig) !== null && _a !== void 0 ? _a : [];
            const loadBalancingConfig = (0, load_balancer_1.selectLbConfigFromList)(workingConfigList, true);
            if (loadBalancingConfig === null) {
              this.handleResolutionFailure({
                code: constants_1.Status.UNAVAILABLE,
                details: "All load balancer options in service config are not compatible",
                metadata: new metadata_1.Metadata()
              });
              return;
            }
            this.childLoadBalancer.updateAddressList(endpointList, loadBalancingConfig, attributes);
            const finalServiceConfig = workingServiceConfig !== null && workingServiceConfig !== void 0 ? workingServiceConfig : this.defaultServiceConfig;
            this.onSuccessfulResolution(finalServiceConfig, configSelector !== null && configSelector !== void 0 ? configSelector : getDefaultConfigSelector(finalServiceConfig));
          },
          onError: (error) => {
            this.handleResolutionFailure(error);
          }
        }, channelOptions);
        const backoffOptions = {
          initialDelay: channelOptions["grpc.initial_reconnect_backoff_ms"],
          maxDelay: channelOptions["grpc.max_reconnect_backoff_ms"]
        };
        this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
          if (this.continueResolving) {
            this.updateResolution();
            this.continueResolving = false;
          } else {
            this.updateState(this.latestChildState, this.latestChildPicker);
          }
        }, backoffOptions);
        this.backoffTimeout.unref();
      }
      updateResolution() {
        this.innerResolver.updateResolution();
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE) {
          this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, this.latestChildPicker);
        }
        this.backoffTimeout.runOnce();
      }
      updateState(connectivityState, picker) {
        trace((0, uri_parser_1.uriToString)(this.target) + " " + connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[connectivityState]);
        if (connectivityState === connectivity_state_1.ConnectivityState.IDLE) {
          picker = new picker_1.QueuePicker(this, picker);
        }
        this.currentState = connectivityState;
        this.channelControlHelper.updateState(connectivityState, picker);
      }
      handleResolutionFailure(error) {
        if (this.latestChildState === connectivity_state_1.ConnectivityState.IDLE) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker(error));
          this.onFailedResolution(error);
        }
      }
      exitIdle() {
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE || this.currentState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
          if (this.backoffTimeout.isRunning()) {
            this.continueResolving = true;
          } else {
            this.updateResolution();
          }
        }
        this.childLoadBalancer.exitIdle();
      }
      updateAddressList(endpointList, lbConfig) {
        throw new Error("updateAddressList not supported on ResolvingLoadBalancer");
      }
      resetBackoff() {
        this.backoffTimeout.reset();
        this.childLoadBalancer.resetBackoff();
      }
      destroy() {
        this.childLoadBalancer.destroy();
        this.innerResolver.destroy();
        this.backoffTimeout.reset();
        this.backoffTimeout.stop();
        this.latestChildState = connectivity_state_1.ConnectivityState.IDLE;
        this.latestChildPicker = new picker_1.QueuePicker(this);
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.previousServiceConfig = null;
        this.continueResolving = false;
      }
      getTypeName() {
        return "resolving_load_balancer";
      }
    };
    exports2.ResolvingLoadBalancer = ResolvingLoadBalancer;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channel-options.js
var require_channel_options = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channel-options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.channelOptionsEqual = exports2.recognizedOptions = void 0;
    exports2.recognizedOptions = {
      "grpc.ssl_target_name_override": true,
      "grpc.primary_user_agent": true,
      "grpc.secondary_user_agent": true,
      "grpc.default_authority": true,
      "grpc.keepalive_time_ms": true,
      "grpc.keepalive_timeout_ms": true,
      "grpc.keepalive_permit_without_calls": true,
      "grpc.service_config": true,
      "grpc.max_concurrent_streams": true,
      "grpc.initial_reconnect_backoff_ms": true,
      "grpc.max_reconnect_backoff_ms": true,
      "grpc.use_local_subchannel_pool": true,
      "grpc.max_send_message_length": true,
      "grpc.max_receive_message_length": true,
      "grpc.enable_http_proxy": true,
      "grpc.enable_channelz": true,
      "grpc.dns_min_time_between_resolutions_ms": true,
      "grpc.enable_retries": true,
      "grpc.per_rpc_retry_buffer_size": true,
      "grpc.retry_buffer_size": true,
      "grpc.max_connection_age_ms": true,
      "grpc.max_connection_age_grace_ms": true,
      "grpc-node.max_session_memory": true,
      "grpc.service_config_disable_resolution": true,
      "grpc.client_idle_timeout_ms": true,
      "grpc-node.tls_enable_trace": true,
      "grpc.lb.ring_hash.ring_size_cap": true
    };
    function channelOptionsEqual(options1, options2) {
      const keys1 = Object.keys(options1).sort();
      const keys2 = Object.keys(options2).sort();
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (let i = 0; i < keys1.length; i += 1) {
        if (keys1[i] !== keys2[i]) {
          return false;
        }
        if (options1[keys1[i]] !== options2[keys2[i]]) {
          return false;
        }
      }
      return true;
    }
    exports2.channelOptionsEqual = channelOptionsEqual;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-address.js
var require_subchannel_address = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-address.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EndpointMap = exports2.endpointHasAddress = exports2.endpointToString = exports2.endpointEqual = exports2.stringToSubchannelAddress = exports2.subchannelAddressToString = exports2.subchannelAddressEqual = exports2.isTcpSubchannelAddress = void 0;
    var net_1 = require("net");
    function isTcpSubchannelAddress(address) {
      return "port" in address;
    }
    exports2.isTcpSubchannelAddress = isTcpSubchannelAddress;
    function subchannelAddressEqual(address1, address2) {
      if (!address1 && !address2) {
        return true;
      }
      if (!address1 || !address2) {
        return false;
      }
      if (isTcpSubchannelAddress(address1)) {
        return isTcpSubchannelAddress(address2) && address1.host === address2.host && address1.port === address2.port;
      } else {
        return !isTcpSubchannelAddress(address2) && address1.path === address2.path;
      }
    }
    exports2.subchannelAddressEqual = subchannelAddressEqual;
    function subchannelAddressToString(address) {
      if (isTcpSubchannelAddress(address)) {
        return address.host + ":" + address.port;
      } else {
        return address.path;
      }
    }
    exports2.subchannelAddressToString = subchannelAddressToString;
    var DEFAULT_PORT = 443;
    function stringToSubchannelAddress(addressString, port) {
      if ((0, net_1.isIP)(addressString)) {
        return {
          host: addressString,
          port: port !== null && port !== void 0 ? port : DEFAULT_PORT
        };
      } else {
        return {
          path: addressString
        };
      }
    }
    exports2.stringToSubchannelAddress = stringToSubchannelAddress;
    function endpointEqual(endpoint1, endpoint2) {
      if (endpoint1.addresses.length !== endpoint2.addresses.length) {
        return false;
      }
      for (let i = 0; i < endpoint1.addresses.length; i++) {
        if (!subchannelAddressEqual(endpoint1.addresses[i], endpoint2.addresses[i])) {
          return false;
        }
      }
      return true;
    }
    exports2.endpointEqual = endpointEqual;
    function endpointToString(endpoint) {
      return "[" + endpoint.addresses.map(subchannelAddressToString).join(", ") + "]";
    }
    exports2.endpointToString = endpointToString;
    function endpointHasAddress(endpoint, expectedAddress) {
      for (const address of endpoint.addresses) {
        if (subchannelAddressEqual(address, expectedAddress)) {
          return true;
        }
      }
      return false;
    }
    exports2.endpointHasAddress = endpointHasAddress;
    function endpointEqualUnordered(endpoint1, endpoint2) {
      if (endpoint1.addresses.length !== endpoint2.addresses.length) {
        return false;
      }
      for (const address1 of endpoint1.addresses) {
        let matchFound = false;
        for (const address2 of endpoint2.addresses) {
          if (subchannelAddressEqual(address1, address2)) {
            matchFound = true;
            break;
          }
        }
        if (!matchFound) {
          return false;
        }
      }
      return true;
    }
    var EndpointMap = class {
      constructor() {
        this.map = /* @__PURE__ */ new Set();
      }
      get size() {
        return this.map.size;
      }
      getForSubchannelAddress(address) {
        for (const entry of this.map) {
          if (endpointHasAddress(entry.key, address)) {
            return entry.value;
          }
        }
        return void 0;
      }
      /**
       * Delete any entries in this map with keys that are not in endpoints
       * @param endpoints
       */
      deleteMissing(endpoints) {
        const removedValues = [];
        for (const entry of this.map) {
          let foundEntry = false;
          for (const endpoint of endpoints) {
            if (endpointEqualUnordered(endpoint, entry.key)) {
              foundEntry = true;
            }
          }
          if (!foundEntry) {
            removedValues.push(entry.value);
            this.map.delete(entry);
          }
        }
        return removedValues;
      }
      get(endpoint) {
        for (const entry of this.map) {
          if (endpointEqualUnordered(endpoint, entry.key)) {
            return entry.value;
          }
        }
        return void 0;
      }
      set(endpoint, mapEntry) {
        for (const entry of this.map) {
          if (endpointEqualUnordered(endpoint, entry.key)) {
            entry.value = mapEntry;
            return;
          }
        }
        this.map.add({ key: endpoint, value: mapEntry });
      }
      delete(endpoint) {
        for (const entry of this.map) {
          if (endpointEqualUnordered(endpoint, entry.key)) {
            this.map.delete(entry);
            return;
          }
        }
      }
      has(endpoint) {
        for (const entry of this.map) {
          if (endpointEqualUnordered(endpoint, entry.key)) {
            return true;
          }
        }
        return false;
      }
      clear() {
        this.map.clear();
      }
      *keys() {
        for (const entry of this.map) {
          yield entry.key;
        }
      }
      *values() {
        for (const entry of this.map) {
          yield entry.value;
        }
      }
      *entries() {
        for (const entry of this.map) {
          yield [entry.key, entry.value];
        }
      }
    };
    exports2.EndpointMap = EndpointMap;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/admin.js
var require_admin = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/admin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addAdminServicesToServer = exports2.registerAdminService = void 0;
    var registeredAdminServices = [];
    function registerAdminService(getServiceDefinition, getHandlers) {
      registeredAdminServices.push({ getServiceDefinition, getHandlers });
    }
    exports2.registerAdminService = registerAdminService;
    function addAdminServicesToServer(server) {
      for (const { getServiceDefinition, getHandlers } of registeredAdminServices) {
        server.addService(getServiceDefinition(), getHandlers());
      }
    }
    exports2.addAdminServicesToServer = addAdminServicesToServer;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call.js
var require_call = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ClientDuplexStreamImpl = exports2.ClientWritableStreamImpl = exports2.ClientReadableStreamImpl = exports2.ClientUnaryCallImpl = exports2.callErrorFromStatus = void 0;
    var events_1 = require("events");
    var stream_1 = require("stream");
    var constants_1 = require_constants();
    function callErrorFromStatus(status2, callerStack) {
      const message = `${status2.code} ${constants_1.Status[status2.code]}: ${status2.details}`;
      const error = new Error(message);
      const stack = `${error.stack}
for call at
${callerStack}`;
      return Object.assign(new Error(message), status2, { stack });
    }
    exports2.callErrorFromStatus = callErrorFromStatus;
    var ClientUnaryCallImpl = class extends events_1.EventEmitter {
      constructor() {
        super();
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
    };
    exports2.ClientUnaryCallImpl = ClientUnaryCallImpl;
    var ClientReadableStreamImpl = class extends stream_1.Readable {
      constructor(deserialize) {
        super({ objectMode: true });
        this.deserialize = deserialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _read(_size) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
      }
    };
    exports2.ClientReadableStreamImpl = ClientReadableStreamImpl;
    var ClientWritableStreamImpl = class extends stream_1.Writable {
      constructor(serialize) {
        super({ objectMode: true });
        this.serialize = serialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _write(chunk, encoding, cb) {
        var _a;
        const context = {
          callback: cb
        };
        const flags = Number(encoding);
        if (!Number.isNaN(flags)) {
          context.flags = flags;
        }
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
      }
      _final(cb) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
        cb();
      }
    };
    exports2.ClientWritableStreamImpl = ClientWritableStreamImpl;
    var ClientDuplexStreamImpl = class extends stream_1.Duplex {
      constructor(serialize, deserialize) {
        super({ objectMode: true });
        this.serialize = serialize;
        this.deserialize = deserialize;
      }
      cancel() {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled on client");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
      }
      _read(_size) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
      }
      _write(chunk, encoding, cb) {
        var _a;
        const context = {
          callback: cb
        };
        const flags = Number(encoding);
        if (!Number.isNaN(flags)) {
          context.flags = flags;
        }
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
      }
      _final(cb) {
        var _a;
        (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
        cb();
      }
    };
    exports2.ClientDuplexStreamImpl = ClientDuplexStreamImpl;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call-interface.js
var require_call_interface = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call-interface.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InterceptingListenerImpl = exports2.isInterceptingListener = void 0;
    function isInterceptingListener(listener) {
      return listener.onReceiveMetadata !== void 0 && listener.onReceiveMetadata.length === 1;
    }
    exports2.isInterceptingListener = isInterceptingListener;
    var InterceptingListenerImpl = class {
      constructor(listener, nextListener) {
        this.listener = listener;
        this.nextListener = nextListener;
        this.processingMetadata = false;
        this.hasPendingMessage = false;
        this.processingMessage = false;
        this.pendingStatus = null;
      }
      processPendingMessage() {
        if (this.hasPendingMessage) {
          this.nextListener.onReceiveMessage(this.pendingMessage);
          this.pendingMessage = null;
          this.hasPendingMessage = false;
        }
      }
      processPendingStatus() {
        if (this.pendingStatus) {
          this.nextListener.onReceiveStatus(this.pendingStatus);
        }
      }
      onReceiveMetadata(metadata) {
        this.processingMetadata = true;
        this.listener.onReceiveMetadata(metadata, (metadata2) => {
          this.processingMetadata = false;
          this.nextListener.onReceiveMetadata(metadata2);
          this.processPendingMessage();
          this.processPendingStatus();
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onReceiveMessage(message) {
        this.processingMessage = true;
        this.listener.onReceiveMessage(message, (msg) => {
          this.processingMessage = false;
          if (this.processingMetadata) {
            this.pendingMessage = msg;
            this.hasPendingMessage = true;
          } else {
            this.nextListener.onReceiveMessage(msg);
            this.processPendingStatus();
          }
        });
      }
      onReceiveStatus(status2) {
        this.listener.onReceiveStatus(status2, (processedStatus) => {
          if (this.processingMetadata || this.processingMessage) {
            this.pendingStatus = processedStatus;
          } else {
            this.nextListener.onReceiveStatus(processedStatus);
          }
        });
      }
    };
    exports2.InterceptingListenerImpl = InterceptingListenerImpl;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/client-interceptors.js
var require_client_interceptors = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/client-interceptors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getInterceptingCall = exports2.InterceptingCall = exports2.RequesterBuilder = exports2.ListenerBuilder = exports2.InterceptorConfigurationError = void 0;
    var metadata_1 = require_metadata();
    var call_interface_1 = require_call_interface();
    var constants_1 = require_constants();
    var error_1 = require_error();
    var InterceptorConfigurationError = class _InterceptorConfigurationError extends Error {
      constructor(message) {
        super(message);
        this.name = "InterceptorConfigurationError";
        Error.captureStackTrace(this, _InterceptorConfigurationError);
      }
    };
    exports2.InterceptorConfigurationError = InterceptorConfigurationError;
    var ListenerBuilder = class {
      constructor() {
        this.metadata = void 0;
        this.message = void 0;
        this.status = void 0;
      }
      withOnReceiveMetadata(onReceiveMetadata) {
        this.metadata = onReceiveMetadata;
        return this;
      }
      withOnReceiveMessage(onReceiveMessage) {
        this.message = onReceiveMessage;
        return this;
      }
      withOnReceiveStatus(onReceiveStatus) {
        this.status = onReceiveStatus;
        return this;
      }
      build() {
        return {
          onReceiveMetadata: this.metadata,
          onReceiveMessage: this.message,
          onReceiveStatus: this.status
        };
      }
    };
    exports2.ListenerBuilder = ListenerBuilder;
    var RequesterBuilder = class {
      constructor() {
        this.start = void 0;
        this.message = void 0;
        this.halfClose = void 0;
        this.cancel = void 0;
      }
      withStart(start) {
        this.start = start;
        return this;
      }
      withSendMessage(sendMessage) {
        this.message = sendMessage;
        return this;
      }
      withHalfClose(halfClose) {
        this.halfClose = halfClose;
        return this;
      }
      withCancel(cancel) {
        this.cancel = cancel;
        return this;
      }
      build() {
        return {
          start: this.start,
          sendMessage: this.message,
          halfClose: this.halfClose,
          cancel: this.cancel
        };
      }
    };
    exports2.RequesterBuilder = RequesterBuilder;
    var defaultListener = {
      onReceiveMetadata: (metadata, next) => {
        next(metadata);
      },
      onReceiveMessage: (message, next) => {
        next(message);
      },
      onReceiveStatus: (status2, next) => {
        next(status2);
      }
    };
    var defaultRequester = {
      start: (metadata, listener, next) => {
        next(metadata, listener);
      },
      sendMessage: (message, next) => {
        next(message);
      },
      halfClose: (next) => {
        next();
      },
      cancel: (next) => {
        next();
      }
    };
    var InterceptingCall = class {
      constructor(nextCall, requester) {
        var _a, _b, _c, _d;
        this.nextCall = nextCall;
        this.processingMetadata = false;
        this.pendingMessageContext = null;
        this.processingMessage = false;
        this.pendingHalfClose = false;
        if (requester) {
          this.requester = {
            start: (_a = requester.start) !== null && _a !== void 0 ? _a : defaultRequester.start,
            sendMessage: (_b = requester.sendMessage) !== null && _b !== void 0 ? _b : defaultRequester.sendMessage,
            halfClose: (_c = requester.halfClose) !== null && _c !== void 0 ? _c : defaultRequester.halfClose,
            cancel: (_d = requester.cancel) !== null && _d !== void 0 ? _d : defaultRequester.cancel
          };
        } else {
          this.requester = defaultRequester;
        }
      }
      cancelWithStatus(status2, details) {
        this.requester.cancel(() => {
          this.nextCall.cancelWithStatus(status2, details);
        });
      }
      getPeer() {
        return this.nextCall.getPeer();
      }
      processPendingMessage() {
        if (this.pendingMessageContext) {
          this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage);
          this.pendingMessageContext = null;
          this.pendingMessage = null;
        }
      }
      processPendingHalfClose() {
        if (this.pendingHalfClose) {
          this.nextCall.halfClose();
        }
      }
      start(metadata, interceptingListener) {
        var _a, _b, _c, _d, _e, _f;
        const fullInterceptingListener = {
          onReceiveMetadata: (_b = (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(interceptingListener)) !== null && _b !== void 0 ? _b : (metadata2) => {
          },
          onReceiveMessage: (_d = (_c = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _c === void 0 ? void 0 : _c.bind(interceptingListener)) !== null && _d !== void 0 ? _d : (message) => {
          },
          onReceiveStatus: (_f = (_e = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _e === void 0 ? void 0 : _e.bind(interceptingListener)) !== null && _f !== void 0 ? _f : (status2) => {
          }
        };
        this.processingMetadata = true;
        this.requester.start(metadata, fullInterceptingListener, (md, listener) => {
          var _a2, _b2, _c2;
          this.processingMetadata = false;
          let finalInterceptingListener;
          if ((0, call_interface_1.isInterceptingListener)(listener)) {
            finalInterceptingListener = listener;
          } else {
            const fullListener = {
              onReceiveMetadata: (_a2 = listener.onReceiveMetadata) !== null && _a2 !== void 0 ? _a2 : defaultListener.onReceiveMetadata,
              onReceiveMessage: (_b2 = listener.onReceiveMessage) !== null && _b2 !== void 0 ? _b2 : defaultListener.onReceiveMessage,
              onReceiveStatus: (_c2 = listener.onReceiveStatus) !== null && _c2 !== void 0 ? _c2 : defaultListener.onReceiveStatus
            };
            finalInterceptingListener = new call_interface_1.InterceptingListenerImpl(fullListener, fullInterceptingListener);
          }
          this.nextCall.start(md, finalInterceptingListener);
          this.processPendingMessage();
          this.processPendingHalfClose();
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sendMessageWithContext(context, message) {
        this.processingMessage = true;
        this.requester.sendMessage(message, (finalMessage) => {
          this.processingMessage = false;
          if (this.processingMetadata) {
            this.pendingMessageContext = context;
            this.pendingMessage = message;
          } else {
            this.nextCall.sendMessageWithContext(context, finalMessage);
            this.processPendingHalfClose();
          }
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sendMessage(message) {
        this.sendMessageWithContext({}, message);
      }
      startRead() {
        this.nextCall.startRead();
      }
      halfClose() {
        this.requester.halfClose(() => {
          if (this.processingMetadata || this.processingMessage) {
            this.pendingHalfClose = true;
          } else {
            this.nextCall.halfClose();
          }
        });
      }
    };
    exports2.InterceptingCall = InterceptingCall;
    function getCall(channel, path, options) {
      var _a, _b;
      const deadline = (_a = options.deadline) !== null && _a !== void 0 ? _a : Infinity;
      const host = options.host;
      const parent = (_b = options.parent) !== null && _b !== void 0 ? _b : null;
      const propagateFlags = options.propagate_flags;
      const credentials2 = options.credentials;
      const call = channel.createCall(path, deadline, host, parent, propagateFlags);
      if (credentials2) {
        call.setCredentials(credentials2);
      }
      return call;
    }
    var BaseInterceptingCall = class {
      constructor(call, methodDefinition) {
        this.call = call;
        this.methodDefinition = methodDefinition;
      }
      cancelWithStatus(status2, details) {
        this.call.cancelWithStatus(status2, details);
      }
      getPeer() {
        return this.call.getPeer();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sendMessageWithContext(context, message) {
        let serialized;
        try {
          serialized = this.methodDefinition.requestSerialize(message);
        } catch (e) {
          this.call.cancelWithStatus(constants_1.Status.INTERNAL, `Request message serialization failure: ${(0, error_1.getErrorMessage)(e)}`);
          return;
        }
        this.call.sendMessageWithContext(context, serialized);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sendMessage(message) {
        this.sendMessageWithContext({}, message);
      }
      start(metadata, interceptingListener) {
        let readError = null;
        this.call.start(metadata, {
          onReceiveMetadata: (metadata2) => {
            var _a;
            (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, metadata2);
          },
          onReceiveMessage: (message) => {
            var _a;
            let deserialized;
            try {
              deserialized = this.methodDefinition.responseDeserialize(message);
            } catch (e) {
              readError = {
                code: constants_1.Status.INTERNAL,
                details: `Response message parsing error: ${(0, error_1.getErrorMessage)(e)}`,
                metadata: new metadata_1.Metadata()
              };
              this.call.cancelWithStatus(readError.code, readError.details);
              return;
            }
            (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, deserialized);
          },
          onReceiveStatus: (status2) => {
            var _a, _b;
            if (readError) {
              (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, readError);
            } else {
              (_b = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _b === void 0 ? void 0 : _b.call(interceptingListener, status2);
            }
          }
        });
      }
      startRead() {
        this.call.startRead();
      }
      halfClose() {
        this.call.halfClose();
      }
    };
    var BaseUnaryInterceptingCall = class extends BaseInterceptingCall {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(call, methodDefinition) {
        super(call, methodDefinition);
      }
      start(metadata, listener) {
        var _a, _b;
        let receivedMessage = false;
        const wrapperListener = {
          onReceiveMetadata: (_b = (_a = listener === null || listener === void 0 ? void 0 : listener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(listener)) !== null && _b !== void 0 ? _b : (metadata2) => {
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReceiveMessage: (message) => {
            var _a2;
            receivedMessage = true;
            (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, message);
          },
          onReceiveStatus: (status2) => {
            var _a2, _b2;
            if (!receivedMessage) {
              (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, null);
            }
            (_b2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveStatus) === null || _b2 === void 0 ? void 0 : _b2.call(listener, status2);
          }
        };
        super.start(metadata, wrapperListener);
        this.call.startRead();
      }
    };
    var BaseStreamingInterceptingCall = class extends BaseInterceptingCall {
    };
    function getBottomInterceptingCall(channel, options, methodDefinition) {
      const call = getCall(channel, methodDefinition.path, options);
      if (methodDefinition.responseStream) {
        return new BaseStreamingInterceptingCall(call, methodDefinition);
      } else {
        return new BaseUnaryInterceptingCall(call, methodDefinition);
      }
    }
    function getInterceptingCall(interceptorArgs, methodDefinition, options, channel) {
      if (interceptorArgs.clientInterceptors.length > 0 && interceptorArgs.clientInterceptorProviders.length > 0) {
        throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      }
      if (interceptorArgs.callInterceptors.length > 0 && interceptorArgs.callInterceptorProviders.length > 0) {
        throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
      }
      let interceptors = [];
      if (interceptorArgs.callInterceptors.length > 0 || interceptorArgs.callInterceptorProviders.length > 0) {
        interceptors = [].concat(interceptorArgs.callInterceptors, interceptorArgs.callInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
      } else {
        interceptors = [].concat(interceptorArgs.clientInterceptors, interceptorArgs.clientInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
      }
      const interceptorOptions = Object.assign({}, options, {
        method_definition: methodDefinition
      });
      const getCall2 = interceptors.reduceRight((nextCall, nextInterceptor) => {
        return (currentOptions) => nextInterceptor(currentOptions, nextCall);
      }, (finalOptions) => getBottomInterceptingCall(channel, finalOptions, methodDefinition));
      return getCall2(interceptorOptions);
    }
    exports2.getInterceptingCall = getInterceptingCall;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Client = void 0;
    var call_1 = require_call();
    var channel_1 = require_channel();
    var connectivity_state_1 = require_connectivity_state();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var client_interceptors_1 = require_client_interceptors();
    var CHANNEL_SYMBOL = Symbol();
    var INTERCEPTOR_SYMBOL = Symbol();
    var INTERCEPTOR_PROVIDER_SYMBOL = Symbol();
    var CALL_INVOCATION_TRANSFORMER_SYMBOL = Symbol();
    function isFunction(arg) {
      return typeof arg === "function";
    }
    function getErrorStackString(error) {
      return error.stack.split("\n").slice(1).join("\n");
    }
    var Client4 = class {
      constructor(address, credentials2, options = {}) {
        var _a, _b;
        options = Object.assign({}, options);
        this[INTERCEPTOR_SYMBOL] = (_a = options.interceptors) !== null && _a !== void 0 ? _a : [];
        delete options.interceptors;
        this[INTERCEPTOR_PROVIDER_SYMBOL] = (_b = options.interceptor_providers) !== null && _b !== void 0 ? _b : [];
        delete options.interceptor_providers;
        if (this[INTERCEPTOR_SYMBOL].length > 0 && this[INTERCEPTOR_PROVIDER_SYMBOL].length > 0) {
          throw new Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
        }
        this[CALL_INVOCATION_TRANSFORMER_SYMBOL] = options.callInvocationTransformer;
        delete options.callInvocationTransformer;
        if (options.channelOverride) {
          this[CHANNEL_SYMBOL] = options.channelOverride;
        } else if (options.channelFactoryOverride) {
          const channelFactoryOverride = options.channelFactoryOverride;
          delete options.channelFactoryOverride;
          this[CHANNEL_SYMBOL] = channelFactoryOverride(address, credentials2, options);
        } else {
          this[CHANNEL_SYMBOL] = new channel_1.ChannelImplementation(address, credentials2, options);
        }
      }
      close() {
        this[CHANNEL_SYMBOL].close();
      }
      getChannel() {
        return this[CHANNEL_SYMBOL];
      }
      waitForReady(deadline, callback) {
        const checkState = (err) => {
          if (err) {
            callback(new Error("Failed to connect before the deadline"));
            return;
          }
          let newState;
          try {
            newState = this[CHANNEL_SYMBOL].getConnectivityState(true);
          } catch (e) {
            callback(new Error("The channel has been closed"));
            return;
          }
          if (newState === connectivity_state_1.ConnectivityState.READY) {
            callback();
          } else {
            try {
              this[CHANNEL_SYMBOL].watchConnectivityState(newState, deadline, checkState);
            } catch (e) {
              callback(new Error("The channel has been closed"));
            }
          }
        };
        setImmediate(checkState);
      }
      checkOptionalUnaryResponseArguments(arg1, arg2, arg3) {
        if (isFunction(arg1)) {
          return { metadata: new metadata_1.Metadata(), options: {}, callback: arg1 };
        } else if (isFunction(arg2)) {
          if (arg1 instanceof metadata_1.Metadata) {
            return { metadata: arg1, options: {}, callback: arg2 };
          } else {
            return { metadata: new metadata_1.Metadata(), options: arg1, callback: arg2 };
          }
        } else {
          if (!(arg1 instanceof metadata_1.Metadata && arg2 instanceof Object && isFunction(arg3))) {
            throw new Error("Incorrect arguments passed");
          }
          return { metadata: arg1, options: arg2, callback: arg3 };
        }
      }
      makeUnaryRequest(method, serialize, deserialize, argument, metadata, options, callback) {
        var _a, _b;
        const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
        const methodDefinition = {
          path: method,
          requestStream: false,
          responseStream: false,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          argument,
          metadata: checkedArguments.metadata,
          call: new call_1.ClientUnaryCallImpl(),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options,
          callback: checkedArguments.callback
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const emitter = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        emitter.call = call;
        let responseMessage = null;
        let receivedStatus = false;
        let callerStackError = new Error();
        call.start(callProperties.metadata, {
          onReceiveMetadata: (metadata2) => {
            emitter.emit("metadata", metadata2);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReceiveMessage(message) {
            if (responseMessage !== null) {
              call.cancelWithStatus(constants_1.Status.INTERNAL, "Too many responses received");
            }
            responseMessage = message;
          },
          onReceiveStatus(status2) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            if (status2.code === constants_1.Status.OK) {
              if (responseMessage === null) {
                const callerStack = getErrorStackString(callerStackError);
                callProperties.callback((0, call_1.callErrorFromStatus)({
                  code: constants_1.Status.INTERNAL,
                  details: "No message received",
                  metadata: status2.metadata
                }, callerStack));
              } else {
                callProperties.callback(null, responseMessage);
              }
            } else {
              const callerStack = getErrorStackString(callerStackError);
              callProperties.callback((0, call_1.callErrorFromStatus)(status2, callerStack));
            }
            callerStackError = null;
            emitter.emit("status", status2);
          }
        });
        call.sendMessage(argument);
        call.halfClose();
        return emitter;
      }
      makeClientStreamRequest(method, serialize, deserialize, metadata, options, callback) {
        var _a, _b;
        const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata, options, callback);
        const methodDefinition = {
          path: method,
          requestStream: true,
          responseStream: false,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          metadata: checkedArguments.metadata,
          call: new call_1.ClientWritableStreamImpl(serialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options,
          callback: checkedArguments.callback
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const emitter = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        emitter.call = call;
        let responseMessage = null;
        let receivedStatus = false;
        let callerStackError = new Error();
        call.start(callProperties.metadata, {
          onReceiveMetadata: (metadata2) => {
            emitter.emit("metadata", metadata2);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReceiveMessage(message) {
            if (responseMessage !== null) {
              call.cancelWithStatus(constants_1.Status.INTERNAL, "Too many responses received");
            }
            responseMessage = message;
          },
          onReceiveStatus(status2) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            if (status2.code === constants_1.Status.OK) {
              if (responseMessage === null) {
                const callerStack = getErrorStackString(callerStackError);
                callProperties.callback((0, call_1.callErrorFromStatus)({
                  code: constants_1.Status.INTERNAL,
                  details: "No message received",
                  metadata: status2.metadata
                }, callerStack));
              } else {
                callProperties.callback(null, responseMessage);
              }
            } else {
              const callerStack = getErrorStackString(callerStackError);
              callProperties.callback((0, call_1.callErrorFromStatus)(status2, callerStack));
            }
            callerStackError = null;
            emitter.emit("status", status2);
          }
        });
        return emitter;
      }
      checkMetadataAndOptions(arg1, arg2) {
        let metadata;
        let options;
        if (arg1 instanceof metadata_1.Metadata) {
          metadata = arg1;
          if (arg2) {
            options = arg2;
          } else {
            options = {};
          }
        } else {
          if (arg1) {
            options = arg1;
          } else {
            options = {};
          }
          metadata = new metadata_1.Metadata();
        }
        return { metadata, options };
      }
      makeServerStreamRequest(method, serialize, deserialize, argument, metadata, options) {
        var _a, _b;
        const checkedArguments = this.checkMetadataAndOptions(metadata, options);
        const methodDefinition = {
          path: method,
          requestStream: false,
          responseStream: true,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          argument,
          metadata: checkedArguments.metadata,
          call: new call_1.ClientReadableStreamImpl(deserialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const stream = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        stream.call = call;
        let receivedStatus = false;
        let callerStackError = new Error();
        call.start(callProperties.metadata, {
          onReceiveMetadata(metadata2) {
            stream.emit("metadata", metadata2);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReceiveMessage(message) {
            stream.push(message);
          },
          onReceiveStatus(status2) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            stream.push(null);
            if (status2.code !== constants_1.Status.OK) {
              const callerStack = getErrorStackString(callerStackError);
              stream.emit("error", (0, call_1.callErrorFromStatus)(status2, callerStack));
            }
            callerStackError = null;
            stream.emit("status", status2);
          }
        });
        call.sendMessage(argument);
        call.halfClose();
        return stream;
      }
      makeBidiStreamRequest(method, serialize, deserialize, metadata, options) {
        var _a, _b;
        const checkedArguments = this.checkMetadataAndOptions(metadata, options);
        const methodDefinition = {
          path: method,
          requestStream: true,
          responseStream: true,
          requestSerialize: serialize,
          responseDeserialize: deserialize
        };
        let callProperties = {
          metadata: checkedArguments.metadata,
          call: new call_1.ClientDuplexStreamImpl(serialize, deserialize),
          channel: this[CHANNEL_SYMBOL],
          methodDefinition,
          callOptions: checkedArguments.options
        };
        if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
          callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
        }
        const stream = callProperties.call;
        const interceptorArgs = {
          clientInterceptors: this[INTERCEPTOR_SYMBOL],
          clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
          callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
          callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
        };
        const call = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
        stream.call = call;
        let receivedStatus = false;
        let callerStackError = new Error();
        call.start(callProperties.metadata, {
          onReceiveMetadata(metadata2) {
            stream.emit("metadata", metadata2);
          },
          onReceiveMessage(message) {
            stream.push(message);
          },
          onReceiveStatus(status2) {
            if (receivedStatus) {
              return;
            }
            receivedStatus = true;
            stream.push(null);
            if (status2.code !== constants_1.Status.OK) {
              const callerStack = getErrorStackString(callerStackError);
              stream.emit("error", (0, call_1.callErrorFromStatus)(status2, callerStack));
            }
            callerStackError = null;
            stream.emit("status", status2);
          }
        });
        return stream;
      }
    };
    exports2.Client = Client4;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/make-client.js
var require_make_client = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/make-client.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadPackageDefinition = exports2.makeClientConstructor = void 0;
    var client_1 = require_client();
    var requesterFuncs = {
      unary: client_1.Client.prototype.makeUnaryRequest,
      server_stream: client_1.Client.prototype.makeServerStreamRequest,
      client_stream: client_1.Client.prototype.makeClientStreamRequest,
      bidi: client_1.Client.prototype.makeBidiStreamRequest
    };
    function isPrototypePolluted(key) {
      return ["__proto__", "prototype", "constructor"].includes(key);
    }
    function makeClientConstructor(methods, serviceName, classOptions) {
      if (!classOptions) {
        classOptions = {};
      }
      class ServiceClientImpl extends client_1.Client {
      }
      Object.keys(methods).forEach((name) => {
        if (isPrototypePolluted(name)) {
          return;
        }
        const attrs = methods[name];
        let methodType;
        if (typeof name === "string" && name.charAt(0) === "$") {
          throw new Error("Method names cannot start with $");
        }
        if (attrs.requestStream) {
          if (attrs.responseStream) {
            methodType = "bidi";
          } else {
            methodType = "client_stream";
          }
        } else {
          if (attrs.responseStream) {
            methodType = "server_stream";
          } else {
            methodType = "unary";
          }
        }
        const serialize = attrs.requestSerialize;
        const deserialize = attrs.responseDeserialize;
        const methodFunc = partial(requesterFuncs[methodType], attrs.path, serialize, deserialize);
        ServiceClientImpl.prototype[name] = methodFunc;
        Object.assign(ServiceClientImpl.prototype[name], attrs);
        if (attrs.originalName && !isPrototypePolluted(attrs.originalName)) {
          ServiceClientImpl.prototype[attrs.originalName] = ServiceClientImpl.prototype[name];
        }
      });
      ServiceClientImpl.service = methods;
      ServiceClientImpl.serviceName = serviceName;
      return ServiceClientImpl;
    }
    exports2.makeClientConstructor = makeClientConstructor;
    function partial(fn, path, serialize, deserialize) {
      return function(...args) {
        return fn.call(this, path, serialize, deserialize, ...args);
      };
    }
    function isProtobufTypeDefinition(obj) {
      return "format" in obj;
    }
    function loadPackageDefinition(packageDef) {
      const result = {};
      for (const serviceFqn in packageDef) {
        if (Object.prototype.hasOwnProperty.call(packageDef, serviceFqn)) {
          const service = packageDef[serviceFqn];
          const nameComponents = serviceFqn.split(".");
          if (nameComponents.some((comp) => isPrototypePolluted(comp))) {
            continue;
          }
          const serviceName = nameComponents[nameComponents.length - 1];
          let current = result;
          for (const packageName of nameComponents.slice(0, -1)) {
            if (!current[packageName]) {
              current[packageName] = {};
            }
            current = current[packageName];
          }
          if (isProtobufTypeDefinition(service)) {
            current[serviceName] = service;
          } else {
            current[serviceName] = makeClientConstructor(service, serviceName, {});
          }
        }
      }
      return result;
    }
    exports2.loadPackageDefinition = loadPackageDefinition;
  }
});

// node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js"(exports2, module2) {
    "use strict";
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString2(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString2(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString2(string).toLowerCase());
    }
    function deburr(string) {
      string = toString2(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString2(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module2.exports = camelCase;
  }
});

// node_modules/.pnpm/@protobufjs+aspromise@1.1.2/node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS({
  "node_modules/.pnpm/@protobufjs+aspromise@1.1.2/node_modules/@protobufjs/aspromise/index.js"(exports2, module2) {
    "use strict";
    module2.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length)
        params[offset++] = arguments[index++];
      return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err)
              reject(err);
            else {
              var params2 = new Array(arguments.length - 1), offset2 = 0;
              while (offset2 < params2.length)
                params2[offset2++] = arguments[offset2];
              resolve.apply(null, params2);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }
});

// node_modules/.pnpm/@protobufjs+base64@1.1.2/node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS({
  "node_modules/.pnpm/@protobufjs+base64@1.1.2/node_modules/@protobufjs/base64/index.js"(exports2) {
    "use strict";
    var base64 = exports2;
    base64.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    var i;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === void 0)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  }
});

// node_modules/.pnpm/@protobufjs+eventemitter@1.1.0/node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS({
  "node_modules/.pnpm/@protobufjs+eventemitter@1.1.0/node_modules/@protobufjs/eventemitter/index.js"(exports2, module2) {
    "use strict";
    module2.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = {};
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (evt === void 0)
        this._listeners = {};
      else {
        if (fn === void 0)
          this._listeners[evt] = [];
        else {
          var listeners = this._listeners[evt];
          for (var i = 0; i < listeners.length; )
            if (listeners[i].fn === fn)
              listeners.splice(i, 1);
            else
              ++i;
        }
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (; i < arguments.length; )
          args.push(arguments[i++]);
        for (i = 0; i < listeners.length; )
          listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }
});

// node_modules/.pnpm/@protobufjs+float@1.0.2/node_modules/@protobufjs/float/index.js
var require_float = __commonJS({
  "node_modules/.pnpm/@protobufjs+float@1.0.2/node_modules/@protobufjs/float/index.js"(exports2, module2) {
    "use strict";
    module2.exports = factory(factory);
    function factory(exports3) {
      if (typeof Float32Array !== "undefined")
        (function() {
          var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
          function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
          }
          function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
          }
          exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
          exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
          function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
          }
          function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
          }
          exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
          exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
        })();
      else
        (function() {
          function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
              val = -val;
            if (val === 0)
              writeUint(1 / val > 0 ? (
                /* positive */
                0
              ) : (
                /* negative 0 */
                2147483648
              ), buf, pos);
            else if (isNaN(val))
              writeUint(2143289344, buf, pos);
            else if (val > 34028234663852886e22)
              writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 11754943508222875e-54)
              writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
            else {
              var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
              writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
          }
          exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
          exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
          function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
            return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
          }
          exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
          exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
        })();
      if (typeof Float64Array !== "undefined")
        (function() {
          var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
          function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
          }
          function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
          }
          exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
          exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
          function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
          }
          function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
          }
          exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
          exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
        })();
      else
        (function() {
          function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
              val = -val;
            if (val === 0) {
              writeUint(0, buf, pos + off0);
              writeUint(1 / val > 0 ? (
                /* positive */
                0
              ) : (
                /* negative 0 */
                2147483648
              ), buf, pos + off1);
            } else if (isNaN(val)) {
              writeUint(0, buf, pos + off0);
              writeUint(2146959360, buf, pos + off1);
            } else if (val > 17976931348623157e292) {
              writeUint(0, buf, pos + off0);
              writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
              var mantissa;
              if (val < 22250738585072014e-324) {
                mantissa = val / 5e-324;
                writeUint(mantissa >>> 0, buf, pos + off0);
                writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
              } else {
                var exponent = Math.floor(Math.log(val) / Math.LN2);
                if (exponent === 1024)
                  exponent = 1023;
                mantissa = val * Math.pow(2, -exponent);
                writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
              }
            }
          }
          exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
          exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
          function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
          }
          exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
          exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
        })();
      return exports3;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = val & 255;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }
});

// node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js
var require_inquire = __commonJS({
  "node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js"(exports, module) {
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length))
          return mod;
      } catch (e) {
      }
      return null;
    }
  }
});

// node_modules/.pnpm/@protobufjs+utf8@1.1.0/node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS({
  "node_modules/.pnpm/@protobufjs+utf8@1.1.0/node_modules/@protobufjs/utf8/index.js"(exports2) {
    "use strict";
    var utf8 = exports2;
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      var len = end - start;
      if (len < 1)
        return "";
      var parts = null, chunk = [], i = 0, t;
      while (start < end) {
        t = buffer[start++];
        if (t < 128)
          chunk[i++] = t;
        else if (t > 191 && t < 224)
          chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
          t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
          chunk[i++] = 55296 + (t >> 10);
          chunk[i++] = 56320 + (t & 1023);
        } else
          chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (parts) {
        if (i)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  }
});

// node_modules/.pnpm/@protobufjs+pool@1.1.0/node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS({
  "node_modules/.pnpm/@protobufjs+pool@1.1.0/node_modules/@protobufjs/pool/index.js"(exports2, module2) {
    "use strict";
    module2.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size2) {
        if (size2 < 1 || size2 > MAX)
          return alloc(size2);
        if (offset + size2 > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size2);
        if (offset & 7)
          offset = (offset | 7) + 1;
        return buf;
      };
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/util/longbits.js"(exports2, module2) {
    "use strict";
    module2.exports = LongBits;
    var util = require_minimal();
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber2(value) {
      if (value === 0)
        return zero;
      var sign = value < 0;
      if (sign)
        value = -value;
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295)
            hi = 0;
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if (typeof value === "number")
        return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (util.Long)
          value = util.Long.fromString(value);
        else
          return LongBits.fromNumber(parseInt(value, 10));
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber2(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo)
          hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash)
        return zero;
      return new LongBits(
        (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
        (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
      );
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(
        this.lo & 255,
        this.lo >>> 8 & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24,
        this.hi & 255,
        this.hi >>> 8 & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
      );
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(this.lo & 1);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/util/minimal.js"(exports2) {
    "use strict";
    var util = exports2;
    util.asPromise = require_aspromise();
    util.base64 = require_base64();
    util.EventEmitter = require_eventemitter();
    util.float = require_float();
    util.inquire = require_inquire();
    util.utf8 = require_utf8();
    util.pool = require_pool();
    util.LongBits = require_longbits();
    util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
    util.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    );
    util.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    );
    util.isInteger = Number.isInteger || /* istanbul ignore next */
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util.isObject = function isObject3(value) {
      return value && typeof value === "object";
    };
    util.isset = /**
     * Checks if a property on a message is considered to be present.
     * @param {Object} obj Plain object or message instance
     * @param {string} prop Property name
     * @returns {boolean} `true` if considered to be present, otherwise `false`
     */
    util.isSet = function isSet4(obj, prop) {
      var value = obj[prop];
      if (value != null && obj.hasOwnProperty(prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util.Buffer = function() {
      try {
        var Buffer2 = util.inquire("buffer").Buffer;
        return Buffer2.prototype.utf8Write ? Buffer2 : (
          /* istanbul ignore next */
          null
        );
      } catch (e) {
        return null;
      }
    }();
    util._Buffer_from = null;
    util._Buffer_allocUnsafe = null;
    util.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util.Long = /* istanbul ignore next */
    util.global.dcodeIO && /* istanbul ignore next */
    util.global.dcodeIO.Long || /* istanbul ignore next */
    util.global.Long || util.inquire("long");
    util.key2Re = /^true|false|0|1$/;
    util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util.longToHash = function longToHash(value) {
      return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };
    util.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util.LongBits.fromHash(hash);
      if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge(dst, src, ifNotSet) {
      for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === void 0 || !ifNotSet)
          dst[keys[i]] = src[keys[i]];
      return dst;
    }
    util.merge = merge;
    util.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name) {
      function CustomError(message, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge(this, properties);
      }
      CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          enumerable: false,
          configurable: true
        },
        name: {
          get: function get() {
            return name;
          },
          set: void 0,
          enumerable: false,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: true
        },
        toString: {
          value: function value() {
            return this.name + ": " + this.message;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      return CustomError;
    }
    util.newError = newError;
    util.ProtocolError = newError("ProtocolError");
    util.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util.oneOfSetter = function setOneOf(fieldNames) {
      return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name)
            delete this[fieldNames[i]];
      };
    };
    util.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util._configure = function() {
      var Buffer2 = util.Buffer;
      if (!Buffer2) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
      }
      util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
      function Buffer_from(value, encoding) {
        return new Buffer2(value, encoding);
      };
      util._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
      function Buffer_allocUnsafe(size) {
        return new Buffer2(size);
      };
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/writer.js
var require_writer = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/writer.js"(exports2, module2) {
    "use strict";
    module2.exports = Writer;
    var util = require_minimal();
    var BufferWriter;
    var LongBits = util.LongBits;
    var base64 = util.base64;
    var utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    function noop() {
    }
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    if (util.Array !== Array)
      Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
        value
      )).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
      }
      while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
      }
      buf[pos++] = val.lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
        return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/writer_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferWriter;
    var Writer = require_writer();
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require_minimal();
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else
          for (var i = 0; i < val.length; )
            buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util.isString(value))
        value = util._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      if (val.length < 40)
        util.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
        buf.utf8Write(val, pos);
      else
        buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
        this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/reader.js
var require_reader = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/reader.js"(exports2, module2) {
    "use strict";
    module2.exports = Reader;
    var util = require_minimal();
    var BufferReader;
    var LongBits = util.LongBits;
    var utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array2(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer2) {
          return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
    util.Array.prototype.slice;
    Reader.prototype.uint32 = /* @__PURE__ */ function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128)
          return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    }();
    Reader.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
        i = 0;
      } else {
        for (; i < 3; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
      }
      if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      } else {
        for (; i < 5; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4) | 0;
    };
    function readFixed64() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf))
        return this.buf.slice(start, end);
      if (start === end) {
        var nativeBuffer = util.Buffer;
        return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
      }
      return this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if (typeof length === "number") {
        if (this.pos + length > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
      } else {
        do {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
      }
      return this;
    };
    Reader.prototype.skipType = function(wireType) {
      switch (wireType) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          while ((wireType = this.uint32() & 7) !== 4) {
            this.skipType(wireType);
          }
          break;
        case 5:
          this.skip(4);
          break;
        default:
          throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : (
        /* istanbul ignore next */
        "toNumber"
      );
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/reader_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferReader;
    var Reader = require_reader();
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require_minimal();
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/rpc/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var util = require_minimal();
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request)
        throw TypeError("request must be specified");
      var self2 = this;
      if (!callback)
        return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
      if (!self2.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return void 0;
      }
      try {
        return self2.rpcImpl(
          method,
          requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
          function rpcCallback(err, response) {
            if (err) {
              self2.emit("error", err, method);
              return callback(err);
            }
            if (response === null) {
              self2.end(
                /* endedByRPC */
                true
              );
              return void 0;
            }
            if (!(response instanceof responseCtor)) {
              try {
                response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
              } catch (err2) {
                self2.emit("error", err2, method);
                return callback(err2);
              }
            }
            self2.emit("data", response, method);
            return callback(null, response);
          }
        );
      } catch (err) {
        self2.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return void 0;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        if (!endedByRPC)
          this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/rpc.js"(exports2) {
    "use strict";
    var rpc = exports2;
    rpc.Service = require_service();
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/roots.js
var require_roots = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/roots.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/index-minimal.js"(exports2) {
    "use strict";
    var protobuf = exports2;
    protobuf.build = "minimal";
    protobuf.Writer = require_writer();
    protobuf.BufferWriter = require_writer_buffer();
    protobuf.Reader = require_reader();
    protobuf.BufferReader = require_reader_buffer();
    protobuf.util = require_minimal();
    protobuf.rpc = require_rpc();
    protobuf.roots = require_roots();
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }
});

// node_modules/.pnpm/@protobufjs+codegen@2.0.4/node_modules/@protobufjs/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/.pnpm/@protobufjs+codegen@2.0.4/node_modules/@protobufjs/codegen/index.js"(exports2, module2) {
    "use strict";
    module2.exports = codegen;
    function codegen(functionParams, functionName) {
      if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = void 0;
      }
      var body = [];
      function Codegen(formatStringOrScope) {
        if (typeof formatStringOrScope !== "string") {
          var source = toString2();
          if (codegen.verbose)
            console.log("codegen: " + source);
          source = "return " + source;
          if (formatStringOrScope) {
            var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
            while (scopeOffset < scopeKeys.length) {
              scopeParams[scopeOffset] = scopeKeys[scopeOffset];
              scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
            }
            scopeParams[scopeOffset] = source;
            return Function.apply(null, scopeParams).apply(null, scopeValues);
          }
          return Function(source)();
        }
        var formatParams = new Array(arguments.length - 1), formatOffset = 0;
        while (formatOffset < formatParams.length)
          formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
          var value = formatParams[formatOffset++];
          switch ($1) {
            case "d":
            case "f":
              return String(Number(value));
            case "i":
              return String(Math.floor(value));
            case "j":
              return JSON.stringify(value);
            case "s":
              return String(value);
          }
          return "%";
        });
        if (formatOffset !== formatParams.length)
          throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
      }
      function toString2(functionNameOverride) {
        return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
      }
      Codegen.toString = toString2;
      return Codegen;
    }
    codegen.verbose = false;
  }
});

// node_modules/.pnpm/@protobufjs+fetch@1.1.0/node_modules/@protobufjs/fetch/index.js
var require_fetch = __commonJS({
  "node_modules/.pnpm/@protobufjs+fetch@1.1.0/node_modules/@protobufjs/fetch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = fetch;
    var asPromise = require_aspromise();
    var inquire2 = require_inquire();
    var fs = inquire2("fs");
    function fetch(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else if (!options)
        options = {};
      if (!callback)
        return asPromise(fetch, this, filename, options);
      if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
        });
      return fetch.xhr(filename, options, callback);
    }
    fetch.xhr = function fetch_xhr(filename, options, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function fetchOnReadyStateChange() {
        if (xhr.readyState !== 4)
          return void 0;
        if (xhr.status !== 0 && xhr.status !== 200)
          return callback(Error("status " + xhr.status));
        if (options.binary) {
          var buffer = xhr.response;
          if (!buffer) {
            buffer = [];
            for (var i = 0; i < xhr.responseText.length; ++i)
              buffer.push(xhr.responseText.charCodeAt(i) & 255);
          }
          return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
      };
      if (options.binary) {
        if ("overrideMimeType" in xhr)
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
      }
      xhr.open("GET", filename);
      xhr.send();
    };
  }
});

// node_modules/.pnpm/@protobufjs+path@1.1.2/node_modules/@protobufjs/path/index.js
var require_path = __commonJS({
  "node_modules/.pnpm/@protobufjs+path@1.1.2/node_modules/@protobufjs/path/index.js"(exports2) {
    "use strict";
    var path = exports2;
    var isAbsolute = (
      /**
       * Tests if the specified path is absolute.
       * @param {string} path Path to test
       * @returns {boolean} `true` if path is absolute
       */
      path.isAbsolute = function isAbsolute2(path2) {
        return /^(?:\/|\w+:)/.test(path2);
      }
    );
    var normalize = (
      /**
       * Normalizes the specified path.
       * @param {string} path Path to normalize
       * @returns {string} Normalized path
       */
      path.normalize = function normalize2(path2) {
        path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
        if (absolute)
          prefix = parts.shift() + "/";
        for (var i = 0; i < parts.length; ) {
          if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
              parts.splice(--i, 2);
            else if (absolute)
              parts.splice(i, 1);
            else
              ++i;
          } else if (parts[i] === ".")
            parts.splice(i, 1);
          else
            ++i;
        }
        return prefix + parts.join("/");
      }
    );
    path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
      if (!alreadyNormalized)
        includePath = normalize(includePath);
      if (isAbsolute(includePath))
        return includePath;
      if (!alreadyNormalized)
        originPath = normalize(originPath);
      return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/types.js"(exports2) {
    "use strict";
    var types = exports2;
    var util = require_util();
    var s = [
      "double",
      // 0
      "float",
      // 1
      "int32",
      // 2
      "uint32",
      // 3
      "sint32",
      // 4
      "fixed32",
      // 5
      "sfixed32",
      // 6
      "int64",
      // 7
      "uint64",
      // 8
      "sint64",
      // 9
      "fixed64",
      // 10
      "sfixed64",
      // 11
      "bool",
      // 12
      "string",
      // 13
      "bytes"
      // 14
    ];
    function bake(values, offset) {
      var i = 0, o = {};
      offset |= 0;
      while (i < values.length)
        o[s[i + offset]] = values[i++];
      return o;
    }
    types.basic = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2,
      /* bytes    */
      2
    ]);
    types.defaults = bake([
      /* double   */
      0,
      /* float    */
      0,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      0,
      /* sfixed32 */
      0,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      0,
      /* sfixed64 */
      0,
      /* bool     */
      false,
      /* string   */
      "",
      /* bytes    */
      util.emptyArray,
      /* message  */
      null
    ]);
    types.long = bake([
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1
    ], 7);
    types.mapKey = bake([
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2
    ], 2);
    types.packed = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0
    ]);
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/field.js
var require_field = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/field.js"(exports2, module2) {
    "use strict";
    module2.exports = Field;
    var ReflectionObject = require_object();
    ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    var Type;
    var ruleRe = /^required|optional|repeated$/;
    Field.fromJSON = function fromJSON(name, json) {
      return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
    };
    function Field(name, id, type, rule, extend, options, comment) {
      if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = void 0;
      } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = void 0;
      }
      ReflectionObject.call(this, name, options);
      if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");
      if (!util.isString(type))
        throw TypeError("type must be a string");
      if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");
      if (extend !== void 0 && !util.isString(extend))
        throw TypeError("extend must be a string");
      if (rule === "proto3_optional") {
        rule = "optional";
      }
      this.rule = rule && rule !== "optional" ? rule : void 0;
      this.type = type;
      this.id = id;
      this.extend = extend || void 0;
      this.required = rule === "required";
      this.optional = !this.required;
      this.repeated = rule === "repeated";
      this.map = false;
      this.message = null;
      this.partOf = null;
      this.typeDefault = null;
      this.defaultValue = null;
      this.long = util.Long ? types.long[type] !== void 0 : (
        /* istanbul ignore next */
        false
      );
      this.bytes = type === "bytes";
      this.resolvedType = null;
      this.extensionField = null;
      this.declaringField = null;
      this._packed = null;
      this.comment = comment;
    }
    Object.defineProperty(Field.prototype, "packed", {
      get: function() {
        if (this._packed === null)
          this._packed = this.getOption("packed") !== false;
        return this._packed;
      }
    });
    Field.prototype.setOption = function setOption(name, value, ifNotSet) {
      if (name === "packed")
        this._packed = null;
      return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
    };
    Field.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "rule",
        this.rule !== "optional" && this.rule || void 0,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Field.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if ((this.typeDefault = types.defaults[this.type]) === void 0) {
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
          this.typeDefault = null;
        else
          this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      } else if (this.options && this.options.proto3_optional) {
        this.typeDefault = null;
      }
      if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
          this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
      if (this.options) {
        if (this.options.packed === true || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
          delete this.options.packed;
        if (!Object.keys(this.options).length)
          this.options = void 0;
      }
      if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
        if (Object.freeze)
          Object.freeze(this.typeDefault);
      } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
          util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
          util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
      }
      if (this.map)
        this.defaultValue = util.emptyObject;
      else if (this.repeated)
        this.defaultValue = util.emptyArray;
      else
        this.defaultValue = this.typeDefault;
      if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;
      return ReflectionObject.prototype.resolve.call(this);
    };
    Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
      if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;
      else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;
      return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
      };
    };
    Field._configure = function configure(Type_) {
      Type = Type_;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/oneof.js
var require_oneof = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/oneof.js"(exports2, module2) {
    "use strict";
    module2.exports = OneOf;
    var ReflectionObject = require_object();
    ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
    var Field = require_field();
    var util = require_util();
    function OneOf(name, fieldNames, options, comment) {
      if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = void 0;
      }
      ReflectionObject.call(this, name, options);
      if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");
      this.oneof = fieldNames || [];
      this.fieldsArray = [];
      this.comment = comment;
    }
    OneOf.fromJSON = function fromJSON(name, json) {
      return new OneOf(name, json.oneof, json.options, json.comment);
    };
    OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "oneof",
        this.oneof,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    function addFieldsToParent(oneof) {
      if (oneof.parent) {
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
          if (!oneof.fieldsArray[i].parent)
            oneof.parent.add(oneof.fieldsArray[i]);
      }
    }
    OneOf.prototype.add = function add2(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
      this.oneof.push(field.name);
      this.fieldsArray.push(field);
      field.partOf = this;
      addFieldsToParent(this);
      return this;
    };
    OneOf.prototype.remove = function remove(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      var index = this.fieldsArray.indexOf(field);
      if (index < 0)
        throw Error(field + " is not a member of " + this);
      this.fieldsArray.splice(index, 1);
      index = this.oneof.indexOf(field.name);
      if (index > -1)
        this.oneof.splice(index, 1);
      field.partOf = null;
      return this;
    };
    OneOf.prototype.onAdd = function onAdd(parent) {
      ReflectionObject.prototype.onAdd.call(this, parent);
      var self2 = this;
      for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
          field.partOf = self2;
          self2.fieldsArray.push(field);
        }
      }
      addFieldsToParent(this);
    };
    OneOf.prototype.onRemove = function onRemove(parent) {
      for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
          field.parent.remove(field);
      ReflectionObject.prototype.onRemove.call(this, parent);
    };
    OneOf.d = function decorateOneOf() {
      var fieldNames = new Array(arguments.length), index = 0;
      while (index < arguments.length)
        fieldNames[index] = arguments[index++];
      return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
          get: util.oneOfGetter(fieldNames),
          set: util.oneOfSetter(fieldNames)
        });
      };
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/namespace.js
var require_namespace = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/namespace.js"(exports2, module2) {
    "use strict";
    module2.exports = Namespace;
    var ReflectionObject = require_object();
    ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
    var Field = require_field();
    var util = require_util();
    var OneOf = require_oneof();
    var Type;
    var Service;
    var Enum;
    Namespace.fromJSON = function fromJSON(name, json) {
      return new Namespace(name, json.options).addJSON(json.nested);
    };
    function arrayToJSON(array, toJSONOptions) {
      if (!(array && array.length))
        return void 0;
      var obj = {};
      for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
      return obj;
    }
    Namespace.arrayToJSON = arrayToJSON;
    Namespace.isReservedId = function isReservedId(reserved, id) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
            return true;
      }
      return false;
    };
    Namespace.isReservedName = function isReservedName(reserved, name) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (reserved[i] === name)
            return true;
      }
      return false;
    };
    function Namespace(name, options) {
      ReflectionObject.call(this, name, options);
      this.nested = void 0;
      this._nestedArray = null;
    }
    function clearCache(namespace) {
      namespace._nestedArray = null;
      return namespace;
    }
    Object.defineProperty(Namespace.prototype, "nestedArray", {
      get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
      }
    });
    Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
      return util.toObject([
        "options",
        this.options,
        "nested",
        arrayToJSON(this.nestedArray, toJSONOptions)
      ]);
    };
    Namespace.prototype.addJSON = function addJSON(nestedJson) {
      var ns = this;
      if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
          nested = nestedJson[names[i]];
          ns.add(
            // most to least likely
            (nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : nested.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i], nested)
          );
        }
      }
      return this;
    };
    Namespace.prototype.get = function get(name) {
      return this.nested && this.nested[name] || null;
    };
    Namespace.prototype.getEnum = function getEnum(name) {
      if (this.nested && this.nested[name] instanceof Enum)
        return this.nested[name].values;
      throw Error("no such enum: " + name);
    };
    Namespace.prototype.add = function add2(object) {
      if (!(object instanceof Field && object.extend !== void 0 || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");
      if (!this.nested)
        this.nested = {};
      else {
        var prev = this.get(object.name);
        if (prev) {
          if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
            var nested = prev.nestedArray;
            for (var i = 0; i < nested.length; ++i)
              object.add(nested[i]);
            this.remove(prev);
            if (!this.nested)
              this.nested = {};
            object.setOptions(prev.options, true);
          } else
            throw Error("duplicate name '" + object.name + "' in " + this);
        }
      }
      this.nested[object.name] = object;
      object.onAdd(this);
      return clearCache(this);
    };
    Namespace.prototype.remove = function remove(object) {
      if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
      if (object.parent !== this)
        throw Error(object + " is not a member of " + this);
      delete this.nested[object.name];
      if (!Object.keys(this.nested).length)
        this.nested = void 0;
      object.onRemove(this);
      return clearCache(this);
    };
    Namespace.prototype.define = function define2(path, json) {
      if (util.isString(path))
        path = path.split(".");
      else if (!Array.isArray(path))
        throw TypeError("illegal path");
      if (path && path.length && path[0] === "")
        throw Error("path must be relative");
      var ptr = this;
      while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
          ptr = ptr.nested[part];
          if (!(ptr instanceof Namespace))
            throw Error("path conflicts with non-namespace objects");
        } else
          ptr.add(ptr = new Namespace(part));
      }
      if (json)
        ptr.addJSON(json);
      return ptr;
    };
    Namespace.prototype.resolveAll = function resolveAll() {
      var nested = this.nestedArray, i = 0;
      while (i < nested.length)
        if (nested[i] instanceof Namespace)
          nested[i++].resolveAll();
        else
          nested[i++].resolve();
      return this.resolve();
    };
    Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
      if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = void 0;
      } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [filterTypes];
      if (util.isString(path) && path.length) {
        if (path === ".")
          return this.root;
        path = path.split(".");
      } else if (!path.length)
        return this;
      if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);
      var found = this.get(path[0]);
      if (found) {
        if (path.length === 1) {
          if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
            return found;
        } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
          return found;
      } else
        for (var i = 0; i < this.nestedArray.length; ++i)
          if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
            return found;
      if (this.parent === null || parentAlreadyChecked)
        return null;
      return this.parent.lookup(path, filterTypes);
    };
    Namespace.prototype.lookupType = function lookupType(path) {
      var found = this.lookup(path, [Type]);
      if (!found)
        throw Error("no such type: " + path);
      return found;
    };
    Namespace.prototype.lookupEnum = function lookupEnum(path) {
      var found = this.lookup(path, [Enum]);
      if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
      var found = this.lookup(path, [Type, Enum]);
      if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupService = function lookupService(path) {
      var found = this.lookup(path, [Service]);
      if (!found)
        throw Error("no such Service '" + path + "' in " + this);
      return found;
    };
    Namespace._configure = function(Type_, Service_, Enum_) {
      Type = Type_;
      Service = Service_;
      Enum = Enum_;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/mapfield.js
var require_mapfield = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/mapfield.js"(exports2, module2) {
    "use strict";
    module2.exports = MapField;
    var Field = require_field();
    ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
    var types = require_types();
    var util = require_util();
    function MapField(name, id, keyType, type, options, comment) {
      Field.call(this, name, id, type, void 0, void 0, options, comment);
      if (!util.isString(keyType))
        throw TypeError("keyType must be a string");
      this.keyType = keyType;
      this.resolvedKeyType = null;
      this.map = true;
    }
    MapField.fromJSON = function fromJSON(name, json) {
      return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
    };
    MapField.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "keyType",
        this.keyType,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    MapField.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (types.mapKey[this.keyType] === void 0)
        throw Error("invalid key type: " + this.keyType);
      return Field.prototype.resolve.call(this);
    };
    MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
      if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;
      else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;
      return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
      };
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/method.js
var require_method = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/method.js"(exports2, module2) {
    "use strict";
    module2.exports = Method;
    var ReflectionObject = require_object();
    ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
    var util = require_util();
    function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
      if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = void 0;
      } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = void 0;
      }
      if (!(type === void 0 || util.isString(type)))
        throw TypeError("type must be a string");
      if (!util.isString(requestType))
        throw TypeError("requestType must be a string");
      if (!util.isString(responseType))
        throw TypeError("responseType must be a string");
      ReflectionObject.call(this, name, options);
      this.type = type || "rpc";
      this.requestType = requestType;
      this.requestStream = requestStream ? true : void 0;
      this.responseType = responseType;
      this.responseStream = responseStream ? true : void 0;
      this.resolvedRequestType = null;
      this.resolvedResponseType = null;
      this.comment = comment;
      this.parsedOptions = parsedOptions;
    }
    Method.fromJSON = function fromJSON(name, json) {
      return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
    };
    Method.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "type",
        this.type !== "rpc" && /* istanbul ignore next */
        this.type || void 0,
        "requestType",
        this.requestType,
        "requestStream",
        this.requestStream,
        "responseType",
        this.responseType,
        "responseStream",
        this.responseStream,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0,
        "parsedOptions",
        this.parsedOptions
      ]);
    };
    Method.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return ReflectionObject.prototype.resolve.call(this);
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/service.js
var require_service2 = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var Namespace = require_namespace();
    ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
    var Method = require_method();
    var util = require_util();
    var rpc = require_rpc();
    function Service(name, options) {
      Namespace.call(this, name, options);
      this.methods = {};
      this._methodsArray = null;
    }
    Service.fromJSON = function fromJSON(name, json) {
      var service = new Service(name, json.options);
      if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
          service.add(Method.fromJSON(names[i], json.methods[names[i]]));
      if (json.nested)
        service.addJSON(json.nested);
      service.comment = json.comment;
      return service;
    };
    Service.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        inherited && inherited.options || void 0,
        "methods",
        Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
        {},
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Object.defineProperty(Service.prototype, "methodsArray", {
      get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
      }
    });
    function clearCache(service) {
      service._methodsArray = null;
      return service;
    }
    Service.prototype.get = function get(name) {
      return this.methods[name] || Namespace.prototype.get.call(this, name);
    };
    Service.prototype.resolveAll = function resolveAll() {
      var methods = this.methodsArray;
      for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
      return Namespace.prototype.resolve.call(this);
    };
    Service.prototype.add = function add2(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Method) {
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Service.prototype.remove = function remove(object) {
      if (object instanceof Method) {
        if (this.methods[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
      for (var i = 0, method; i < /* initializes */
      this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
          m: method,
          q: method.resolvedRequestType.ctor,
          s: method.resolvedResponseType.ctor
        });
      }
      return rpcService;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/message.js
var require_message = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/message.js"(exports2, module2) {
    "use strict";
    module2.exports = Message;
    var util = require_minimal();
    function Message(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          this[keys[i]] = properties[keys[i]];
    }
    Message.create = function create(properties) {
      return this.$type.create(properties);
    };
    Message.encode = function encode(message, writer) {
      return this.$type.encode(message, writer);
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.$type.encodeDelimited(message, writer);
    };
    Message.decode = function decode(reader) {
      return this.$type.decode(reader);
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      return this.$type.decodeDelimited(reader);
    };
    Message.verify = function verify(message) {
      return this.$type.verify(message);
    };
    Message.fromObject = function fromObject(object) {
      return this.$type.fromObject(object);
    };
    Message.toObject = function toObject(message, options) {
      return this.$type.toObject(message, options);
    };
    Message.prototype.toJSON = function toJSON() {
      return this.$type.toObject(this, util.toJSONOptions);
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/decoder.js
var require_decoder = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/decoder.js"(exports2, module2) {
    "use strict";
    module2.exports = decoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function missing(field) {
      return "missing required '" + field.name + "'";
    }
    function decoder(mtype) {
      var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
        return field2.map;
      }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
      if (mtype.group)
        gen("if((t&7)===4)")("break");
      gen("switch(t>>>3){");
      var i = 0;
      for (; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
        gen("case %i: {", field.id);
        if (field.map) {
          gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
          if (types.defaults[field.keyType] !== void 0)
            gen("k=%j", types.defaults[field.keyType]);
          else
            gen("k=null");
          if (types.defaults[type] !== void 0)
            gen("value=%j", types.defaults[type]);
          else
            gen("value=null");
          gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
          if (types.basic[type] === void 0)
            gen("value=types[%i].decode(r,r.uint32())", i);
          else
            gen("value=r.%s()", type);
          gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
          if (types.long[field.keyType] !== void 0)
            gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
          else
            gen("%s[k]=value", ref);
        } else if (field.repeated) {
          gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
          if (types.packed[type] !== void 0)
            gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
          if (types.basic[type] === void 0)
            gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
          else
            gen("%s.push(r.%s())", ref, type);
        } else if (types.basic[type] === void 0)
          gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);
        else
          gen("%s=r.%s()", ref, type);
        gen("break")("}");
      }
      gen("default:")("r.skipType(t&7)")("break")("}")("}");
      for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required)
          gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
      }
      return gen("return m");
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/verifier.js
var require_verifier = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/verifier.js"(exports2, module2) {
    "use strict";
    module2.exports = verifier;
    var Enum = require_enum();
    var util = require_util();
    function invalid(field, expected) {
      return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
    }
    function genVerifyValue(gen, field, fieldIndex, ref) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
          for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j)
            gen("case %i:", field.resolvedType.values[keys[j]]);
          gen("break")("}");
        } else {
          gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
        }
      } else {
        switch (field.type) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
            break;
          case "float":
          case "double":
            gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
            break;
          case "bool":
            gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
            break;
          case "string":
            gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
            break;
          case "bytes":
            gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
            break;
        }
      }
      return gen;
    }
    function genVerifyKey(gen, field, ref) {
      switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
          break;
        case "bool":
          gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
          break;
      }
      return gen;
    }
    function verifier(mtype) {
      var gen = util.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
      var oneofs = mtype.oneofsArray, seenFirstField = {};
      if (oneofs.length)
        gen("var p={}");
      for (var i = 0; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
        if (field.optional)
          gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
        if (field.map) {
          gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
          genVerifyKey(gen, field, "k[i]");
          genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
        } else if (field.repeated) {
          gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
          genVerifyValue(gen, field, i, ref + "[i]")("}");
        } else {
          if (field.partOf) {
            var oneofProp = util.safeProp(field.partOf.name);
            if (seenFirstField[field.partOf.name] === 1)
              gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
            seenFirstField[field.partOf.name] = 1;
            gen("p%s=1", oneofProp);
          }
          genVerifyValue(gen, field, i, ref);
        }
        if (field.optional)
          gen("}");
      }
      return gen("return null");
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/converter.js
var require_converter = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/converter.js"(exports2) {
    "use strict";
    var converter = exports2;
    var Enum = require_enum();
    var util = require_util();
    function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
      var defaultAlreadyEmitted = false;
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(d%s){", prop);
          for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
            if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
              gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
              if (!field.repeated)
                gen("break");
              defaultAlreadyEmitted = true;
            }
            gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
          }
          gen("}");
        } else
          gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("m%s=Number(d%s)", prop, prop);
            break;
          case "uint32":
          case "fixed32":
            gen("m%s=d%s>>>0", prop, prop);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            gen("m%s=d%s|0", prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
            break;
          case "bytes":
            gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
            break;
          case "string":
            gen("m%s=String(d%s)", prop, prop);
            break;
          case "bool":
            gen("m%s=Boolean(d%s)", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.fromObject = function fromObject(mtype) {
      var fields = mtype.fieldsArray;
      var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!fields.length)
        return gen("return new this.ctor");
      gen("var m=new this.ctor");
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), prop = util.safeProp(field.name);
        if (field.map) {
          gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[ks[i]]"
          )("}")("}");
        } else if (field.repeated) {
          gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[i]"
          )("}")("}");
        } else {
          if (!(field.resolvedType instanceof Enum))
            gen("if(d%s!=null){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop
          );
          if (!(field.resolvedType instanceof Enum))
            gen("}");
        }
      }
      return gen("return m");
    };
    function genValuePartial_toObject(gen, field, fieldIndex, prop) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum)
          gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
        else
          gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
            break;
          case "bytes":
            gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
            break;
          default:
            gen("d%s=m%s", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.toObject = function toObject(mtype) {
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
      if (!fields.length)
        return util.codegen()("return {}");
      var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
      var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
      for (; i < fields.length; ++i)
        if (!fields[i].partOf)
          (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      if (repeatedFields.length) {
        gen("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i)
          gen("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen("}");
      }
      if (mapFields.length) {
        gen("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i)
          gen("d%s={}", util.safeProp(mapFields[i].name));
        gen("}");
      }
      if (normalFields.length) {
        gen("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
          var field = normalFields[i], prop = util.safeProp(field.name);
          if (field.resolvedType instanceof Enum)
            gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
          else if (field.long)
            gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
          else if (field.bytes) {
            var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
            gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
          } else
            gen("d%s=%j", prop, field.typeDefault);
        }
        gen("}");
      }
      var hasKs2 = false;
      for (i = 0; i < fields.length; ++i) {
        var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
        if (field.map) {
          if (!hasKs2) {
            hasKs2 = true;
            gen("var ks2");
          }
          gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[ks2[j]]"
          )("}");
        } else if (field.repeated) {
          gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[j]"
          )("}");
        } else {
          gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop
          );
          if (field.partOf)
            gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen("}");
      }
      return gen("return d");
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/wrappers.js
var require_wrappers = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/wrappers.js"(exports2) {
    "use strict";
    var wrappers = exports2;
    var Message = require_message();
    wrappers[".google.protobuf.Any"] = {
      fromObject: function(object) {
        if (object && object["@type"]) {
          var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type) {
            var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
            if (type_url.indexOf("/") === -1) {
              type_url = "/" + type_url;
            }
            return this.create({
              type_url,
              value: type.encode(type.fromObject(object)).finish()
            });
          }
        }
        return this.fromObject(object);
      },
      toObject: function(message, options) {
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name = "";
        if (options && options.json && message.type_url && message.value) {
          name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
          prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type)
            message = type.decode(message.value);
        }
        if (!(message instanceof this.ctor) && message instanceof Message) {
          var object = message.$type.toObject(message, options);
          var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
          if (prefix === "") {
            prefix = googleApi;
          }
          name = prefix + messageName;
          object["@type"] = name;
          return object;
        }
        return this.toObject(message, options);
      }
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/type.js
var require_type = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/type.js"(exports2, module2) {
    "use strict";
    module2.exports = Type;
    var Namespace = require_namespace();
    ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
    var Enum = require_enum();
    var OneOf = require_oneof();
    var Field = require_field();
    var MapField = require_mapfield();
    var Service = require_service2();
    var Message = require_message();
    var Reader = require_reader();
    var Writer = require_writer();
    var util = require_util();
    var encoder = require_encoder();
    var decoder = require_decoder();
    var verifier = require_verifier();
    var converter = require_converter();
    var wrappers = require_wrappers();
    function Type(name, options) {
      Namespace.call(this, name, options);
      this.fields = {};
      this.oneofs = void 0;
      this.extensions = void 0;
      this.reserved = void 0;
      this.group = void 0;
      this._fieldsById = null;
      this._fieldsArray = null;
      this._oneofsArray = null;
      this._ctor = null;
    }
    Object.defineProperties(Type.prototype, {
      /**
       * Message fields by id.
       * @name Type#fieldsById
       * @type {Object.<number,Field>}
       * @readonly
       */
      fieldsById: {
        get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
            var field = this.fields[names[i]], id = field.id;
            if (this._fieldsById[id])
              throw Error("duplicate id " + id + " in " + this);
            this._fieldsById[id] = field;
          }
          return this._fieldsById;
        }
      },
      /**
       * Fields of this message as an array for iteration.
       * @name Type#fieldsArray
       * @type {Field[]}
       * @readonly
       */
      fieldsArray: {
        get: function() {
          return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
      },
      /**
       * Oneofs of this message as an array for iteration.
       * @name Type#oneofsArray
       * @type {OneOf[]}
       * @readonly
       */
      oneofsArray: {
        get: function() {
          return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
      },
      /**
       * The registered constructor, if any registered, otherwise a generic constructor.
       * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
       * @name Type#ctor
       * @type {Constructor<{}>}
       */
      ctor: {
        get: function() {
          return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {
          var prototype = ctor.prototype;
          if (!(prototype instanceof Message)) {
            (ctor.prototype = new Message()).constructor = ctor;
            util.merge(ctor.prototype, prototype);
          }
          ctor.$type = ctor.prototype.$type = this;
          util.merge(ctor, Message, true);
          this._ctor = ctor;
          var i = 0;
          for (; i < /* initializes */
          this.fieldsArray.length; ++i)
            this._fieldsArray[i].resolve();
          var ctorProperties = {};
          for (i = 0; i < /* initializes */
          this.oneofsArray.length; ++i)
            ctorProperties[this._oneofsArray[i].resolve().name] = {
              get: util.oneOfGetter(this._oneofsArray[i].oneof),
              set: util.oneOfSetter(this._oneofsArray[i].oneof)
            };
          if (i)
            Object.defineProperties(ctor.prototype, ctorProperties);
        }
      }
    });
    Type.generateConstructor = function generateConstructor(mtype) {
      var gen = util.codegen(["p"], mtype.name);
      for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map)
          gen("this%s={}", util.safeProp(field.name));
        else if (field.repeated)
          gen("this%s=[]", util.safeProp(field.name));
      return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
    };
    function clearCache(type) {
      type._fieldsById = type._fieldsArray = type._oneofsArray = null;
      delete type.encode;
      delete type.decode;
      delete type.verify;
      return type;
    }
    Type.fromJSON = function fromJSON(name, json) {
      var type = new Type(name, json.options);
      type.extensions = json.extensions;
      type.reserved = json.reserved;
      var names = Object.keys(json.fields), i = 0;
      for (; i < names.length; ++i)
        type.add(
          (typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]])
        );
      if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
          type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
      if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
          var nested = json.nested[names[i]];
          type.add(
            // most to least likely
            (nested.id !== void 0 ? Field.fromJSON : nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i], nested)
          );
        }
      if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
      if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
      if (json.group)
        type.group = true;
      if (json.comment)
        type.comment = json.comment;
      return type;
    };
    Type.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        inherited && inherited.options || void 0,
        "oneofs",
        Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields",
        Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
          return !obj.declaringField;
        }), toJSONOptions) || {},
        "extensions",
        this.extensions && this.extensions.length ? this.extensions : void 0,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "group",
        this.group || void 0,
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Type.prototype.resolveAll = function resolveAll() {
      var fields = this.fieldsArray, i = 0;
      while (i < fields.length)
        fields[i++].resolve();
      var oneofs = this.oneofsArray;
      i = 0;
      while (i < oneofs.length)
        oneofs[i++].resolve();
      return Namespace.prototype.resolveAll.call(this);
    };
    Type.prototype.get = function get(name) {
      return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
    };
    Type.prototype.add = function add2(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Field && object.extend === void 0) {
        if (this._fieldsById ? (
          /* istanbul ignore next */
          this._fieldsById[object.id]
        ) : this.fieldsById[object.id])
          throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
          throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name))
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.parent)
          object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs)
          this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Type.prototype.remove = function remove(object) {
      if (object instanceof Field && object.extend === void 0) {
        if (!this.fields || this.fields[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs || this.oneofs[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Type.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Type.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
    Type.prototype.create = function create(properties) {
      return new this.ctor(properties);
    };
    Type.prototype.setup = function setup() {
      var fullName = this.fullName, types = [];
      for (var i = 0; i < /* initializes */
      this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);
      this.encode = encoder(this)({
        Writer,
        types,
        util
      });
      this.decode = decoder(this)({
        Reader,
        types,
        util
      });
      this.verify = verifier(this)({
        types,
        util
      });
      this.fromObject = converter.fromObject(this)({
        types,
        util
      });
      this.toObject = converter.toObject(this)({
        types,
        util
      });
      var wrapper = wrappers[fullName];
      if (wrapper) {
        var originalThis = Object.create(this);
        originalThis.fromObject = this.fromObject;
        this.fromObject = wrapper.fromObject.bind(originalThis);
        originalThis.toObject = this.toObject;
        this.toObject = wrapper.toObject.bind(originalThis);
      }
      return this;
    };
    Type.prototype.encode = function encode_setup(message, writer) {
      return this.setup().encode(message, writer);
    };
    Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };
    Type.prototype.decode = function decode_setup(reader, length) {
      return this.setup().decode(reader, length);
    };
    Type.prototype.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof Reader))
        reader = Reader.create(reader);
      return this.decode(reader, reader.uint32());
    };
    Type.prototype.verify = function verify_setup(message) {
      return this.setup().verify(message);
    };
    Type.prototype.fromObject = function fromObject(object) {
      return this.setup().fromObject(object);
    };
    Type.prototype.toObject = function toObject(message, options) {
      return this.setup().toObject(message, options);
    };
    Type.d = function decorateType(typeName) {
      return function typeDecorator(target) {
        util.decorateType(target, typeName);
      };
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/root.js
var require_root = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/root.js"(exports2, module2) {
    "use strict";
    module2.exports = Root;
    var Namespace = require_namespace();
    ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
    var Field = require_field();
    var Enum = require_enum();
    var OneOf = require_oneof();
    var util = require_util();
    var Type;
    var parse;
    var common;
    function Root(options) {
      Namespace.call(this, "", options);
      this.deferred = [];
      this.files = [];
    }
    Root.fromJSON = function fromJSON(json, root) {
      if (!root)
        root = new Root();
      if (json.options)
        root.setOptions(json.options);
      return root.addJSON(json.nested);
    };
    Root.prototype.resolvePath = util.path.resolve;
    Root.prototype.fetch = util.fetch;
    function SYNC() {
    }
    Root.prototype.load = function load(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = void 0;
      }
      var self2 = this;
      if (!callback)
        return util.asPromise(load, self2, filename, options);
      var sync = callback === SYNC;
      function finish(err, root) {
        if (!callback)
          return;
        if (sync)
          throw err;
        var cb = callback;
        callback = null;
        cb(err, root);
      }
      function getBundledFileName(filename2) {
        var idx = filename2.lastIndexOf("google/protobuf/");
        if (idx > -1) {
          var altname = filename2.substring(idx);
          if (altname in common)
            return altname;
        }
        return null;
      }
      function process2(filename2, source) {
        try {
          if (util.isString(source) && source.charAt(0) === "{")
            source = JSON.parse(source);
          if (!util.isString(source))
            self2.setOptions(source.options).addJSON(source.nested);
          else {
            parse.filename = filename2;
            var parsed = parse(source, self2, options), resolved2, i2 = 0;
            if (parsed.imports) {
              for (; i2 < parsed.imports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                  fetch(resolved2);
            }
            if (parsed.weakImports) {
              for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                  fetch(resolved2, true);
            }
          }
        } catch (err) {
          finish(err);
        }
        if (!sync && !queued)
          finish(null, self2);
      }
      function fetch(filename2, weak) {
        filename2 = getBundledFileName(filename2) || filename2;
        if (self2.files.indexOf(filename2) > -1)
          return;
        self2.files.push(filename2);
        if (filename2 in common) {
          if (sync)
            process2(filename2, common[filename2]);
          else {
            ++queued;
            setTimeout(function() {
              --queued;
              process2(filename2, common[filename2]);
            });
          }
          return;
        }
        if (sync) {
          var source;
          try {
            source = util.fs.readFileSync(filename2).toString("utf8");
          } catch (err) {
            if (!weak)
              finish(err);
            return;
          }
          process2(filename2, source);
        } else {
          ++queued;
          self2.fetch(filename2, function(err, source2) {
            --queued;
            if (!callback)
              return;
            if (err) {
              if (!weak)
                finish(err);
              else if (!queued)
                finish(null, self2);
              return;
            }
            process2(filename2, source2);
          });
        }
      }
      var queued = 0;
      if (util.isString(filename))
        filename = [filename];
      for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self2.resolvePath("", filename[i]))
          fetch(resolved);
      if (sync)
        return self2;
      if (!queued)
        finish(null, self2);
      return void 0;
    };
    Root.prototype.loadSync = function loadSync(filename, options) {
      if (!util.isNode)
        throw Error("not supported");
      return this.load(filename, options, SYNC);
    };
    Root.prototype.resolveAll = function resolveAll() {
      if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
          return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
      return Namespace.prototype.resolveAll.call(this);
    };
    var exposeRe = /^[A-Z]/;
    function tryHandleExtension(root, field) {
      var extendedType = field.parent.lookup(field.extend);
      if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, void 0, field.options);
        if (extendedType.get(sisterField.name)) {
          return true;
        }
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
      }
      return false;
    }
    Root.prototype._handleAdd = function _handleAdd(object) {
      if (object instanceof Field) {
        if (
          /* an extension field (implies not part of a oneof) */
          object.extend !== void 0 && /* not already handled */
          !object.extensionField
        ) {
          if (!tryHandleExtension(this, object))
            this.deferred.push(object);
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          object.parent[object.name] = object.values;
      } else if (!(object instanceof OneOf)) {
        if (object instanceof Type)
          for (var i = 0; i < this.deferred.length; )
            if (tryHandleExtension(this, this.deferred[i]))
              this.deferred.splice(i, 1);
            else
              ++i;
        for (var j = 0; j < /* initializes */
        object.nestedArray.length; ++j)
          this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
          object.parent[object.name] = object;
      }
    };
    Root.prototype._handleRemove = function _handleRemove(object) {
      if (object instanceof Field) {
        if (
          /* an extension field */
          object.extend !== void 0
        ) {
          if (
            /* already handled */
            object.extensionField
          ) {
            object.extensionField.parent.remove(object.extensionField);
            object.extensionField = null;
          } else {
            var index = this.deferred.indexOf(object);
            if (index > -1)
              this.deferred.splice(index, 1);
          }
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      } else if (object instanceof Namespace) {
        for (var i = 0; i < /* initializes */
        object.nestedArray.length; ++i)
          this._handleRemove(object._nestedArray[i]);
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      }
    };
    Root._configure = function(Type_, parse_, common_) {
      Type = Type_;
      parse = parse_;
      common = common_;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/util.js"(exports2, module2) {
    "use strict";
    var util = module2.exports = require_minimal();
    var roots = require_roots();
    var Type;
    var Enum;
    util.codegen = require_codegen();
    util.fetch = require_fetch();
    util.path = require_path();
    util.fs = util.inquire("fs");
    util.toArray = function toArray(object) {
      if (object) {
        var keys = Object.keys(object), array = new Array(keys.length), index = 0;
        while (index < keys.length)
          array[index] = object[keys[index++]];
        return array;
      }
      return [];
    };
    util.toObject = function toObject(array) {
      var object = {}, index = 0;
      while (index < array.length) {
        var key = array[index++], val = array[index++];
        if (val !== void 0)
          object[key] = val;
      }
      return object;
    };
    var safePropBackslashRe = /\\/g;
    var safePropQuoteRe = /"/g;
    util.isReserved = function isReserved(name) {
      return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
    };
    util.safeProp = function safeProp(prop) {
      if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
        return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
      return "." + prop;
    };
    util.ucFirst = function ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    };
    var camelCaseRe = /_([a-z])/g;
    util.camelCase = function camelCase(str) {
      return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
        return $1.toUpperCase();
      });
    };
    util.compareFieldsById = function compareFieldsById(a, b) {
      return a.id - b.id;
    };
    util.decorateType = function decorateType(ctor, typeName) {
      if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
          util.decorateRoot.remove(ctor.$type);
          ctor.$type.name = typeName;
          util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
      }
      if (!Type)
        Type = require_type();
      var type = new Type(typeName || ctor.name);
      util.decorateRoot.add(type);
      type.ctor = ctor;
      Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
      Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
      return type;
    };
    var decorateEnumIndex = 0;
    util.decorateEnum = function decorateEnum(object) {
      if (object.$type)
        return object.$type;
      if (!Enum)
        Enum = require_enum();
      var enm = new Enum("Enum" + decorateEnumIndex++, object);
      util.decorateRoot.add(enm);
      Object.defineProperty(object, "$type", { value: enm, enumerable: false });
      return enm;
    };
    util.setProperty = function setProperty(dst, path, value) {
      function setProp(dst2, path2, value2) {
        var part = path2.shift();
        if (part === "__proto__" || part === "prototype") {
          return dst2;
        }
        if (path2.length > 0) {
          dst2[part] = setProp(dst2[part] || {}, path2, value2);
        } else {
          var prevValue = dst2[part];
          if (prevValue)
            value2 = [].concat(prevValue).concat(value2);
          dst2[part] = value2;
        }
        return dst2;
      }
      if (typeof dst !== "object")
        throw TypeError("dst must be an object");
      if (!path)
        throw TypeError("path must be specified");
      path = path.split(".");
      return setProp(dst, path, value);
    };
    Object.defineProperty(util, "decorateRoot", {
      get: function() {
        return roots["decorated"] || (roots["decorated"] = new (require_root())());
      }
    });
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/object.js
var require_object = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/object.js"(exports2, module2) {
    "use strict";
    module2.exports = ReflectionObject;
    ReflectionObject.className = "ReflectionObject";
    var util = require_util();
    var Root;
    function ReflectionObject(name, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (options && !util.isObject(options))
        throw TypeError("options must be an object");
      this.options = options;
      this.parsedOptions = null;
      this.name = name;
      this.parent = null;
      this.resolved = false;
      this.comment = null;
      this.filename = null;
    }
    Object.defineProperties(ReflectionObject.prototype, {
      /**
       * Reference to the root namespace.
       * @name ReflectionObject#root
       * @type {Root}
       * @readonly
       */
      root: {
        get: function() {
          var ptr = this;
          while (ptr.parent !== null)
            ptr = ptr.parent;
          return ptr;
        }
      },
      /**
       * Full name including leading dot.
       * @name ReflectionObject#fullName
       * @type {string}
       * @readonly
       */
      fullName: {
        get: function() {
          var path = [this.name], ptr = this.parent;
          while (ptr) {
            path.unshift(ptr.name);
            ptr = ptr.parent;
          }
          return path.join(".");
        }
      }
    });
    ReflectionObject.prototype.toJSON = /* istanbul ignore next */
    function toJSON() {
      throw Error();
    };
    ReflectionObject.prototype.onAdd = function onAdd(parent) {
      if (this.parent && this.parent !== parent)
        this.parent.remove(this);
      this.parent = parent;
      this.resolved = false;
      var root = parent.root;
      if (root instanceof Root)
        root._handleAdd(this);
    };
    ReflectionObject.prototype.onRemove = function onRemove(parent) {
      var root = parent.root;
      if (root instanceof Root)
        root._handleRemove(this);
      this.parent = null;
      this.resolved = false;
    };
    ReflectionObject.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (this.root instanceof Root)
        this.resolved = true;
      return this;
    };
    ReflectionObject.prototype.getOption = function getOption(name) {
      if (this.options)
        return this.options[name];
      return void 0;
    };
    ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
      if (!ifNotSet || !this.options || this.options[name] === void 0)
        (this.options || (this.options = {}))[name] = value;
      return this;
    };
    ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
      if (!this.parsedOptions) {
        this.parsedOptions = [];
      }
      var parsedOptions = this.parsedOptions;
      if (propName) {
        var opt = parsedOptions.find(function(opt2) {
          return Object.prototype.hasOwnProperty.call(opt2, name);
        });
        if (opt) {
          var newValue = opt[name];
          util.setProperty(newValue, propName, value);
        } else {
          opt = {};
          opt[name] = util.setProperty({}, propName, value);
          parsedOptions.push(opt);
        }
      } else {
        var newOpt = {};
        newOpt[name] = value;
        parsedOptions.push(newOpt);
      }
      return this;
    };
    ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
      if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
          this.setOption(keys[i], options[keys[i]], ifNotSet);
      return this;
    };
    ReflectionObject.prototype.toString = function toString2() {
      var className = this.constructor.className, fullName = this.fullName;
      if (fullName.length)
        return className + " " + fullName;
      return className;
    };
    ReflectionObject._configure = function(Root_) {
      Root = Root_;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/enum.js
var require_enum = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/enum.js"(exports2, module2) {
    "use strict";
    module2.exports = Enum;
    var ReflectionObject = require_object();
    ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
    var Namespace = require_namespace();
    var util = require_util();
    function Enum(name, values, options, comment, comments, valuesOptions) {
      ReflectionObject.call(this, name, options);
      if (values && typeof values !== "object")
        throw TypeError("values must be an object");
      this.valuesById = {};
      this.values = Object.create(this.valuesById);
      this.comment = comment;
      this.comments = comments || {};
      this.valuesOptions = valuesOptions;
      this.reserved = void 0;
      if (values) {
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
          if (typeof values[keys[i]] === "number")
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
      }
    }
    Enum.fromJSON = function fromJSON(name, json) {
      var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
      enm.reserved = json.reserved;
      return enm;
    };
    Enum.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "valuesOptions",
        this.valuesOptions,
        "values",
        this.values,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "comment",
        keepComments ? this.comment : void 0,
        "comments",
        keepComments ? this.comments : void 0
      ]);
    };
    Enum.prototype.add = function add2(name, id, comment, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (!util.isInteger(id))
        throw TypeError("id must be an integer");
      if (this.values[name] !== void 0)
        throw Error("duplicate name '" + name + "' in " + this);
      if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);
      if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);
      if (this.valuesById[id] !== void 0) {
        if (!(this.options && this.options.allow_alias))
          throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
      } else
        this.valuesById[this.values[name] = id] = name;
      if (options) {
        if (this.valuesOptions === void 0)
          this.valuesOptions = {};
        this.valuesOptions[name] = options || null;
      }
      this.comments[name] = comment || null;
      return this;
    };
    Enum.prototype.remove = function remove(name) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      var val = this.values[name];
      if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);
      delete this.valuesById[val];
      delete this.values[name];
      delete this.comments[name];
      if (this.valuesOptions)
        delete this.valuesOptions[name];
      return this;
    };
    Enum.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Enum.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/encoder.js
var require_encoder = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/encoder.js"(exports2, module2) {
    "use strict";
    module2.exports = encoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function genTypePartial(gen, field, fieldIndex, ref) {
      return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
    }
    function encoder(mtype) {
      var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
      var i, ref;
      var fields = (
        /* initializes */
        mtype.fieldsArray.slice().sort(util.compareFieldsById)
      );
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
        ref = "m" + util.safeProp(field.name);
        if (field.map) {
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
          if (wireType === void 0)
            gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
          else
            gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
          gen("}")("}");
        } else if (field.repeated) {
          gen("if(%s!=null&&%s.length){", ref, ref);
          if (field.packed && types.packed[type] !== void 0) {
            gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
          } else {
            gen("for(var i=0;i<%s.length;++i)", ref);
            if (wireType === void 0)
              genTypePartial(gen, field, index, ref + "[i]");
            else
              gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
          }
          gen("}");
        } else {
          if (field.optional)
            gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
          if (wireType === void 0)
            genTypePartial(gen, field, index, ref);
          else
            gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
        }
      }
      return gen("return w");
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/index-light.js
var require_index_light = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/index-light.js"(exports2, module2) {
    "use strict";
    var protobuf = module2.exports = require_index_minimal();
    protobuf.build = "light";
    function load(filename, root, callback) {
      if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
      } else if (!root)
        root = new protobuf.Root();
      return root.load(filename, callback);
    }
    protobuf.load = load;
    function loadSync(filename, root) {
      if (!root)
        root = new protobuf.Root();
      return root.loadSync(filename);
    }
    protobuf.loadSync = loadSync;
    protobuf.encoder = require_encoder();
    protobuf.decoder = require_decoder();
    protobuf.verifier = require_verifier();
    protobuf.converter = require_converter();
    protobuf.ReflectionObject = require_object();
    protobuf.Namespace = require_namespace();
    protobuf.Root = require_root();
    protobuf.Enum = require_enum();
    protobuf.Type = require_type();
    protobuf.Field = require_field();
    protobuf.OneOf = require_oneof();
    protobuf.MapField = require_mapfield();
    protobuf.Service = require_service2();
    protobuf.Method = require_method();
    protobuf.Message = require_message();
    protobuf.wrappers = require_wrappers();
    protobuf.types = require_types();
    protobuf.util = require_util();
    protobuf.ReflectionObject._configure(protobuf.Root);
    protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
    protobuf.Root._configure(protobuf.Type);
    protobuf.Field._configure(protobuf.Type);
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/tokenize.js
var require_tokenize = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/tokenize.js"(exports2, module2) {
    "use strict";
    module2.exports = tokenize;
    var delimRe = /[\s{}=;:[\],'"()<>]/g;
    var stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
    var stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
    var setCommentRe = /^ *[*/]+ */;
    var setCommentAltRe = /^\s*\*?\/*/;
    var setCommentSplitRe = /\n/g;
    var whitespaceRe = /\s/;
    var unescapeRe = /\\(.?)/g;
    var unescapeMap = {
      "0": "\0",
      "r": "\r",
      "n": "\n",
      "t": "	"
    };
    function unescape(str) {
      return str.replace(unescapeRe, function($0, $1) {
        switch ($1) {
          case "\\":
          case "":
            return $1;
          default:
            return unescapeMap[$1] || "";
        }
      });
    }
    tokenize.unescape = unescape;
    function tokenize(source, alternateCommentMode) {
      source = source.toString();
      var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
      var stack = [];
      var stringDelim = null;
      function illegal(subject) {
        return Error("illegal " + subject + " (line " + line + ")");
      }
      function readString() {
        var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
        re.lastIndex = offset - 1;
        var match = re.exec(source);
        if (!match)
          throw illegal("string");
        offset = re.lastIndex;
        push(stringDelim);
        stringDelim = null;
        return unescape(match[1]);
      }
      function charAt(pos) {
        return source.charAt(pos);
      }
      function setComment(start, end, isLeading) {
        var comment = {
          type: source.charAt(start++),
          lineEmpty: false,
          leading: isLeading
        };
        var lookback;
        if (alternateCommentMode) {
          lookback = 2;
        } else {
          lookback = 3;
        }
        var commentOffset = start - lookback, c;
        do {
          if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
            comment.lineEmpty = true;
            break;
          }
        } while (c === " " || c === "	");
        var lines = source.substring(start, end).split(setCommentSplitRe);
        for (var i = 0; i < lines.length; ++i)
          lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
        comment.text = lines.join("\n").trim();
        comments[line] = comment;
        lastCommentLine = line;
      }
      function isDoubleSlashCommentLine(startOffset) {
        var endOffset = findEndOfLine(startOffset);
        var lineText = source.substring(startOffset, endOffset);
        var isComment = /^\s*\/\//.test(lineText);
        return isComment;
      }
      function findEndOfLine(cursor) {
        var endOffset = cursor;
        while (endOffset < length && charAt(endOffset) !== "\n") {
          endOffset++;
        }
        return endOffset;
      }
      function next() {
        if (stack.length > 0)
          return stack.shift();
        if (stringDelim)
          return readString();
        var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
        do {
          if (offset === length)
            return null;
          repeat = false;
          while (whitespaceRe.test(curr = charAt(offset))) {
            if (curr === "\n") {
              isLeadingComment = true;
              ++line;
            }
            if (++offset === length)
              return null;
          }
          if (charAt(offset) === "/") {
            if (++offset === length) {
              throw illegal("comment");
            }
            if (charAt(offset) === "/") {
              if (!alternateCommentMode) {
                isDoc = charAt(start = offset + 1) === "/";
                while (charAt(++offset) !== "\n") {
                  if (offset === length) {
                    return null;
                  }
                }
                ++offset;
                if (isDoc) {
                  setComment(start, offset - 1, isLeadingComment);
                  isLeadingComment = true;
                }
                ++line;
                repeat = true;
              } else {
                start = offset;
                isDoc = false;
                if (isDoubleSlashCommentLine(offset - 1)) {
                  isDoc = true;
                  do {
                    offset = findEndOfLine(offset);
                    if (offset === length) {
                      break;
                    }
                    offset++;
                    if (!isLeadingComment) {
                      break;
                    }
                  } while (isDoubleSlashCommentLine(offset));
                } else {
                  offset = Math.min(length, findEndOfLine(offset) + 1);
                }
                if (isDoc) {
                  setComment(start, offset, isLeadingComment);
                  isLeadingComment = true;
                }
                line++;
                repeat = true;
              }
            } else if ((curr = charAt(offset)) === "*") {
              start = offset + 1;
              isDoc = alternateCommentMode || charAt(start) === "*";
              do {
                if (curr === "\n") {
                  ++line;
                }
                if (++offset === length) {
                  throw illegal("comment");
                }
                prev = curr;
                curr = charAt(offset);
              } while (prev !== "*" || curr !== "/");
              ++offset;
              if (isDoc) {
                setComment(start, offset - 2, isLeadingComment);
                isLeadingComment = true;
              }
              repeat = true;
            } else {
              return "/";
            }
          }
        } while (repeat);
        var end = offset;
        delimRe.lastIndex = 0;
        var delim = delimRe.test(charAt(end++));
        if (!delim)
          while (end < length && !delimRe.test(charAt(end)))
            ++end;
        var token = source.substring(offset, offset = end);
        if (token === '"' || token === "'")
          stringDelim = token;
        return token;
      }
      function push(token) {
        stack.push(token);
      }
      function peek() {
        if (!stack.length) {
          var token = next();
          if (token === null)
            return null;
          push(token);
        }
        return stack[0];
      }
      function skip(expected, optional) {
        var actual = peek(), equals2 = actual === expected;
        if (equals2) {
          next();
          return true;
        }
        if (!optional)
          throw illegal("token '" + actual + "', '" + expected + "' expected");
        return false;
      }
      function cmnt(trailingLine) {
        var ret = null;
        var comment;
        if (trailingLine === void 0) {
          comment = comments[line - 1];
          delete comments[line - 1];
          if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
            ret = comment.leading ? comment.text : null;
          }
        } else {
          if (lastCommentLine < trailingLine) {
            peek();
          }
          comment = comments[trailingLine];
          delete comments[trailingLine];
          if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
            ret = comment.leading ? null : comment.text;
          }
        }
        return ret;
      }
      return Object.defineProperty({
        next,
        peek,
        push,
        skip,
        cmnt
      }, "line", {
        get: function() {
          return line;
        }
      });
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/parse.js"(exports2, module2) {
    "use strict";
    module2.exports = parse;
    parse.filename = null;
    parse.defaults = { keepCase: false };
    var tokenize = require_tokenize();
    var Root = require_root();
    var Type = require_type();
    var Field = require_field();
    var MapField = require_mapfield();
    var OneOf = require_oneof();
    var Enum = require_enum();
    var Service = require_service2();
    var Method = require_method();
    var types = require_types();
    var util = require_util();
    var base10Re = /^[1-9][0-9]*$/;
    var base10NegRe = /^-?[1-9][0-9]*$/;
    var base16Re = /^0[x][0-9a-fA-F]+$/;
    var base16NegRe = /^-?0[x][0-9a-fA-F]+$/;
    var base8Re = /^0[0-7]+$/;
    var base8NegRe = /^-?0[0-7]+$/;
    var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    var nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
    var typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
    var fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
    function parse(source, root, options) {
      if (!(root instanceof Root)) {
        options = root;
        root = new Root();
      }
      if (!options)
        options = parse.defaults;
      var preferTrailingComment = options.preferTrailingComment || false;
      var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
      var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
      var ptr = root;
      var applyCase = options.keepCase ? function(name) {
        return name;
      } : util.camelCase;
      function illegal(token2, name, insideTryCatch) {
        var filename = parse.filename;
        if (!insideTryCatch)
          parse.filename = null;
        return Error("illegal " + (name || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
      }
      function readString() {
        var values = [], token2;
        do {
          if ((token2 = next()) !== '"' && token2 !== "'")
            throw illegal(token2);
          values.push(next());
          skip(token2);
          token2 = peek();
        } while (token2 === '"' || token2 === "'");
        return values.join("");
      }
      function readValue(acceptTypeRef) {
        var token2 = next();
        switch (token2) {
          case "'":
          case '"':
            push(token2);
            return readString();
          case "true":
          case "TRUE":
            return true;
          case "false":
          case "FALSE":
            return false;
        }
        try {
          return parseNumber(
            token2,
            /* insideTryCatch */
            true
          );
        } catch (e) {
          if (acceptTypeRef && typeRefRe.test(token2))
            return token2;
          throw illegal(token2, "value");
        }
      }
      function readRanges(target, acceptStrings) {
        var token2, start;
        do {
          if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'"))
            target.push(readString());
          else
            target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
        } while (skip(",", true));
        skip(";");
      }
      function parseNumber(token2, insideTryCatch) {
        var sign = 1;
        if (token2.charAt(0) === "-") {
          sign = -1;
          token2 = token2.substring(1);
        }
        switch (token2) {
          case "inf":
          case "INF":
          case "Inf":
            return sign * Infinity;
          case "nan":
          case "NAN":
          case "Nan":
          case "NaN":
            return NaN;
          case "0":
            return 0;
        }
        if (base10Re.test(token2))
          return sign * parseInt(token2, 10);
        if (base16Re.test(token2))
          return sign * parseInt(token2, 16);
        if (base8Re.test(token2))
          return sign * parseInt(token2, 8);
        if (numberRe.test(token2))
          return sign * parseFloat(token2);
        throw illegal(token2, "number", insideTryCatch);
      }
      function parseId(token2, acceptNegative) {
        switch (token2) {
          case "max":
          case "MAX":
          case "Max":
            return 536870911;
          case "0":
            return 0;
        }
        if (!acceptNegative && token2.charAt(0) === "-")
          throw illegal(token2, "id");
        if (base10NegRe.test(token2))
          return parseInt(token2, 10);
        if (base16NegRe.test(token2))
          return parseInt(token2, 16);
        if (base8NegRe.test(token2))
          return parseInt(token2, 8);
        throw illegal(token2, "id");
      }
      function parsePackage() {
        if (pkg !== void 0)
          throw illegal("package");
        pkg = next();
        if (!typeRefRe.test(pkg))
          throw illegal(pkg, "name");
        ptr = ptr.define(pkg);
        skip(";");
      }
      function parseImport() {
        var token2 = peek();
        var whichImports;
        switch (token2) {
          case "weak":
            whichImports = weakImports || (weakImports = []);
            next();
            break;
          case "public":
            next();
          default:
            whichImports = imports || (imports = []);
            break;
        }
        token2 = readString();
        skip(";");
        whichImports.push(token2);
      }
      function parseSyntax() {
        skip("=");
        syntax = readString();
        isProto3 = syntax === "proto3";
        if (!isProto3 && syntax !== "proto2")
          throw illegal(syntax, "syntax");
        skip(";");
      }
      function parseCommon(parent, token2) {
        switch (token2) {
          case "option":
            parseOption(parent, token2);
            skip(";");
            return true;
          case "message":
            parseType(parent, token2);
            return true;
          case "enum":
            parseEnum(parent, token2);
            return true;
          case "service":
            parseService(parent, token2);
            return true;
          case "extend":
            parseExtension(parent, token2);
            return true;
        }
        return false;
      }
      function ifBlock(obj, fnIf, fnElse) {
        var trailingLine = tn.line;
        if (obj) {
          if (typeof obj.comment !== "string") {
            obj.comment = cmnt();
          }
          obj.filename = parse.filename;
        }
        if (skip("{", true)) {
          var token2;
          while ((token2 = next()) !== "}")
            fnIf(token2);
          skip(";", true);
        } else {
          if (fnElse)
            fnElse();
          skip(";");
          if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
            obj.comment = cmnt(trailingLine) || obj.comment;
        }
      }
      function parseType(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "type name");
        var type = new Type(token2);
        ifBlock(type, function parseType_block(token3) {
          if (parseCommon(type, token3))
            return;
          switch (token3) {
            case "map":
              parseMapField(type, token3);
              break;
            case "required":
            case "repeated":
              parseField(type, token3);
              break;
            case "optional":
              if (isProto3) {
                parseField(type, "proto3_optional");
              } else {
                parseField(type, "optional");
              }
              break;
            case "oneof":
              parseOneOf(type, token3);
              break;
            case "extensions":
              readRanges(type.extensions || (type.extensions = []));
              break;
            case "reserved":
              readRanges(type.reserved || (type.reserved = []), true);
              break;
            default:
              if (!isProto3 || !typeRefRe.test(token3))
                throw illegal(token3);
              push(token3);
              parseField(type, "optional");
              break;
          }
        });
        parent.add(type);
      }
      function parseField(parent, rule, extend) {
        var type = next();
        if (type === "group") {
          parseGroup(parent, rule);
          return;
        }
        while (type.endsWith(".") || peek().startsWith(".")) {
          type += next();
        }
        if (!typeRefRe.test(type))
          throw illegal(type, "type");
        var name = next();
        if (!nameRe.test(name))
          throw illegal(name, "name");
        name = applyCase(name);
        skip("=");
        var field = new Field(name, parseId(next()), type, rule, extend);
        ifBlock(field, function parseField_block(token2) {
          if (token2 === "option") {
            parseOption(field, token2);
            skip(";");
          } else
            throw illegal(token2);
        }, function parseField_line() {
          parseInlineOptions(field);
        });
        if (rule === "proto3_optional") {
          var oneof = new OneOf("_" + name);
          field.setOption("proto3_optional", true);
          oneof.add(field);
          parent.add(oneof);
        } else {
          parent.add(field);
        }
        if (!isProto3 && field.repeated && (types.packed[type] !== void 0 || types.basic[type] === void 0))
          field.setOption(
            "packed",
            false,
            /* ifNotSet */
            true
          );
      }
      function parseGroup(parent, rule) {
        var name = next();
        if (!nameRe.test(name))
          throw illegal(name, "name");
        var fieldName = util.lcFirst(name);
        if (name === fieldName)
          name = util.ucFirst(name);
        skip("=");
        var id = parseId(next());
        var type = new Type(name);
        type.group = true;
        var field = new Field(fieldName, id, name, rule);
        field.filename = parse.filename;
        ifBlock(type, function parseGroup_block(token2) {
          switch (token2) {
            case "option":
              parseOption(type, token2);
              skip(";");
              break;
            case "required":
            case "repeated":
              parseField(type, token2);
              break;
            case "optional":
              if (isProto3) {
                parseField(type, "proto3_optional");
              } else {
                parseField(type, "optional");
              }
              break;
            case "message":
              parseType(type, token2);
              break;
            case "enum":
              parseEnum(type, token2);
              break;
            default:
              throw illegal(token2);
          }
        });
        parent.add(type).add(field);
      }
      function parseMapField(parent) {
        skip("<");
        var keyType = next();
        if (types.mapKey[keyType] === void 0)
          throw illegal(keyType, "type");
        skip(",");
        var valueType = next();
        if (!typeRefRe.test(valueType))
          throw illegal(valueType, "type");
        skip(">");
        var name = next();
        if (!nameRe.test(name))
          throw illegal(name, "name");
        skip("=");
        var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
        ifBlock(field, function parseMapField_block(token2) {
          if (token2 === "option") {
            parseOption(field, token2);
            skip(";");
          } else
            throw illegal(token2);
        }, function parseMapField_line() {
          parseInlineOptions(field);
        });
        parent.add(field);
      }
      function parseOneOf(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var oneof = new OneOf(applyCase(token2));
        ifBlock(oneof, function parseOneOf_block(token3) {
          if (token3 === "option") {
            parseOption(oneof, token3);
            skip(";");
          } else {
            push(token3);
            parseField(oneof, "optional");
          }
        });
        parent.add(oneof);
      }
      function parseEnum(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var enm = new Enum(token2);
        ifBlock(enm, function parseEnum_block(token3) {
          switch (token3) {
            case "option":
              parseOption(enm, token3);
              skip(";");
              break;
            case "reserved":
              readRanges(enm.reserved || (enm.reserved = []), true);
              break;
            default:
              parseEnumValue(enm, token3);
          }
        });
        parent.add(enm);
      }
      function parseEnumValue(parent, token2) {
        if (!nameRe.test(token2))
          throw illegal(token2, "name");
        skip("=");
        var value = parseId(next(), true), dummy = {
          options: void 0
        };
        dummy.setOption = function(name, value2) {
          if (this.options === void 0)
            this.options = {};
          this.options[name] = value2;
        };
        ifBlock(dummy, function parseEnumValue_block(token3) {
          if (token3 === "option") {
            parseOption(dummy, token3);
            skip(";");
          } else
            throw illegal(token3);
        }, function parseEnumValue_line() {
          parseInlineOptions(dummy);
        });
        parent.add(token2, value, dummy.comment, dummy.options);
      }
      function parseOption(parent, token2) {
        var isCustom = skip("(", true);
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2, "name");
        var name = token2;
        var option = name;
        var propName;
        if (isCustom) {
          skip(")");
          name = "(" + name + ")";
          option = name;
          token2 = peek();
          if (fqTypeRefRe.test(token2)) {
            propName = token2.slice(1);
            name += token2;
            next();
          }
        }
        skip("=");
        var optionValue = parseOptionValue(parent, name);
        setParsedOption(parent, option, optionValue, propName);
      }
      function parseOptionValue(parent, name) {
        if (skip("{", true)) {
          var objectResult = {};
          while (!skip("}", true)) {
            if (!nameRe.test(token = next())) {
              throw illegal(token, "name");
            }
            if (token === null) {
              throw illegal(token, "end of input");
            }
            var value;
            var propName = token;
            skip(":", true);
            if (peek() === "{")
              value = parseOptionValue(parent, name + "." + token);
            else if (peek() === "[") {
              value = [];
              var lastValue;
              if (skip("[", true)) {
                do {
                  lastValue = readValue(true);
                  value.push(lastValue);
                } while (skip(",", true));
                skip("]");
                if (typeof lastValue !== "undefined") {
                  setOption(parent, name + "." + token, lastValue);
                }
              }
            } else {
              value = readValue(true);
              setOption(parent, name + "." + token, value);
            }
            var prevValue = objectResult[propName];
            if (prevValue)
              value = [].concat(prevValue).concat(value);
            objectResult[propName] = value;
            skip(",", true);
            skip(";", true);
          }
          return objectResult;
        }
        var simpleValue = readValue(true);
        setOption(parent, name, simpleValue);
        return simpleValue;
      }
      function setOption(parent, name, value) {
        if (parent.setOption)
          parent.setOption(name, value);
      }
      function setParsedOption(parent, name, value, propName) {
        if (parent.setParsedOption)
          parent.setParsedOption(name, value, propName);
      }
      function parseInlineOptions(parent) {
        if (skip("[", true)) {
          do {
            parseOption(parent, "option");
          } while (skip(",", true));
          skip("]");
        }
        return parent;
      }
      function parseService(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "service name");
        var service = new Service(token2);
        ifBlock(service, function parseService_block(token3) {
          if (parseCommon(service, token3))
            return;
          if (token3 === "rpc")
            parseMethod(service, token3);
          else
            throw illegal(token3);
        });
        parent.add(service);
      }
      function parseMethod(parent, token2) {
        var commentText = cmnt();
        var type = token2;
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var name = token2, requestType, requestStream, responseType, responseStream;
        skip("(");
        if (skip("stream", true))
          requestStream = true;
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2);
        requestType = token2;
        skip(")");
        skip("returns");
        skip("(");
        if (skip("stream", true))
          responseStream = true;
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2);
        responseType = token2;
        skip(")");
        var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
        method.comment = commentText;
        ifBlock(method, function parseMethod_block(token3) {
          if (token3 === "option") {
            parseOption(method, token3);
            skip(";");
          } else
            throw illegal(token3);
        });
        parent.add(method);
      }
      function parseExtension(parent, token2) {
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2, "reference");
        var reference = token2;
        ifBlock(null, function parseExtension_block(token3) {
          switch (token3) {
            case "required":
            case "repeated":
              parseField(parent, token3, reference);
              break;
            case "optional":
              if (isProto3) {
                parseField(parent, "proto3_optional", reference);
              } else {
                parseField(parent, "optional", reference);
              }
              break;
            default:
              if (!isProto3 || !typeRefRe.test(token3))
                throw illegal(token3);
              push(token3);
              parseField(parent, "optional", reference);
              break;
          }
        });
      }
      var token;
      while ((token = next()) !== null) {
        switch (token) {
          case "package":
            if (!head)
              throw illegal(token);
            parsePackage();
            break;
          case "import":
            if (!head)
              throw illegal(token);
            parseImport();
            break;
          case "syntax":
            if (!head)
              throw illegal(token);
            parseSyntax();
            break;
          case "option":
            parseOption(ptr, token);
            skip(";");
            break;
          default:
            if (parseCommon(ptr, token)) {
              head = false;
              continue;
            }
            throw illegal(token);
        }
      }
      parse.filename = null;
      return {
        "package": pkg,
        "imports": imports,
        weakImports,
        syntax,
        root
      };
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/common.js"(exports2, module2) {
    "use strict";
    module2.exports = common;
    var commonRe = /\/|\./;
    function common(name, json) {
      if (!commonRe.test(name)) {
        name = "google/protobuf/" + name + ".proto";
        json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
      }
      common[name] = json;
    }
    common("any", {
      /**
       * Properties of a google.protobuf.Any message.
       * @interface IAny
       * @type {Object}
       * @property {string} [typeUrl]
       * @property {Uint8Array} [bytes]
       * @memberof common
       */
      Any: {
        fields: {
          type_url: {
            type: "string",
            id: 1
          },
          value: {
            type: "bytes",
            id: 2
          }
        }
      }
    });
    var timeType;
    common("duration", {
      /**
       * Properties of a google.protobuf.Duration message.
       * @interface IDuration
       * @type {Object}
       * @property {number|Long} [seconds]
       * @property {number} [nanos]
       * @memberof common
       */
      Duration: timeType = {
        fields: {
          seconds: {
            type: "int64",
            id: 1
          },
          nanos: {
            type: "int32",
            id: 2
          }
        }
      }
    });
    common("timestamp", {
      /**
       * Properties of a google.protobuf.Timestamp message.
       * @interface ITimestamp
       * @type {Object}
       * @property {number|Long} [seconds]
       * @property {number} [nanos]
       * @memberof common
       */
      Timestamp: timeType
    });
    common("empty", {
      /**
       * Properties of a google.protobuf.Empty message.
       * @interface IEmpty
       * @memberof common
       */
      Empty: {
        fields: {}
      }
    });
    common("struct", {
      /**
       * Properties of a google.protobuf.Struct message.
       * @interface IStruct
       * @type {Object}
       * @property {Object.<string,IValue>} [fields]
       * @memberof common
       */
      Struct: {
        fields: {
          fields: {
            keyType: "string",
            type: "Value",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.Value message.
       * @interface IValue
       * @type {Object}
       * @property {string} [kind]
       * @property {0} [nullValue]
       * @property {number} [numberValue]
       * @property {string} [stringValue]
       * @property {boolean} [boolValue]
       * @property {IStruct} [structValue]
       * @property {IListValue} [listValue]
       * @memberof common
       */
      Value: {
        oneofs: {
          kind: {
            oneof: [
              "nullValue",
              "numberValue",
              "stringValue",
              "boolValue",
              "structValue",
              "listValue"
            ]
          }
        },
        fields: {
          nullValue: {
            type: "NullValue",
            id: 1
          },
          numberValue: {
            type: "double",
            id: 2
          },
          stringValue: {
            type: "string",
            id: 3
          },
          boolValue: {
            type: "bool",
            id: 4
          },
          structValue: {
            type: "Struct",
            id: 5
          },
          listValue: {
            type: "ListValue",
            id: 6
          }
        }
      },
      NullValue: {
        values: {
          NULL_VALUE: 0
        }
      },
      /**
       * Properties of a google.protobuf.ListValue message.
       * @interface IListValue
       * @type {Object}
       * @property {Array.<IValue>} [values]
       * @memberof common
       */
      ListValue: {
        fields: {
          values: {
            rule: "repeated",
            type: "Value",
            id: 1
          }
        }
      }
    });
    common("wrappers", {
      /**
       * Properties of a google.protobuf.DoubleValue message.
       * @interface IDoubleValue
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      DoubleValue: {
        fields: {
          value: {
            type: "double",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.FloatValue message.
       * @interface IFloatValue
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      FloatValue: {
        fields: {
          value: {
            type: "float",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.Int64Value message.
       * @interface IInt64Value
       * @type {Object}
       * @property {number|Long} [value]
       * @memberof common
       */
      Int64Value: {
        fields: {
          value: {
            type: "int64",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.UInt64Value message.
       * @interface IUInt64Value
       * @type {Object}
       * @property {number|Long} [value]
       * @memberof common
       */
      UInt64Value: {
        fields: {
          value: {
            type: "uint64",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.Int32Value message.
       * @interface IInt32Value
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      Int32Value: {
        fields: {
          value: {
            type: "int32",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.UInt32Value message.
       * @interface IUInt32Value
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      UInt32Value: {
        fields: {
          value: {
            type: "uint32",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.BoolValue message.
       * @interface IBoolValue
       * @type {Object}
       * @property {boolean} [value]
       * @memberof common
       */
      BoolValue: {
        fields: {
          value: {
            type: "bool",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.StringValue message.
       * @interface IStringValue
       * @type {Object}
       * @property {string} [value]
       * @memberof common
       */
      StringValue: {
        fields: {
          value: {
            type: "string",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.BytesValue message.
       * @interface IBytesValue
       * @type {Object}
       * @property {Uint8Array} [value]
       * @memberof common
       */
      BytesValue: {
        fields: {
          value: {
            type: "bytes",
            id: 1
          }
        }
      }
    });
    common("field_mask", {
      /**
       * Properties of a google.protobuf.FieldMask message.
       * @interface IDoubleValue
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      FieldMask: {
        fields: {
          paths: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      }
    });
    common.get = function get(file) {
      return common[file] || null;
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/src/index.js"(exports2, module2) {
    "use strict";
    var protobuf = module2.exports = require_index_light();
    protobuf.build = "full";
    protobuf.tokenize = require_tokenize();
    protobuf.parse = require_parse();
    protobuf.common = require_common();
    protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/index.js
var require_protobufjs = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_src();
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/descriptor.json
var require_descriptor = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/descriptor.json"(exports2, module2) {
    module2.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                FileDescriptorSet: {
                  fields: {
                    file: {
                      rule: "repeated",
                      type: "FileDescriptorProto",
                      id: 1
                    }
                  }
                },
                FileDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    package: {
                      type: "string",
                      id: 2
                    },
                    dependency: {
                      rule: "repeated",
                      type: "string",
                      id: 3
                    },
                    publicDependency: {
                      rule: "repeated",
                      type: "int32",
                      id: 10,
                      options: {
                        packed: false
                      }
                    },
                    weakDependency: {
                      rule: "repeated",
                      type: "int32",
                      id: 11,
                      options: {
                        packed: false
                      }
                    },
                    messageType: {
                      rule: "repeated",
                      type: "DescriptorProto",
                      id: 4
                    },
                    enumType: {
                      rule: "repeated",
                      type: "EnumDescriptorProto",
                      id: 5
                    },
                    service: {
                      rule: "repeated",
                      type: "ServiceDescriptorProto",
                      id: 6
                    },
                    extension: {
                      rule: "repeated",
                      type: "FieldDescriptorProto",
                      id: 7
                    },
                    options: {
                      type: "FileOptions",
                      id: 8
                    },
                    sourceCodeInfo: {
                      type: "SourceCodeInfo",
                      id: 9
                    },
                    syntax: {
                      type: "string",
                      id: 12
                    }
                  }
                },
                DescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    field: {
                      rule: "repeated",
                      type: "FieldDescriptorProto",
                      id: 2
                    },
                    extension: {
                      rule: "repeated",
                      type: "FieldDescriptorProto",
                      id: 6
                    },
                    nestedType: {
                      rule: "repeated",
                      type: "DescriptorProto",
                      id: 3
                    },
                    enumType: {
                      rule: "repeated",
                      type: "EnumDescriptorProto",
                      id: 4
                    },
                    extensionRange: {
                      rule: "repeated",
                      type: "ExtensionRange",
                      id: 5
                    },
                    oneofDecl: {
                      rule: "repeated",
                      type: "OneofDescriptorProto",
                      id: 8
                    },
                    options: {
                      type: "MessageOptions",
                      id: 7
                    },
                    reservedRange: {
                      rule: "repeated",
                      type: "ReservedRange",
                      id: 9
                    },
                    reservedName: {
                      rule: "repeated",
                      type: "string",
                      id: 10
                    }
                  },
                  nested: {
                    ExtensionRange: {
                      fields: {
                        start: {
                          type: "int32",
                          id: 1
                        },
                        end: {
                          type: "int32",
                          id: 2
                        }
                      }
                    },
                    ReservedRange: {
                      fields: {
                        start: {
                          type: "int32",
                          id: 1
                        },
                        end: {
                          type: "int32",
                          id: 2
                        }
                      }
                    }
                  }
                },
                FieldDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    number: {
                      type: "int32",
                      id: 3
                    },
                    label: {
                      type: "Label",
                      id: 4
                    },
                    type: {
                      type: "Type",
                      id: 5
                    },
                    typeName: {
                      type: "string",
                      id: 6
                    },
                    extendee: {
                      type: "string",
                      id: 2
                    },
                    defaultValue: {
                      type: "string",
                      id: 7
                    },
                    oneofIndex: {
                      type: "int32",
                      id: 9
                    },
                    jsonName: {
                      type: "string",
                      id: 10
                    },
                    options: {
                      type: "FieldOptions",
                      id: 8
                    }
                  },
                  nested: {
                    Type: {
                      values: {
                        TYPE_DOUBLE: 1,
                        TYPE_FLOAT: 2,
                        TYPE_INT64: 3,
                        TYPE_UINT64: 4,
                        TYPE_INT32: 5,
                        TYPE_FIXED64: 6,
                        TYPE_FIXED32: 7,
                        TYPE_BOOL: 8,
                        TYPE_STRING: 9,
                        TYPE_GROUP: 10,
                        TYPE_MESSAGE: 11,
                        TYPE_BYTES: 12,
                        TYPE_UINT32: 13,
                        TYPE_ENUM: 14,
                        TYPE_SFIXED32: 15,
                        TYPE_SFIXED64: 16,
                        TYPE_SINT32: 17,
                        TYPE_SINT64: 18
                      }
                    },
                    Label: {
                      values: {
                        LABEL_OPTIONAL: 1,
                        LABEL_REQUIRED: 2,
                        LABEL_REPEATED: 3
                      }
                    }
                  }
                },
                OneofDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    options: {
                      type: "OneofOptions",
                      id: 2
                    }
                  }
                },
                EnumDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      rule: "repeated",
                      type: "EnumValueDescriptorProto",
                      id: 2
                    },
                    options: {
                      type: "EnumOptions",
                      id: 3
                    }
                  }
                },
                EnumValueDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    number: {
                      type: "int32",
                      id: 2
                    },
                    options: {
                      type: "EnumValueOptions",
                      id: 3
                    }
                  }
                },
                ServiceDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    method: {
                      rule: "repeated",
                      type: "MethodDescriptorProto",
                      id: 2
                    },
                    options: {
                      type: "ServiceOptions",
                      id: 3
                    }
                  }
                },
                MethodDescriptorProto: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    inputType: {
                      type: "string",
                      id: 2
                    },
                    outputType: {
                      type: "string",
                      id: 3
                    },
                    options: {
                      type: "MethodOptions",
                      id: 4
                    },
                    clientStreaming: {
                      type: "bool",
                      id: 5
                    },
                    serverStreaming: {
                      type: "bool",
                      id: 6
                    }
                  }
                },
                FileOptions: {
                  fields: {
                    javaPackage: {
                      type: "string",
                      id: 1
                    },
                    javaOuterClassname: {
                      type: "string",
                      id: 8
                    },
                    javaMultipleFiles: {
                      type: "bool",
                      id: 10
                    },
                    javaGenerateEqualsAndHash: {
                      type: "bool",
                      id: 20,
                      options: {
                        deprecated: true
                      }
                    },
                    javaStringCheckUtf8: {
                      type: "bool",
                      id: 27
                    },
                    optimizeFor: {
                      type: "OptimizeMode",
                      id: 9,
                      options: {
                        default: "SPEED"
                      }
                    },
                    goPackage: {
                      type: "string",
                      id: 11
                    },
                    ccGenericServices: {
                      type: "bool",
                      id: 16
                    },
                    javaGenericServices: {
                      type: "bool",
                      id: 17
                    },
                    pyGenericServices: {
                      type: "bool",
                      id: 18
                    },
                    deprecated: {
                      type: "bool",
                      id: 23
                    },
                    ccEnableArenas: {
                      type: "bool",
                      id: 31
                    },
                    objcClassPrefix: {
                      type: "string",
                      id: 36
                    },
                    csharpNamespace: {
                      type: "string",
                      id: 37
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ],
                  reserved: [
                    [
                      38,
                      38
                    ]
                  ],
                  nested: {
                    OptimizeMode: {
                      values: {
                        SPEED: 1,
                        CODE_SIZE: 2,
                        LITE_RUNTIME: 3
                      }
                    }
                  }
                },
                MessageOptions: {
                  fields: {
                    messageSetWireFormat: {
                      type: "bool",
                      id: 1
                    },
                    noStandardDescriptorAccessor: {
                      type: "bool",
                      id: 2
                    },
                    deprecated: {
                      type: "bool",
                      id: 3
                    },
                    mapEntry: {
                      type: "bool",
                      id: 7
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ],
                  reserved: [
                    [
                      8,
                      8
                    ]
                  ]
                },
                FieldOptions: {
                  fields: {
                    ctype: {
                      type: "CType",
                      id: 1,
                      options: {
                        default: "STRING"
                      }
                    },
                    packed: {
                      type: "bool",
                      id: 2
                    },
                    jstype: {
                      type: "JSType",
                      id: 6,
                      options: {
                        default: "JS_NORMAL"
                      }
                    },
                    lazy: {
                      type: "bool",
                      id: 5
                    },
                    deprecated: {
                      type: "bool",
                      id: 3
                    },
                    weak: {
                      type: "bool",
                      id: 10
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ],
                  reserved: [
                    [
                      4,
                      4
                    ]
                  ],
                  nested: {
                    CType: {
                      values: {
                        STRING: 0,
                        CORD: 1,
                        STRING_PIECE: 2
                      }
                    },
                    JSType: {
                      values: {
                        JS_NORMAL: 0,
                        JS_STRING: 1,
                        JS_NUMBER: 2
                      }
                    }
                  }
                },
                OneofOptions: {
                  fields: {
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                EnumOptions: {
                  fields: {
                    allowAlias: {
                      type: "bool",
                      id: 2
                    },
                    deprecated: {
                      type: "bool",
                      id: 3
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                EnumValueOptions: {
                  fields: {
                    deprecated: {
                      type: "bool",
                      id: 1
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                ServiceOptions: {
                  fields: {
                    deprecated: {
                      type: "bool",
                      id: 33
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                MethodOptions: {
                  fields: {
                    deprecated: {
                      type: "bool",
                      id: 33
                    },
                    uninterpretedOption: {
                      rule: "repeated",
                      type: "UninterpretedOption",
                      id: 999
                    }
                  },
                  extensions: [
                    [
                      1e3,
                      536870911
                    ]
                  ]
                },
                UninterpretedOption: {
                  fields: {
                    name: {
                      rule: "repeated",
                      type: "NamePart",
                      id: 2
                    },
                    identifierValue: {
                      type: "string",
                      id: 3
                    },
                    positiveIntValue: {
                      type: "uint64",
                      id: 4
                    },
                    negativeIntValue: {
                      type: "int64",
                      id: 5
                    },
                    doubleValue: {
                      type: "double",
                      id: 6
                    },
                    stringValue: {
                      type: "bytes",
                      id: 7
                    },
                    aggregateValue: {
                      type: "string",
                      id: 8
                    }
                  },
                  nested: {
                    NamePart: {
                      fields: {
                        namePart: {
                          rule: "required",
                          type: "string",
                          id: 1
                        },
                        isExtension: {
                          rule: "required",
                          type: "bool",
                          id: 2
                        }
                      }
                    }
                  }
                },
                SourceCodeInfo: {
                  fields: {
                    location: {
                      rule: "repeated",
                      type: "Location",
                      id: 1
                    }
                  },
                  nested: {
                    Location: {
                      fields: {
                        path: {
                          rule: "repeated",
                          type: "int32",
                          id: 1
                        },
                        span: {
                          rule: "repeated",
                          type: "int32",
                          id: 2
                        },
                        leadingComments: {
                          type: "string",
                          id: 3
                        },
                        trailingComments: {
                          type: "string",
                          id: 4
                        },
                        leadingDetachedComments: {
                          rule: "repeated",
                          type: "string",
                          id: 6
                        }
                      }
                    }
                  }
                },
                GeneratedCodeInfo: {
                  fields: {
                    annotation: {
                      rule: "repeated",
                      type: "Annotation",
                      id: 1
                    }
                  },
                  nested: {
                    Annotation: {
                      fields: {
                        path: {
                          rule: "repeated",
                          type: "int32",
                          id: 1
                        },
                        sourceFile: {
                          type: "string",
                          id: 2
                        },
                        begin: {
                          type: "int32",
                          id: 3
                        },
                        end: {
                          type: "int32",
                          id: 4
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/ext/descriptor/index.js
var require_descriptor2 = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/ext/descriptor/index.js"(exports2, module2) {
    "use strict";
    var $protobuf = require_protobufjs();
    module2.exports = exports2 = $protobuf.descriptor = $protobuf.Root.fromJSON(require_descriptor()).lookup(".google.protobuf");
    var Namespace = $protobuf.Namespace;
    var Root = $protobuf.Root;
    var Enum = $protobuf.Enum;
    var Type = $protobuf.Type;
    var Field = $protobuf.Field;
    var MapField = $protobuf.MapField;
    var OneOf = $protobuf.OneOf;
    var Service = $protobuf.Service;
    var Method = $protobuf.Method;
    Root.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.FileDescriptorSet.decode(descriptor);
      var root = new Root();
      if (descriptor.file) {
        var fileDescriptor, filePackage;
        for (var j = 0, i; j < descriptor.file.length; ++j) {
          filePackage = root;
          if ((fileDescriptor = descriptor.file[j])["package"] && fileDescriptor["package"].length)
            filePackage = root.define(fileDescriptor["package"]);
          if (fileDescriptor.name && fileDescriptor.name.length)
            root.files.push(filePackage.filename = fileDescriptor.name);
          if (fileDescriptor.messageType)
            for (i = 0; i < fileDescriptor.messageType.length; ++i)
              filePackage.add(Type.fromDescriptor(fileDescriptor.messageType[i], fileDescriptor.syntax));
          if (fileDescriptor.enumType)
            for (i = 0; i < fileDescriptor.enumType.length; ++i)
              filePackage.add(Enum.fromDescriptor(fileDescriptor.enumType[i]));
          if (fileDescriptor.extension)
            for (i = 0; i < fileDescriptor.extension.length; ++i)
              filePackage.add(Field.fromDescriptor(fileDescriptor.extension[i]));
          if (fileDescriptor.service)
            for (i = 0; i < fileDescriptor.service.length; ++i)
              filePackage.add(Service.fromDescriptor(fileDescriptor.service[i]));
          var opts = fromDescriptorOptions(fileDescriptor.options, exports2.FileOptions);
          if (opts) {
            var ks = Object.keys(opts);
            for (i = 0; i < ks.length; ++i)
              filePackage.setOption(ks[i], opts[ks[i]]);
          }
        }
      }
      return root;
    };
    Root.prototype.toDescriptor = function toDescriptor(syntax) {
      var set = exports2.FileDescriptorSet.create();
      Root_toDescriptorRecursive(this, set.file, syntax);
      return set;
    };
    function Root_toDescriptorRecursive(ns, files, syntax) {
      var file = exports2.FileDescriptorProto.create({ name: ns.filename || (ns.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto" });
      if (syntax)
        file.syntax = syntax;
      if (!(ns instanceof Root))
        file["package"] = ns.fullName.substring(1);
      for (var i = 0, nested; i < ns.nestedArray.length; ++i)
        if ((nested = ns._nestedArray[i]) instanceof Type)
          file.messageType.push(nested.toDescriptor(syntax));
        else if (nested instanceof Enum)
          file.enumType.push(nested.toDescriptor());
        else if (nested instanceof Field)
          file.extension.push(nested.toDescriptor(syntax));
        else if (nested instanceof Service)
          file.service.push(nested.toDescriptor());
        else if (nested instanceof /* plain */
        Namespace)
          Root_toDescriptorRecursive(nested, files, syntax);
      file.options = toDescriptorOptions(ns.options, exports2.FileOptions);
      if (file.messageType.length + file.enumType.length + file.extension.length + file.service.length)
        files.push(file);
    }
    var unnamedMessageIndex = 0;
    Type.fromDescriptor = function fromDescriptor(descriptor, syntax) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.DescriptorProto.decode(descriptor);
      var type = new Type(descriptor.name.length ? descriptor.name : "Type" + unnamedMessageIndex++, fromDescriptorOptions(descriptor.options, exports2.MessageOptions)), i;
      if (descriptor.oneofDecl)
        for (i = 0; i < descriptor.oneofDecl.length; ++i)
          type.add(OneOf.fromDescriptor(descriptor.oneofDecl[i]));
      if (descriptor.field)
        for (i = 0; i < descriptor.field.length; ++i) {
          var field = Field.fromDescriptor(descriptor.field[i], syntax);
          type.add(field);
          if (descriptor.field[i].hasOwnProperty("oneofIndex"))
            type.oneofsArray[descriptor.field[i].oneofIndex].add(field);
        }
      if (descriptor.extension)
        for (i = 0; i < descriptor.extension.length; ++i)
          type.add(Field.fromDescriptor(descriptor.extension[i], syntax));
      if (descriptor.nestedType)
        for (i = 0; i < descriptor.nestedType.length; ++i) {
          type.add(Type.fromDescriptor(descriptor.nestedType[i], syntax));
          if (descriptor.nestedType[i].options && descriptor.nestedType[i].options.mapEntry)
            type.setOption("map_entry", true);
        }
      if (descriptor.enumType)
        for (i = 0; i < descriptor.enumType.length; ++i)
          type.add(Enum.fromDescriptor(descriptor.enumType[i]));
      if (descriptor.extensionRange && descriptor.extensionRange.length) {
        type.extensions = [];
        for (i = 0; i < descriptor.extensionRange.length; ++i)
          type.extensions.push([descriptor.extensionRange[i].start, descriptor.extensionRange[i].end]);
      }
      if (descriptor.reservedRange && descriptor.reservedRange.length || descriptor.reservedName && descriptor.reservedName.length) {
        type.reserved = [];
        if (descriptor.reservedRange)
          for (i = 0; i < descriptor.reservedRange.length; ++i)
            type.reserved.push([descriptor.reservedRange[i].start, descriptor.reservedRange[i].end]);
        if (descriptor.reservedName)
          for (i = 0; i < descriptor.reservedName.length; ++i)
            type.reserved.push(descriptor.reservedName[i]);
      }
      return type;
    };
    Type.prototype.toDescriptor = function toDescriptor(syntax) {
      var descriptor = exports2.DescriptorProto.create({ name: this.name }), i;
      for (i = 0; i < this.fieldsArray.length; ++i) {
        var fieldDescriptor;
        descriptor.field.push(fieldDescriptor = this._fieldsArray[i].toDescriptor(syntax));
        if (this._fieldsArray[i] instanceof MapField) {
          var keyType = toDescriptorType(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType), valueType = toDescriptorType(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType), valueTypeName = valueType === /* type */
          11 || valueType === /* enum */
          14 ? this._fieldsArray[i].resolvedType && shortname(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : void 0;
          descriptor.nestedType.push(exports2.DescriptorProto.create({
            name: fieldDescriptor.typeName,
            field: [
              exports2.FieldDescriptorProto.create({ name: "key", number: 1, label: 1, type: keyType }),
              // can't reference a type or enum
              exports2.FieldDescriptorProto.create({ name: "value", number: 2, label: 1, type: valueType, typeName: valueTypeName })
            ],
            options: exports2.MessageOptions.create({ mapEntry: true })
          }));
        }
      }
      for (i = 0; i < this.oneofsArray.length; ++i)
        descriptor.oneofDecl.push(this._oneofsArray[i].toDescriptor());
      for (i = 0; i < this.nestedArray.length; ++i) {
        if (this._nestedArray[i] instanceof Field)
          descriptor.field.push(this._nestedArray[i].toDescriptor(syntax));
        else if (this._nestedArray[i] instanceof Type)
          descriptor.nestedType.push(this._nestedArray[i].toDescriptor(syntax));
        else if (this._nestedArray[i] instanceof Enum)
          descriptor.enumType.push(this._nestedArray[i].toDescriptor());
      }
      if (this.extensions)
        for (i = 0; i < this.extensions.length; ++i)
          descriptor.extensionRange.push(exports2.DescriptorProto.ExtensionRange.create({ start: this.extensions[i][0], end: this.extensions[i][1] }));
      if (this.reserved)
        for (i = 0; i < this.reserved.length; ++i)
          if (typeof this.reserved[i] === "string")
            descriptor.reservedName.push(this.reserved[i]);
          else
            descriptor.reservedRange.push(exports2.DescriptorProto.ReservedRange.create({ start: this.reserved[i][0], end: this.reserved[i][1] }));
      descriptor.options = toDescriptorOptions(this.options, exports2.MessageOptions);
      return descriptor;
    };
    var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    Field.fromDescriptor = function fromDescriptor(descriptor, syntax) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.DescriptorProto.decode(descriptor);
      if (typeof descriptor.number !== "number")
        throw Error("missing field id");
      var fieldType;
      if (descriptor.typeName && descriptor.typeName.length)
        fieldType = descriptor.typeName;
      else
        fieldType = fromDescriptorType(descriptor.type);
      var fieldRule;
      switch (descriptor.label) {
        case 1:
          fieldRule = void 0;
          break;
        case 2:
          fieldRule = "required";
          break;
        case 3:
          fieldRule = "repeated";
          break;
        default:
          throw Error("illegal label: " + descriptor.label);
      }
      var extendee = descriptor.extendee;
      if (descriptor.extendee !== void 0) {
        extendee = extendee.length ? extendee : void 0;
      }
      var field = new Field(
        descriptor.name.length ? descriptor.name : "field" + descriptor.number,
        descriptor.number,
        fieldType,
        fieldRule,
        extendee
      );
      field.options = fromDescriptorOptions(descriptor.options, exports2.FieldOptions);
      if (descriptor.defaultValue && descriptor.defaultValue.length) {
        var defaultValue = descriptor.defaultValue;
        switch (defaultValue) {
          case "true":
          case "TRUE":
            defaultValue = true;
            break;
          case "false":
          case "FALSE":
            defaultValue = false;
            break;
          default:
            var match = numberRe.exec(defaultValue);
            if (match)
              defaultValue = parseInt(defaultValue);
            break;
        }
        field.setOption("default", defaultValue);
      }
      if (packableDescriptorType(descriptor.type)) {
        if (syntax === "proto3") {
          if (descriptor.options && !descriptor.options.packed)
            field.setOption("packed", false);
        } else if (!(descriptor.options && descriptor.options.packed))
          field.setOption("packed", false);
      }
      return field;
    };
    Field.prototype.toDescriptor = function toDescriptor(syntax) {
      var descriptor = exports2.FieldDescriptorProto.create({ name: this.name, number: this.id });
      if (this.map) {
        descriptor.type = 11;
        descriptor.typeName = $protobuf.util.ucFirst(this.name);
        descriptor.label = 3;
      } else {
        switch (descriptor.type = toDescriptorType(this.type, this.resolve().resolvedType)) {
          case 10:
          case 11:
          case 14:
            descriptor.typeName = this.resolvedType ? shortname(this.parent, this.resolvedType) : this.type;
            break;
        }
        switch (this.rule) {
          case "repeated":
            descriptor.label = 3;
            break;
          case "required":
            descriptor.label = 2;
            break;
          default:
            descriptor.label = 1;
            break;
        }
      }
      descriptor.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend;
      if (this.partOf) {
        if ((descriptor.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0)
          throw Error("missing oneof");
      }
      if (this.options) {
        descriptor.options = toDescriptorOptions(this.options, exports2.FieldOptions);
        if (this.options["default"] != null)
          descriptor.defaultValue = String(this.options["default"]);
      }
      if (syntax === "proto3") {
        if (!this.packed)
          (descriptor.options || (descriptor.options = exports2.FieldOptions.create())).packed = false;
      } else if (this.packed)
        (descriptor.options || (descriptor.options = exports2.FieldOptions.create())).packed = true;
      return descriptor;
    };
    var unnamedEnumIndex = 0;
    Enum.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.EnumDescriptorProto.decode(descriptor);
      var values = {};
      if (descriptor.value)
        for (var i = 0; i < descriptor.value.length; ++i) {
          var name = descriptor.value[i].name, value = descriptor.value[i].number || 0;
          values[name && name.length ? name : "NAME" + value] = value;
        }
      return new Enum(
        descriptor.name && descriptor.name.length ? descriptor.name : "Enum" + unnamedEnumIndex++,
        values,
        fromDescriptorOptions(descriptor.options, exports2.EnumOptions)
      );
    };
    Enum.prototype.toDescriptor = function toDescriptor() {
      var values = [];
      for (var i = 0, ks = Object.keys(this.values); i < ks.length; ++i)
        values.push(exports2.EnumValueDescriptorProto.create({ name: ks[i], number: this.values[ks[i]] }));
      return exports2.EnumDescriptorProto.create({
        name: this.name,
        value: values,
        options: toDescriptorOptions(this.options, exports2.EnumOptions)
      });
    };
    var unnamedOneofIndex = 0;
    OneOf.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.OneofDescriptorProto.decode(descriptor);
      return new OneOf(
        // unnamedOneOfIndex is global, not per type, because we have no ref to a type here
        descriptor.name && descriptor.name.length ? descriptor.name : "oneof" + unnamedOneofIndex++
        // fromDescriptorOptions(descriptor.options, exports.OneofOptions) - only uninterpreted_option
      );
    };
    OneOf.prototype.toDescriptor = function toDescriptor() {
      return exports2.OneofDescriptorProto.create({
        name: this.name
        // options: toDescriptorOptions(this.options, exports.OneofOptions) - only uninterpreted_option
      });
    };
    var unnamedServiceIndex = 0;
    Service.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.ServiceDescriptorProto.decode(descriptor);
      var service = new Service(descriptor.name && descriptor.name.length ? descriptor.name : "Service" + unnamedServiceIndex++, fromDescriptorOptions(descriptor.options, exports2.ServiceOptions));
      if (descriptor.method)
        for (var i = 0; i < descriptor.method.length; ++i)
          service.add(Method.fromDescriptor(descriptor.method[i]));
      return service;
    };
    Service.prototype.toDescriptor = function toDescriptor() {
      var methods = [];
      for (var i = 0; i < this.methodsArray.length; ++i)
        methods.push(this._methodsArray[i].toDescriptor());
      return exports2.ServiceDescriptorProto.create({
        name: this.name,
        method: methods,
        options: toDescriptorOptions(this.options, exports2.ServiceOptions)
      });
    };
    var unnamedMethodIndex = 0;
    Method.fromDescriptor = function fromDescriptor(descriptor) {
      if (typeof descriptor.length === "number")
        descriptor = exports2.MethodDescriptorProto.decode(descriptor);
      return new Method(
        // unnamedMethodIndex is global, not per service, because we have no ref to a service here
        descriptor.name && descriptor.name.length ? descriptor.name : "Method" + unnamedMethodIndex++,
        "rpc",
        descriptor.inputType,
        descriptor.outputType,
        Boolean(descriptor.clientStreaming),
        Boolean(descriptor.serverStreaming),
        fromDescriptorOptions(descriptor.options, exports2.MethodOptions)
      );
    };
    Method.prototype.toDescriptor = function toDescriptor() {
      return exports2.MethodDescriptorProto.create({
        name: this.name,
        inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
        outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
        clientStreaming: this.requestStream,
        serverStreaming: this.responseStream,
        options: toDescriptorOptions(this.options, exports2.MethodOptions)
      });
    };
    function fromDescriptorType(type) {
      switch (type) {
        case 1:
          return "double";
        case 2:
          return "float";
        case 3:
          return "int64";
        case 4:
          return "uint64";
        case 5:
          return "int32";
        case 6:
          return "fixed64";
        case 7:
          return "fixed32";
        case 8:
          return "bool";
        case 9:
          return "string";
        case 12:
          return "bytes";
        case 13:
          return "uint32";
        case 15:
          return "sfixed32";
        case 16:
          return "sfixed64";
        case 17:
          return "sint32";
        case 18:
          return "sint64";
      }
      throw Error("illegal type: " + type);
    }
    function packableDescriptorType(type) {
      switch (type) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          return true;
      }
      return false;
    }
    function toDescriptorType(type, resolvedType) {
      switch (type) {
        case "double":
          return 1;
        case "float":
          return 2;
        case "int64":
          return 3;
        case "uint64":
          return 4;
        case "int32":
          return 5;
        case "fixed64":
          return 6;
        case "fixed32":
          return 7;
        case "bool":
          return 8;
        case "string":
          return 9;
        case "bytes":
          return 12;
        case "uint32":
          return 13;
        case "sfixed32":
          return 15;
        case "sfixed64":
          return 16;
        case "sint32":
          return 17;
        case "sint64":
          return 18;
      }
      if (resolvedType instanceof Enum)
        return 14;
      if (resolvedType instanceof Type)
        return resolvedType.group ? 10 : 11;
      throw Error("illegal type: " + type);
    }
    function fromDescriptorOptions(options, type) {
      if (!options)
        return void 0;
      var out = [];
      for (var i = 0, field, key, val; i < type.fieldsArray.length; ++i)
        if ((key = (field = type._fieldsArray[i]).name) !== "uninterpretedOption") {
          if (options.hasOwnProperty(key)) {
            val = options[key];
            if (field.resolvedType instanceof Enum && typeof val === "number" && field.resolvedType.valuesById[val] !== void 0)
              val = field.resolvedType.valuesById[val];
            out.push(underScore(key), val);
          }
        }
      return out.length ? $protobuf.util.toObject(out) : void 0;
    }
    function toDescriptorOptions(options, type) {
      if (!options)
        return void 0;
      var out = [];
      for (var i = 0, ks = Object.keys(options), key, val; i < ks.length; ++i) {
        val = options[key = ks[i]];
        if (key === "default")
          continue;
        var field = type.fields[key];
        if (!field && !(field = type.fields[key = $protobuf.util.camelCase(key)]))
          continue;
        out.push(key, val);
      }
      return out.length ? type.fromObject($protobuf.util.toObject(out)) : void 0;
    }
    function shortname(from, to) {
      var fromPath = from.fullName.split("."), toPath = to.fullName.split("."), i = 0, j = 0, k = toPath.length - 1;
      if (!(from instanceof Root) && to instanceof Namespace)
        while (i < fromPath.length && j < k && fromPath[i] === toPath[j]) {
          var other = to.lookup(fromPath[i++], true);
          if (other !== null && other !== to)
            break;
          ++j;
        }
      else
        for (; i < fromPath.length && j < k && fromPath[i] === toPath[j]; ++i, ++j)
          ;
      return toPath.slice(j).join(".");
    }
    function underScore(str) {
      return str.substring(0, 1) + str.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function($0, $1) {
        return "_" + $1.toLowerCase();
      });
    }
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/api.json
var require_api = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/api.json"(exports2, module2) {
    module2.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                Api: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    methods: {
                      rule: "repeated",
                      type: "Method",
                      id: 2
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 3
                    },
                    version: {
                      type: "string",
                      id: 4
                    },
                    sourceContext: {
                      type: "SourceContext",
                      id: 5
                    },
                    mixins: {
                      rule: "repeated",
                      type: "Mixin",
                      id: 6
                    },
                    syntax: {
                      type: "Syntax",
                      id: 7
                    }
                  }
                },
                Method: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    requestTypeUrl: {
                      type: "string",
                      id: 2
                    },
                    requestStreaming: {
                      type: "bool",
                      id: 3
                    },
                    responseTypeUrl: {
                      type: "string",
                      id: 4
                    },
                    responseStreaming: {
                      type: "bool",
                      id: 5
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 6
                    },
                    syntax: {
                      type: "Syntax",
                      id: 7
                    }
                  }
                },
                Mixin: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    root: {
                      type: "string",
                      id: 2
                    }
                  }
                },
                SourceContext: {
                  fields: {
                    fileName: {
                      type: "string",
                      id: 1
                    }
                  }
                },
                Option: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      type: "Any",
                      id: 2
                    }
                  }
                },
                Syntax: {
                  values: {
                    SYNTAX_PROTO2: 0,
                    SYNTAX_PROTO3: 1
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/source_context.json
var require_source_context = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/source_context.json"(exports2, module2) {
    module2.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                SourceContext: {
                  fields: {
                    fileName: {
                      type: "string",
                      id: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/type.json
var require_type2 = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/google/protobuf/type.json"(exports2, module2) {
    module2.exports = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: {
                Type: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    fields: {
                      rule: "repeated",
                      type: "Field",
                      id: 2
                    },
                    oneofs: {
                      rule: "repeated",
                      type: "string",
                      id: 3
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 4
                    },
                    sourceContext: {
                      type: "SourceContext",
                      id: 5
                    },
                    syntax: {
                      type: "Syntax",
                      id: 6
                    }
                  }
                },
                Field: {
                  fields: {
                    kind: {
                      type: "Kind",
                      id: 1
                    },
                    cardinality: {
                      type: "Cardinality",
                      id: 2
                    },
                    number: {
                      type: "int32",
                      id: 3
                    },
                    name: {
                      type: "string",
                      id: 4
                    },
                    typeUrl: {
                      type: "string",
                      id: 6
                    },
                    oneofIndex: {
                      type: "int32",
                      id: 7
                    },
                    packed: {
                      type: "bool",
                      id: 8
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 9
                    },
                    jsonName: {
                      type: "string",
                      id: 10
                    },
                    defaultValue: {
                      type: "string",
                      id: 11
                    }
                  },
                  nested: {
                    Kind: {
                      values: {
                        TYPE_UNKNOWN: 0,
                        TYPE_DOUBLE: 1,
                        TYPE_FLOAT: 2,
                        TYPE_INT64: 3,
                        TYPE_UINT64: 4,
                        TYPE_INT32: 5,
                        TYPE_FIXED64: 6,
                        TYPE_FIXED32: 7,
                        TYPE_BOOL: 8,
                        TYPE_STRING: 9,
                        TYPE_GROUP: 10,
                        TYPE_MESSAGE: 11,
                        TYPE_BYTES: 12,
                        TYPE_UINT32: 13,
                        TYPE_ENUM: 14,
                        TYPE_SFIXED32: 15,
                        TYPE_SFIXED64: 16,
                        TYPE_SINT32: 17,
                        TYPE_SINT64: 18
                      }
                    },
                    Cardinality: {
                      values: {
                        CARDINALITY_UNKNOWN: 0,
                        CARDINALITY_OPTIONAL: 1,
                        CARDINALITY_REQUIRED: 2,
                        CARDINALITY_REPEATED: 3
                      }
                    }
                  }
                },
                Enum: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    enumvalue: {
                      rule: "repeated",
                      type: "EnumValue",
                      id: 2
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 3
                    },
                    sourceContext: {
                      type: "SourceContext",
                      id: 4
                    },
                    syntax: {
                      type: "Syntax",
                      id: 5
                    }
                  }
                },
                EnumValue: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    number: {
                      type: "int32",
                      id: 2
                    },
                    options: {
                      rule: "repeated",
                      type: "Option",
                      id: 3
                    }
                  }
                },
                Option: {
                  fields: {
                    name: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      type: "Any",
                      id: 2
                    }
                  }
                },
                Syntax: {
                  values: {
                    SYNTAX_PROTO2: 0,
                    SYNTAX_PROTO3: 1
                  }
                },
                Any: {
                  fields: {
                    type_url: {
                      type: "string",
                      id: 1
                    },
                    value: {
                      type: "bytes",
                      id: 2
                    }
                  }
                },
                SourceContext: {
                  fields: {
                    fileName: {
                      type: "string",
                      id: 1
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }
});

// node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/util.js
var require_util2 = __commonJS({
  "node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.addCommonProtos = exports2.loadProtosWithOptionsSync = exports2.loadProtosWithOptions = void 0;
    var fs = require("fs");
    var path = require("path");
    var Protobuf = require_protobufjs();
    function addIncludePathResolver(root, includePaths) {
      const originalResolvePath = root.resolvePath;
      root.resolvePath = (origin, target) => {
        if (path.isAbsolute(target)) {
          return target;
        }
        for (const directory of includePaths) {
          const fullPath = path.join(directory, target);
          try {
            fs.accessSync(fullPath, fs.constants.R_OK);
            return fullPath;
          } catch (err) {
            continue;
          }
        }
        process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);
        return originalResolvePath(origin, target);
      };
    }
    async function loadProtosWithOptions(filename, options) {
      const root = new Protobuf.Root();
      options = options || {};
      if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
          return Promise.reject(new Error("The includeDirs option must be an array"));
        }
        addIncludePathResolver(root, options.includeDirs);
      }
      const loadedRoot = await root.load(filename, options);
      loadedRoot.resolveAll();
      return loadedRoot;
    }
    exports2.loadProtosWithOptions = loadProtosWithOptions;
    function loadProtosWithOptionsSync(filename, options) {
      const root = new Protobuf.Root();
      options = options || {};
      if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
          throw new Error("The includeDirs option must be an array");
        }
        addIncludePathResolver(root, options.includeDirs);
      }
      const loadedRoot = root.loadSync(filename, options);
      loadedRoot.resolveAll();
      return loadedRoot;
    }
    exports2.loadProtosWithOptionsSync = loadProtosWithOptionsSync;
    function addCommonProtos() {
      const apiDescriptor = require_api();
      const descriptorDescriptor = require_descriptor();
      const sourceContextDescriptor = require_source_context();
      const typeDescriptor = require_type2();
      Protobuf.common("api", apiDescriptor.nested.google.nested.protobuf.nested);
      Protobuf.common("descriptor", descriptorDescriptor.nested.google.nested.protobuf.nested);
      Protobuf.common("source_context", sourceContextDescriptor.nested.google.nested.protobuf.nested);
      Protobuf.common("type", typeDescriptor.nested.google.nested.protobuf.nested);
    }
    exports2.addCommonProtos = addCommonProtos;
  }
});

// node_modules/.pnpm/long@5.2.3/node_modules/long/umd/index.js
var require_umd = __commonJS({
  "node_modules/.pnpm/long@5.2.3/node_modules/long/umd/index.js"(exports2, module2) {
    "use strict";
    var Long2 = function(exports3) {
      "use strict";
      Object.defineProperty(exports3, "__esModule", {
        value: true
      });
      exports3.default = void 0;
      var wasm2 = null;
      try {
        wasm2 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
      } catch (e) {
      }
      function Long3(low, high, unsigned) {
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
      }
      Long3.prototype.__isLong__;
      Object.defineProperty(Long3.prototype, "__isLong__", {
        value: true
      });
      function isLong2(obj) {
        return (obj && obj["__isLong__"]) === true;
      }
      function ctz322(value) {
        var c = Math.clz32(value & -value);
        return value ? 31 - c : c;
      }
      Long3.isLong = isLong2;
      var INT_CACHE2 = {};
      var UINT_CACHE2 = {};
      function fromInt2(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
          value >>>= 0;
          if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE2[value];
            if (cachedObj)
              return cachedObj;
          }
          obj = fromBits2(value, 0, true);
          if (cache)
            UINT_CACHE2[value] = obj;
          return obj;
        } else {
          value |= 0;
          if (cache = -128 <= value && value < 128) {
            cachedObj = INT_CACHE2[value];
            if (cachedObj)
              return cachedObj;
          }
          obj = fromBits2(value, value < 0 ? -1 : 0, false);
          if (cache)
            INT_CACHE2[value] = obj;
          return obj;
        }
      }
      Long3.fromInt = fromInt2;
      function fromNumber2(value, unsigned) {
        if (isNaN(value))
          return unsigned ? UZERO2 : ZERO2;
        if (unsigned) {
          if (value < 0)
            return UZERO2;
          if (value >= TWO_PWR_64_DBL2)
            return MAX_UNSIGNED_VALUE2;
        } else {
          if (value <= -TWO_PWR_63_DBL2)
            return MIN_VALUE2;
          if (value + 1 >= TWO_PWR_63_DBL2)
            return MAX_VALUE2;
        }
        if (value < 0)
          return fromNumber2(-value, unsigned).neg();
        return fromBits2(value % TWO_PWR_32_DBL2 | 0, value / TWO_PWR_32_DBL2 | 0, unsigned);
      }
      Long3.fromNumber = fromNumber2;
      function fromBits2(lowBits, highBits, unsigned) {
        return new Long3(lowBits, highBits, unsigned);
      }
      Long3.fromBits = fromBits2;
      var pow_dbl2 = Math.pow;
      function fromString2(str, unsigned, radix) {
        if (str.length === 0)
          throw Error("empty string");
        if (typeof unsigned === "number") {
          radix = unsigned;
          unsigned = false;
        } else {
          unsigned = !!unsigned;
        }
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
          return unsigned ? UZERO2 : ZERO2;
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
          throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0)
          throw Error("interior hyphen");
        else if (p === 0) {
          return fromString2(str.substring(1), unsigned, radix).neg();
        }
        var radixToPower = fromNumber2(pow_dbl2(radix, 8));
        var result = ZERO2;
        for (var i = 0; i < str.length; i += 8) {
          var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
          if (size < 8) {
            var power = fromNumber2(pow_dbl2(radix, size));
            result = result.mul(power).add(fromNumber2(value));
          } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber2(value));
          }
        }
        result.unsigned = unsigned;
        return result;
      }
      Long3.fromString = fromString2;
      function fromValue2(val, unsigned) {
        if (typeof val === "number")
          return fromNumber2(val, unsigned);
        if (typeof val === "string")
          return fromString2(val, unsigned);
        return fromBits2(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
      }
      Long3.fromValue = fromValue2;
      var TWO_PWR_16_DBL2 = 1 << 16;
      var TWO_PWR_24_DBL2 = 1 << 24;
      var TWO_PWR_32_DBL2 = TWO_PWR_16_DBL2 * TWO_PWR_16_DBL2;
      var TWO_PWR_64_DBL2 = TWO_PWR_32_DBL2 * TWO_PWR_32_DBL2;
      var TWO_PWR_63_DBL2 = TWO_PWR_64_DBL2 / 2;
      var TWO_PWR_242 = fromInt2(TWO_PWR_24_DBL2);
      var ZERO2 = fromInt2(0);
      Long3.ZERO = ZERO2;
      var UZERO2 = fromInt2(0, true);
      Long3.UZERO = UZERO2;
      var ONE2 = fromInt2(1);
      Long3.ONE = ONE2;
      var UONE2 = fromInt2(1, true);
      Long3.UONE = UONE2;
      var NEG_ONE2 = fromInt2(-1);
      Long3.NEG_ONE = NEG_ONE2;
      var MAX_VALUE2 = fromBits2(4294967295 | 0, 2147483647 | 0, false);
      Long3.MAX_VALUE = MAX_VALUE2;
      var MAX_UNSIGNED_VALUE2 = fromBits2(4294967295 | 0, 4294967295 | 0, true);
      Long3.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE2;
      var MIN_VALUE2 = fromBits2(0, 2147483648 | 0, false);
      Long3.MIN_VALUE = MIN_VALUE2;
      var LongPrototype2 = Long3.prototype;
      LongPrototype2.toInt = function toInt2() {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype2.toNumber = function toNumber2() {
        if (this.unsigned)
          return (this.high >>> 0) * TWO_PWR_32_DBL2 + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL2 + (this.low >>> 0);
      };
      LongPrototype2.toString = function toString2(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
          throw RangeError("radix");
        if (this.isZero())
          return "0";
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE2)) {
            var radixLong = fromNumber2(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
          } else
            return "-" + this.neg().toString(radix);
        }
        var radixToPower = fromNumber2(pow_dbl2(radix, 6), this.unsigned), rem = this;
        var result = "";
        while (true) {
          var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero())
            return digits + result;
          else {
            while (digits.length < 6)
              digits = "0" + digits;
            result = "" + digits + result;
          }
        }
      };
      LongPrototype2.getHighBits = function getHighBits2() {
        return this.high;
      };
      LongPrototype2.getHighBitsUnsigned = function getHighBitsUnsigned2() {
        return this.high >>> 0;
      };
      LongPrototype2.getLowBits = function getLowBits2() {
        return this.low;
      };
      LongPrototype2.getLowBitsUnsigned = function getLowBitsUnsigned2() {
        return this.low >>> 0;
      };
      LongPrototype2.getNumBitsAbs = function getNumBitsAbs2() {
        if (this.isNegative())
          return this.eq(MIN_VALUE2) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--)
          if ((val & 1 << bit) != 0)
            break;
        return this.high != 0 ? bit + 33 : bit + 1;
      };
      LongPrototype2.isZero = function isZero2() {
        return this.high === 0 && this.low === 0;
      };
      LongPrototype2.eqz = LongPrototype2.isZero;
      LongPrototype2.isNegative = function isNegative2() {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype2.isPositive = function isPositive2() {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype2.isOdd = function isOdd2() {
        return (this.low & 1) === 1;
      };
      LongPrototype2.isEven = function isEven2() {
        return (this.low & 1) === 0;
      };
      LongPrototype2.equals = function equals2(other) {
        if (!isLong2(other))
          other = fromValue2(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
          return false;
        return this.high === other.high && this.low === other.low;
      };
      LongPrototype2.eq = LongPrototype2.equals;
      LongPrototype2.notEquals = function notEquals2(other) {
        return !this.eq(
          /* validates */
          other
        );
      };
      LongPrototype2.neq = LongPrototype2.notEquals;
      LongPrototype2.ne = LongPrototype2.notEquals;
      LongPrototype2.lessThan = function lessThan2(other) {
        return this.comp(
          /* validates */
          other
        ) < 0;
      };
      LongPrototype2.lt = LongPrototype2.lessThan;
      LongPrototype2.lessThanOrEqual = function lessThanOrEqual2(other) {
        return this.comp(
          /* validates */
          other
        ) <= 0;
      };
      LongPrototype2.lte = LongPrototype2.lessThanOrEqual;
      LongPrototype2.le = LongPrototype2.lessThanOrEqual;
      LongPrototype2.greaterThan = function greaterThan2(other) {
        return this.comp(
          /* validates */
          other
        ) > 0;
      };
      LongPrototype2.gt = LongPrototype2.greaterThan;
      LongPrototype2.greaterThanOrEqual = function greaterThanOrEqual2(other) {
        return this.comp(
          /* validates */
          other
        ) >= 0;
      };
      LongPrototype2.gte = LongPrototype2.greaterThanOrEqual;
      LongPrototype2.ge = LongPrototype2.greaterThanOrEqual;
      LongPrototype2.compare = function compare2(other) {
        if (!isLong2(other))
          other = fromValue2(other);
        if (this.eq(other))
          return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
          return -1;
        if (!thisNeg && otherNeg)
          return 1;
        if (!this.unsigned)
          return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
      };
      LongPrototype2.comp = LongPrototype2.compare;
      LongPrototype2.negate = function negate2() {
        if (!this.unsigned && this.eq(MIN_VALUE2))
          return MIN_VALUE2;
        return this.not().add(ONE2);
      };
      LongPrototype2.neg = LongPrototype2.negate;
      LongPrototype2.add = function add2(addend) {
        if (!isLong2(addend))
          addend = fromValue2(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 65535;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 + b48;
        c48 &= 65535;
        return fromBits2(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype2.subtract = function subtract2(subtrahend) {
        if (!isLong2(subtrahend))
          subtrahend = fromValue2(subtrahend);
        return this.add(subtrahend.neg());
      };
      LongPrototype2.sub = LongPrototype2.subtract;
      LongPrototype2.multiply = function multiply2(multiplier) {
        if (this.isZero())
          return this;
        if (!isLong2(multiplier))
          multiplier = fromValue2(multiplier);
        if (wasm2) {
          var low = wasm2["mul"](this.low, this.high, multiplier.low, multiplier.high);
          return fromBits2(low, wasm2["get_high"](), this.unsigned);
        }
        if (multiplier.isZero())
          return this.unsigned ? UZERO2 : ZERO2;
        if (this.eq(MIN_VALUE2))
          return multiplier.isOdd() ? MIN_VALUE2 : ZERO2;
        if (multiplier.eq(MIN_VALUE2))
          return this.isOdd() ? MIN_VALUE2 : ZERO2;
        if (this.isNegative()) {
          if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
          else
            return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative())
          return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_242) && multiplier.lt(TWO_PWR_242))
          return fromNumber2(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 65535;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 65535;
        return fromBits2(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype2.mul = LongPrototype2.multiply;
      LongPrototype2.divide = function divide2(divisor) {
        if (!isLong2(divisor))
          divisor = fromValue2(divisor);
        if (divisor.isZero())
          throw Error("division by zero");
        if (wasm2) {
          if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
            return this;
          }
          var low = (this.unsigned ? wasm2["div_u"] : wasm2["div_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits2(low, wasm2["get_high"](), this.unsigned);
        }
        if (this.isZero())
          return this.unsigned ? UZERO2 : ZERO2;
        var approx, rem, res;
        if (!this.unsigned) {
          if (this.eq(MIN_VALUE2)) {
            if (divisor.eq(ONE2) || divisor.eq(NEG_ONE2))
              return MIN_VALUE2;
            else if (divisor.eq(MIN_VALUE2))
              return ONE2;
            else {
              var halfThis = this.shr(1);
              approx = halfThis.div(divisor).shl(1);
              if (approx.eq(ZERO2)) {
                return divisor.isNegative() ? ONE2 : NEG_ONE2;
              } else {
                rem = this.sub(divisor.mul(approx));
                res = approx.add(rem.div(divisor));
                return res;
              }
            }
          } else if (divisor.eq(MIN_VALUE2))
            return this.unsigned ? UZERO2 : ZERO2;
          if (this.isNegative()) {
            if (divisor.isNegative())
              return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
          } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
          res = ZERO2;
        } else {
          if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
          if (divisor.gt(this))
            return UZERO2;
          if (divisor.gt(this.shru(1)))
            return UONE2;
          res = UZERO2;
        }
        rem = this;
        while (rem.gte(divisor)) {
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
          var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl2(2, log2 - 48), approxRes = fromNumber2(approx), approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber2(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
          }
          if (approxRes.isZero())
            approxRes = ONE2;
          res = res.add(approxRes);
          rem = rem.sub(approxRem);
        }
        return res;
      };
      LongPrototype2.div = LongPrototype2.divide;
      LongPrototype2.modulo = function modulo2(divisor) {
        if (!isLong2(divisor))
          divisor = fromValue2(divisor);
        if (wasm2) {
          var low = (this.unsigned ? wasm2["rem_u"] : wasm2["rem_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits2(low, wasm2["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
      };
      LongPrototype2.mod = LongPrototype2.modulo;
      LongPrototype2.rem = LongPrototype2.modulo;
      LongPrototype2.not = function not2() {
        return fromBits2(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype2.countLeadingZeros = function countLeadingZeros2() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      };
      LongPrototype2.clz = LongPrototype2.countLeadingZeros;
      LongPrototype2.countTrailingZeros = function countTrailingZeros2() {
        return this.low ? ctz322(this.low) : ctz322(this.high) + 32;
      };
      LongPrototype2.ctz = LongPrototype2.countTrailingZeros;
      LongPrototype2.and = function and2(other) {
        if (!isLong2(other))
          other = fromValue2(other);
        return fromBits2(this.low & other.low, this.high & other.high, this.unsigned);
      };
      LongPrototype2.or = function or2(other) {
        if (!isLong2(other))
          other = fromValue2(other);
        return fromBits2(this.low | other.low, this.high | other.high, this.unsigned);
      };
      LongPrototype2.xor = function xor2(other) {
        if (!isLong2(other))
          other = fromValue2(other);
        return fromBits2(this.low ^ other.low, this.high ^ other.high, this.unsigned);
      };
      LongPrototype2.shiftLeft = function shiftLeft2(numBits) {
        if (isLong2(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        else if (numBits < 32)
          return fromBits2(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else
          return fromBits2(0, this.low << numBits - 32, this.unsigned);
      };
      LongPrototype2.shl = LongPrototype2.shiftLeft;
      LongPrototype2.shiftRight = function shiftRight2(numBits) {
        if (isLong2(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        else if (numBits < 32)
          return fromBits2(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else
          return fromBits2(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype2.shr = LongPrototype2.shiftRight;
      LongPrototype2.shiftRightUnsigned = function shiftRightUnsigned2(numBits) {
        if (isLong2(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        if (numBits < 32)
          return fromBits2(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
        if (numBits === 32)
          return fromBits2(this.high, 0, this.unsigned);
        return fromBits2(this.high >>> numBits - 32, 0, this.unsigned);
      };
      LongPrototype2.shru = LongPrototype2.shiftRightUnsigned;
      LongPrototype2.shr_u = LongPrototype2.shiftRightUnsigned;
      LongPrototype2.rotateLeft = function rotateLeft2(numBits) {
        var b;
        if (isLong2(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        if (numBits === 32)
          return fromBits2(this.high, this.low, this.unsigned);
        if (numBits < 32) {
          b = 32 - numBits;
          return fromBits2(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits2(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
      };
      LongPrototype2.rotl = LongPrototype2.rotateLeft;
      LongPrototype2.rotateRight = function rotateRight2(numBits) {
        var b;
        if (isLong2(numBits))
          numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
          return this;
        if (numBits === 32)
          return fromBits2(this.high, this.low, this.unsigned);
        if (numBits < 32) {
          b = 32 - numBits;
          return fromBits2(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits2(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
      };
      LongPrototype2.rotr = LongPrototype2.rotateRight;
      LongPrototype2.toSigned = function toSigned2() {
        if (!this.unsigned)
          return this;
        return fromBits2(this.low, this.high, false);
      };
      LongPrototype2.toUnsigned = function toUnsigned2() {
        if (this.unsigned)
          return this;
        return fromBits2(this.low, this.high, true);
      };
      LongPrototype2.toBytes = function toBytes2(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype2.toBytesLE = function toBytesLE2() {
        var hi = this.high, lo = this.low;
        return [lo & 255, lo >>> 8 & 255, lo >>> 16 & 255, lo >>> 24, hi & 255, hi >>> 8 & 255, hi >>> 16 & 255, hi >>> 24];
      };
      LongPrototype2.toBytesBE = function toBytesBE2() {
        var hi = this.high, lo = this.low;
        return [hi >>> 24, hi >>> 16 & 255, hi >>> 8 & 255, hi & 255, lo >>> 24, lo >>> 16 & 255, lo >>> 8 & 255, lo & 255];
      };
      Long3.fromBytes = function fromBytes2(bytes, unsigned, le) {
        return le ? Long3.fromBytesLE(bytes, unsigned) : Long3.fromBytesBE(bytes, unsigned);
      };
      Long3.fromBytesLE = function fromBytesLE2(bytes, unsigned) {
        return new Long3(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
      };
      Long3.fromBytesBE = function fromBytesBE2(bytes, unsigned) {
        return new Long3(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
      };
      var _default = Long3;
      exports3.default = _default;
      return "default" in exports3 ? exports3.default : exports3;
    }({});
    if (typeof define === "function" && define.amd)
      define([], function() {
        return Long2;
      });
    else if (typeof module2 === "object" && typeof exports2 === "object")
      module2.exports = Long2;
  }
});

// node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/@grpc+proto-loader@0.7.10/node_modules/@grpc/proto-loader/build/src/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.loadFileDescriptorSetFromObject = exports2.loadFileDescriptorSetFromBuffer = exports2.fromJSON = exports2.loadSync = exports2.load = exports2.isAnyExtension = exports2.Long = void 0;
    var camelCase = require_lodash();
    var Protobuf = require_protobufjs();
    var descriptor = require_descriptor2();
    var util_1 = require_util2();
    var Long2 = require_umd();
    exports2.Long = Long2;
    function isAnyExtension(obj) {
      return "@type" in obj && typeof obj["@type"] === "string";
    }
    exports2.isAnyExtension = isAnyExtension;
    var descriptorOptions = {
      longs: String,
      enums: String,
      bytes: String,
      defaults: true,
      oneofs: true,
      json: true
    };
    function joinName(baseName, name) {
      if (baseName === "") {
        return name;
      } else {
        return baseName + "." + name;
      }
    }
    function isHandledReflectionObject(obj) {
      return obj instanceof Protobuf.Service || obj instanceof Protobuf.Type || obj instanceof Protobuf.Enum;
    }
    function isNamespaceBase(obj) {
      return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;
    }
    function getAllHandledReflectionObjects(obj, parentName) {
      const objName = joinName(parentName, obj.name);
      if (isHandledReflectionObject(obj)) {
        return [[objName, obj]];
      } else {
        if (isNamespaceBase(obj) && typeof obj.nested !== "undefined") {
          return Object.keys(obj.nested).map((name) => {
            return getAllHandledReflectionObjects(obj.nested[name], objName);
          }).reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
        }
      }
      return [];
    }
    function createDeserializer(cls, options) {
      return function deserialize(argBuf) {
        return cls.toObject(cls.decode(argBuf), options);
      };
    }
    function createSerializer(cls) {
      return function serialize(arg) {
        if (Array.isArray(arg)) {
          throw new Error(`Failed to serialize message: expected object with ${cls.name} structure, got array instead`);
        }
        const message = cls.fromObject(arg);
        return cls.encode(message).finish();
      };
    }
    function createMethodDefinition(method, serviceName, options, fileDescriptors) {
      const requestType = method.resolvedRequestType;
      const responseType = method.resolvedResponseType;
      return {
        path: "/" + serviceName + "/" + method.name,
        requestStream: !!method.requestStream,
        responseStream: !!method.responseStream,
        requestSerialize: createSerializer(requestType),
        requestDeserialize: createDeserializer(requestType, options),
        responseSerialize: createSerializer(responseType),
        responseDeserialize: createDeserializer(responseType, options),
        // TODO(murgatroid99): Find a better way to handle this
        originalName: camelCase(method.name),
        requestType: createMessageDefinition(requestType, fileDescriptors),
        responseType: createMessageDefinition(responseType, fileDescriptors)
      };
    }
    function createServiceDefinition(service, name, options, fileDescriptors) {
      const def = {};
      for (const method of service.methodsArray) {
        def[method.name] = createMethodDefinition(method, name, options, fileDescriptors);
      }
      return def;
    }
    function createMessageDefinition(message, fileDescriptors) {
      const messageDescriptor = message.toDescriptor("proto3");
      return {
        format: "Protocol Buffer 3 DescriptorProto",
        type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
      };
    }
    function createEnumDefinition(enumType, fileDescriptors) {
      const enumDescriptor = enumType.toDescriptor("proto3");
      return {
        format: "Protocol Buffer 3 EnumDescriptorProto",
        type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
      };
    }
    function createDefinition(obj, name, options, fileDescriptors) {
      if (obj instanceof Protobuf.Service) {
        return createServiceDefinition(obj, name, options, fileDescriptors);
      } else if (obj instanceof Protobuf.Type) {
        return createMessageDefinition(obj, fileDescriptors);
      } else if (obj instanceof Protobuf.Enum) {
        return createEnumDefinition(obj, fileDescriptors);
      } else {
        throw new Error("Type mismatch in reflection object handling");
      }
    }
    function createPackageDefinition(root, options) {
      const def = {};
      root.resolveAll();
      const descriptorList = root.toDescriptor("proto3").file;
      const bufferList = descriptorList.map((value) => Buffer.from(descriptor.FileDescriptorProto.encode(value).finish()));
      for (const [name, obj] of getAllHandledReflectionObjects(root, "")) {
        def[name] = createDefinition(obj, name, options, bufferList);
      }
      return def;
    }
    function createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options) {
      options = options || {};
      const root = Protobuf.Root.fromDescriptor(decodedDescriptorSet);
      root.resolveAll();
      return createPackageDefinition(root, options);
    }
    function load(filename, options) {
      return (0, util_1.loadProtosWithOptions)(filename, options).then((loadedRoot) => {
        return createPackageDefinition(loadedRoot, options);
      });
    }
    exports2.load = load;
    function loadSync(filename, options) {
      const loadedRoot = (0, util_1.loadProtosWithOptionsSync)(filename, options);
      return createPackageDefinition(loadedRoot, options);
    }
    exports2.loadSync = loadSync;
    function fromJSON(json, options) {
      options = options || {};
      const loadedRoot = Protobuf.Root.fromJSON(json);
      loadedRoot.resolveAll();
      return createPackageDefinition(loadedRoot, options);
    }
    exports2.fromJSON = fromJSON;
    function loadFileDescriptorSetFromBuffer(descriptorSet, options) {
      const decodedDescriptorSet = descriptor.FileDescriptorSet.decode(descriptorSet);
      return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
    }
    exports2.loadFileDescriptorSetFromBuffer = loadFileDescriptorSetFromBuffer;
    function loadFileDescriptorSetFromObject(descriptorSet, options) {
      const decodedDescriptorSet = descriptor.FileDescriptorSet.fromObject(descriptorSet);
      return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
    }
    exports2.loadFileDescriptorSetFromObject = loadFileDescriptorSetFromObject;
    (0, util_1.addCommonProtos)();
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channelz.js
var require_channelz = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channelz.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.getChannelzServiceDefinition = exports2.getChannelzHandlers = exports2.unregisterChannelzRef = exports2.registerChannelzSocket = exports2.registerChannelzServer = exports2.registerChannelzSubchannel = exports2.registerChannelzChannel = exports2.ChannelzCallTracker = exports2.ChannelzChildrenTracker = exports2.ChannelzTrace = void 0;
    var net_1 = require("net");
    var connectivity_state_1 = require_connectivity_state();
    var constants_1 = require_constants();
    var subchannel_address_1 = require_subchannel_address();
    var admin_1 = require_admin();
    var make_client_1 = require_make_client();
    function channelRefToMessage(ref) {
      return {
        channel_id: ref.id,
        name: ref.name
      };
    }
    function subchannelRefToMessage(ref) {
      return {
        subchannel_id: ref.id,
        name: ref.name
      };
    }
    function serverRefToMessage(ref) {
      return {
        server_id: ref.id
      };
    }
    function socketRefToMessage(ref) {
      return {
        socket_id: ref.id,
        name: ref.name
      };
    }
    var TARGET_RETAINED_TRACES = 32;
    var ChannelzTrace = class {
      constructor() {
        this.events = [];
        this.eventsLogged = 0;
        this.creationTimestamp = /* @__PURE__ */ new Date();
      }
      addTrace(severity, description, child) {
        const timestamp = /* @__PURE__ */ new Date();
        this.events.push({
          description,
          severity,
          timestamp,
          childChannel: (child === null || child === void 0 ? void 0 : child.kind) === "channel" ? child : void 0,
          childSubchannel: (child === null || child === void 0 ? void 0 : child.kind) === "subchannel" ? child : void 0
        });
        if (this.events.length >= TARGET_RETAINED_TRACES * 2) {
          this.events = this.events.slice(TARGET_RETAINED_TRACES);
        }
        this.eventsLogged += 1;
      }
      getTraceMessage() {
        return {
          creation_timestamp: dateToProtoTimestamp(this.creationTimestamp),
          num_events_logged: this.eventsLogged,
          events: this.events.map((event) => {
            return {
              description: event.description,
              severity: event.severity,
              timestamp: dateToProtoTimestamp(event.timestamp),
              channel_ref: event.childChannel ? channelRefToMessage(event.childChannel) : null,
              subchannel_ref: event.childSubchannel ? subchannelRefToMessage(event.childSubchannel) : null
            };
          })
        };
      }
    };
    exports2.ChannelzTrace = ChannelzTrace;
    var ChannelzChildrenTracker = class {
      constructor() {
        this.channelChildren = /* @__PURE__ */ new Map();
        this.subchannelChildren = /* @__PURE__ */ new Map();
        this.socketChildren = /* @__PURE__ */ new Map();
      }
      refChild(child) {
        var _a, _b, _c;
        switch (child.kind) {
          case "channel": {
            const trackedChild = (_a = this.channelChildren.get(child.id)) !== null && _a !== void 0 ? _a : {
              ref: child,
              count: 0
            };
            trackedChild.count += 1;
            this.channelChildren.set(child.id, trackedChild);
            break;
          }
          case "subchannel": {
            const trackedChild = (_b = this.subchannelChildren.get(child.id)) !== null && _b !== void 0 ? _b : {
              ref: child,
              count: 0
            };
            trackedChild.count += 1;
            this.subchannelChildren.set(child.id, trackedChild);
            break;
          }
          case "socket": {
            const trackedChild = (_c = this.socketChildren.get(child.id)) !== null && _c !== void 0 ? _c : {
              ref: child,
              count: 0
            };
            trackedChild.count += 1;
            this.socketChildren.set(child.id, trackedChild);
            break;
          }
        }
      }
      unrefChild(child) {
        switch (child.kind) {
          case "channel": {
            const trackedChild = this.channelChildren.get(child.id);
            if (trackedChild !== void 0) {
              trackedChild.count -= 1;
              if (trackedChild.count === 0) {
                this.channelChildren.delete(child.id);
              } else {
                this.channelChildren.set(child.id, trackedChild);
              }
            }
            break;
          }
          case "subchannel": {
            const trackedChild = this.subchannelChildren.get(child.id);
            if (trackedChild !== void 0) {
              trackedChild.count -= 1;
              if (trackedChild.count === 0) {
                this.subchannelChildren.delete(child.id);
              } else {
                this.subchannelChildren.set(child.id, trackedChild);
              }
            }
            break;
          }
          case "socket": {
            const trackedChild = this.socketChildren.get(child.id);
            if (trackedChild !== void 0) {
              trackedChild.count -= 1;
              if (trackedChild.count === 0) {
                this.socketChildren.delete(child.id);
              } else {
                this.socketChildren.set(child.id, trackedChild);
              }
            }
            break;
          }
        }
      }
      getChildLists() {
        const channels2 = [];
        for (const { ref } of this.channelChildren.values()) {
          channels2.push(ref);
        }
        const subchannels2 = [];
        for (const { ref } of this.subchannelChildren.values()) {
          subchannels2.push(ref);
        }
        const sockets2 = [];
        for (const { ref } of this.socketChildren.values()) {
          sockets2.push(ref);
        }
        return { channels: channels2, subchannels: subchannels2, sockets: sockets2 };
      }
    };
    exports2.ChannelzChildrenTracker = ChannelzChildrenTracker;
    var ChannelzCallTracker = class {
      constructor() {
        this.callsStarted = 0;
        this.callsSucceeded = 0;
        this.callsFailed = 0;
        this.lastCallStartedTimestamp = null;
      }
      addCallStarted() {
        this.callsStarted += 1;
        this.lastCallStartedTimestamp = /* @__PURE__ */ new Date();
      }
      addCallSucceeded() {
        this.callsSucceeded += 1;
      }
      addCallFailed() {
        this.callsFailed += 1;
      }
    };
    exports2.ChannelzCallTracker = ChannelzCallTracker;
    var nextId = 1;
    function getNextId() {
      return nextId++;
    }
    var channels = [];
    var subchannels = [];
    var servers = [];
    var sockets = [];
    function registerChannelzChannel(name, getInfo, channelzEnabled) {
      const id = getNextId();
      const ref = { id, name, kind: "channel" };
      if (channelzEnabled) {
        channels[id] = { ref, getInfo };
      }
      return ref;
    }
    exports2.registerChannelzChannel = registerChannelzChannel;
    function registerChannelzSubchannel(name, getInfo, channelzEnabled) {
      const id = getNextId();
      const ref = { id, name, kind: "subchannel" };
      if (channelzEnabled) {
        subchannels[id] = { ref, getInfo };
      }
      return ref;
    }
    exports2.registerChannelzSubchannel = registerChannelzSubchannel;
    function registerChannelzServer(getInfo, channelzEnabled) {
      const id = getNextId();
      const ref = { id, kind: "server" };
      if (channelzEnabled) {
        servers[id] = { ref, getInfo };
      }
      return ref;
    }
    exports2.registerChannelzServer = registerChannelzServer;
    function registerChannelzSocket(name, getInfo, channelzEnabled) {
      const id = getNextId();
      const ref = { id, name, kind: "socket" };
      if (channelzEnabled) {
        sockets[id] = { ref, getInfo };
      }
      return ref;
    }
    exports2.registerChannelzSocket = registerChannelzSocket;
    function unregisterChannelzRef(ref) {
      switch (ref.kind) {
        case "channel":
          delete channels[ref.id];
          return;
        case "subchannel":
          delete subchannels[ref.id];
          return;
        case "server":
          delete servers[ref.id];
          return;
        case "socket":
          delete sockets[ref.id];
          return;
      }
    }
    exports2.unregisterChannelzRef = unregisterChannelzRef;
    function parseIPv6Section(addressSection) {
      const numberValue = Number.parseInt(addressSection, 16);
      return [numberValue / 256 | 0, numberValue % 256];
    }
    function parseIPv6Chunk(addressChunk) {
      if (addressChunk === "") {
        return [];
      }
      const bytePairs = addressChunk.split(":").map((section) => parseIPv6Section(section));
      const result = [];
      return result.concat(...bytePairs);
    }
    function ipAddressStringToBuffer(ipAddress) {
      if ((0, net_1.isIPv4)(ipAddress)) {
        return Buffer.from(Uint8Array.from(ipAddress.split(".").map((segment) => Number.parseInt(segment))));
      } else if ((0, net_1.isIPv6)(ipAddress)) {
        let leftSection;
        let rightSection;
        const doubleColonIndex = ipAddress.indexOf("::");
        if (doubleColonIndex === -1) {
          leftSection = ipAddress;
          rightSection = "";
        } else {
          leftSection = ipAddress.substring(0, doubleColonIndex);
          rightSection = ipAddress.substring(doubleColonIndex + 2);
        }
        const leftBuffer = Buffer.from(parseIPv6Chunk(leftSection));
        const rightBuffer = Buffer.from(parseIPv6Chunk(rightSection));
        const middleBuffer = Buffer.alloc(16 - leftBuffer.length - rightBuffer.length, 0);
        return Buffer.concat([leftBuffer, middleBuffer, rightBuffer]);
      } else {
        return null;
      }
    }
    function connectivityStateToMessage(state) {
      switch (state) {
        case connectivity_state_1.ConnectivityState.CONNECTING:
          return {
            state: "CONNECTING"
          };
        case connectivity_state_1.ConnectivityState.IDLE:
          return {
            state: "IDLE"
          };
        case connectivity_state_1.ConnectivityState.READY:
          return {
            state: "READY"
          };
        case connectivity_state_1.ConnectivityState.SHUTDOWN:
          return {
            state: "SHUTDOWN"
          };
        case connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE:
          return {
            state: "TRANSIENT_FAILURE"
          };
        default:
          return {
            state: "UNKNOWN"
          };
      }
    }
    function dateToProtoTimestamp(date) {
      if (!date) {
        return null;
      }
      const millisSinceEpoch = date.getTime();
      return {
        seconds: millisSinceEpoch / 1e3 | 0,
        nanos: millisSinceEpoch % 1e3 * 1e6
      };
    }
    function getChannelMessage(channelEntry) {
      const resolvedInfo = channelEntry.getInfo();
      return {
        ref: channelRefToMessage(channelEntry.ref),
        data: {
          target: resolvedInfo.target,
          state: connectivityStateToMessage(resolvedInfo.state),
          calls_started: resolvedInfo.callTracker.callsStarted,
          calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
          calls_failed: resolvedInfo.callTracker.callsFailed,
          last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
          trace: resolvedInfo.trace.getTraceMessage()
        },
        channel_ref: resolvedInfo.children.channels.map((ref) => channelRefToMessage(ref)),
        subchannel_ref: resolvedInfo.children.subchannels.map((ref) => subchannelRefToMessage(ref))
      };
    }
    function GetChannel(call, callback) {
      const channelId = Number.parseInt(call.request.channel_id);
      const channelEntry = channels[channelId];
      if (channelEntry === void 0) {
        callback({
          code: constants_1.Status.NOT_FOUND,
          details: "No channel data found for id " + channelId
        });
        return;
      }
      callback(null, { channel: getChannelMessage(channelEntry) });
    }
    function GetTopChannels(call, callback) {
      const maxResults = Number.parseInt(call.request.max_results);
      const resultList = [];
      let i = Number.parseInt(call.request.start_channel_id);
      for (; i < channels.length; i++) {
        const channelEntry = channels[i];
        if (channelEntry === void 0) {
          continue;
        }
        resultList.push(getChannelMessage(channelEntry));
        if (resultList.length >= maxResults) {
          break;
        }
      }
      callback(null, {
        channel: resultList,
        end: i >= servers.length
      });
    }
    function getServerMessage(serverEntry) {
      const resolvedInfo = serverEntry.getInfo();
      return {
        ref: serverRefToMessage(serverEntry.ref),
        data: {
          calls_started: resolvedInfo.callTracker.callsStarted,
          calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
          calls_failed: resolvedInfo.callTracker.callsFailed,
          last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
          trace: resolvedInfo.trace.getTraceMessage()
        },
        listen_socket: resolvedInfo.listenerChildren.sockets.map((ref) => socketRefToMessage(ref))
      };
    }
    function GetServer(call, callback) {
      const serverId = Number.parseInt(call.request.server_id);
      const serverEntry = servers[serverId];
      if (serverEntry === void 0) {
        callback({
          code: constants_1.Status.NOT_FOUND,
          details: "No server data found for id " + serverId
        });
        return;
      }
      callback(null, { server: getServerMessage(serverEntry) });
    }
    function GetServers(call, callback) {
      const maxResults = Number.parseInt(call.request.max_results);
      const resultList = [];
      let i = Number.parseInt(call.request.start_server_id);
      for (; i < servers.length; i++) {
        const serverEntry = servers[i];
        if (serverEntry === void 0) {
          continue;
        }
        resultList.push(getServerMessage(serverEntry));
        if (resultList.length >= maxResults) {
          break;
        }
      }
      callback(null, {
        server: resultList,
        end: i >= servers.length
      });
    }
    function GetSubchannel(call, callback) {
      const subchannelId = Number.parseInt(call.request.subchannel_id);
      const subchannelEntry = subchannels[subchannelId];
      if (subchannelEntry === void 0) {
        callback({
          code: constants_1.Status.NOT_FOUND,
          details: "No subchannel data found for id " + subchannelId
        });
        return;
      }
      const resolvedInfo = subchannelEntry.getInfo();
      const subchannelMessage = {
        ref: subchannelRefToMessage(subchannelEntry.ref),
        data: {
          target: resolvedInfo.target,
          state: connectivityStateToMessage(resolvedInfo.state),
          calls_started: resolvedInfo.callTracker.callsStarted,
          calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
          calls_failed: resolvedInfo.callTracker.callsFailed,
          last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
          trace: resolvedInfo.trace.getTraceMessage()
        },
        socket_ref: resolvedInfo.children.sockets.map((ref) => socketRefToMessage(ref))
      };
      callback(null, { subchannel: subchannelMessage });
    }
    function subchannelAddressToAddressMessage(subchannelAddress) {
      var _a;
      if ((0, subchannel_address_1.isTcpSubchannelAddress)(subchannelAddress)) {
        return {
          address: "tcpip_address",
          tcpip_address: {
            ip_address: (_a = ipAddressStringToBuffer(subchannelAddress.host)) !== null && _a !== void 0 ? _a : void 0,
            port: subchannelAddress.port
          }
        };
      } else {
        return {
          address: "uds_address",
          uds_address: {
            filename: subchannelAddress.path
          }
        };
      }
    }
    function GetSocket(call, callback) {
      var _a, _b, _c, _d, _e;
      const socketId = Number.parseInt(call.request.socket_id);
      const socketEntry = sockets[socketId];
      if (socketEntry === void 0) {
        callback({
          code: constants_1.Status.NOT_FOUND,
          details: "No socket data found for id " + socketId
        });
        return;
      }
      const resolvedInfo = socketEntry.getInfo();
      const securityMessage = resolvedInfo.security ? {
        model: "tls",
        tls: {
          cipher_suite: resolvedInfo.security.cipherSuiteStandardName ? "standard_name" : "other_name",
          standard_name: (_a = resolvedInfo.security.cipherSuiteStandardName) !== null && _a !== void 0 ? _a : void 0,
          other_name: (_b = resolvedInfo.security.cipherSuiteOtherName) !== null && _b !== void 0 ? _b : void 0,
          local_certificate: (_c = resolvedInfo.security.localCertificate) !== null && _c !== void 0 ? _c : void 0,
          remote_certificate: (_d = resolvedInfo.security.remoteCertificate) !== null && _d !== void 0 ? _d : void 0
        }
      } : null;
      const socketMessage = {
        ref: socketRefToMessage(socketEntry.ref),
        local: resolvedInfo.localAddress ? subchannelAddressToAddressMessage(resolvedInfo.localAddress) : null,
        remote: resolvedInfo.remoteAddress ? subchannelAddressToAddressMessage(resolvedInfo.remoteAddress) : null,
        remote_name: (_e = resolvedInfo.remoteName) !== null && _e !== void 0 ? _e : void 0,
        security: securityMessage,
        data: {
          keep_alives_sent: resolvedInfo.keepAlivesSent,
          streams_started: resolvedInfo.streamsStarted,
          streams_succeeded: resolvedInfo.streamsSucceeded,
          streams_failed: resolvedInfo.streamsFailed,
          last_local_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastLocalStreamCreatedTimestamp),
          last_remote_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastRemoteStreamCreatedTimestamp),
          messages_received: resolvedInfo.messagesReceived,
          messages_sent: resolvedInfo.messagesSent,
          last_message_received_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageReceivedTimestamp),
          last_message_sent_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageSentTimestamp),
          local_flow_control_window: resolvedInfo.localFlowControlWindow ? { value: resolvedInfo.localFlowControlWindow } : null,
          remote_flow_control_window: resolvedInfo.remoteFlowControlWindow ? { value: resolvedInfo.remoteFlowControlWindow } : null
        }
      };
      callback(null, { socket: socketMessage });
    }
    function GetServerSockets(call, callback) {
      const serverId = Number.parseInt(call.request.server_id);
      const serverEntry = servers[serverId];
      if (serverEntry === void 0) {
        callback({
          code: constants_1.Status.NOT_FOUND,
          details: "No server data found for id " + serverId
        });
        return;
      }
      const startId = Number.parseInt(call.request.start_socket_id);
      const maxResults = Number.parseInt(call.request.max_results);
      const resolvedInfo = serverEntry.getInfo();
      const allSockets = resolvedInfo.sessionChildren.sockets.sort((ref1, ref2) => ref1.id - ref2.id);
      const resultList = [];
      let i = 0;
      for (; i < allSockets.length; i++) {
        if (allSockets[i].id >= startId) {
          resultList.push(socketRefToMessage(allSockets[i]));
          if (resultList.length >= maxResults) {
            break;
          }
        }
      }
      callback(null, {
        socket_ref: resultList,
        end: i >= allSockets.length
      });
    }
    function getChannelzHandlers() {
      return {
        GetChannel,
        GetTopChannels,
        GetServer,
        GetServers,
        GetSubchannel,
        GetSocket,
        GetServerSockets
      };
    }
    exports2.getChannelzHandlers = getChannelzHandlers;
    var loadedChannelzDefinition = null;
    function getChannelzServiceDefinition() {
      if (loadedChannelzDefinition) {
        return loadedChannelzDefinition;
      }
      const loaderLoadSync = require_src2().loadSync;
      const loadedProto = loaderLoadSync("channelz.proto", {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [`${__dirname}/../../proto`]
      });
      const channelzGrpcObject = (0, make_client_1.loadPackageDefinition)(loadedProto);
      loadedChannelzDefinition = channelzGrpcObject.grpc.channelz.v1.Channelz.service;
      return loadedChannelzDefinition;
    }
    exports2.getChannelzServiceDefinition = getChannelzServiceDefinition;
    function setup() {
      (0, admin_1.registerAdminService)(getChannelzServiceDefinition, getChannelzHandlers);
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel.js
var require_subchannel = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Subchannel = void 0;
    var connectivity_state_1 = require_connectivity_state();
    var backoff_timeout_1 = require_backoff_timeout();
    var logging = require_logging();
    var constants_1 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var subchannel_address_1 = require_subchannel_address();
    var channelz_1 = require_channelz();
    var TRACER_NAME = "subchannel";
    var KEEPALIVE_MAX_TIME_MS = ~(1 << 31);
    var Subchannel = class {
      /**
       * A class representing a connection to a single backend.
       * @param channelTarget The target string for the channel as a whole
       * @param subchannelAddress The address for the backend that this subchannel
       *     will connect to
       * @param options The channel options, plus any specific subchannel options
       *     for this subchannel
       * @param credentials The channel credentials used to establish this
       *     connection
       */
      constructor(channelTarget, subchannelAddress, options, credentials2, connector) {
        var _a;
        this.channelTarget = channelTarget;
        this.subchannelAddress = subchannelAddress;
        this.options = options;
        this.credentials = credentials2;
        this.connector = connector;
        this.connectivityState = connectivity_state_1.ConnectivityState.IDLE;
        this.transport = null;
        this.continueConnecting = false;
        this.stateListeners = /* @__PURE__ */ new Set();
        this.refcount = 0;
        this.channelzEnabled = true;
        this.callTracker = new channelz_1.ChannelzCallTracker();
        this.childrenTracker = new channelz_1.ChannelzChildrenTracker();
        this.streamTracker = new channelz_1.ChannelzCallTracker();
        const backoffOptions = {
          initialDelay: options["grpc.initial_reconnect_backoff_ms"],
          maxDelay: options["grpc.max_reconnect_backoff_ms"]
        };
        this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
          this.handleBackoffTimer();
        }, backoffOptions);
        this.backoffTimeout.unref();
        this.subchannelAddressString = (0, subchannel_address_1.subchannelAddressToString)(subchannelAddress);
        this.keepaliveTime = (_a = options["grpc.keepalive_time_ms"]) !== null && _a !== void 0 ? _a : -1;
        if (options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
        }
        this.channelzTrace = new channelz_1.ChannelzTrace();
        this.channelzRef = (0, channelz_1.registerChannelzSubchannel)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled);
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", "Subchannel created");
        }
        this.trace("Subchannel constructed with options " + JSON.stringify(options, void 0, 2));
      }
      getChannelzInfo() {
        return {
          state: this.connectivityState,
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists(),
          target: this.subchannelAddressString
        };
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      refTrace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      handleBackoffTimer() {
        if (this.continueConnecting) {
          this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.CONNECTING);
        } else {
          this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.IDLE);
        }
      }
      /**
       * Start a backoff timer with the current nextBackoff timeout
       */
      startBackoff() {
        this.backoffTimeout.runOnce();
      }
      stopBackoff() {
        this.backoffTimeout.stop();
        this.backoffTimeout.reset();
      }
      startConnectingInternal() {
        let options = this.options;
        if (options["grpc.keepalive_time_ms"]) {
          const adjustedKeepaliveTime = Math.min(this.keepaliveTime, KEEPALIVE_MAX_TIME_MS);
          options = Object.assign(Object.assign({}, options), { "grpc.keepalive_time_ms": adjustedKeepaliveTime });
        }
        this.connector.connect(this.subchannelAddress, this.credentials, options).then((transport) => {
          if (this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.READY)) {
            this.transport = transport;
            if (this.channelzEnabled) {
              this.childrenTracker.refChild(transport.getChannelzRef());
            }
            transport.addDisconnectListener((tooManyPings) => {
              this.transitionToState([connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
              if (tooManyPings && this.keepaliveTime > 0) {
                this.keepaliveTime *= 2;
                logging.log(constants_1.LogVerbosity.ERROR, `Connection to ${(0, uri_parser_1.uriToString)(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
              }
            });
          } else {
            transport.shutdown();
          }
        }, (error) => {
          this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING], connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, `${error}`);
        });
      }
      /**
       * Initiate a state transition from any element of oldStates to the new
       * state. If the current connectivityState is not in oldStates, do nothing.
       * @param oldStates The set of states to transition from
       * @param newState The state to transition to
       * @returns True if the state changed, false otherwise
       */
      transitionToState(oldStates, newState, errorMessage) {
        var _a, _b;
        if (oldStates.indexOf(this.connectivityState) === -1) {
          return false;
        }
        this.trace(connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + connectivity_state_1.ConnectivityState[newState]);
        }
        const previousState = this.connectivityState;
        this.connectivityState = newState;
        switch (newState) {
          case connectivity_state_1.ConnectivityState.READY:
            this.stopBackoff();
            break;
          case connectivity_state_1.ConnectivityState.CONNECTING:
            this.startBackoff();
            this.startConnectingInternal();
            this.continueConnecting = false;
            break;
          case connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE:
            if (this.channelzEnabled && this.transport) {
              this.childrenTracker.unrefChild(this.transport.getChannelzRef());
            }
            (_a = this.transport) === null || _a === void 0 ? void 0 : _a.shutdown();
            this.transport = null;
            if (!this.backoffTimeout.isRunning()) {
              process.nextTick(() => {
                this.handleBackoffTimer();
              });
            }
            break;
          case connectivity_state_1.ConnectivityState.IDLE:
            if (this.channelzEnabled && this.transport) {
              this.childrenTracker.unrefChild(this.transport.getChannelzRef());
            }
            (_b = this.transport) === null || _b === void 0 ? void 0 : _b.shutdown();
            this.transport = null;
            break;
          default:
            throw new Error(`Invalid state: unknown ConnectivityState ${newState}`);
        }
        for (const listener of this.stateListeners) {
          listener(this, previousState, newState, this.keepaliveTime, errorMessage);
        }
        return true;
      }
      ref() {
        this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1));
        this.refcount += 1;
      }
      unref() {
        this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1));
        this.refcount -= 1;
        if (this.refcount === 0) {
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Shutting down");
          }
          if (this.channelzEnabled) {
            (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
          }
          process.nextTick(() => {
            this.transitionToState([connectivity_state_1.ConnectivityState.CONNECTING, connectivity_state_1.ConnectivityState.READY], connectivity_state_1.ConnectivityState.IDLE);
          });
        }
      }
      unrefIfOneRef() {
        if (this.refcount === 1) {
          this.unref();
          return true;
        }
        return false;
      }
      createCall(metadata, host, method, listener) {
        if (!this.transport) {
          throw new Error("Cannot create call, subchannel not READY");
        }
        let statsTracker;
        if (this.channelzEnabled) {
          this.callTracker.addCallStarted();
          this.streamTracker.addCallStarted();
          statsTracker = {
            onCallEnd: (status2) => {
              if (status2.code === constants_1.Status.OK) {
                this.callTracker.addCallSucceeded();
              } else {
                this.callTracker.addCallFailed();
              }
            }
          };
        } else {
          statsTracker = {};
        }
        return this.transport.createCall(metadata, host, method, listener, statsTracker);
      }
      /**
       * If the subchannel is currently IDLE, start connecting and switch to the
       * CONNECTING state. If the subchannel is current in TRANSIENT_FAILURE,
       * the next time it would transition to IDLE, start connecting again instead.
       * Otherwise, do nothing.
       */
      startConnecting() {
        process.nextTick(() => {
          if (!this.transitionToState([connectivity_state_1.ConnectivityState.IDLE], connectivity_state_1.ConnectivityState.CONNECTING)) {
            if (this.connectivityState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
              this.continueConnecting = true;
            }
          }
        });
      }
      /**
       * Get the subchannel's current connectivity state.
       */
      getConnectivityState() {
        return this.connectivityState;
      }
      /**
       * Add a listener function to be called whenever the subchannel's
       * connectivity state changes.
       * @param listener
       */
      addConnectivityStateListener(listener) {
        this.stateListeners.add(listener);
      }
      /**
       * Remove a listener previously added with `addConnectivityStateListener`
       * @param listener A reference to a function previously passed to
       *     `addConnectivityStateListener`
       */
      removeConnectivityStateListener(listener) {
        this.stateListeners.delete(listener);
      }
      /**
       * Reset the backoff timeout, and immediately start connecting if in backoff.
       */
      resetBackoff() {
        process.nextTick(() => {
          this.backoffTimeout.reset();
          this.transitionToState([connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_1.ConnectivityState.CONNECTING);
        });
      }
      getAddress() {
        return this.subchannelAddressString;
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      isHealthy() {
        return true;
      }
      addHealthStateWatcher(listener) {
      }
      removeHealthStateWatcher(listener) {
      }
      getRealSubchannel() {
        return this;
      }
      realSubchannelEquals(other) {
        return other.getRealSubchannel() === this;
      }
      throttleKeepalive(newKeepaliveTime) {
        if (newKeepaliveTime > this.keepaliveTime) {
          this.keepaliveTime = newKeepaliveTime;
        }
      }
    };
    exports2.Subchannel = Subchannel;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver-dns.js
var require_resolver_dns = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver-dns.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.DEFAULT_PORT = void 0;
    var resolver_1 = require_resolver();
    var dns = require("dns");
    var util = require("util");
    var service_config_1 = require_service_config();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var constants_2 = require_constants();
    var uri_parser_1 = require_uri_parser();
    var net_1 = require("net");
    var backoff_timeout_1 = require_backoff_timeout();
    var TRACER_NAME = "dns_resolver";
    function trace(text) {
      logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    exports2.DEFAULT_PORT = 443;
    var DEFAULT_MIN_TIME_BETWEEN_RESOLUTIONS_MS = 3e4;
    var resolveTxtPromise = util.promisify(dns.resolveTxt);
    var dnsLookupPromise = util.promisify(dns.lookup);
    var DnsResolver = class {
      constructor(target, listener, channelOptions) {
        var _a, _b, _c;
        this.target = target;
        this.listener = listener;
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        this.continueResolving = false;
        this.isNextResolutionTimerRunning = false;
        this.isServiceConfigEnabled = true;
        this.returnedIpResult = false;
        trace("Resolver constructed for target " + (0, uri_parser_1.uriToString)(target));
        const hostPort = (0, uri_parser_1.splitHostPort)(target.path);
        if (hostPort === null) {
          this.ipResult = null;
          this.dnsHostname = null;
          this.port = null;
        } else {
          if ((0, net_1.isIPv4)(hostPort.host) || (0, net_1.isIPv6)(hostPort.host)) {
            this.ipResult = [
              {
                addresses: [
                  {
                    host: hostPort.host,
                    port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : exports2.DEFAULT_PORT
                  }
                ]
              }
            ];
            this.dnsHostname = null;
            this.port = null;
          } else {
            this.ipResult = null;
            this.dnsHostname = hostPort.host;
            this.port = (_b = hostPort.port) !== null && _b !== void 0 ? _b : exports2.DEFAULT_PORT;
          }
        }
        this.percentage = Math.random() * 100;
        if (channelOptions["grpc.service_config_disable_resolution"] === 1) {
          this.isServiceConfigEnabled = false;
        }
        this.defaultResolutionError = {
          code: constants_1.Status.UNAVAILABLE,
          details: `Name resolution failed for target ${(0, uri_parser_1.uriToString)(this.target)}`,
          metadata: new metadata_1.Metadata()
        };
        const backoffOptions = {
          initialDelay: channelOptions["grpc.initial_reconnect_backoff_ms"],
          maxDelay: channelOptions["grpc.max_reconnect_backoff_ms"]
        };
        this.backoff = new backoff_timeout_1.BackoffTimeout(() => {
          if (this.continueResolving) {
            this.startResolutionWithBackoff();
          }
        }, backoffOptions);
        this.backoff.unref();
        this.minTimeBetweenResolutionsMs = (_c = channelOptions["grpc.dns_min_time_between_resolutions_ms"]) !== null && _c !== void 0 ? _c : DEFAULT_MIN_TIME_BETWEEN_RESOLUTIONS_MS;
        this.nextResolutionTimer = setTimeout(() => {
        }, 0);
        clearTimeout(this.nextResolutionTimer);
      }
      /**
       * If the target is an IP address, just provide that address as a result.
       * Otherwise, initiate A, AAAA, and TXT lookups
       */
      startResolution() {
        if (this.ipResult !== null) {
          if (!this.returnedIpResult) {
            trace("Returning IP address for target " + (0, uri_parser_1.uriToString)(this.target));
            setImmediate(() => {
              this.listener.onSuccessfulResolution(this.ipResult, null, null, null, {});
            });
            this.returnedIpResult = true;
          }
          this.backoff.stop();
          this.backoff.reset();
          this.stopNextResolutionTimer();
          return;
        }
        if (this.dnsHostname === null) {
          trace("Failed to parse DNS address " + (0, uri_parser_1.uriToString)(this.target));
          setImmediate(() => {
            this.listener.onError({
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse DNS address ${(0, uri_parser_1.uriToString)(this.target)}`,
              metadata: new metadata_1.Metadata()
            });
          });
          this.stopNextResolutionTimer();
        } else {
          if (this.pendingLookupPromise !== null) {
            return;
          }
          trace("Looking up DNS hostname " + this.dnsHostname);
          this.latestLookupResult = null;
          const hostname = this.dnsHostname;
          this.pendingLookupPromise = dnsLookupPromise(hostname, { all: true });
          this.pendingLookupPromise.then((addressList) => {
            if (this.pendingLookupPromise === null) {
              return;
            }
            this.pendingLookupPromise = null;
            this.backoff.reset();
            this.backoff.stop();
            const subchannelAddresses = addressList.map((addr) => ({ host: addr.address, port: +this.port }));
            this.latestLookupResult = subchannelAddresses.map((address) => ({
              addresses: [address]
            }));
            const allAddressesString = "[" + subchannelAddresses.map((addr) => addr.host + ":" + addr.port).join(",") + "]";
            trace("Resolved addresses for target " + (0, uri_parser_1.uriToString)(this.target) + ": " + allAddressesString);
            if (this.latestLookupResult.length === 0) {
              this.listener.onError(this.defaultResolutionError);
              return;
            }
            this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
          }, (err) => {
            if (this.pendingLookupPromise === null) {
              return;
            }
            trace("Resolution error for target " + (0, uri_parser_1.uriToString)(this.target) + ": " + err.message);
            this.pendingLookupPromise = null;
            this.stopNextResolutionTimer();
            this.listener.onError(this.defaultResolutionError);
          });
          if (this.isServiceConfigEnabled && this.pendingTxtPromise === null) {
            this.pendingTxtPromise = resolveTxtPromise(hostname);
            this.pendingTxtPromise.then((txtRecord) => {
              if (this.pendingTxtPromise === null) {
                return;
              }
              this.pendingTxtPromise = null;
              try {
                this.latestServiceConfig = (0, service_config_1.extractAndSelectServiceConfig)(txtRecord, this.percentage);
              } catch (err) {
                this.latestServiceConfigError = {
                  code: constants_1.Status.UNAVAILABLE,
                  details: `Parsing service config failed with error ${err.message}`,
                  metadata: new metadata_1.Metadata()
                };
              }
              if (this.latestLookupResult !== null) {
                this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
              }
            }, (err) => {
            });
          }
        }
      }
      startNextResolutionTimer() {
        var _a, _b;
        clearTimeout(this.nextResolutionTimer);
        this.nextResolutionTimer = (_b = (_a = setTimeout(() => {
          this.stopNextResolutionTimer();
          if (this.continueResolving) {
            this.startResolutionWithBackoff();
          }
        }, this.minTimeBetweenResolutionsMs)).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.isNextResolutionTimerRunning = true;
      }
      stopNextResolutionTimer() {
        clearTimeout(this.nextResolutionTimer);
        this.isNextResolutionTimerRunning = false;
      }
      startResolutionWithBackoff() {
        if (this.pendingLookupPromise === null) {
          this.continueResolving = false;
          this.backoff.runOnce();
          this.startNextResolutionTimer();
          this.startResolution();
        }
      }
      updateResolution() {
        if (this.pendingLookupPromise === null) {
          if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
            if (this.isNextResolutionTimerRunning) {
              trace('resolution update delayed by "min time between resolutions" rate limit');
            } else {
              trace("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
            }
            this.continueResolving = true;
          } else {
            this.startResolutionWithBackoff();
          }
        }
      }
      /**
       * Reset the resolver to the same state it had when it was created. In-flight
       * DNS requests cannot be cancelled, but they are discarded and their results
       * will be ignored.
       */
      destroy() {
        this.continueResolving = false;
        this.backoff.reset();
        this.backoff.stop();
        this.stopNextResolutionTimer();
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        this.returnedIpResult = false;
      }
      /**
       * Get the default authority for the given target. For IP targets, that is
       * the IP address. For DNS targets, it is the hostname.
       * @param target
       */
      static getDefaultAuthority(target) {
        return target.path;
      }
    };
    function setup() {
      (0, resolver_1.registerResolver)("dns", DnsResolver);
      (0, resolver_1.registerDefaultScheme)("dns");
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/http_proxy.js
var require_http_proxy = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/http_proxy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getProxiedConnection = exports2.mapProxyName = void 0;
    var logging_1 = require_logging();
    var constants_1 = require_constants();
    var resolver_1 = require_resolver();
    var http = require("http");
    var tls = require("tls");
    var logging = require_logging();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var url_1 = require("url");
    var resolver_dns_1 = require_resolver_dns();
    var TRACER_NAME = "proxy";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    function getProxyInfo() {
      let proxyEnv = "";
      let envVar = "";
      if (process.env.grpc_proxy) {
        envVar = "grpc_proxy";
        proxyEnv = process.env.grpc_proxy;
      } else if (process.env.https_proxy) {
        envVar = "https_proxy";
        proxyEnv = process.env.https_proxy;
      } else if (process.env.http_proxy) {
        envVar = "http_proxy";
        proxyEnv = process.env.http_proxy;
      } else {
        return {};
      }
      let proxyUrl;
      try {
        proxyUrl = new url_1.URL(proxyEnv);
      } catch (e) {
        (0, logging_1.log)(constants_1.LogVerbosity.ERROR, `cannot parse value of "${envVar}" env var`);
        return {};
      }
      if (proxyUrl.protocol !== "http:") {
        (0, logging_1.log)(constants_1.LogVerbosity.ERROR, `"${proxyUrl.protocol}" scheme not supported in proxy URI`);
        return {};
      }
      let userCred = null;
      if (proxyUrl.username) {
        if (proxyUrl.password) {
          (0, logging_1.log)(constants_1.LogVerbosity.INFO, "userinfo found in proxy URI");
          userCred = `${proxyUrl.username}:${proxyUrl.password}`;
        } else {
          userCred = proxyUrl.username;
        }
      }
      const hostname = proxyUrl.hostname;
      let port = proxyUrl.port;
      if (port === "") {
        port = "80";
      }
      const result = {
        address: `${hostname}:${port}`
      };
      if (userCred) {
        result.creds = userCred;
      }
      trace("Proxy server " + result.address + " set by environment variable " + envVar);
      return result;
    }
    function getNoProxyHostList() {
      let noProxyStr = process.env.no_grpc_proxy;
      let envVar = "no_grpc_proxy";
      if (!noProxyStr) {
        noProxyStr = process.env.no_proxy;
        envVar = "no_proxy";
      }
      if (noProxyStr) {
        trace("No proxy server list set by environment variable " + envVar);
        return noProxyStr.split(",");
      } else {
        return [];
      }
    }
    function mapProxyName(target, options) {
      var _a;
      const noProxyResult = {
        target,
        extraOptions: {}
      };
      if (((_a = options["grpc.enable_http_proxy"]) !== null && _a !== void 0 ? _a : 1) === 0) {
        return noProxyResult;
      }
      if (target.scheme === "unix") {
        return noProxyResult;
      }
      const proxyInfo = getProxyInfo();
      if (!proxyInfo.address) {
        return noProxyResult;
      }
      const hostPort = (0, uri_parser_1.splitHostPort)(target.path);
      if (!hostPort) {
        return noProxyResult;
      }
      const serverHost = hostPort.host;
      for (const host of getNoProxyHostList()) {
        if (host === serverHost) {
          trace("Not using proxy for target in no_proxy list: " + (0, uri_parser_1.uriToString)(target));
          return noProxyResult;
        }
      }
      const extraOptions = {
        "grpc.http_connect_target": (0, uri_parser_1.uriToString)(target)
      };
      if (proxyInfo.creds) {
        extraOptions["grpc.http_connect_creds"] = proxyInfo.creds;
      }
      return {
        target: {
          scheme: "dns",
          path: proxyInfo.address
        },
        extraOptions
      };
    }
    exports2.mapProxyName = mapProxyName;
    function getProxiedConnection(address, channelOptions, connectionOptions) {
      var _a;
      if (!("grpc.http_connect_target" in channelOptions)) {
        return Promise.resolve({});
      }
      const realTarget = channelOptions["grpc.http_connect_target"];
      const parsedTarget = (0, uri_parser_1.parseUri)(realTarget);
      if (parsedTarget === null) {
        return Promise.resolve({});
      }
      const splitHostPost = (0, uri_parser_1.splitHostPort)(parsedTarget.path);
      if (splitHostPost === null) {
        return Promise.resolve({});
      }
      const hostPort = `${splitHostPost.host}:${(_a = splitHostPost.port) !== null && _a !== void 0 ? _a : resolver_dns_1.DEFAULT_PORT}`;
      const options = {
        method: "CONNECT",
        path: hostPort
      };
      const headers = {
        Host: hostPort
      };
      if ((0, subchannel_address_1.isTcpSubchannelAddress)(address)) {
        options.host = address.host;
        options.port = address.port;
      } else {
        options.socketPath = address.path;
      }
      if ("grpc.http_connect_creds" in channelOptions) {
        headers["Proxy-Authorization"] = "Basic " + Buffer.from(channelOptions["grpc.http_connect_creds"]).toString("base64");
      }
      options.headers = headers;
      const proxyAddressString = (0, subchannel_address_1.subchannelAddressToString)(address);
      trace("Using proxy " + proxyAddressString + " to connect to " + options.path);
      return new Promise((resolve, reject) => {
        const request = http.request(options);
        request.once("connect", (res, socket, head) => {
          var _a2;
          request.removeAllListeners();
          socket.removeAllListeners();
          if (res.statusCode === 200) {
            trace("Successfully connected to " + options.path + " through proxy " + proxyAddressString);
            if ("secureContext" in connectionOptions) {
              const targetPath = (0, resolver_1.getDefaultAuthority)(parsedTarget);
              const hostPort2 = (0, uri_parser_1.splitHostPort)(targetPath);
              const remoteHost = (_a2 = hostPort2 === null || hostPort2 === void 0 ? void 0 : hostPort2.host) !== null && _a2 !== void 0 ? _a2 : targetPath;
              const cts = tls.connect(Object.assign({ host: remoteHost, servername: remoteHost, socket }, connectionOptions), () => {
                trace("Successfully established a TLS connection to " + options.path + " through proxy " + proxyAddressString);
                resolve({ socket: cts, realTarget: parsedTarget });
              });
              cts.on("error", (error) => {
                trace("Failed to establish a TLS connection to " + options.path + " through proxy " + proxyAddressString + " with error " + error.message);
                reject();
              });
            } else {
              trace("Successfully established a plaintext connection to " + options.path + " through proxy " + proxyAddressString);
              resolve({
                socket,
                realTarget: parsedTarget
              });
            }
          } else {
            (0, logging_1.log)(constants_1.LogVerbosity.ERROR, "Failed to connect to " + options.path + " through proxy " + proxyAddressString + " with status " + res.statusCode);
            reject();
          }
        });
        request.once("error", (err) => {
          request.removeAllListeners();
          (0, logging_1.log)(constants_1.LogVerbosity.ERROR, "Failed to connect to proxy " + proxyAddressString + " with error " + err.message);
          reject();
        });
        request.end();
      });
    }
    exports2.getProxiedConnection = getProxiedConnection;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/stream-decoder.js
var require_stream_decoder = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/stream-decoder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StreamDecoder = void 0;
    var ReadState;
    (function(ReadState2) {
      ReadState2[ReadState2["NO_DATA"] = 0] = "NO_DATA";
      ReadState2[ReadState2["READING_SIZE"] = 1] = "READING_SIZE";
      ReadState2[ReadState2["READING_MESSAGE"] = 2] = "READING_MESSAGE";
    })(ReadState || (ReadState = {}));
    var StreamDecoder = class {
      constructor() {
        this.readState = ReadState.NO_DATA;
        this.readCompressFlag = Buffer.alloc(1);
        this.readPartialSize = Buffer.alloc(4);
        this.readSizeRemaining = 4;
        this.readMessageSize = 0;
        this.readPartialMessage = [];
        this.readMessageRemaining = 0;
      }
      write(data) {
        let readHead = 0;
        let toRead;
        const result = [];
        while (readHead < data.length) {
          switch (this.readState) {
            case ReadState.NO_DATA:
              this.readCompressFlag = data.slice(readHead, readHead + 1);
              readHead += 1;
              this.readState = ReadState.READING_SIZE;
              this.readPartialSize.fill(0);
              this.readSizeRemaining = 4;
              this.readMessageSize = 0;
              this.readMessageRemaining = 0;
              this.readPartialMessage = [];
              break;
            case ReadState.READING_SIZE:
              toRead = Math.min(data.length - readHead, this.readSizeRemaining);
              data.copy(this.readPartialSize, 4 - this.readSizeRemaining, readHead, readHead + toRead);
              this.readSizeRemaining -= toRead;
              readHead += toRead;
              if (this.readSizeRemaining === 0) {
                this.readMessageSize = this.readPartialSize.readUInt32BE(0);
                this.readMessageRemaining = this.readMessageSize;
                if (this.readMessageRemaining > 0) {
                  this.readState = ReadState.READING_MESSAGE;
                } else {
                  const message = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
                  this.readState = ReadState.NO_DATA;
                  result.push(message);
                }
              }
              break;
            case ReadState.READING_MESSAGE:
              toRead = Math.min(data.length - readHead, this.readMessageRemaining);
              this.readPartialMessage.push(data.slice(readHead, readHead + toRead));
              this.readMessageRemaining -= toRead;
              readHead += toRead;
              if (this.readMessageRemaining === 0) {
                const framedMessageBuffers = [
                  this.readCompressFlag,
                  this.readPartialSize
                ].concat(this.readPartialMessage);
                const framedMessage = Buffer.concat(framedMessageBuffers, this.readMessageSize + 5);
                this.readState = ReadState.NO_DATA;
                result.push(framedMessage);
              }
              break;
            default:
              throw new Error("Unexpected read state");
          }
        }
        return result;
      }
    };
    exports2.StreamDecoder = StreamDecoder;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-call.js
var require_subchannel_call = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Http2SubchannelCall = void 0;
    var http2 = require("http2");
    var os = require("os");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var stream_decoder_1 = require_stream_decoder();
    var logging = require_logging();
    var constants_2 = require_constants();
    var TRACER_NAME = "subchannel_call";
    function getSystemErrorName(errno) {
      for (const [name, num] of Object.entries(os.constants.errno)) {
        if (num === errno) {
          return name;
        }
      }
      return "Unknown system error " + errno;
    }
    var Http2SubchannelCall = class {
      constructor(http2Stream, callEventTracker, listener, transport, callId) {
        this.http2Stream = http2Stream;
        this.callEventTracker = callEventTracker;
        this.listener = listener;
        this.transport = transport;
        this.callId = callId;
        this.decoder = new stream_decoder_1.StreamDecoder();
        this.isReadFilterPending = false;
        this.isPushPending = false;
        this.canPush = false;
        this.readsClosed = false;
        this.statusOutput = false;
        this.unpushedReadMessages = [];
        this.mappedStatusCode = constants_1.Status.UNKNOWN;
        this.finalStatus = null;
        this.internalError = null;
        http2Stream.on("response", (headers, flags) => {
          let headersString = "";
          for (const header of Object.keys(headers)) {
            headersString += "		" + header + ": " + headers[header] + "\n";
          }
          this.trace("Received server headers:\n" + headersString);
          switch (headers[":status"]) {
            case 400:
              this.mappedStatusCode = constants_1.Status.INTERNAL;
              break;
            case 401:
              this.mappedStatusCode = constants_1.Status.UNAUTHENTICATED;
              break;
            case 403:
              this.mappedStatusCode = constants_1.Status.PERMISSION_DENIED;
              break;
            case 404:
              this.mappedStatusCode = constants_1.Status.UNIMPLEMENTED;
              break;
            case 429:
            case 502:
            case 503:
            case 504:
              this.mappedStatusCode = constants_1.Status.UNAVAILABLE;
              break;
            default:
              this.mappedStatusCode = constants_1.Status.UNKNOWN;
          }
          if (flags & http2.constants.NGHTTP2_FLAG_END_STREAM) {
            this.handleTrailers(headers);
          } else {
            let metadata;
            try {
              metadata = metadata_1.Metadata.fromHttp2Headers(headers);
            } catch (error) {
              this.endCall({
                code: constants_1.Status.UNKNOWN,
                details: error.message,
                metadata: new metadata_1.Metadata()
              });
              return;
            }
            this.listener.onReceiveMetadata(metadata);
          }
        });
        http2Stream.on("trailers", (headers) => {
          this.handleTrailers(headers);
        });
        http2Stream.on("data", (data) => {
          if (this.statusOutput) {
            return;
          }
          this.trace("receive HTTP/2 data frame of length " + data.length);
          const messages = this.decoder.write(data);
          for (const message of messages) {
            this.trace("parsed message of length " + message.length);
            this.callEventTracker.addMessageReceived();
            this.tryPush(message);
          }
        });
        http2Stream.on("end", () => {
          this.readsClosed = true;
          this.maybeOutputStatus();
        });
        http2Stream.on("close", () => {
          process.nextTick(() => {
            var _a;
            this.trace("HTTP/2 stream closed with code " + http2Stream.rstCode);
            if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1.Status.OK) {
              return;
            }
            let code;
            let details = "";
            switch (http2Stream.rstCode) {
              case http2.constants.NGHTTP2_NO_ERROR:
                if (this.finalStatus !== null) {
                  return;
                }
                code = constants_1.Status.INTERNAL;
                details = `Received RST_STREAM with code ${http2Stream.rstCode}`;
                break;
              case http2.constants.NGHTTP2_REFUSED_STREAM:
                code = constants_1.Status.UNAVAILABLE;
                details = "Stream refused by server";
                break;
              case http2.constants.NGHTTP2_CANCEL:
                code = constants_1.Status.CANCELLED;
                details = "Call cancelled";
                break;
              case http2.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                code = constants_1.Status.RESOURCE_EXHAUSTED;
                details = "Bandwidth exhausted or memory limit exceeded";
                break;
              case http2.constants.NGHTTP2_INADEQUATE_SECURITY:
                code = constants_1.Status.PERMISSION_DENIED;
                details = "Protocol not secure enough";
                break;
              case http2.constants.NGHTTP2_INTERNAL_ERROR:
                code = constants_1.Status.INTERNAL;
                if (this.internalError === null) {
                  details = `Received RST_STREAM with code ${http2Stream.rstCode} (Internal server error)`;
                } else {
                  if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") {
                    code = constants_1.Status.UNAVAILABLE;
                    details = this.internalError.message;
                  } else {
                    details = `Received RST_STREAM with code ${http2Stream.rstCode} triggered by internal client error: ${this.internalError.message}`;
                  }
                }
                break;
              default:
                code = constants_1.Status.INTERNAL;
                details = `Received RST_STREAM with code ${http2Stream.rstCode}`;
            }
            this.endCall({
              code,
              details,
              metadata: new metadata_1.Metadata(),
              rstCode: http2Stream.rstCode
            });
          });
        });
        http2Stream.on("error", (err) => {
          if (err.code !== "ERR_HTTP2_STREAM_ERROR") {
            this.trace("Node error event: message=" + err.message + " code=" + err.code + " errno=" + getSystemErrorName(err.errno) + " syscall=" + err.syscall);
            this.internalError = err;
          }
          this.callEventTracker.onStreamEnd(false);
        });
      }
      onDisconnect() {
        this.endCall({
          code: constants_1.Status.UNAVAILABLE,
          details: "Connection dropped",
          metadata: new metadata_1.Metadata()
        });
      }
      outputStatus() {
        if (!this.statusOutput) {
          this.statusOutput = true;
          this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"');
          this.callEventTracker.onCallEnd(this.finalStatus);
          process.nextTick(() => {
            this.listener.onReceiveStatus(this.finalStatus);
          });
          this.http2Stream.resume();
        }
      }
      trace(text) {
        logging.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callId + "] " + text);
      }
      /**
       * On first call, emits a 'status' event with the given StatusObject.
       * Subsequent calls are no-ops.
       * @param status The status of the call.
       */
      endCall(status2) {
        if (this.finalStatus === null || this.finalStatus.code === constants_1.Status.OK) {
          this.finalStatus = status2;
          this.maybeOutputStatus();
        }
        this.destroyHttp2Stream();
      }
      maybeOutputStatus() {
        if (this.finalStatus !== null) {
          if (this.finalStatus.code !== constants_1.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) {
            this.outputStatus();
          }
        }
      }
      push(message) {
        this.trace("pushing to reader message of length " + (message instanceof Buffer ? message.length : null));
        this.canPush = false;
        this.isPushPending = true;
        process.nextTick(() => {
          this.isPushPending = false;
          if (this.statusOutput) {
            return;
          }
          this.listener.onReceiveMessage(message);
          this.maybeOutputStatus();
        });
      }
      tryPush(messageBytes) {
        if (this.canPush) {
          this.http2Stream.pause();
          this.push(messageBytes);
        } else {
          this.trace("unpushedReadMessages.push message of length " + messageBytes.length);
          this.unpushedReadMessages.push(messageBytes);
        }
      }
      handleTrailers(headers) {
        this.callEventTracker.onStreamEnd(true);
        let headersString = "";
        for (const header of Object.keys(headers)) {
          headersString += "		" + header + ": " + headers[header] + "\n";
        }
        this.trace("Received server trailers:\n" + headersString);
        let metadata;
        try {
          metadata = metadata_1.Metadata.fromHttp2Headers(headers);
        } catch (e) {
          metadata = new metadata_1.Metadata();
        }
        const metadataMap = metadata.getMap();
        let code = this.mappedStatusCode;
        if (code === constants_1.Status.UNKNOWN && typeof metadataMap["grpc-status"] === "string") {
          const receivedStatus = Number(metadataMap["grpc-status"]);
          if (receivedStatus in constants_1.Status) {
            code = receivedStatus;
            this.trace("received status code " + receivedStatus + " from server");
          }
          metadata.remove("grpc-status");
        }
        let details = "";
        if (typeof metadataMap["grpc-message"] === "string") {
          try {
            details = decodeURI(metadataMap["grpc-message"]);
          } catch (e) {
            details = metadataMap["grpc-message"];
          }
          metadata.remove("grpc-message");
          this.trace('received status details string "' + details + '" from server');
        }
        const status2 = { code, details, metadata };
        this.endCall(status2);
      }
      destroyHttp2Stream() {
        var _a;
        if (!this.http2Stream.destroyed) {
          let code;
          if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1.Status.OK) {
            code = http2.constants.NGHTTP2_NO_ERROR;
          } else {
            code = http2.constants.NGHTTP2_CANCEL;
          }
          this.trace("close http2 stream with code " + code);
          this.http2Stream.close(code);
        }
      }
      cancelWithStatus(status2, details) {
        this.trace("cancelWithStatus code: " + status2 + ' details: "' + details + '"');
        this.endCall({ code: status2, details, metadata: new metadata_1.Metadata() });
      }
      getStatus() {
        return this.finalStatus;
      }
      getPeer() {
        return this.transport.getPeerName();
      }
      getCallNumber() {
        return this.callId;
      }
      startRead() {
        if (this.finalStatus !== null && this.finalStatus.code !== constants_1.Status.OK) {
          this.readsClosed = true;
          this.maybeOutputStatus();
          return;
        }
        this.canPush = true;
        if (this.unpushedReadMessages.length > 0) {
          const nextMessage = this.unpushedReadMessages.shift();
          this.push(nextMessage);
          return;
        }
        this.http2Stream.resume();
      }
      sendMessageWithContext(context, message) {
        this.trace("write() called with message of length " + message.length);
        const cb = (error) => {
          process.nextTick(() => {
            var _a;
            let code = constants_1.Status.UNAVAILABLE;
            if ((error === null || error === void 0 ? void 0 : error.code) === "ERR_STREAM_WRITE_AFTER_END") {
              code = constants_1.Status.INTERNAL;
            }
            if (error) {
              this.cancelWithStatus(code, `Write error: ${error.message}`);
            }
            (_a = context.callback) === null || _a === void 0 ? void 0 : _a.call(context);
          });
        };
        this.trace("sending data chunk of length " + message.length);
        this.callEventTracker.addMessageSent();
        try {
          this.http2Stream.write(message, cb);
        } catch (error) {
          this.endCall({
            code: constants_1.Status.UNAVAILABLE,
            details: `Write failed with error ${error.message}`,
            metadata: new metadata_1.Metadata()
          });
        }
      }
      halfClose() {
        this.trace("end() called");
        this.trace("calling end() on HTTP/2 stream");
        this.http2Stream.end();
      }
    };
    exports2.Http2SubchannelCall = Http2SubchannelCall;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call-number.js
var require_call_number = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/call-number.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getNextCallNumber = void 0;
    var nextCallNumber = 0;
    function getNextCallNumber() {
      return nextCallNumber++;
    }
    exports2.getNextCallNumber = getNextCallNumber;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/transport.js
var require_transport = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/transport.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Http2SubchannelConnector = void 0;
    var http2 = require("http2");
    var tls_1 = require("tls");
    var channelz_1 = require_channelz();
    var constants_1 = require_constants();
    var http_proxy_1 = require_http_proxy();
    var logging = require_logging();
    var resolver_1 = require_resolver();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var net = require("net");
    var subchannel_call_1 = require_subchannel_call();
    var call_number_1 = require_call_number();
    var TRACER_NAME = "transport";
    var FLOW_CONTROL_TRACER_NAME = "transport_flowctrl";
    var clientVersion = require_package().version;
    var { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_TE, HTTP2_HEADER_USER_AGENT } = http2.constants;
    var KEEPALIVE_TIMEOUT_MS = 2e4;
    var tooManyPingsData = Buffer.from("too_many_pings", "ascii");
    var Http2Transport = class {
      constructor(session, subchannelAddress, options, remoteName) {
        this.session = session;
        this.remoteName = remoteName;
        this.keepaliveTimeMs = -1;
        this.keepaliveTimeoutMs = KEEPALIVE_TIMEOUT_MS;
        this.keepaliveTimerId = null;
        this.pendingSendKeepalivePing = false;
        this.keepaliveTimeoutId = null;
        this.keepaliveWithoutCalls = false;
        this.activeCalls = /* @__PURE__ */ new Set();
        this.disconnectListeners = [];
        this.disconnectHandled = false;
        this.channelzEnabled = true;
        this.streamTracker = new channelz_1.ChannelzCallTracker();
        this.keepalivesSent = 0;
        this.messagesSent = 0;
        this.messagesReceived = 0;
        this.lastMessageSentTimestamp = null;
        this.lastMessageReceivedTimestamp = null;
        this.subchannelAddressString = (0, subchannel_address_1.subchannelAddressToString)(subchannelAddress);
        if (options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
        }
        this.channelzRef = (0, channelz_1.registerChannelzSocket)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled);
        this.userAgent = [
          options["grpc.primary_user_agent"],
          `grpc-node-js/${clientVersion}`,
          options["grpc.secondary_user_agent"]
        ].filter((e) => e).join(" ");
        if ("grpc.keepalive_time_ms" in options) {
          this.keepaliveTimeMs = options["grpc.keepalive_time_ms"];
        }
        if ("grpc.keepalive_timeout_ms" in options) {
          this.keepaliveTimeoutMs = options["grpc.keepalive_timeout_ms"];
        }
        if ("grpc.keepalive_permit_without_calls" in options) {
          this.keepaliveWithoutCalls = options["grpc.keepalive_permit_without_calls"] === 1;
        } else {
          this.keepaliveWithoutCalls = false;
        }
        session.once("close", () => {
          this.trace("session closed");
          this.stopKeepalivePings();
          this.handleDisconnect();
        });
        session.once("goaway", (errorCode, lastStreamID, opaqueData) => {
          let tooManyPings = false;
          if (errorCode === http2.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData && opaqueData.equals(tooManyPingsData)) {
            tooManyPings = true;
          }
          this.trace("connection closed by GOAWAY with code " + errorCode + " and data " + (opaqueData === null || opaqueData === void 0 ? void 0 : opaqueData.toString()));
          this.reportDisconnectToOwner(tooManyPings);
        });
        session.once("error", (error) => {
          this.trace("connection closed with error " + error.message);
        });
        if (logging.isTracerEnabled(TRACER_NAME)) {
          session.on("remoteSettings", (settings) => {
            this.trace("new settings received" + (this.session !== session ? " on the old connection" : "") + ": " + JSON.stringify(settings));
          });
          session.on("localSettings", (settings) => {
            this.trace("local settings acknowledged by remote" + (this.session !== session ? " on the old connection" : "") + ": " + JSON.stringify(settings));
          });
        }
        if (this.keepaliveWithoutCalls) {
          this.maybeStartKeepalivePingTimer();
        }
      }
      getChannelzInfo() {
        var _a, _b, _c;
        const sessionSocket = this.session.socket;
        const remoteAddress = sessionSocket.remoteAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
        const localAddress = sessionSocket.localAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.localAddress, sessionSocket.localPort) : null;
        let tlsInfo;
        if (this.session.encrypted) {
          const tlsSocket = sessionSocket;
          const cipherInfo = tlsSocket.getCipher();
          const certificate = tlsSocket.getCertificate();
          const peerCertificate = tlsSocket.getPeerCertificate();
          tlsInfo = {
            cipherSuiteStandardName: (_a = cipherInfo.standardName) !== null && _a !== void 0 ? _a : null,
            cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
            localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
            remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
          };
        } else {
          tlsInfo = null;
        }
        const socketInfo = {
          remoteAddress,
          localAddress,
          security: tlsInfo,
          remoteName: this.remoteName,
          streamsStarted: this.streamTracker.callsStarted,
          streamsSucceeded: this.streamTracker.callsSucceeded,
          streamsFailed: this.streamTracker.callsFailed,
          messagesSent: this.messagesSent,
          messagesReceived: this.messagesReceived,
          keepAlivesSent: this.keepalivesSent,
          lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: this.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
          localFlowControlWindow: (_b = this.session.state.localWindowSize) !== null && _b !== void 0 ? _b : null,
          remoteFlowControlWindow: (_c = this.session.state.remoteWindowSize) !== null && _c !== void 0 ? _c : null
        };
        return socketInfo;
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      keepaliveTrace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      flowControlTrace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, FLOW_CONTROL_TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      internalsTrace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
      }
      /**
       * Indicate to the owner of this object that this transport should no longer
       * be used. That happens if the connection drops, or if the server sends a
       * GOAWAY.
       * @param tooManyPings If true, this was triggered by a GOAWAY with data
       * indicating that the session was closed becaues the client sent too many
       * pings.
       * @returns
       */
      reportDisconnectToOwner(tooManyPings) {
        if (this.disconnectHandled) {
          return;
        }
        this.disconnectHandled = true;
        this.disconnectListeners.forEach((listener) => listener(tooManyPings));
      }
      /**
       * Handle connection drops, but not GOAWAYs.
       */
      handleDisconnect() {
        this.reportDisconnectToOwner(false);
        setImmediate(() => {
          for (const call of this.activeCalls) {
            call.onDisconnect();
          }
        });
      }
      addDisconnectListener(listener) {
        this.disconnectListeners.push(listener);
      }
      clearKeepaliveTimer() {
        if (!this.keepaliveTimerId) {
          return;
        }
        clearTimeout(this.keepaliveTimerId);
        this.keepaliveTimerId = null;
      }
      clearKeepaliveTimeout() {
        if (!this.keepaliveTimeoutId) {
          return;
        }
        clearTimeout(this.keepaliveTimeoutId);
        this.keepaliveTimeoutId = null;
      }
      canSendPing() {
        return this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
      }
      maybeSendPing() {
        var _a, _b;
        this.clearKeepaliveTimer();
        if (!this.canSendPing()) {
          this.pendingSendKeepalivePing = true;
          return;
        }
        if (this.channelzEnabled) {
          this.keepalivesSent += 1;
        }
        this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
        if (!this.keepaliveTimeoutId) {
          this.keepaliveTimeoutId = setTimeout(() => {
            this.keepaliveTrace("Ping timeout passed without response");
            this.handleDisconnect();
          }, this.keepaliveTimeoutMs);
          (_b = (_a = this.keepaliveTimeoutId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        try {
          this.session.ping((err, duration, payload) => {
            if (err) {
              this.keepaliveTrace("Ping failed with error " + err.message);
              this.handleDisconnect();
            }
            this.keepaliveTrace("Received ping response");
            this.clearKeepaliveTimeout();
            this.maybeStartKeepalivePingTimer();
          });
        } catch (e) {
          this.handleDisconnect();
        }
      }
      /**
       * Starts the keepalive ping timer if appropriate. If the timer already ran
       * out while there were no active requests, instead send a ping immediately.
       * If the ping timer is already running or a ping is currently in flight,
       * instead do nothing and wait for them to resolve.
       */
      maybeStartKeepalivePingTimer() {
        var _a, _b;
        if (!this.canSendPing()) {
          return;
        }
        if (this.pendingSendKeepalivePing) {
          this.pendingSendKeepalivePing = false;
          this.maybeSendPing();
        } else if (!this.keepaliveTimerId && !this.keepaliveTimeoutId) {
          this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
          this.keepaliveTimerId = (_b = (_a = setTimeout(() => {
            this.maybeSendPing();
          }, this.keepaliveTimeMs)).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      stopKeepalivePings() {
        if (this.keepaliveTimerId) {
          clearTimeout(this.keepaliveTimerId);
          this.keepaliveTimerId = null;
        }
        this.clearKeepaliveTimeout();
      }
      removeActiveCall(call) {
        this.activeCalls.delete(call);
        if (this.activeCalls.size === 0) {
          this.session.unref();
        }
      }
      addActiveCall(call) {
        this.activeCalls.add(call);
        if (this.activeCalls.size === 1) {
          this.session.ref();
          if (!this.keepaliveWithoutCalls) {
            this.maybeStartKeepalivePingTimer();
          }
        }
      }
      createCall(metadata, host, method, listener, subchannelCallStatsTracker) {
        const headers = metadata.toHttp2Headers();
        headers[HTTP2_HEADER_AUTHORITY] = host;
        headers[HTTP2_HEADER_USER_AGENT] = this.userAgent;
        headers[HTTP2_HEADER_CONTENT_TYPE] = "application/grpc";
        headers[HTTP2_HEADER_METHOD] = "POST";
        headers[HTTP2_HEADER_PATH] = method;
        headers[HTTP2_HEADER_TE] = "trailers";
        let http2Stream;
        try {
          http2Stream = this.session.request(headers);
        } catch (e) {
          this.handleDisconnect();
          throw e;
        }
        this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize);
        this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
        let eventTracker;
        let call;
        if (this.channelzEnabled) {
          this.streamTracker.addCallStarted();
          eventTracker = {
            addMessageSent: () => {
              var _a;
              this.messagesSent += 1;
              this.lastMessageSentTimestamp = /* @__PURE__ */ new Date();
              (_a = subchannelCallStatsTracker.addMessageSent) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
            },
            addMessageReceived: () => {
              var _a;
              this.messagesReceived += 1;
              this.lastMessageReceivedTimestamp = /* @__PURE__ */ new Date();
              (_a = subchannelCallStatsTracker.addMessageReceived) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
            },
            onCallEnd: (status2) => {
              var _a;
              (_a = subchannelCallStatsTracker.onCallEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, status2);
              this.removeActiveCall(call);
            },
            onStreamEnd: (success) => {
              var _a;
              if (success) {
                this.streamTracker.addCallSucceeded();
              } else {
                this.streamTracker.addCallFailed();
              }
              (_a = subchannelCallStatsTracker.onStreamEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, success);
            }
          };
        } else {
          eventTracker = {
            addMessageSent: () => {
              var _a;
              (_a = subchannelCallStatsTracker.addMessageSent) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
            },
            addMessageReceived: () => {
              var _a;
              (_a = subchannelCallStatsTracker.addMessageReceived) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
            },
            onCallEnd: (status2) => {
              var _a;
              (_a = subchannelCallStatsTracker.onCallEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, status2);
              this.removeActiveCall(call);
            },
            onStreamEnd: (success) => {
              var _a;
              (_a = subchannelCallStatsTracker.onStreamEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, success);
            }
          };
        }
        call = new subchannel_call_1.Http2SubchannelCall(http2Stream, eventTracker, listener, this, (0, call_number_1.getNextCallNumber)());
        this.addActiveCall(call);
        return call;
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      getPeerName() {
        return this.subchannelAddressString;
      }
      shutdown() {
        this.session.close();
        (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
      }
    };
    var Http2SubchannelConnector = class {
      constructor(channelTarget) {
        this.channelTarget = channelTarget;
        this.session = null;
        this.isShutdown = false;
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, (0, uri_parser_1.uriToString)(this.channelTarget) + " " + text);
      }
      createSession(address, credentials2, options, proxyConnectionResult) {
        if (this.isShutdown) {
          return Promise.reject();
        }
        return new Promise((resolve, reject) => {
          var _a, _b, _c;
          let remoteName;
          if (proxyConnectionResult.realTarget) {
            remoteName = (0, uri_parser_1.uriToString)(proxyConnectionResult.realTarget);
            this.trace("creating HTTP/2 session through proxy to " + (0, uri_parser_1.uriToString)(proxyConnectionResult.realTarget));
          } else {
            remoteName = null;
            this.trace("creating HTTP/2 session to " + (0, subchannel_address_1.subchannelAddressToString)(address));
          }
          const targetAuthority = (0, resolver_1.getDefaultAuthority)((_a = proxyConnectionResult.realTarget) !== null && _a !== void 0 ? _a : this.channelTarget);
          let connectionOptions = credentials2._getConnectionOptions() || {};
          connectionOptions.maxSendHeaderBlockLength = Number.MAX_SAFE_INTEGER;
          if ("grpc-node.max_session_memory" in options) {
            connectionOptions.maxSessionMemory = options["grpc-node.max_session_memory"];
          } else {
            connectionOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
          }
          let addressScheme = "http://";
          if ("secureContext" in connectionOptions) {
            addressScheme = "https://";
            if (options["grpc.ssl_target_name_override"]) {
              const sslTargetNameOverride = options["grpc.ssl_target_name_override"];
              connectionOptions.checkServerIdentity = (host, cert) => {
                return (0, tls_1.checkServerIdentity)(sslTargetNameOverride, cert);
              };
              connectionOptions.servername = sslTargetNameOverride;
            } else {
              const authorityHostname = (_c = (_b = (0, uri_parser_1.splitHostPort)(targetAuthority)) === null || _b === void 0 ? void 0 : _b.host) !== null && _c !== void 0 ? _c : "localhost";
              connectionOptions.servername = authorityHostname;
            }
            if (proxyConnectionResult.socket) {
              connectionOptions.createConnection = (authority, option) => {
                return proxyConnectionResult.socket;
              };
            }
          } else {
            connectionOptions.createConnection = (authority, option) => {
              if (proxyConnectionResult.socket) {
                return proxyConnectionResult.socket;
              } else {
                return net.connect(address);
              }
            };
          }
          connectionOptions = Object.assign(Object.assign(Object.assign({}, connectionOptions), address), { enableTrace: options["grpc-node.tls_enable_trace"] === 1 });
          const session = http2.connect(addressScheme + targetAuthority, connectionOptions);
          this.session = session;
          let errorMessage = "Failed to connect";
          session.unref();
          session.once("connect", () => {
            session.removeAllListeners();
            resolve(new Http2Transport(session, address, options, remoteName));
            this.session = null;
          });
          session.once("close", () => {
            this.session = null;
            setImmediate(() => {
              reject(`${errorMessage} (${(/* @__PURE__ */ new Date()).toISOString()})`);
            });
          });
          session.once("error", (error) => {
            errorMessage = error.message;
            this.trace("connection failed with error " + errorMessage);
          });
        });
      }
      connect(address, credentials2, options) {
        var _a, _b;
        if (this.isShutdown) {
          return Promise.reject();
        }
        const connectionOptions = credentials2._getConnectionOptions() || {};
        if ("secureContext" in connectionOptions) {
          connectionOptions.ALPNProtocols = ["h2"];
          if (options["grpc.ssl_target_name_override"]) {
            const sslTargetNameOverride = options["grpc.ssl_target_name_override"];
            connectionOptions.checkServerIdentity = (host, cert) => {
              return (0, tls_1.checkServerIdentity)(sslTargetNameOverride, cert);
            };
            connectionOptions.servername = sslTargetNameOverride;
          } else {
            if ("grpc.http_connect_target" in options) {
              const targetPath = (0, resolver_1.getDefaultAuthority)((_a = (0, uri_parser_1.parseUri)(options["grpc.http_connect_target"])) !== null && _a !== void 0 ? _a : {
                path: "localhost"
              });
              const hostPort = (0, uri_parser_1.splitHostPort)(targetPath);
              connectionOptions.servername = (_b = hostPort === null || hostPort === void 0 ? void 0 : hostPort.host) !== null && _b !== void 0 ? _b : targetPath;
            }
          }
          if (options["grpc-node.tls_enable_trace"]) {
            connectionOptions.enableTrace = true;
          }
        }
        return (0, http_proxy_1.getProxiedConnection)(address, options, connectionOptions).then((result) => this.createSession(address, credentials2, options, result));
      }
      shutdown() {
        var _a;
        this.isShutdown = true;
        (_a = this.session) === null || _a === void 0 ? void 0 : _a.close();
        this.session = null;
      }
    };
    exports2.Http2SubchannelConnector = Http2SubchannelConnector;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-pool.js
var require_subchannel_pool = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-pool.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSubchannelPool = exports2.SubchannelPool = void 0;
    var channel_options_1 = require_channel_options();
    var subchannel_1 = require_subchannel();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var transport_1 = require_transport();
    var REF_CHECK_INTERVAL = 1e4;
    var SubchannelPool = class {
      /**
       * A pool of subchannels use for making connections. Subchannels with the
       * exact same parameters will be reused.
       */
      constructor() {
        this.pool = /* @__PURE__ */ Object.create(null);
        this.cleanupTimer = null;
      }
      /**
       * Unrefs all unused subchannels and cancels the cleanup task if all
       * subchannels have been unrefed.
       */
      unrefUnusedSubchannels() {
        let allSubchannelsUnrefed = true;
        for (const channelTarget in this.pool) {
          const subchannelObjArray = this.pool[channelTarget];
          const refedSubchannels = subchannelObjArray.filter((value) => !value.subchannel.unrefIfOneRef());
          if (refedSubchannels.length > 0) {
            allSubchannelsUnrefed = false;
          }
          this.pool[channelTarget] = refedSubchannels;
        }
        if (allSubchannelsUnrefed && this.cleanupTimer !== null) {
          clearInterval(this.cleanupTimer);
          this.cleanupTimer = null;
        }
      }
      /**
       * Ensures that the cleanup task is spawned.
       */
      ensureCleanupTask() {
        var _a, _b;
        if (this.cleanupTimer === null) {
          this.cleanupTimer = setInterval(() => {
            this.unrefUnusedSubchannels();
          }, REF_CHECK_INTERVAL);
          (_b = (_a = this.cleanupTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      /**
       * Get a subchannel if one already exists with exactly matching parameters.
       * Otherwise, create and save a subchannel with those parameters.
       * @param channelTarget
       * @param subchannelTarget
       * @param channelArguments
       * @param channelCredentials
       */
      getOrCreateSubchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials) {
        this.ensureCleanupTask();
        const channelTarget = (0, uri_parser_1.uriToString)(channelTargetUri);
        if (channelTarget in this.pool) {
          const subchannelObjArray = this.pool[channelTarget];
          for (const subchannelObj of subchannelObjArray) {
            if ((0, subchannel_address_1.subchannelAddressEqual)(subchannelTarget, subchannelObj.subchannelAddress) && (0, channel_options_1.channelOptionsEqual)(channelArguments, subchannelObj.channelArguments) && channelCredentials._equals(subchannelObj.channelCredentials)) {
              return subchannelObj.subchannel;
            }
          }
        }
        const subchannel = new subchannel_1.Subchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials, new transport_1.Http2SubchannelConnector(channelTargetUri));
        if (!(channelTarget in this.pool)) {
          this.pool[channelTarget] = [];
        }
        this.pool[channelTarget].push({
          subchannelAddress: subchannelTarget,
          channelArguments,
          channelCredentials,
          subchannel
        });
        subchannel.ref();
        return subchannel;
      }
    };
    exports2.SubchannelPool = SubchannelPool;
    var globalSubchannelPool = new SubchannelPool();
    function getSubchannelPool(global2) {
      if (global2) {
        return globalSubchannelPool;
      } else {
        return new SubchannelPool();
      }
    }
    exports2.getSubchannelPool = getSubchannelPool;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/filter-stack.js
var require_filter_stack = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/filter-stack.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FilterStackFactory = exports2.FilterStack = void 0;
    var FilterStack = class {
      constructor(filters) {
        this.filters = filters;
      }
      sendMetadata(metadata) {
        let result = metadata;
        for (let i = 0; i < this.filters.length; i++) {
          result = this.filters[i].sendMetadata(result);
        }
        return result;
      }
      receiveMetadata(metadata) {
        let result = metadata;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveMetadata(result);
        }
        return result;
      }
      sendMessage(message) {
        let result = message;
        for (let i = 0; i < this.filters.length; i++) {
          result = this.filters[i].sendMessage(result);
        }
        return result;
      }
      receiveMessage(message) {
        let result = message;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveMessage(result);
        }
        return result;
      }
      receiveTrailers(status2) {
        let result = status2;
        for (let i = this.filters.length - 1; i >= 0; i--) {
          result = this.filters[i].receiveTrailers(result);
        }
        return result;
      }
      push(filters) {
        this.filters.unshift(...filters);
      }
      getFilters() {
        return this.filters;
      }
    };
    exports2.FilterStack = FilterStack;
    var FilterStackFactory = class _FilterStackFactory {
      constructor(factories) {
        this.factories = factories;
      }
      push(filterFactories) {
        this.factories.unshift(...filterFactories);
      }
      clone() {
        return new _FilterStackFactory([...this.factories]);
      }
      createFilter() {
        return new FilterStack(this.factories.map((factory) => factory.createFilter()));
      }
    };
    exports2.FilterStackFactory = FilterStackFactory;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/compression-algorithms.js
var require_compression_algorithms = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/compression-algorithms.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CompressionAlgorithms = void 0;
    var CompressionAlgorithms;
    (function(CompressionAlgorithms2) {
      CompressionAlgorithms2[CompressionAlgorithms2["identity"] = 0] = "identity";
      CompressionAlgorithms2[CompressionAlgorithms2["deflate"] = 1] = "deflate";
      CompressionAlgorithms2[CompressionAlgorithms2["gzip"] = 2] = "gzip";
    })(CompressionAlgorithms || (exports2.CompressionAlgorithms = CompressionAlgorithms = {}));
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/filter.js
var require_filter = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseFilter = void 0;
    var BaseFilter = class {
      async sendMetadata(metadata) {
        return metadata;
      }
      receiveMetadata(metadata) {
        return metadata;
      }
      async sendMessage(message) {
        return message;
      }
      async receiveMessage(message) {
        return message;
      }
      receiveTrailers(status2) {
        return status2;
      }
    };
    exports2.BaseFilter = BaseFilter;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/compression-filter.js
var require_compression_filter = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/compression-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CompressionFilterFactory = exports2.CompressionFilter = void 0;
    var zlib = require("zlib");
    var compression_algorithms_1 = require_compression_algorithms();
    var constants_1 = require_constants();
    var filter_1 = require_filter();
    var logging = require_logging();
    var isCompressionAlgorithmKey = (key) => {
      return typeof key === "number" && typeof compression_algorithms_1.CompressionAlgorithms[key] === "string";
    };
    var CompressionHandler = class {
      /**
       * @param message Raw uncompressed message bytes
       * @param compress Indicates whether the message should be compressed
       * @return Framed message, compressed if applicable
       */
      async writeMessage(message, compress) {
        let messageBuffer = message;
        if (compress) {
          messageBuffer = await this.compressMessage(messageBuffer);
        }
        const output = Buffer.allocUnsafe(messageBuffer.length + 5);
        output.writeUInt8(compress ? 1 : 0, 0);
        output.writeUInt32BE(messageBuffer.length, 1);
        messageBuffer.copy(output, 5);
        return output;
      }
      /**
       * @param data Framed message, possibly compressed
       * @return Uncompressed message
       */
      async readMessage(data) {
        const compressed = data.readUInt8(0) === 1;
        let messageBuffer = data.slice(5);
        if (compressed) {
          messageBuffer = await this.decompressMessage(messageBuffer);
        }
        return messageBuffer;
      }
    };
    var IdentityHandler = class extends CompressionHandler {
      async compressMessage(message) {
        return message;
      }
      async writeMessage(message, compress) {
        const output = Buffer.allocUnsafe(message.length + 5);
        output.writeUInt8(0, 0);
        output.writeUInt32BE(message.length, 1);
        message.copy(output, 5);
        return output;
      }
      decompressMessage(message) {
        return Promise.reject(new Error('Received compressed message but "grpc-encoding" header was identity'));
      }
    };
    var DeflateHandler = class extends CompressionHandler {
      compressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.deflate(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
      decompressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.inflate(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
    };
    var GzipHandler = class extends CompressionHandler {
      compressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.gzip(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
      decompressMessage(message) {
        return new Promise((resolve, reject) => {
          zlib.unzip(message, (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(output);
            }
          });
        });
      }
    };
    var UnknownHandler = class extends CompressionHandler {
      constructor(compressionName) {
        super();
        this.compressionName = compressionName;
      }
      compressMessage(message) {
        return Promise.reject(new Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
      }
      decompressMessage(message) {
        return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
      }
    };
    function getCompressionHandler(compressionName) {
      switch (compressionName) {
        case "identity":
          return new IdentityHandler();
        case "deflate":
          return new DeflateHandler();
        case "gzip":
          return new GzipHandler();
        default:
          return new UnknownHandler(compressionName);
      }
    }
    var CompressionFilter = class extends filter_1.BaseFilter {
      constructor(channelOptions, sharedFilterConfig) {
        var _a;
        super();
        this.sharedFilterConfig = sharedFilterConfig;
        this.sendCompression = new IdentityHandler();
        this.receiveCompression = new IdentityHandler();
        this.currentCompressionAlgorithm = "identity";
        const compressionAlgorithmKey = channelOptions["grpc.default_compression_algorithm"];
        if (compressionAlgorithmKey !== void 0) {
          if (isCompressionAlgorithmKey(compressionAlgorithmKey)) {
            const clientSelectedEncoding = compression_algorithms_1.CompressionAlgorithms[compressionAlgorithmKey];
            const serverSupportedEncodings = (_a = sharedFilterConfig.serverSupportedEncodingHeader) === null || _a === void 0 ? void 0 : _a.split(",");
            if (!serverSupportedEncodings || serverSupportedEncodings.includes(clientSelectedEncoding)) {
              this.currentCompressionAlgorithm = clientSelectedEncoding;
              this.sendCompression = getCompressionHandler(this.currentCompressionAlgorithm);
            }
          } else {
            logging.log(constants_1.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${compressionAlgorithmKey}`);
          }
        }
      }
      async sendMetadata(metadata) {
        const headers = await metadata;
        headers.set("grpc-accept-encoding", "identity,deflate,gzip");
        headers.set("accept-encoding", "identity");
        if (this.currentCompressionAlgorithm === "identity") {
          headers.remove("grpc-encoding");
        } else {
          headers.set("grpc-encoding", this.currentCompressionAlgorithm);
        }
        return headers;
      }
      receiveMetadata(metadata) {
        const receiveEncoding = metadata.get("grpc-encoding");
        if (receiveEncoding.length > 0) {
          const encoding = receiveEncoding[0];
          if (typeof encoding === "string") {
            this.receiveCompression = getCompressionHandler(encoding);
          }
        }
        metadata.remove("grpc-encoding");
        const serverSupportedEncodingsHeader = metadata.get("grpc-accept-encoding")[0];
        if (serverSupportedEncodingsHeader) {
          this.sharedFilterConfig.serverSupportedEncodingHeader = serverSupportedEncodingsHeader;
          const serverSupportedEncodings = serverSupportedEncodingsHeader.split(",");
          if (!serverSupportedEncodings.includes(this.currentCompressionAlgorithm)) {
            this.sendCompression = new IdentityHandler();
            this.currentCompressionAlgorithm = "identity";
          }
        }
        metadata.remove("grpc-accept-encoding");
        return metadata;
      }
      async sendMessage(message) {
        var _a;
        const resolvedMessage = await message;
        let compress;
        if (this.sendCompression instanceof IdentityHandler) {
          compress = false;
        } else {
          compress = (((_a = resolvedMessage.flags) !== null && _a !== void 0 ? _a : 0) & 2) === 0;
        }
        return {
          message: await this.sendCompression.writeMessage(resolvedMessage.message, compress),
          flags: resolvedMessage.flags
        };
      }
      async receiveMessage(message) {
        return this.receiveCompression.readMessage(await message);
      }
    };
    exports2.CompressionFilter = CompressionFilter;
    var CompressionFilterFactory = class {
      constructor(channel, options) {
        this.options = options;
        this.sharedFilterConfig = {};
      }
      createFilter() {
        return new CompressionFilter(this.options, this.sharedFilterConfig);
      }
    };
    exports2.CompressionFilterFactory = CompressionFilterFactory;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/max-message-size-filter.js
var require_max_message_size_filter = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/max-message-size-filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MaxMessageSizeFilterFactory = exports2.MaxMessageSizeFilter = void 0;
    var filter_1 = require_filter();
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var MaxMessageSizeFilter = class extends filter_1.BaseFilter {
      constructor(options) {
        super();
        this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
        this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
        if ("grpc.max_send_message_length" in options) {
          this.maxSendMessageSize = options["grpc.max_send_message_length"];
        }
        if ("grpc.max_receive_message_length" in options) {
          this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
        }
      }
      async sendMessage(message) {
        if (this.maxSendMessageSize === -1) {
          return message;
        } else {
          const concreteMessage = await message;
          if (concreteMessage.message.length > this.maxSendMessageSize) {
            throw {
              code: constants_1.Status.RESOURCE_EXHAUSTED,
              details: `Sent message larger than max (${concreteMessage.message.length} vs. ${this.maxSendMessageSize})`,
              metadata: new metadata_1.Metadata()
            };
          } else {
            return concreteMessage;
          }
        }
      }
      async receiveMessage(message) {
        if (this.maxReceiveMessageSize === -1) {
          return message;
        } else {
          const concreteMessage = await message;
          if (concreteMessage.length > this.maxReceiveMessageSize) {
            throw {
              code: constants_1.Status.RESOURCE_EXHAUSTED,
              details: `Received message larger than max (${concreteMessage.length} vs. ${this.maxReceiveMessageSize})`,
              metadata: new metadata_1.Metadata()
            };
          } else {
            return concreteMessage;
          }
        }
      }
    };
    exports2.MaxMessageSizeFilter = MaxMessageSizeFilter;
    var MaxMessageSizeFilterFactory = class {
      constructor(options) {
        this.options = options;
      }
      createFilter() {
        return new MaxMessageSizeFilter(this.options);
      }
    };
    exports2.MaxMessageSizeFilterFactory = MaxMessageSizeFilterFactory;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/deadline.js
var require_deadline = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/deadline.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.deadlineToString = exports2.getRelativeTimeout = exports2.getDeadlineTimeoutString = exports2.minDeadline = void 0;
    function minDeadline(...deadlineList) {
      let minValue = Infinity;
      for (const deadline of deadlineList) {
        const deadlineMsecs = deadline instanceof Date ? deadline.getTime() : deadline;
        if (deadlineMsecs < minValue) {
          minValue = deadlineMsecs;
        }
      }
      return minValue;
    }
    exports2.minDeadline = minDeadline;
    var units = [
      ["m", 1],
      ["S", 1e3],
      ["M", 60 * 1e3],
      ["H", 60 * 60 * 1e3]
    ];
    function getDeadlineTimeoutString(deadline) {
      const now = (/* @__PURE__ */ new Date()).getTime();
      if (deadline instanceof Date) {
        deadline = deadline.getTime();
      }
      const timeoutMs = Math.max(deadline - now, 0);
      for (const [unit, factor] of units) {
        const amount = timeoutMs / factor;
        if (amount < 1e8) {
          return String(Math.ceil(amount)) + unit;
        }
      }
      throw new Error("Deadline is too far in the future");
    }
    exports2.getDeadlineTimeoutString = getDeadlineTimeoutString;
    var MAX_TIMEOUT_TIME = 2147483647;
    function getRelativeTimeout(deadline) {
      const deadlineMs = deadline instanceof Date ? deadline.getTime() : deadline;
      const now = (/* @__PURE__ */ new Date()).getTime();
      const timeout = deadlineMs - now;
      if (timeout < 0) {
        return 0;
      } else if (timeout > MAX_TIMEOUT_TIME) {
        return Infinity;
      } else {
        return timeout;
      }
    }
    exports2.getRelativeTimeout = getRelativeTimeout;
    function deadlineToString(deadline) {
      if (deadline instanceof Date) {
        return deadline.toISOString();
      } else {
        const dateDeadline = new Date(deadline);
        if (Number.isNaN(dateDeadline.getTime())) {
          return "" + deadline;
        } else {
          return dateDeadline.toISOString();
        }
      }
    }
    exports2.deadlineToString = deadlineToString;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/control-plane-status.js
var require_control_plane_status = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/control-plane-status.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.restrictControlPlaneStatusCode = void 0;
    var constants_1 = require_constants();
    var INAPPROPRIATE_CONTROL_PLANE_CODES = [
      constants_1.Status.OK,
      constants_1.Status.INVALID_ARGUMENT,
      constants_1.Status.NOT_FOUND,
      constants_1.Status.ALREADY_EXISTS,
      constants_1.Status.FAILED_PRECONDITION,
      constants_1.Status.ABORTED,
      constants_1.Status.OUT_OF_RANGE,
      constants_1.Status.DATA_LOSS
    ];
    function restrictControlPlaneStatusCode(code, details) {
      if (INAPPROPRIATE_CONTROL_PLANE_CODES.includes(code)) {
        return {
          code: constants_1.Status.INTERNAL,
          details: `Invalid status from control plane: ${code} ${constants_1.Status[code]} ${details}`
        };
      } else {
        return { code, details };
      }
    }
    exports2.restrictControlPlaneStatusCode = restrictControlPlaneStatusCode;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancing-call.js
var require_load_balancing_call = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancing-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LoadBalancingCall = void 0;
    var connectivity_state_1 = require_connectivity_state();
    var constants_1 = require_constants();
    var deadline_1 = require_deadline();
    var metadata_1 = require_metadata();
    var picker_1 = require_picker();
    var uri_parser_1 = require_uri_parser();
    var logging = require_logging();
    var control_plane_status_1 = require_control_plane_status();
    var http2 = require("http2");
    var TRACER_NAME = "load_balancing_call";
    var LoadBalancingCall = class {
      constructor(channel, callConfig, methodName, host, credentials2, deadline, callNumber) {
        var _a, _b;
        this.channel = channel;
        this.callConfig = callConfig;
        this.methodName = methodName;
        this.host = host;
        this.credentials = credentials2;
        this.deadline = deadline;
        this.callNumber = callNumber;
        this.child = null;
        this.readPending = false;
        this.pendingMessage = null;
        this.pendingHalfClose = false;
        this.ended = false;
        this.metadata = null;
        this.listener = null;
        this.onCallEnded = null;
        const splitPath = this.methodName.split("/");
        let serviceName = "";
        if (splitPath.length >= 2) {
          serviceName = splitPath[1];
        }
        const hostname = (_b = (_a = (0, uri_parser_1.splitHostPort)(this.host)) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : "localhost";
        this.serviceUrl = `https://${hostname}/${serviceName}`;
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
      }
      outputStatus(status2, progress) {
        var _a, _b;
        if (!this.ended) {
          this.ended = true;
          this.trace("ended with status: code=" + status2.code + ' details="' + status2.details + '"');
          const finalStatus = Object.assign(Object.assign({}, status2), { progress });
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus(finalStatus);
          (_b = this.onCallEnded) === null || _b === void 0 ? void 0 : _b.call(this, finalStatus.code);
        }
      }
      doPick() {
        var _a, _b;
        if (this.ended) {
          return;
        }
        if (!this.metadata) {
          throw new Error("doPick called before start");
        }
        this.trace("Pick called");
        const finalMetadata = this.metadata.clone();
        const pickResult = this.channel.doPick(finalMetadata, this.callConfig.pickInformation);
        const subchannelString = pickResult.subchannel ? "(" + pickResult.subchannel.getChannelzRef().id + ") " + pickResult.subchannel.getAddress() : "" + pickResult.subchannel;
        this.trace("Pick result: " + picker_1.PickResultType[pickResult.pickResultType] + " subchannel: " + subchannelString + " status: " + ((_a = pickResult.status) === null || _a === void 0 ? void 0 : _a.code) + " " + ((_b = pickResult.status) === null || _b === void 0 ? void 0 : _b.details));
        switch (pickResult.pickResultType) {
          case picker_1.PickResultType.COMPLETE:
            this.credentials.generateMetadata({ service_url: this.serviceUrl }).then((credsMetadata) => {
              var _a2, _b2, _c;
              if (this.ended) {
                this.trace("Credentials metadata generation finished after call ended");
                return;
              }
              finalMetadata.merge(credsMetadata);
              if (finalMetadata.get("authorization").length > 1) {
                this.outputStatus({
                  code: constants_1.Status.INTERNAL,
                  details: '"authorization" metadata cannot have multiple values',
                  metadata: new metadata_1.Metadata()
                }, "PROCESSED");
              }
              if (pickResult.subchannel.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
                this.trace("Picked subchannel " + subchannelString + " has state " + connectivity_state_1.ConnectivityState[pickResult.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick");
                this.doPick();
                return;
              }
              if (this.deadline !== Infinity) {
                finalMetadata.set("grpc-timeout", (0, deadline_1.getDeadlineTimeoutString)(this.deadline));
              }
              try {
                this.child = pickResult.subchannel.getRealSubchannel().createCall(finalMetadata, this.host, this.methodName, {
                  onReceiveMetadata: (metadata) => {
                    this.trace("Received metadata");
                    this.listener.onReceiveMetadata(metadata);
                  },
                  onReceiveMessage: (message) => {
                    this.trace("Received message");
                    this.listener.onReceiveMessage(message);
                  },
                  onReceiveStatus: (status2) => {
                    this.trace("Received status");
                    if (status2.rstCode === http2.constants.NGHTTP2_REFUSED_STREAM) {
                      this.outputStatus(status2, "REFUSED");
                    } else {
                      this.outputStatus(status2, "PROCESSED");
                    }
                  }
                });
              } catch (error) {
                this.trace("Failed to start call on picked subchannel " + subchannelString + " with error " + error.message);
                this.outputStatus({
                  code: constants_1.Status.INTERNAL,
                  details: "Failed to start HTTP/2 stream with error " + error.message,
                  metadata: new metadata_1.Metadata()
                }, "NOT_STARTED");
                return;
              }
              (_b2 = (_a2 = this.callConfig).onCommitted) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
              (_c = pickResult.onCallStarted) === null || _c === void 0 ? void 0 : _c.call(pickResult);
              this.onCallEnded = pickResult.onCallEnded;
              this.trace("Created child call [" + this.child.getCallNumber() + "]");
              if (this.readPending) {
                this.child.startRead();
              }
              if (this.pendingMessage) {
                this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
              }
              if (this.pendingHalfClose) {
                this.child.halfClose();
              }
            }, (error) => {
              const { code: code2, details: details2 } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(typeof error.code === "number" ? error.code : constants_1.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${error.message}`);
              this.outputStatus({
                code: code2,
                details: details2,
                metadata: new metadata_1.Metadata()
              }, "PROCESSED");
            });
            break;
          case picker_1.PickResultType.DROP:
            const { code, details } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(pickResult.status.code, pickResult.status.details);
            setImmediate(() => {
              this.outputStatus({ code, details, metadata: pickResult.status.metadata }, "DROP");
            });
            break;
          case picker_1.PickResultType.TRANSIENT_FAILURE:
            if (this.metadata.getOptions().waitForReady) {
              this.channel.queueCallForPick(this);
            } else {
              const { code: code2, details: details2 } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(pickResult.status.code, pickResult.status.details);
              setImmediate(() => {
                this.outputStatus({ code: code2, details: details2, metadata: pickResult.status.metadata }, "PROCESSED");
              });
            }
            break;
          case picker_1.PickResultType.QUEUE:
            this.channel.queueCallForPick(this);
        }
      }
      cancelWithStatus(status2, details) {
        var _a;
        this.trace("cancelWithStatus code: " + status2 + ' details: "' + details + '"');
        (_a = this.child) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(status2, details);
        this.outputStatus({ code: status2, details, metadata: new metadata_1.Metadata() }, "PROCESSED");
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.child) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : this.channel.getTarget();
      }
      start(metadata, listener) {
        this.trace("start called");
        this.listener = listener;
        this.metadata = metadata;
        this.doPick();
      }
      sendMessageWithContext(context, message) {
        this.trace("write() called with message of length " + message.length);
        if (this.child) {
          this.child.sendMessageWithContext(context, message);
        } else {
          this.pendingMessage = { context, message };
        }
      }
      startRead() {
        this.trace("startRead called");
        if (this.child) {
          this.child.startRead();
        } else {
          this.readPending = true;
        }
      }
      halfClose() {
        this.trace("halfClose called");
        if (this.child) {
          this.child.halfClose();
        } else {
          this.pendingHalfClose = true;
        }
      }
      setCredentials(credentials2) {
        throw new Error("Method not implemented.");
      }
      getCallNumber() {
        return this.callNumber;
      }
    };
    exports2.LoadBalancingCall = LoadBalancingCall;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolving-call.js
var require_resolving_call = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolving-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ResolvingCall = void 0;
    var constants_1 = require_constants();
    var deadline_1 = require_deadline();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var control_plane_status_1 = require_control_plane_status();
    var TRACER_NAME = "resolving_call";
    var ResolvingCall = class {
      constructor(channel, method, options, filterStackFactory, credentials2, callNumber) {
        this.channel = channel;
        this.method = method;
        this.filterStackFactory = filterStackFactory;
        this.credentials = credentials2;
        this.callNumber = callNumber;
        this.child = null;
        this.readPending = false;
        this.pendingMessage = null;
        this.pendingHalfClose = false;
        this.ended = false;
        this.readFilterPending = false;
        this.writeFilterPending = false;
        this.pendingChildStatus = null;
        this.metadata = null;
        this.listener = null;
        this.statusWatchers = [];
        this.deadlineTimer = setTimeout(() => {
        }, 0);
        this.filterStack = null;
        this.deadline = options.deadline;
        this.host = options.host;
        if (options.parentCall) {
          if (options.flags & constants_1.Propagate.CANCELLATION) {
            options.parentCall.on("cancelled", () => {
              this.cancelWithStatus(constants_1.Status.CANCELLED, "Cancelled by parent call");
            });
          }
          if (options.flags & constants_1.Propagate.DEADLINE) {
            this.trace("Propagating deadline from parent: " + options.parentCall.getDeadline());
            this.deadline = (0, deadline_1.minDeadline)(this.deadline, options.parentCall.getDeadline());
          }
        }
        this.trace("Created");
        this.runDeadlineTimer();
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
      }
      runDeadlineTimer() {
        clearTimeout(this.deadlineTimer);
        this.trace("Deadline: " + (0, deadline_1.deadlineToString)(this.deadline));
        const timeout = (0, deadline_1.getRelativeTimeout)(this.deadline);
        if (timeout !== Infinity) {
          this.trace("Deadline will be reached in " + timeout + "ms");
          const handleDeadline = () => {
            this.cancelWithStatus(constants_1.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          };
          if (timeout <= 0) {
            process.nextTick(handleDeadline);
          } else {
            this.deadlineTimer = setTimeout(handleDeadline, timeout);
          }
        }
      }
      outputStatus(status2) {
        if (!this.ended) {
          this.ended = true;
          if (!this.filterStack) {
            this.filterStack = this.filterStackFactory.createFilter();
          }
          clearTimeout(this.deadlineTimer);
          const filteredStatus = this.filterStack.receiveTrailers(status2);
          this.trace("ended with status: code=" + filteredStatus.code + ' details="' + filteredStatus.details + '"');
          this.statusWatchers.forEach((watcher) => watcher(filteredStatus));
          process.nextTick(() => {
            var _a;
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus(filteredStatus);
          });
        }
      }
      sendMessageOnChild(context, message) {
        if (!this.child) {
          throw new Error("sendMessageonChild called with child not populated");
        }
        const child = this.child;
        this.writeFilterPending = true;
        this.filterStack.sendMessage(Promise.resolve({ message, flags: context.flags })).then((filteredMessage) => {
          this.writeFilterPending = false;
          child.sendMessageWithContext(context, filteredMessage.message);
          if (this.pendingHalfClose) {
            child.halfClose();
          }
        }, (status2) => {
          this.cancelWithStatus(status2.code, status2.details);
        });
      }
      getConfig() {
        if (this.ended) {
          return;
        }
        if (!this.metadata || !this.listener) {
          throw new Error("getConfig called before start");
        }
        const configResult = this.channel.getConfig(this.method, this.metadata);
        if (configResult.type === "NONE") {
          this.channel.queueCallForConfig(this);
          return;
        } else if (configResult.type === "ERROR") {
          if (this.metadata.getOptions().waitForReady) {
            this.channel.queueCallForConfig(this);
          } else {
            this.outputStatus(configResult.error);
          }
          return;
        }
        const config = configResult.config;
        if (config.status !== constants_1.Status.OK) {
          const { code, details } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(config.status, "Failed to route call to method " + this.method);
          this.outputStatus({
            code,
            details,
            metadata: new metadata_1.Metadata()
          });
          return;
        }
        if (config.methodConfig.timeout) {
          const configDeadline = /* @__PURE__ */ new Date();
          configDeadline.setSeconds(configDeadline.getSeconds() + config.methodConfig.timeout.seconds);
          configDeadline.setMilliseconds(configDeadline.getMilliseconds() + config.methodConfig.timeout.nanos / 1e6);
          this.deadline = (0, deadline_1.minDeadline)(this.deadline, configDeadline);
          this.runDeadlineTimer();
        }
        this.filterStackFactory.push(config.dynamicFilterFactories);
        this.filterStack = this.filterStackFactory.createFilter();
        this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then((filteredMetadata) => {
          this.child = this.channel.createInnerCall(config, this.method, this.host, this.credentials, this.deadline);
          this.trace("Created child [" + this.child.getCallNumber() + "]");
          this.child.start(filteredMetadata, {
            onReceiveMetadata: (metadata) => {
              this.trace("Received metadata");
              this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(metadata));
            },
            onReceiveMessage: (message) => {
              this.trace("Received message");
              this.readFilterPending = true;
              this.filterStack.receiveMessage(message).then((filteredMesssage) => {
                this.trace("Finished filtering received message");
                this.readFilterPending = false;
                this.listener.onReceiveMessage(filteredMesssage);
                if (this.pendingChildStatus) {
                  this.outputStatus(this.pendingChildStatus);
                }
              }, (status2) => {
                this.cancelWithStatus(status2.code, status2.details);
              });
            },
            onReceiveStatus: (status2) => {
              this.trace("Received status");
              if (this.readFilterPending) {
                this.pendingChildStatus = status2;
              } else {
                this.outputStatus(status2);
              }
            }
          });
          if (this.readPending) {
            this.child.startRead();
          }
          if (this.pendingMessage) {
            this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
          } else if (this.pendingHalfClose) {
            this.child.halfClose();
          }
        }, (status2) => {
          this.outputStatus(status2);
        });
      }
      reportResolverError(status2) {
        var _a;
        if ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.getOptions().waitForReady) {
          this.channel.queueCallForConfig(this);
        } else {
          this.outputStatus(status2);
        }
      }
      cancelWithStatus(status2, details) {
        var _a;
        this.trace("cancelWithStatus code: " + status2 + ' details: "' + details + '"');
        (_a = this.child) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(status2, details);
        this.outputStatus({
          code: status2,
          details,
          metadata: new metadata_1.Metadata()
        });
      }
      getPeer() {
        var _a, _b;
        return (_b = (_a = this.child) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : this.channel.getTarget();
      }
      start(metadata, listener) {
        this.trace("start called");
        this.metadata = metadata.clone();
        this.listener = listener;
        this.getConfig();
      }
      sendMessageWithContext(context, message) {
        this.trace("write() called with message of length " + message.length);
        if (this.child) {
          this.sendMessageOnChild(context, message);
        } else {
          this.pendingMessage = { context, message };
        }
      }
      startRead() {
        this.trace("startRead called");
        if (this.child) {
          this.child.startRead();
        } else {
          this.readPending = true;
        }
      }
      halfClose() {
        this.trace("halfClose called");
        if (this.child && !this.writeFilterPending) {
          this.child.halfClose();
        } else {
          this.pendingHalfClose = true;
        }
      }
      setCredentials(credentials2) {
        this.credentials = this.credentials.compose(credentials2);
      }
      addStatusWatcher(watcher) {
        this.statusWatchers.push(watcher);
      }
      getCallNumber() {
        return this.callNumber;
      }
    };
    exports2.ResolvingCall = ResolvingCall;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/retrying-call.js
var require_retrying_call = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/retrying-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RetryingCall = exports2.MessageBufferTracker = exports2.RetryThrottler = void 0;
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var logging = require_logging();
    var TRACER_NAME = "retrying_call";
    var RetryThrottler = class {
      constructor(maxTokens, tokenRatio, previousRetryThrottler) {
        this.maxTokens = maxTokens;
        this.tokenRatio = tokenRatio;
        if (previousRetryThrottler) {
          this.tokens = previousRetryThrottler.tokens * (maxTokens / previousRetryThrottler.maxTokens);
        } else {
          this.tokens = maxTokens;
        }
      }
      addCallSucceeded() {
        this.tokens = Math.max(this.tokens + this.tokenRatio, this.maxTokens);
      }
      addCallFailed() {
        this.tokens = Math.min(this.tokens - 1, 0);
      }
      canRetryCall() {
        return this.tokens > this.maxTokens / 2;
      }
    };
    exports2.RetryThrottler = RetryThrottler;
    var MessageBufferTracker = class {
      constructor(totalLimit, limitPerCall) {
        this.totalLimit = totalLimit;
        this.limitPerCall = limitPerCall;
        this.totalAllocated = 0;
        this.allocatedPerCall = /* @__PURE__ */ new Map();
      }
      allocate(size, callId) {
        var _a;
        const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== void 0 ? _a : 0;
        if (this.limitPerCall - currentPerCall < size || this.totalLimit - this.totalAllocated < size) {
          return false;
        }
        this.allocatedPerCall.set(callId, currentPerCall + size);
        this.totalAllocated += size;
        return true;
      }
      free(size, callId) {
        var _a;
        if (this.totalAllocated < size) {
          throw new Error(`Invalid buffer allocation state: call ${callId} freed ${size} > total allocated ${this.totalAllocated}`);
        }
        this.totalAllocated -= size;
        const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== void 0 ? _a : 0;
        if (currentPerCall < size) {
          throw new Error(`Invalid buffer allocation state: call ${callId} freed ${size} > allocated for call ${currentPerCall}`);
        }
        this.allocatedPerCall.set(callId, currentPerCall - size);
      }
      freeAll(callId) {
        var _a;
        const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== void 0 ? _a : 0;
        if (this.totalAllocated < currentPerCall) {
          throw new Error(`Invalid buffer allocation state: call ${callId} allocated ${currentPerCall} > total allocated ${this.totalAllocated}`);
        }
        this.totalAllocated -= currentPerCall;
        this.allocatedPerCall.delete(callId);
      }
    };
    exports2.MessageBufferTracker = MessageBufferTracker;
    var PREVIONS_RPC_ATTEMPTS_METADATA_KEY = "grpc-previous-rpc-attempts";
    var RetryingCall = class {
      constructor(channel, callConfig, methodName, host, credentials2, deadline, callNumber, bufferTracker, retryThrottler) {
        this.channel = channel;
        this.callConfig = callConfig;
        this.methodName = methodName;
        this.host = host;
        this.credentials = credentials2;
        this.deadline = deadline;
        this.callNumber = callNumber;
        this.bufferTracker = bufferTracker;
        this.retryThrottler = retryThrottler;
        this.listener = null;
        this.initialMetadata = null;
        this.underlyingCalls = [];
        this.writeBuffer = [];
        this.writeBufferOffset = 0;
        this.readStarted = false;
        this.transparentRetryUsed = false;
        this.attempts = 0;
        this.hedgingTimer = null;
        this.committedCallIndex = null;
        this.initialRetryBackoffSec = 0;
        this.nextRetryBackoffSec = 0;
        if (callConfig.methodConfig.retryPolicy) {
          this.state = "RETRY";
          const retryPolicy = callConfig.methodConfig.retryPolicy;
          this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(retryPolicy.initialBackoff.substring(0, retryPolicy.initialBackoff.length - 1));
        } else if (callConfig.methodConfig.hedgingPolicy) {
          this.state = "HEDGING";
        } else {
          this.state = "TRANSPARENT_ONLY";
        }
      }
      getCallNumber() {
        return this.callNumber;
      }
      trace(text) {
        logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "[" + this.callNumber + "] " + text);
      }
      reportStatus(statusObject) {
        this.trace("ended with status: code=" + statusObject.code + ' details="' + statusObject.details + '"');
        this.bufferTracker.freeAll(this.callNumber);
        this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length;
        this.writeBuffer = [];
        process.nextTick(() => {
          var _a;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus({
            code: statusObject.code,
            details: statusObject.details,
            metadata: statusObject.metadata
          });
        });
      }
      cancelWithStatus(status2, details) {
        this.trace("cancelWithStatus code: " + status2 + ' details: "' + details + '"');
        this.reportStatus({ code: status2, details, metadata: new metadata_1.Metadata() });
        for (const { call } of this.underlyingCalls) {
          call.cancelWithStatus(status2, details);
        }
      }
      getPeer() {
        if (this.committedCallIndex !== null) {
          return this.underlyingCalls[this.committedCallIndex].call.getPeer();
        } else {
          return "unknown";
        }
      }
      getBufferEntry(messageIndex) {
        var _a;
        return (_a = this.writeBuffer[messageIndex - this.writeBufferOffset]) !== null && _a !== void 0 ? _a : {
          entryType: "FREED",
          allocated: false
        };
      }
      getNextBufferIndex() {
        return this.writeBufferOffset + this.writeBuffer.length;
      }
      clearSentMessages() {
        if (this.state !== "COMMITTED") {
          return;
        }
        const earliestNeededMessageIndex = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
        for (let messageIndex = this.writeBufferOffset; messageIndex < earliestNeededMessageIndex; messageIndex++) {
          const bufferEntry = this.getBufferEntry(messageIndex);
          if (bufferEntry.allocated) {
            this.bufferTracker.free(bufferEntry.message.message.length, this.callNumber);
          }
        }
        this.writeBuffer = this.writeBuffer.slice(earliestNeededMessageIndex - this.writeBufferOffset);
        this.writeBufferOffset = earliestNeededMessageIndex;
      }
      commitCall(index) {
        if (this.state === "COMMITTED") {
          return;
        }
        if (this.underlyingCalls[index].state === "COMPLETED") {
          return;
        }
        this.trace("Committing call [" + this.underlyingCalls[index].call.getCallNumber() + "] at index " + index);
        this.state = "COMMITTED";
        this.committedCallIndex = index;
        for (let i = 0; i < this.underlyingCalls.length; i++) {
          if (i === index) {
            continue;
          }
          if (this.underlyingCalls[i].state === "COMPLETED") {
            continue;
          }
          this.underlyingCalls[i].state = "COMPLETED";
          this.underlyingCalls[i].call.cancelWithStatus(constants_1.Status.CANCELLED, "Discarded in favor of other hedged attempt");
        }
        this.clearSentMessages();
      }
      commitCallWithMostMessages() {
        if (this.state === "COMMITTED") {
          return;
        }
        let mostMessages = -1;
        let callWithMostMessages = -1;
        for (const [index, childCall] of this.underlyingCalls.entries()) {
          if (childCall.state === "ACTIVE" && childCall.nextMessageToSend > mostMessages) {
            mostMessages = childCall.nextMessageToSend;
            callWithMostMessages = index;
          }
        }
        if (callWithMostMessages === -1) {
          this.state = "TRANSPARENT_ONLY";
        } else {
          this.commitCall(callWithMostMessages);
        }
      }
      isStatusCodeInList(list, code) {
        return list.some((value) => value === code || value.toString().toLowerCase() === constants_1.Status[code].toLowerCase());
      }
      getNextRetryBackoffMs() {
        var _a;
        const retryPolicy = (_a = this.callConfig) === null || _a === void 0 ? void 0 : _a.methodConfig.retryPolicy;
        if (!retryPolicy) {
          return 0;
        }
        const nextBackoffMs = Math.random() * this.nextRetryBackoffSec * 1e3;
        const maxBackoffSec = Number(retryPolicy.maxBackoff.substring(0, retryPolicy.maxBackoff.length - 1));
        this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * retryPolicy.backoffMultiplier, maxBackoffSec);
        return nextBackoffMs;
      }
      maybeRetryCall(pushback, callback) {
        if (this.state !== "RETRY") {
          callback(false);
          return;
        }
        const retryPolicy = this.callConfig.methodConfig.retryPolicy;
        if (this.attempts >= Math.min(retryPolicy.maxAttempts, 5)) {
          callback(false);
          return;
        }
        let retryDelayMs;
        if (pushback === null) {
          retryDelayMs = this.getNextRetryBackoffMs();
        } else if (pushback < 0) {
          this.state = "TRANSPARENT_ONLY";
          callback(false);
          return;
        } else {
          retryDelayMs = pushback;
          this.nextRetryBackoffSec = this.initialRetryBackoffSec;
        }
        setTimeout(() => {
          var _a, _b;
          if (this.state !== "RETRY") {
            callback(false);
            return;
          }
          if ((_b = (_a = this.retryThrottler) === null || _a === void 0 ? void 0 : _a.canRetryCall()) !== null && _b !== void 0 ? _b : true) {
            callback(true);
            this.attempts += 1;
            this.startNewAttempt();
          }
        }, retryDelayMs);
      }
      countActiveCalls() {
        let count = 0;
        for (const call of this.underlyingCalls) {
          if ((call === null || call === void 0 ? void 0 : call.state) === "ACTIVE") {
            count += 1;
          }
        }
        return count;
      }
      handleProcessedStatus(status2, callIndex, pushback) {
        var _a, _b, _c;
        switch (this.state) {
          case "COMMITTED":
          case "TRANSPARENT_ONLY":
            this.commitCall(callIndex);
            this.reportStatus(status2);
            break;
          case "HEDGING":
            if (this.isStatusCodeInList((_a = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && _a !== void 0 ? _a : [], status2.code)) {
              (_b = this.retryThrottler) === null || _b === void 0 ? void 0 : _b.addCallFailed();
              let delayMs;
              if (pushback === null) {
                delayMs = 0;
              } else if (pushback < 0) {
                this.state = "TRANSPARENT_ONLY";
                this.commitCall(callIndex);
                this.reportStatus(status2);
                return;
              } else {
                delayMs = pushback;
              }
              setTimeout(() => {
                this.maybeStartHedgingAttempt();
                if (this.countActiveCalls() === 0) {
                  this.commitCall(callIndex);
                  this.reportStatus(status2);
                }
              }, delayMs);
            } else {
              this.commitCall(callIndex);
              this.reportStatus(status2);
            }
            break;
          case "RETRY":
            if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, status2.code)) {
              (_c = this.retryThrottler) === null || _c === void 0 ? void 0 : _c.addCallFailed();
              this.maybeRetryCall(pushback, (retried) => {
                if (!retried) {
                  this.commitCall(callIndex);
                  this.reportStatus(status2);
                }
              });
            } else {
              this.commitCall(callIndex);
              this.reportStatus(status2);
            }
            break;
        }
      }
      getPushback(metadata) {
        const mdValue = metadata.get("grpc-retry-pushback-ms");
        if (mdValue.length === 0) {
          return null;
        }
        try {
          return parseInt(mdValue[0]);
        } catch (e) {
          return -1;
        }
      }
      handleChildStatus(status2, callIndex) {
        var _a;
        if (this.underlyingCalls[callIndex].state === "COMPLETED") {
          return;
        }
        this.trace("state=" + this.state + " handling status with progress " + status2.progress + " from child [" + this.underlyingCalls[callIndex].call.getCallNumber() + "] in state " + this.underlyingCalls[callIndex].state);
        this.underlyingCalls[callIndex].state = "COMPLETED";
        if (status2.code === constants_1.Status.OK) {
          (_a = this.retryThrottler) === null || _a === void 0 ? void 0 : _a.addCallSucceeded();
          this.commitCall(callIndex);
          this.reportStatus(status2);
          return;
        }
        if (this.state === "COMMITTED") {
          this.reportStatus(status2);
          return;
        }
        const pushback = this.getPushback(status2.metadata);
        switch (status2.progress) {
          case "NOT_STARTED":
            this.startNewAttempt();
            break;
          case "REFUSED":
            if (this.transparentRetryUsed) {
              this.handleProcessedStatus(status2, callIndex, pushback);
            } else {
              this.transparentRetryUsed = true;
              this.startNewAttempt();
            }
            break;
          case "DROP":
            this.commitCall(callIndex);
            this.reportStatus(status2);
            break;
          case "PROCESSED":
            this.handleProcessedStatus(status2, callIndex, pushback);
            break;
        }
      }
      maybeStartHedgingAttempt() {
        if (this.state !== "HEDGING") {
          return;
        }
        if (!this.callConfig.methodConfig.hedgingPolicy) {
          return;
        }
        const hedgingPolicy = this.callConfig.methodConfig.hedgingPolicy;
        if (this.attempts >= Math.min(hedgingPolicy.maxAttempts, 5)) {
          return;
        }
        this.attempts += 1;
        this.startNewAttempt();
        this.maybeStartHedgingTimer();
      }
      maybeStartHedgingTimer() {
        var _a, _b, _c;
        if (this.hedgingTimer) {
          clearTimeout(this.hedgingTimer);
        }
        if (this.state !== "HEDGING") {
          return;
        }
        if (!this.callConfig.methodConfig.hedgingPolicy) {
          return;
        }
        const hedgingPolicy = this.callConfig.methodConfig.hedgingPolicy;
        if (this.attempts >= Math.min(hedgingPolicy.maxAttempts, 5)) {
          return;
        }
        const hedgingDelayString = (_a = hedgingPolicy.hedgingDelay) !== null && _a !== void 0 ? _a : "0s";
        const hedgingDelaySec = Number(hedgingDelayString.substring(0, hedgingDelayString.length - 1));
        this.hedgingTimer = setTimeout(() => {
          this.maybeStartHedgingAttempt();
        }, hedgingDelaySec * 1e3);
        (_c = (_b = this.hedgingTimer).unref) === null || _c === void 0 ? void 0 : _c.call(_b);
      }
      startNewAttempt() {
        const child = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
        this.trace("Created child call [" + child.getCallNumber() + "] for attempt " + this.attempts);
        const index = this.underlyingCalls.length;
        this.underlyingCalls.push({
          state: "ACTIVE",
          call: child,
          nextMessageToSend: 0
        });
        const previousAttempts = this.attempts - 1;
        const initialMetadata = this.initialMetadata.clone();
        if (previousAttempts > 0) {
          initialMetadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
        }
        let receivedMetadata = false;
        child.start(initialMetadata, {
          onReceiveMetadata: (metadata) => {
            this.trace("Received metadata from child [" + child.getCallNumber() + "]");
            this.commitCall(index);
            receivedMetadata = true;
            if (previousAttempts > 0) {
              metadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
            }
            if (this.underlyingCalls[index].state === "ACTIVE") {
              this.listener.onReceiveMetadata(metadata);
            }
          },
          onReceiveMessage: (message) => {
            this.trace("Received message from child [" + child.getCallNumber() + "]");
            this.commitCall(index);
            if (this.underlyingCalls[index].state === "ACTIVE") {
              this.listener.onReceiveMessage(message);
            }
          },
          onReceiveStatus: (status2) => {
            this.trace("Received status from child [" + child.getCallNumber() + "]");
            if (!receivedMetadata && previousAttempts > 0) {
              status2.metadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
            }
            this.handleChildStatus(status2, index);
          }
        });
        this.sendNextChildMessage(index);
        if (this.readStarted) {
          child.startRead();
        }
      }
      start(metadata, listener) {
        this.trace("start called");
        this.listener = listener;
        this.initialMetadata = metadata;
        this.attempts += 1;
        this.startNewAttempt();
        this.maybeStartHedgingTimer();
      }
      handleChildWriteCompleted(childIndex) {
        var _a, _b;
        const childCall = this.underlyingCalls[childIndex];
        const messageIndex = childCall.nextMessageToSend;
        (_b = (_a = this.getBufferEntry(messageIndex)).callback) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.clearSentMessages();
        childCall.nextMessageToSend += 1;
        this.sendNextChildMessage(childIndex);
      }
      sendNextChildMessage(childIndex) {
        const childCall = this.underlyingCalls[childIndex];
        if (childCall.state === "COMPLETED") {
          return;
        }
        if (this.getBufferEntry(childCall.nextMessageToSend)) {
          const bufferEntry = this.getBufferEntry(childCall.nextMessageToSend);
          switch (bufferEntry.entryType) {
            case "MESSAGE":
              childCall.call.sendMessageWithContext({
                callback: (error) => {
                  this.handleChildWriteCompleted(childIndex);
                }
              }, bufferEntry.message.message);
              break;
            case "HALF_CLOSE":
              childCall.nextMessageToSend += 1;
              childCall.call.halfClose();
              break;
            case "FREED":
              break;
          }
        }
      }
      sendMessageWithContext(context, message) {
        var _a;
        this.trace("write() called with message of length " + message.length);
        const writeObj = {
          message,
          flags: context.flags
        };
        const messageIndex = this.getNextBufferIndex();
        const bufferEntry = {
          entryType: "MESSAGE",
          message: writeObj,
          allocated: this.bufferTracker.allocate(message.length, this.callNumber)
        };
        this.writeBuffer.push(bufferEntry);
        if (bufferEntry.allocated) {
          (_a = context.callback) === null || _a === void 0 ? void 0 : _a.call(context);
          for (const [callIndex, call] of this.underlyingCalls.entries()) {
            if (call.state === "ACTIVE" && call.nextMessageToSend === messageIndex) {
              call.call.sendMessageWithContext({
                callback: (error) => {
                  this.handleChildWriteCompleted(callIndex);
                }
              }, message);
            }
          }
        } else {
          this.commitCallWithMostMessages();
          if (this.committedCallIndex === null) {
            return;
          }
          const call = this.underlyingCalls[this.committedCallIndex];
          bufferEntry.callback = context.callback;
          if (call.state === "ACTIVE" && call.nextMessageToSend === messageIndex) {
            call.call.sendMessageWithContext({
              callback: (error) => {
                this.handleChildWriteCompleted(this.committedCallIndex);
              }
            }, message);
          }
        }
      }
      startRead() {
        this.trace("startRead called");
        this.readStarted = true;
        for (const underlyingCall of this.underlyingCalls) {
          if ((underlyingCall === null || underlyingCall === void 0 ? void 0 : underlyingCall.state) === "ACTIVE") {
            underlyingCall.call.startRead();
          }
        }
      }
      halfClose() {
        this.trace("halfClose called");
        const halfCloseIndex = this.getNextBufferIndex();
        this.writeBuffer.push({
          entryType: "HALF_CLOSE",
          allocated: false
        });
        for (const call of this.underlyingCalls) {
          if ((call === null || call === void 0 ? void 0 : call.state) === "ACTIVE" && call.nextMessageToSend === halfCloseIndex) {
            call.nextMessageToSend += 1;
            call.call.halfClose();
          }
        }
      }
      setCredentials(newCredentials) {
        throw new Error("Method not implemented.");
      }
      getMethod() {
        return this.methodName;
      }
      getHost() {
        return this.host;
      }
    };
    exports2.RetryingCall = RetryingCall;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-interface.js
var require_subchannel_interface = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/subchannel-interface.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseSubchannelWrapper = void 0;
    var BaseSubchannelWrapper = class {
      constructor(child) {
        this.child = child;
        this.healthy = true;
        this.healthListeners = /* @__PURE__ */ new Set();
        child.addHealthStateWatcher((childHealthy) => {
          if (this.healthy) {
            this.updateHealthListeners();
          }
        });
      }
      updateHealthListeners() {
        for (const listener of this.healthListeners) {
          listener(this.isHealthy());
        }
      }
      getConnectivityState() {
        return this.child.getConnectivityState();
      }
      addConnectivityStateListener(listener) {
        this.child.addConnectivityStateListener(listener);
      }
      removeConnectivityStateListener(listener) {
        this.child.removeConnectivityStateListener(listener);
      }
      startConnecting() {
        this.child.startConnecting();
      }
      getAddress() {
        return this.child.getAddress();
      }
      throttleKeepalive(newKeepaliveTime) {
        this.child.throttleKeepalive(newKeepaliveTime);
      }
      ref() {
        this.child.ref();
      }
      unref() {
        this.child.unref();
      }
      getChannelzRef() {
        return this.child.getChannelzRef();
      }
      isHealthy() {
        return this.healthy && this.child.isHealthy();
      }
      addHealthStateWatcher(listener) {
        this.healthListeners.add(listener);
      }
      removeHealthStateWatcher(listener) {
        this.healthListeners.delete(listener);
      }
      setHealthy(healthy) {
        if (healthy !== this.healthy) {
          this.healthy = healthy;
          if (this.child.isHealthy()) {
            this.updateHealthListeners();
          }
        }
      }
      getRealSubchannel() {
        return this.child.getRealSubchannel();
      }
      realSubchannelEquals(other) {
        return this.getRealSubchannel() === other.getRealSubchannel();
      }
    };
    exports2.BaseSubchannelWrapper = BaseSubchannelWrapper;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/internal-channel.js
var require_internal_channel = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/internal-channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InternalChannel = void 0;
    var channel_credentials_1 = require_channel_credentials();
    var resolving_load_balancer_1 = require_resolving_load_balancer();
    var subchannel_pool_1 = require_subchannel_pool();
    var picker_1 = require_picker();
    var constants_1 = require_constants();
    var filter_stack_1 = require_filter_stack();
    var compression_filter_1 = require_compression_filter();
    var resolver_1 = require_resolver();
    var logging_1 = require_logging();
    var max_message_size_filter_1 = require_max_message_size_filter();
    var http_proxy_1 = require_http_proxy();
    var uri_parser_1 = require_uri_parser();
    var connectivity_state_1 = require_connectivity_state();
    var channelz_1 = require_channelz();
    var load_balancing_call_1 = require_load_balancing_call();
    var deadline_1 = require_deadline();
    var resolving_call_1 = require_resolving_call();
    var call_number_1 = require_call_number();
    var control_plane_status_1 = require_control_plane_status();
    var retrying_call_1 = require_retrying_call();
    var subchannel_interface_1 = require_subchannel_interface();
    var MAX_TIMEOUT_TIME = 2147483647;
    var MIN_IDLE_TIMEOUT_MS = 1e3;
    var DEFAULT_IDLE_TIMEOUT_MS = 30 * 60 * 1e3;
    var RETRY_THROTTLER_MAP = /* @__PURE__ */ new Map();
    var DEFAULT_RETRY_BUFFER_SIZE_BYTES = 1 << 24;
    var DEFAULT_PER_RPC_RETRY_BUFFER_SIZE_BYTES = 1 << 20;
    var ChannelSubchannelWrapper = class extends subchannel_interface_1.BaseSubchannelWrapper {
      constructor(childSubchannel, channel) {
        super(childSubchannel);
        this.channel = channel;
        this.refCount = 0;
        this.subchannelStateListener = (subchannel, previousState, newState, keepaliveTime) => {
          channel.throttleKeepalive(keepaliveTime);
        };
        childSubchannel.addConnectivityStateListener(this.subchannelStateListener);
      }
      ref() {
        this.child.ref();
        this.refCount += 1;
      }
      unref() {
        this.child.unref();
        this.refCount -= 1;
        if (this.refCount <= 0) {
          this.child.removeConnectivityStateListener(this.subchannelStateListener);
          this.channel.removeWrappedSubchannel(this);
        }
      }
    };
    var InternalChannel = class {
      constructor(target, credentials2, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.credentials = credentials2;
        this.options = options;
        this.connectivityState = connectivity_state_1.ConnectivityState.IDLE;
        this.currentPicker = new picker_1.UnavailablePicker();
        this.configSelectionQueue = [];
        this.pickQueue = [];
        this.connectivityStateWatchers = [];
        this.configSelector = null;
        this.currentResolutionError = null;
        this.wrappedSubchannels = /* @__PURE__ */ new Set();
        this.callCount = 0;
        this.idleTimer = null;
        this.channelzEnabled = true;
        this.callTracker = new channelz_1.ChannelzCallTracker();
        this.childrenTracker = new channelz_1.ChannelzChildrenTracker();
        this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        if (typeof target !== "string") {
          throw new TypeError("Channel target must be a string");
        }
        if (!(credentials2 instanceof channel_credentials_1.ChannelCredentials)) {
          throw new TypeError("Channel credentials must be a ChannelCredentials object");
        }
        if (options) {
          if (typeof options !== "object") {
            throw new TypeError("Channel options must be an object");
          }
        }
        this.originalTarget = target;
        const originalTargetUri = (0, uri_parser_1.parseUri)(target);
        if (originalTargetUri === null) {
          throw new Error(`Could not parse target name "${target}"`);
        }
        const defaultSchemeMapResult = (0, resolver_1.mapUriDefaultScheme)(originalTargetUri);
        if (defaultSchemeMapResult === null) {
          throw new Error(`Could not find a default scheme for target name "${target}"`);
        }
        this.callRefTimer = setInterval(() => {
        }, MAX_TIMEOUT_TIME);
        (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this.options["grpc.enable_channelz"] === 0) {
          this.channelzEnabled = false;
        }
        this.channelzTrace = new channelz_1.ChannelzTrace();
        this.channelzRef = (0, channelz_1.registerChannelzChannel)(target, () => this.getChannelzInfo(), this.channelzEnabled);
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", "Channel created");
        }
        if (this.options["grpc.default_authority"]) {
          this.defaultAuthority = this.options["grpc.default_authority"];
        } else {
          this.defaultAuthority = (0, resolver_1.getDefaultAuthority)(defaultSchemeMapResult);
        }
        const proxyMapResult = (0, http_proxy_1.mapProxyName)(defaultSchemeMapResult, options);
        this.target = proxyMapResult.target;
        this.options = Object.assign({}, this.options, proxyMapResult.extraOptions);
        this.subchannelPool = (0, subchannel_pool_1.getSubchannelPool)(((_c = options["grpc.use_local_subchannel_pool"]) !== null && _c !== void 0 ? _c : 0) === 0);
        this.retryBufferTracker = new retrying_call_1.MessageBufferTracker((_d = options["grpc.retry_buffer_size"]) !== null && _d !== void 0 ? _d : DEFAULT_RETRY_BUFFER_SIZE_BYTES, (_e = options["grpc.per_rpc_retry_buffer_size"]) !== null && _e !== void 0 ? _e : DEFAULT_PER_RPC_RETRY_BUFFER_SIZE_BYTES);
        this.keepaliveTime = (_f = options["grpc.keepalive_time_ms"]) !== null && _f !== void 0 ? _f : -1;
        this.idleTimeoutMs = Math.max((_g = options["grpc.client_idle_timeout_ms"]) !== null && _g !== void 0 ? _g : DEFAULT_IDLE_TIMEOUT_MS, MIN_IDLE_TIMEOUT_MS);
        const channelControlHelper = {
          createSubchannel: (subchannelAddress, subchannelArgs) => {
            const subchannel = this.subchannelPool.getOrCreateSubchannel(this.target, subchannelAddress, Object.assign({}, this.options, subchannelArgs), this.credentials);
            subchannel.throttleKeepalive(this.keepaliveTime);
            if (this.channelzEnabled) {
              this.channelzTrace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", subchannel.getChannelzRef());
            }
            const wrappedSubchannel = new ChannelSubchannelWrapper(subchannel, this);
            this.wrappedSubchannels.add(wrappedSubchannel);
            return wrappedSubchannel;
          },
          updateState: (connectivityState, picker) => {
            this.currentPicker = picker;
            const queueCopy = this.pickQueue.slice();
            this.pickQueue = [];
            if (queueCopy.length > 0) {
              this.callRefTimerUnref();
            }
            for (const call of queueCopy) {
              call.doPick();
            }
            this.updateState(connectivityState);
          },
          requestReresolution: () => {
            throw new Error("Resolving load balancer should never call requestReresolution");
          },
          addChannelzChild: (child) => {
            if (this.channelzEnabled) {
              this.childrenTracker.refChild(child);
            }
          },
          removeChannelzChild: (child) => {
            if (this.channelzEnabled) {
              this.childrenTracker.unrefChild(child);
            }
          }
        };
        this.resolvingLoadBalancer = new resolving_load_balancer_1.ResolvingLoadBalancer(this.target, channelControlHelper, options, (serviceConfig, configSelector) => {
          if (serviceConfig.retryThrottling) {
            RETRY_THROTTLER_MAP.set(this.getTarget(), new retrying_call_1.RetryThrottler(serviceConfig.retryThrottling.maxTokens, serviceConfig.retryThrottling.tokenRatio, RETRY_THROTTLER_MAP.get(this.getTarget())));
          } else {
            RETRY_THROTTLER_MAP.delete(this.getTarget());
          }
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Address resolution succeeded");
          }
          this.configSelector = configSelector;
          this.currentResolutionError = null;
          process.nextTick(() => {
            const localQueue = this.configSelectionQueue;
            this.configSelectionQueue = [];
            if (localQueue.length > 0) {
              this.callRefTimerUnref();
            }
            for (const call of localQueue) {
              call.getConfig();
            }
          });
        }, (status2) => {
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_WARNING", "Address resolution failed with code " + status2.code + ' and details "' + status2.details + '"');
          }
          if (this.configSelectionQueue.length > 0) {
            this.trace("Name resolution failed with calls queued for config selection");
          }
          if (this.configSelector === null) {
            this.currentResolutionError = Object.assign(Object.assign({}, (0, control_plane_status_1.restrictControlPlaneStatusCode)(status2.code, status2.details)), { metadata: status2.metadata });
          }
          const localQueue = this.configSelectionQueue;
          this.configSelectionQueue = [];
          if (localQueue.length > 0) {
            this.callRefTimerUnref();
          }
          for (const call of localQueue) {
            call.reportResolverError(status2);
          }
        });
        this.filterStackFactory = new filter_stack_1.FilterStackFactory([
          new max_message_size_filter_1.MaxMessageSizeFilterFactory(this.options),
          new compression_filter_1.CompressionFilterFactory(this, this.options)
        ]);
        this.trace("Channel constructed with options " + JSON.stringify(options, void 0, 2));
        const error = new Error();
        (0, logging_1.trace)(constants_1.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + ") Channel constructed \n" + ((_h = error.stack) === null || _h === void 0 ? void 0 : _h.substring(error.stack.indexOf("\n") + 1)));
        this.lastActivityTimestamp = /* @__PURE__ */ new Date();
      }
      getChannelzInfo() {
        return {
          target: this.originalTarget,
          state: this.connectivityState,
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists()
        };
      }
      trace(text, verbosityOverride) {
        (0, logging_1.trace)(verbosityOverride !== null && verbosityOverride !== void 0 ? verbosityOverride : constants_1.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + (0, uri_parser_1.uriToString)(this.target) + " " + text);
      }
      callRefTimerRef() {
        var _a, _b, _c, _d;
        if (!((_b = (_a = this.callRefTimer).hasRef) === null || _b === void 0 ? void 0 : _b.call(_a))) {
          this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
          (_d = (_c = this.callRefTimer).ref) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
      }
      callRefTimerUnref() {
        var _a, _b;
        if (!this.callRefTimer.hasRef || this.callRefTimer.hasRef()) {
          this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
          (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      }
      removeConnectivityStateWatcher(watcherObject) {
        const watcherIndex = this.connectivityStateWatchers.findIndex((value) => value === watcherObject);
        if (watcherIndex >= 0) {
          this.connectivityStateWatchers.splice(watcherIndex, 1);
        }
      }
      updateState(newState) {
        (0, logging_1.trace)(constants_1.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + (0, uri_parser_1.uriToString)(this.target) + " " + connectivity_state_1.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + connectivity_state_1.ConnectivityState[newState]);
        }
        this.connectivityState = newState;
        const watchersCopy = this.connectivityStateWatchers.slice();
        for (const watcherObject of watchersCopy) {
          if (newState !== watcherObject.currentState) {
            if (watcherObject.timer) {
              clearTimeout(watcherObject.timer);
            }
            this.removeConnectivityStateWatcher(watcherObject);
            watcherObject.callback();
          }
        }
        if (newState !== connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
          this.currentResolutionError = null;
        }
      }
      throttleKeepalive(newKeepaliveTime) {
        if (newKeepaliveTime > this.keepaliveTime) {
          this.keepaliveTime = newKeepaliveTime;
          for (const wrappedSubchannel of this.wrappedSubchannels) {
            wrappedSubchannel.throttleKeepalive(newKeepaliveTime);
          }
        }
      }
      removeWrappedSubchannel(wrappedSubchannel) {
        this.wrappedSubchannels.delete(wrappedSubchannel);
      }
      doPick(metadata, extraPickInfo) {
        return this.currentPicker.pick({
          metadata,
          extraPickInfo
        });
      }
      queueCallForPick(call) {
        this.pickQueue.push(call);
        this.callRefTimerRef();
      }
      getConfig(method, metadata) {
        this.resolvingLoadBalancer.exitIdle();
        if (this.configSelector) {
          return {
            type: "SUCCESS",
            config: this.configSelector(method, metadata, this.randomChannelId)
          };
        } else {
          if (this.currentResolutionError) {
            return {
              type: "ERROR",
              error: this.currentResolutionError
            };
          } else {
            return {
              type: "NONE"
            };
          }
        }
      }
      queueCallForConfig(call) {
        this.configSelectionQueue.push(call);
        this.callRefTimerRef();
      }
      enterIdle() {
        this.resolvingLoadBalancer.destroy();
        this.updateState(connectivity_state_1.ConnectivityState.IDLE);
        this.currentPicker = new picker_1.QueuePicker(this.resolvingLoadBalancer);
        if (this.idleTimer) {
          clearTimeout(this.idleTimer);
          this.idleTimer = null;
        }
      }
      startIdleTimeout(timeoutMs) {
        var _a, _b;
        this.idleTimer = setTimeout(() => {
          if (this.callCount > 0) {
            this.startIdleTimeout(this.idleTimeoutMs);
            return;
          }
          const now = /* @__PURE__ */ new Date();
          const timeSinceLastActivity = now.valueOf() - this.lastActivityTimestamp.valueOf();
          if (timeSinceLastActivity >= this.idleTimeoutMs) {
            this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity");
            this.enterIdle();
          } else {
            this.startIdleTimeout(this.idleTimeoutMs - timeSinceLastActivity);
          }
        }, timeoutMs);
        (_b = (_a = this.idleTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      maybeStartIdleTimer() {
        if (this.connectivityState !== connectivity_state_1.ConnectivityState.SHUTDOWN && !this.idleTimer) {
          this.startIdleTimeout(this.idleTimeoutMs);
        }
      }
      onCallStart() {
        if (this.channelzEnabled) {
          this.callTracker.addCallStarted();
        }
        this.callCount += 1;
      }
      onCallEnd(status2) {
        if (this.channelzEnabled) {
          if (status2.code === constants_1.Status.OK) {
            this.callTracker.addCallSucceeded();
          } else {
            this.callTracker.addCallFailed();
          }
        }
        this.callCount -= 1;
        this.lastActivityTimestamp = /* @__PURE__ */ new Date();
        this.maybeStartIdleTimer();
      }
      createLoadBalancingCall(callConfig, method, host, credentials2, deadline) {
        const callNumber = (0, call_number_1.getNextCallNumber)();
        this.trace("createLoadBalancingCall [" + callNumber + '] method="' + method + '"');
        return new load_balancing_call_1.LoadBalancingCall(this, callConfig, method, host, credentials2, deadline, callNumber);
      }
      createRetryingCall(callConfig, method, host, credentials2, deadline) {
        const callNumber = (0, call_number_1.getNextCallNumber)();
        this.trace("createRetryingCall [" + callNumber + '] method="' + method + '"');
        return new retrying_call_1.RetryingCall(this, callConfig, method, host, credentials2, deadline, callNumber, this.retryBufferTracker, RETRY_THROTTLER_MAP.get(this.getTarget()));
      }
      createInnerCall(callConfig, method, host, credentials2, deadline) {
        if (this.options["grpc.enable_retries"] === 0) {
          return this.createLoadBalancingCall(callConfig, method, host, credentials2, deadline);
        } else {
          return this.createRetryingCall(callConfig, method, host, credentials2, deadline);
        }
      }
      createResolvingCall(method, deadline, host, parentCall, propagateFlags) {
        const callNumber = (0, call_number_1.getNextCallNumber)();
        this.trace("createResolvingCall [" + callNumber + '] method="' + method + '", deadline=' + (0, deadline_1.deadlineToString)(deadline));
        const finalOptions = {
          deadline,
          flags: propagateFlags !== null && propagateFlags !== void 0 ? propagateFlags : constants_1.Propagate.DEFAULTS,
          host: host !== null && host !== void 0 ? host : this.defaultAuthority,
          parentCall
        };
        const call = new resolving_call_1.ResolvingCall(this, method, finalOptions, this.filterStackFactory.clone(), this.credentials._getCallCredentials(), callNumber);
        this.onCallStart();
        call.addStatusWatcher((status2) => {
          this.onCallEnd(status2);
        });
        return call;
      }
      close() {
        this.resolvingLoadBalancer.destroy();
        this.updateState(connectivity_state_1.ConnectivityState.SHUTDOWN);
        clearInterval(this.callRefTimer);
        if (this.idleTimer) {
          clearTimeout(this.idleTimer);
        }
        if (this.channelzEnabled) {
          (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
        }
        this.subchannelPool.unrefUnusedSubchannels();
      }
      getTarget() {
        return (0, uri_parser_1.uriToString)(this.target);
      }
      getConnectivityState(tryToConnect) {
        const connectivityState = this.connectivityState;
        if (tryToConnect) {
          this.resolvingLoadBalancer.exitIdle();
          this.lastActivityTimestamp = /* @__PURE__ */ new Date();
          this.maybeStartIdleTimer();
        }
        return connectivityState;
      }
      watchConnectivityState(currentState, deadline, callback) {
        if (this.connectivityState === connectivity_state_1.ConnectivityState.SHUTDOWN) {
          throw new Error("Channel has been shut down");
        }
        let timer = null;
        if (deadline !== Infinity) {
          const deadlineDate = deadline instanceof Date ? deadline : new Date(deadline);
          const now = /* @__PURE__ */ new Date();
          if (deadline === -Infinity || deadlineDate <= now) {
            process.nextTick(callback, new Error("Deadline passed without connectivity state change"));
            return;
          }
          timer = setTimeout(() => {
            this.removeConnectivityStateWatcher(watcherObject);
            callback(new Error("Deadline passed without connectivity state change"));
          }, deadlineDate.getTime() - now.getTime());
        }
        const watcherObject = {
          currentState,
          callback,
          timer
        };
        this.connectivityStateWatchers.push(watcherObject);
      }
      /**
       * Get the channelz reference object for this channel. The returned value is
       * garbage if channelz is disabled for this channel.
       * @returns
       */
      getChannelzRef() {
        return this.channelzRef;
      }
      createCall(method, deadline, host, parentCall, propagateFlags) {
        if (typeof method !== "string") {
          throw new TypeError("Channel#createCall: method must be a string");
        }
        if (!(typeof deadline === "number" || deadline instanceof Date)) {
          throw new TypeError("Channel#createCall: deadline must be a number or Date");
        }
        if (this.connectivityState === connectivity_state_1.ConnectivityState.SHUTDOWN) {
          throw new Error("Channel has been shut down");
        }
        return this.createResolvingCall(method, deadline, host, parentCall, propagateFlags);
      }
    };
    exports2.InternalChannel = InternalChannel;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channel.js
var require_channel = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/channel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChannelImplementation = void 0;
    var channel_credentials_1 = require_channel_credentials();
    var internal_channel_1 = require_internal_channel();
    var ChannelImplementation = class {
      constructor(target, credentials2, options) {
        if (typeof target !== "string") {
          throw new TypeError("Channel target must be a string");
        }
        if (!(credentials2 instanceof channel_credentials_1.ChannelCredentials)) {
          throw new TypeError("Channel credentials must be a ChannelCredentials object");
        }
        if (options) {
          if (typeof options !== "object") {
            throw new TypeError("Channel options must be an object");
          }
        }
        this.internalChannel = new internal_channel_1.InternalChannel(target, credentials2, options);
      }
      close() {
        this.internalChannel.close();
      }
      getTarget() {
        return this.internalChannel.getTarget();
      }
      getConnectivityState(tryToConnect) {
        return this.internalChannel.getConnectivityState(tryToConnect);
      }
      watchConnectivityState(currentState, deadline, callback) {
        this.internalChannel.watchConnectivityState(currentState, deadline, callback);
      }
      /**
       * Get the channelz reference object for this channel. The returned value is
       * garbage if channelz is disabled for this channel.
       * @returns
       */
      getChannelzRef() {
        return this.internalChannel.getChannelzRef();
      }
      createCall(method, deadline, host, parentCall, propagateFlags) {
        if (typeof method !== "string") {
          throw new TypeError("Channel#createCall: method must be a string");
        }
        if (!(typeof deadline === "number" || deadline instanceof Date)) {
          throw new TypeError("Channel#createCall: deadline must be a number or Date");
        }
        return this.internalChannel.createCall(method, deadline, host, parentCall, propagateFlags);
      }
    };
    exports2.ChannelImplementation = ChannelImplementation;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server-call.js
var require_server_call = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server-call.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServerDuplexStreamImpl = exports2.ServerWritableStreamImpl = exports2.ServerReadableStreamImpl = exports2.ServerUnaryCallImpl = exports2.serverErrorToStatus = void 0;
    var events_1 = require("events");
    var stream_1 = require("stream");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    function serverErrorToStatus(error, overrideTrailers) {
      var _a;
      const status2 = {
        code: constants_1.Status.UNKNOWN,
        details: "message" in error ? error.message : "Unknown Error",
        metadata: (_a = overrideTrailers !== null && overrideTrailers !== void 0 ? overrideTrailers : error.metadata) !== null && _a !== void 0 ? _a : null
      };
      if ("code" in error && typeof error.code === "number" && Number.isInteger(error.code)) {
        status2.code = error.code;
        if ("details" in error && typeof error.details === "string") {
          status2.details = error.details;
        }
      }
      return status2;
    }
    exports2.serverErrorToStatus = serverErrorToStatus;
    var ServerUnaryCallImpl = class extends events_1.EventEmitter {
      constructor(path, call, metadata, request) {
        super();
        this.path = path;
        this.call = call;
        this.metadata = metadata;
        this.request = request;
        this.cancelled = false;
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      getPath() {
        return this.path;
      }
    };
    exports2.ServerUnaryCallImpl = ServerUnaryCallImpl;
    var ServerReadableStreamImpl = class extends stream_1.Readable {
      constructor(path, call, metadata) {
        super({ objectMode: true });
        this.path = path;
        this.call = call;
        this.metadata = metadata;
        this.cancelled = false;
      }
      _read(size) {
        this.call.startRead();
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      getPath() {
        return this.path;
      }
    };
    exports2.ServerReadableStreamImpl = ServerReadableStreamImpl;
    var ServerWritableStreamImpl = class extends stream_1.Writable {
      constructor(path, call, metadata, request) {
        super({ objectMode: true });
        this.path = path;
        this.call = call;
        this.metadata = metadata;
        this.request = request;
        this.pendingStatus = {
          code: constants_1.Status.OK,
          details: "OK"
        };
        this.cancelled = false;
        this.trailingMetadata = new metadata_1.Metadata();
        this.on("error", (err) => {
          this.pendingStatus = serverErrorToStatus(err);
          this.end();
        });
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      getPath() {
        return this.path;
      }
      _write(chunk, encoding, callback) {
        this.call.sendMessage(chunk, callback);
      }
      _final(callback) {
        var _a;
        this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (_a = this.pendingStatus.metadata) !== null && _a !== void 0 ? _a : this.trailingMetadata }));
        callback(null);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      end(metadata) {
        if (metadata) {
          this.trailingMetadata = metadata;
        }
        return super.end();
      }
    };
    exports2.ServerWritableStreamImpl = ServerWritableStreamImpl;
    var ServerDuplexStreamImpl = class extends stream_1.Duplex {
      constructor(path, call, metadata) {
        super({ objectMode: true });
        this.path = path;
        this.call = call;
        this.metadata = metadata;
        this.pendingStatus = {
          code: constants_1.Status.OK,
          details: "OK"
        };
        this.cancelled = false;
        this.trailingMetadata = new metadata_1.Metadata();
        this.on("error", (err) => {
          this.pendingStatus = serverErrorToStatus(err);
          this.end();
        });
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMetadata(responseMetadata) {
        this.call.sendMetadata(responseMetadata);
      }
      getDeadline() {
        return this.call.getDeadline();
      }
      getPath() {
        return this.path;
      }
      _read(size) {
        this.call.startRead();
      }
      _write(chunk, encoding, callback) {
        this.call.sendMessage(chunk, callback);
      }
      _final(callback) {
        var _a;
        this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (_a = this.pendingStatus.metadata) !== null && _a !== void 0 ? _a : this.trailingMetadata }));
        callback(null);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      end(metadata) {
        if (metadata) {
          this.trailingMetadata = metadata;
        }
        return super.end();
      }
    };
    exports2.ServerDuplexStreamImpl = ServerDuplexStreamImpl;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server-credentials.js
var require_server_credentials = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server-credentials.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServerCredentials = void 0;
    var tls_helpers_1 = require_tls_helpers();
    var ServerCredentials = class {
      static createInsecure() {
        return new InsecureServerCredentials();
      }
      static createSsl(rootCerts, keyCertPairs, checkClientCertificate = false) {
        var _a;
        if (rootCerts !== null && !Buffer.isBuffer(rootCerts)) {
          throw new TypeError("rootCerts must be null or a Buffer");
        }
        if (!Array.isArray(keyCertPairs)) {
          throw new TypeError("keyCertPairs must be an array");
        }
        if (typeof checkClientCertificate !== "boolean") {
          throw new TypeError("checkClientCertificate must be a boolean");
        }
        const cert = [];
        const key = [];
        for (let i = 0; i < keyCertPairs.length; i++) {
          const pair = keyCertPairs[i];
          if (pair === null || typeof pair !== "object") {
            throw new TypeError(`keyCertPair[${i}] must be an object`);
          }
          if (!Buffer.isBuffer(pair.private_key)) {
            throw new TypeError(`keyCertPair[${i}].private_key must be a Buffer`);
          }
          if (!Buffer.isBuffer(pair.cert_chain)) {
            throw new TypeError(`keyCertPair[${i}].cert_chain must be a Buffer`);
          }
          cert.push(pair.cert_chain);
          key.push(pair.private_key);
        }
        return new SecureServerCredentials({
          ca: (_a = rootCerts !== null && rootCerts !== void 0 ? rootCerts : (0, tls_helpers_1.getDefaultRootsData)()) !== null && _a !== void 0 ? _a : void 0,
          cert,
          key,
          requestCert: checkClientCertificate,
          ciphers: tls_helpers_1.CIPHER_SUITES
        });
      }
    };
    exports2.ServerCredentials = ServerCredentials;
    var InsecureServerCredentials = class _InsecureServerCredentials extends ServerCredentials {
      _isSecure() {
        return false;
      }
      _getSettings() {
        return null;
      }
      _equals(other) {
        return other instanceof _InsecureServerCredentials;
      }
    };
    var SecureServerCredentials = class _SecureServerCredentials extends ServerCredentials {
      constructor(options) {
        super();
        this.options = options;
      }
      _isSecure() {
        return true;
      }
      _getSettings() {
        return this.options;
      }
      /**
       * Checks equality by checking the options that are actually set by
       * createSsl.
       * @param other
       * @returns
       */
      _equals(other) {
        if (this === other) {
          return true;
        }
        if (!(other instanceof _SecureServerCredentials)) {
          return false;
        }
        if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(other.options.ca)) {
          if (!this.options.ca.equals(other.options.ca)) {
            return false;
          }
        } else {
          if (this.options.ca !== other.options.ca) {
            return false;
          }
        }
        if (Array.isArray(this.options.cert) && Array.isArray(other.options.cert)) {
          if (this.options.cert.length !== other.options.cert.length) {
            return false;
          }
          for (let i = 0; i < this.options.cert.length; i++) {
            const thisCert = this.options.cert[i];
            const otherCert = other.options.cert[i];
            if (Buffer.isBuffer(thisCert) && Buffer.isBuffer(otherCert)) {
              if (!thisCert.equals(otherCert)) {
                return false;
              }
            } else {
              if (thisCert !== otherCert) {
                return false;
              }
            }
          }
        } else {
          if (this.options.cert !== other.options.cert) {
            return false;
          }
        }
        if (Array.isArray(this.options.key) && Array.isArray(other.options.key)) {
          if (this.options.key.length !== other.options.key.length) {
            return false;
          }
          for (let i = 0; i < this.options.key.length; i++) {
            const thisKey = this.options.key[i];
            const otherKey = other.options.key[i];
            if (Buffer.isBuffer(thisKey) && Buffer.isBuffer(otherKey)) {
              if (!thisKey.equals(otherKey)) {
                return false;
              }
            } else {
              if (thisKey !== otherKey) {
                return false;
              }
            }
          }
        } else {
          if (this.options.key !== other.options.key) {
            return false;
          }
        }
        if (this.options.requestCert !== other.options.requestCert) {
          return false;
        }
        return true;
      }
    };
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server-interceptors.js
var require_server_interceptors = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server-interceptors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getServerInterceptingCall = exports2.BaseServerInterceptingCall = exports2.ServerInterceptingCall = exports2.ResponderBuilder = exports2.isInterceptingServerListener = exports2.ServerListenerBuilder = void 0;
    var metadata_1 = require_metadata();
    var constants_1 = require_constants();
    var http2 = require("http2");
    var error_1 = require_error();
    var zlib = require("zlib");
    var util_1 = require("util");
    var stream_decoder_1 = require_stream_decoder();
    var logging = require_logging();
    var unzip = (0, util_1.promisify)(zlib.unzip);
    var inflate = (0, util_1.promisify)(zlib.inflate);
    var TRACER_NAME = "server_call";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var ServerListenerBuilder = class {
      constructor() {
        this.metadata = void 0;
        this.message = void 0;
        this.halfClose = void 0;
        this.cancel = void 0;
      }
      withOnReceiveMetadata(onReceiveMetadata) {
        this.metadata = onReceiveMetadata;
        return this;
      }
      withOnReceiveMessage(onReceiveMessage) {
        this.message = onReceiveMessage;
        return this;
      }
      withOnReceiveHalfClose(onReceiveHalfClose) {
        this.halfClose = onReceiveHalfClose;
        return this;
      }
      withOnCancel(onCancel) {
        this.cancel = onCancel;
        return this;
      }
      build() {
        return {
          onReceiveMetadata: this.metadata,
          onReceiveMessage: this.message,
          onReceiveHalfClose: this.halfClose,
          onCancel: this.cancel
        };
      }
    };
    exports2.ServerListenerBuilder = ServerListenerBuilder;
    function isInterceptingServerListener(listener) {
      return listener.onReceiveMetadata !== void 0 && listener.onReceiveMetadata.length === 1;
    }
    exports2.isInterceptingServerListener = isInterceptingServerListener;
    var InterceptingServerListenerImpl = class {
      constructor(listener, nextListener) {
        this.listener = listener;
        this.nextListener = nextListener;
        this.cancelled = false;
        this.processingMetadata = false;
        this.hasPendingMessage = false;
        this.pendingMessage = null;
        this.processingMessage = false;
        this.hasPendingHalfClose = false;
      }
      processPendingMessage() {
        if (this.hasPendingMessage) {
          this.nextListener.onReceiveMessage(this.pendingMessage);
          this.pendingMessage = null;
          this.hasPendingMessage = false;
        }
      }
      processPendingHalfClose() {
        if (this.hasPendingHalfClose) {
          this.nextListener.onReceiveHalfClose();
          this.hasPendingHalfClose = false;
        }
      }
      onReceiveMetadata(metadata) {
        if (this.cancelled) {
          return;
        }
        this.processingMetadata = true;
        this.listener.onReceiveMetadata(metadata, (interceptedMetadata) => {
          this.processingMetadata = false;
          if (this.cancelled) {
            return;
          }
          this.nextListener.onReceiveMetadata(interceptedMetadata);
          this.processPendingMessage();
          this.processPendingHalfClose();
        });
      }
      onReceiveMessage(message) {
        if (this.cancelled) {
          return;
        }
        this.processingMessage = true;
        this.listener.onReceiveMessage(message, (msg) => {
          this.processingMessage = false;
          if (this.cancelled) {
            return;
          }
          if (this.processingMetadata) {
            this.pendingMessage = msg;
            this.hasPendingMessage = true;
          } else {
            this.nextListener.onReceiveMessage(msg);
            this.processPendingHalfClose();
          }
        });
      }
      onReceiveHalfClose() {
        if (this.cancelled) {
          return;
        }
        this.listener.onReceiveHalfClose(() => {
          if (this.cancelled) {
            return;
          }
          if (this.processingMetadata || this.processingMessage) {
            this.hasPendingHalfClose = true;
          } else {
            this.nextListener.onReceiveHalfClose();
          }
        });
      }
      onCancel() {
        this.cancelled = true;
        this.listener.onCancel();
        this.nextListener.onCancel();
      }
    };
    var ResponderBuilder = class {
      constructor() {
        this.start = void 0;
        this.metadata = void 0;
        this.message = void 0;
        this.status = void 0;
      }
      withStart(start) {
        this.start = start;
        return this;
      }
      withSendMetadata(sendMetadata) {
        this.metadata = sendMetadata;
        return this;
      }
      withSendMessage(sendMessage) {
        this.message = sendMessage;
        return this;
      }
      withSendStatus(sendStatus) {
        this.status = sendStatus;
        return this;
      }
      build() {
        return {
          start: this.start,
          sendMetadata: this.metadata,
          sendMessage: this.message,
          sendStatus: this.status
        };
      }
    };
    exports2.ResponderBuilder = ResponderBuilder;
    var defaultServerListener = {
      onReceiveMetadata: (metadata, next) => {
        next(metadata);
      },
      onReceiveMessage: (message, next) => {
        next(message);
      },
      onReceiveHalfClose: (next) => {
        next();
      },
      onCancel: () => {
      }
    };
    var defaultResponder = {
      start: (next) => {
        next();
      },
      sendMetadata: (metadata, next) => {
        next(metadata);
      },
      sendMessage: (message, next) => {
        next(message);
      },
      sendStatus: (status2, next) => {
        next(status2);
      }
    };
    var ServerInterceptingCall = class {
      constructor(nextCall, responder) {
        this.nextCall = nextCall;
        this.processingMetadata = false;
        this.processingMessage = false;
        this.pendingMessage = null;
        this.pendingMessageCallback = null;
        this.pendingStatus = null;
        this.responder = Object.assign(Object.assign({}, defaultResponder), responder);
      }
      processPendingMessage() {
        if (this.pendingMessageCallback) {
          this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback);
          this.pendingMessage = null;
          this.pendingMessageCallback = null;
        }
      }
      processPendingStatus() {
        if (this.pendingStatus) {
          this.nextCall.sendStatus(this.pendingStatus);
          this.pendingStatus = null;
        }
      }
      start(listener) {
        this.responder.start((interceptedListener) => {
          const fullInterceptedListener = Object.assign(Object.assign({}, defaultServerListener), interceptedListener);
          const finalInterceptingListener = new InterceptingServerListenerImpl(fullInterceptedListener, listener);
          this.nextCall.start(finalInterceptingListener);
        });
      }
      sendMetadata(metadata) {
        this.processingMetadata = true;
        this.responder.sendMetadata(metadata, (interceptedMetadata) => {
          this.processingMetadata = false;
          this.nextCall.sendMetadata(interceptedMetadata);
          this.processPendingMessage();
          this.processPendingStatus();
        });
      }
      sendMessage(message, callback) {
        this.processingMessage = true;
        this.responder.sendMessage(message, (interceptedMessage) => {
          this.processingMessage = false;
          if (this.processingMetadata) {
            this.pendingMessage = interceptedMessage;
            this.pendingMessageCallback = callback;
          } else {
            this.nextCall.sendMessage(interceptedMessage, callback);
          }
        });
      }
      sendStatus(status2) {
        this.responder.sendStatus(status2, (interceptedStatus) => {
          if (this.processingMetadata || this.processingMessage) {
            this.pendingStatus = interceptedStatus;
          } else {
            this.nextCall.sendStatus(interceptedStatus);
          }
        });
      }
      startRead() {
        this.nextCall.startRead();
      }
      getPeer() {
        return this.nextCall.getPeer();
      }
      getDeadline() {
        return this.nextCall.getDeadline();
      }
    };
    exports2.ServerInterceptingCall = ServerInterceptingCall;
    var GRPC_ACCEPT_ENCODING_HEADER = "grpc-accept-encoding";
    var GRPC_ENCODING_HEADER = "grpc-encoding";
    var GRPC_MESSAGE_HEADER = "grpc-message";
    var GRPC_STATUS_HEADER = "grpc-status";
    var GRPC_TIMEOUT_HEADER = "grpc-timeout";
    var DEADLINE_REGEX = /(\d{1,8})\s*([HMSmun])/;
    var deadlineUnitsToMs = {
      H: 36e5,
      M: 6e4,
      S: 1e3,
      m: 1,
      u: 1e-3,
      n: 1e-6
    };
    var defaultCompressionHeaders = {
      // TODO(cjihrig): Remove these encoding headers from the default response
      // once compression is integrated.
      [GRPC_ACCEPT_ENCODING_HEADER]: "identity,deflate,gzip",
      [GRPC_ENCODING_HEADER]: "identity"
    };
    var defaultResponseHeaders = {
      [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK,
      [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
    };
    var defaultResponseOptions = {
      waitForTrailers: true
    };
    var BaseServerInterceptingCall = class {
      constructor(stream, headers, callEventTracker, handler, options) {
        this.stream = stream;
        this.callEventTracker = callEventTracker;
        this.handler = handler;
        this.listener = null;
        this.deadlineTimer = null;
        this.deadline = Infinity;
        this.maxSendMessageSize = constants_1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
        this.maxReceiveMessageSize = constants_1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
        this.cancelled = false;
        this.metadataSent = false;
        this.wantTrailers = false;
        this.cancelNotified = false;
        this.incomingEncoding = "identity";
        this.decoder = new stream_decoder_1.StreamDecoder();
        this.readQueue = [];
        this.isReadPending = false;
        this.receivedHalfClose = false;
        this.streamEnded = false;
        this.stream.once("error", (err) => {
        });
        this.stream.once("close", () => {
          var _a;
          trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " stream closed with rstCode " + this.stream.rstCode);
          if (this.callEventTracker && !this.streamEnded) {
            this.streamEnded = true;
            this.callEventTracker.onStreamEnd(false);
            this.callEventTracker.onCallEnd({
              code: constants_1.Status.CANCELLED,
              details: "Stream closed before sending status",
              metadata: null
            });
          }
          this.notifyOnCancel();
        });
        this.stream.on("data", (data) => {
          this.handleDataFrame(data);
        });
        this.stream.pause();
        this.stream.on("end", () => {
          this.handleEndEvent();
        });
        if ("grpc.max_send_message_length" in options) {
          this.maxSendMessageSize = options["grpc.max_send_message_length"];
        }
        if ("grpc.max_receive_message_length" in options) {
          this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
        }
        const metadata = metadata_1.Metadata.fromHttp2Headers(headers);
        if (logging.isTracerEnabled(TRACER_NAME)) {
          trace("Request to " + this.handler.path + " received headers " + JSON.stringify(metadata.toJSON()));
        }
        const timeoutHeader = metadata.get(GRPC_TIMEOUT_HEADER);
        if (timeoutHeader.length > 0) {
          this.handleTimeoutHeader(timeoutHeader[0]);
        }
        const encodingHeader = metadata.get(GRPC_ENCODING_HEADER);
        if (encodingHeader.length > 0) {
          this.incomingEncoding = encodingHeader[0];
        }
        metadata.remove(GRPC_TIMEOUT_HEADER);
        metadata.remove(GRPC_ENCODING_HEADER);
        metadata.remove(GRPC_ACCEPT_ENCODING_HEADER);
        metadata.remove(http2.constants.HTTP2_HEADER_ACCEPT_ENCODING);
        metadata.remove(http2.constants.HTTP2_HEADER_TE);
        metadata.remove(http2.constants.HTTP2_HEADER_CONTENT_TYPE);
        this.metadata = metadata;
      }
      handleTimeoutHeader(timeoutHeader) {
        const match = timeoutHeader.toString().match(DEADLINE_REGEX);
        if (match === null) {
          const status2 = {
            code: constants_1.Status.INTERNAL,
            details: `Invalid ${GRPC_TIMEOUT_HEADER} value "${timeoutHeader}"`,
            metadata: null
          };
          process.nextTick(() => {
            this.sendStatus(status2);
          });
          return;
        }
        const timeout = +match[1] * deadlineUnitsToMs[match[2]] | 0;
        const now = /* @__PURE__ */ new Date();
        this.deadline = now.setMilliseconds(now.getMilliseconds() + timeout);
        this.deadlineTimer = setTimeout(() => {
          const status2 = {
            code: constants_1.Status.DEADLINE_EXCEEDED,
            details: "Deadline exceeded",
            metadata: null
          };
          this.sendStatus(status2);
        }, timeout);
      }
      checkCancelled() {
        if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) {
          this.notifyOnCancel();
          this.cancelled = true;
        }
        return this.cancelled;
      }
      notifyOnCancel() {
        if (this.cancelNotified) {
          return;
        }
        this.cancelNotified = true;
        this.cancelled = true;
        process.nextTick(() => {
          var _a;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onCancel();
        });
        if (this.deadlineTimer) {
          clearTimeout(this.deadlineTimer);
        }
        this.stream.resume();
      }
      /**
       * A server handler can start sending messages without explicitly sending
       * metadata. In that case, we need to send headers before sending any
       * messages. This function does that if necessary.
       */
      maybeSendMetadata() {
        if (!this.metadataSent) {
          this.sendMetadata(new metadata_1.Metadata());
        }
      }
      /**
       * Serialize a message to a length-delimited byte string.
       * @param value
       * @returns
       */
      serializeMessage(value) {
        const messageBuffer = this.handler.serialize(value);
        const byteLength = messageBuffer.byteLength;
        const output = Buffer.allocUnsafe(byteLength + 5);
        output.writeUInt8(0, 0);
        output.writeUInt32BE(byteLength, 1);
        messageBuffer.copy(output, 5);
        return output;
      }
      decompressMessage(message, encoding) {
        switch (encoding) {
          case "deflate":
            return inflate(message.subarray(5));
          case "gzip":
            return unzip(message.subarray(5));
          case "identity":
            return message.subarray(5);
          default:
            return Promise.reject({
              code: constants_1.Status.UNIMPLEMENTED,
              details: `Received message compressed with unsupported encoding "${encoding}"`
            });
        }
      }
      async decompressAndMaybePush(queueEntry) {
        if (queueEntry.type !== "COMPRESSED") {
          throw new Error(`Invalid queue entry type: ${queueEntry.type}`);
        }
        const compressed = queueEntry.compressedMessage.readUInt8(0) === 1;
        const compressedMessageEncoding = compressed ? this.incomingEncoding : "identity";
        const decompressedMessage = await this.decompressMessage(queueEntry.compressedMessage, compressedMessageEncoding);
        try {
          queueEntry.parsedMessage = this.handler.deserialize(decompressedMessage);
        } catch (err) {
          this.sendStatus({
            code: constants_1.Status.INTERNAL,
            details: `Error deserializing request: ${err.message}`
          });
          return;
        }
        queueEntry.type = "READABLE";
        this.maybePushNextMessage();
      }
      maybePushNextMessage() {
        if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
          this.isReadPending = false;
          const nextQueueEntry = this.readQueue.shift();
          if (nextQueueEntry.type === "READABLE") {
            this.listener.onReceiveMessage(nextQueueEntry.parsedMessage);
          } else {
            this.listener.onReceiveHalfClose();
          }
        }
      }
      handleDataFrame(data) {
        var _a;
        if (this.checkCancelled()) {
          return;
        }
        trace("Request to " + this.handler.path + " received data frame of size " + data.length);
        const rawMessages = this.decoder.write(data);
        for (const messageBytes of rawMessages) {
          this.stream.pause();
          if (this.maxReceiveMessageSize !== -1 && messageBytes.length - 5 > this.maxReceiveMessageSize) {
            this.sendStatus({
              code: constants_1.Status.RESOURCE_EXHAUSTED,
              details: `Received message larger than max (${messageBytes.length - 5} vs. ${this.maxReceiveMessageSize})`,
              metadata: null
            });
            return;
          }
          const queueEntry = {
            type: "COMPRESSED",
            compressedMessage: messageBytes,
            parsedMessage: null
          };
          this.readQueue.push(queueEntry);
          this.decompressAndMaybePush(queueEntry);
          (_a = this.callEventTracker) === null || _a === void 0 ? void 0 : _a.addMessageReceived();
        }
      }
      handleEndEvent() {
        this.readQueue.push({
          type: "HALF_CLOSE",
          compressedMessage: null,
          parsedMessage: null
        });
        this.receivedHalfClose = true;
        this.maybePushNextMessage();
      }
      start(listener) {
        trace("Request to " + this.handler.path + " start called");
        if (this.checkCancelled()) {
          return;
        }
        this.listener = listener;
        listener.onReceiveMetadata(this.metadata);
      }
      sendMetadata(metadata) {
        if (this.checkCancelled()) {
          return;
        }
        if (this.metadataSent) {
          return;
        }
        this.metadataSent = true;
        const custom = metadata ? metadata.toHttp2Headers() : null;
        const headers = Object.assign(Object.assign(Object.assign({}, defaultResponseHeaders), defaultCompressionHeaders), custom);
        this.stream.respond(headers, defaultResponseOptions);
      }
      sendMessage(message, callback) {
        if (this.checkCancelled()) {
          return;
        }
        let response;
        try {
          response = this.serializeMessage(message);
        } catch (e) {
          this.sendStatus({
            code: constants_1.Status.INTERNAL,
            details: `Error serializing response: ${(0, error_1.getErrorMessage)(e)}`,
            metadata: null
          });
          return;
        }
        if (this.maxSendMessageSize !== -1 && response.length - 5 > this.maxSendMessageSize) {
          this.sendStatus({
            code: constants_1.Status.RESOURCE_EXHAUSTED,
            details: `Sent message larger than max (${response.length} vs. ${this.maxSendMessageSize})`,
            metadata: null
          });
          return;
        }
        this.maybeSendMetadata();
        trace("Request to " + this.handler.path + " sent data frame of size " + response.length);
        this.stream.write(response, (error) => {
          var _a;
          if (error) {
            this.sendStatus({
              code: constants_1.Status.INTERNAL,
              details: `Error writing message: ${(0, error_1.getErrorMessage)(error)}`,
              metadata: null
            });
            return;
          }
          (_a = this.callEventTracker) === null || _a === void 0 ? void 0 : _a.addMessageSent();
          callback();
        });
      }
      sendStatus(status2) {
        var _a, _b;
        if (this.checkCancelled()) {
          return;
        }
        this.notifyOnCancel();
        trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " ended with status code: " + constants_1.Status[status2.code] + " details: " + status2.details);
        if (this.stream.headersSent) {
          if (!this.wantTrailers) {
            this.wantTrailers = true;
            this.stream.once("wantTrailers", () => {
              var _a2;
              if (this.callEventTracker && !this.streamEnded) {
                this.streamEnded = true;
                this.callEventTracker.onStreamEnd(true);
                this.callEventTracker.onCallEnd(status2);
              }
              const trailersToSend = Object.assign({ [GRPC_STATUS_HEADER]: status2.code, [GRPC_MESSAGE_HEADER]: encodeURI(status2.details) }, (_a2 = status2.metadata) === null || _a2 === void 0 ? void 0 : _a2.toHttp2Headers());
              this.stream.sendTrailers(trailersToSend);
            });
            this.stream.end();
          }
        } else {
          if (this.callEventTracker && !this.streamEnded) {
            this.streamEnded = true;
            this.callEventTracker.onStreamEnd(true);
            this.callEventTracker.onCallEnd(status2);
          }
          const trailersToSend = Object.assign(Object.assign({ [GRPC_STATUS_HEADER]: status2.code, [GRPC_MESSAGE_HEADER]: encodeURI(status2.details) }, defaultResponseHeaders), (_b = status2.metadata) === null || _b === void 0 ? void 0 : _b.toHttp2Headers());
          this.stream.respond(trailersToSend, { endStream: true });
        }
      }
      startRead() {
        trace("Request to " + this.handler.path + " startRead called");
        if (this.checkCancelled()) {
          return;
        }
        this.isReadPending = true;
        if (this.readQueue.length === 0) {
          if (!this.receivedHalfClose) {
            this.stream.resume();
          }
        } else {
          this.maybePushNextMessage();
        }
      }
      getPeer() {
        var _a;
        const socket = (_a = this.stream.session) === null || _a === void 0 ? void 0 : _a.socket;
        if (socket === null || socket === void 0 ? void 0 : socket.remoteAddress) {
          if (socket.remotePort) {
            return `${socket.remoteAddress}:${socket.remotePort}`;
          } else {
            return socket.remoteAddress;
          }
        } else {
          return "unknown";
        }
      }
      getDeadline() {
        return this.deadline;
      }
    };
    exports2.BaseServerInterceptingCall = BaseServerInterceptingCall;
    function getServerInterceptingCall(interceptors, stream, headers, callEventTracker, handler, options) {
      const methodDefinition = {
        path: handler.path,
        requestStream: handler.type === "clientStream" || handler.type === "bidi",
        responseStream: handler.type === "serverStream" || handler.type === "bidi",
        requestDeserialize: handler.deserialize,
        responseSerialize: handler.serialize
      };
      const baseCall = new BaseServerInterceptingCall(stream, headers, callEventTracker, handler, options);
      return interceptors.reduce((call, interceptor) => {
        return interceptor(methodDefinition, call);
      }, baseCall);
    }
    exports2.getServerInterceptingCall = getServerInterceptingCall;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server.js
var require_server = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/server.js"(exports2) {
    "use strict";
    var __runInitializers = exports2 && exports2.__runInitializers || function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
    };
    var __esDecorate = exports2 && exports2.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== void 0 && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === void 0)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Server = void 0;
    var http2 = require("http2");
    var util = require("util");
    var constants_1 = require_constants();
    var server_call_1 = require_server_call();
    var server_credentials_1 = require_server_credentials();
    var resolver_1 = require_resolver();
    var logging = require_logging();
    var subchannel_address_1 = require_subchannel_address();
    var uri_parser_1 = require_uri_parser();
    var channelz_1 = require_channelz();
    var server_interceptors_1 = require_server_interceptors();
    var UNLIMITED_CONNECTION_AGE_MS = ~(1 << 31);
    var KEEPALIVE_MAX_TIME_MS = ~(1 << 31);
    var KEEPALIVE_TIMEOUT_MS = 2e4;
    var { HTTP2_HEADER_PATH } = http2.constants;
    var TRACER_NAME = "server";
    function noop() {
    }
    function deprecate(message) {
      return function(target, context) {
        return util.deprecate(target, message);
      };
    }
    function getUnimplementedStatusResponse(methodName) {
      return {
        code: constants_1.Status.UNIMPLEMENTED,
        details: `The server does not implement the method ${methodName}`
      };
    }
    function getDefaultHandler(handlerType, methodName) {
      const unimplementedStatusResponse = getUnimplementedStatusResponse(methodName);
      switch (handlerType) {
        case "unary":
          return (call, callback) => {
            callback(unimplementedStatusResponse, null);
          };
        case "clientStream":
          return (call, callback) => {
            callback(unimplementedStatusResponse, null);
          };
        case "serverStream":
          return (call) => {
            call.emit("error", unimplementedStatusResponse);
          };
        case "bidi":
          return (call) => {
            call.emit("error", unimplementedStatusResponse);
          };
        default:
          throw new Error(`Invalid handlerType ${handlerType}`);
      }
    }
    var Server = (() => {
      var _a;
      let _instanceExtraInitializers = [];
      let _start_decorators;
      return _a = class Server {
        constructor(options) {
          var _b, _c, _d, _e, _f;
          this.boundPorts = (__runInitializers(this, _instanceExtraInitializers), /* @__PURE__ */ new Map());
          this.http2Servers = /* @__PURE__ */ new Map();
          this.handlers = /* @__PURE__ */ new Map();
          this.sessions = /* @__PURE__ */ new Map();
          this.started = false;
          this.shutdown = false;
          this.serverAddressString = "null";
          this.channelzEnabled = true;
          this.channelzTrace = new channelz_1.ChannelzTrace();
          this.callTracker = new channelz_1.ChannelzCallTracker();
          this.listenerChildrenTracker = new channelz_1.ChannelzChildrenTracker();
          this.sessionChildrenTracker = new channelz_1.ChannelzChildrenTracker();
          this.options = options !== null && options !== void 0 ? options : {};
          if (this.options["grpc.enable_channelz"] === 0) {
            this.channelzEnabled = false;
          }
          this.channelzRef = (0, channelz_1.registerChannelzServer)(() => this.getChannelzInfo(), this.channelzEnabled);
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Server created");
          }
          this.maxConnectionAgeMs = (_b = this.options["grpc.max_connection_age_ms"]) !== null && _b !== void 0 ? _b : UNLIMITED_CONNECTION_AGE_MS;
          this.maxConnectionAgeGraceMs = (_c = this.options["grpc.max_connection_age_grace_ms"]) !== null && _c !== void 0 ? _c : UNLIMITED_CONNECTION_AGE_MS;
          this.keepaliveTimeMs = (_d = this.options["grpc.keepalive_time_ms"]) !== null && _d !== void 0 ? _d : KEEPALIVE_MAX_TIME_MS;
          this.keepaliveTimeoutMs = (_e = this.options["grpc.keepalive_timeout_ms"]) !== null && _e !== void 0 ? _e : KEEPALIVE_TIMEOUT_MS;
          this.commonServerOptions = {
            maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
          };
          if ("grpc-node.max_session_memory" in this.options) {
            this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
          } else {
            this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
          }
          if ("grpc.max_concurrent_streams" in this.options) {
            this.commonServerOptions.settings = {
              maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
            };
          }
          this.interceptors = (_f = this.options.interceptors) !== null && _f !== void 0 ? _f : [];
          this.trace("Server constructed");
        }
        getChannelzInfo() {
          return {
            trace: this.channelzTrace,
            callTracker: this.callTracker,
            listenerChildren: this.listenerChildrenTracker.getChildLists(),
            sessionChildren: this.sessionChildrenTracker.getChildLists()
          };
        }
        getChannelzSessionInfoGetter(session) {
          return () => {
            var _b, _c, _d;
            const sessionInfo = this.sessions.get(session);
            const sessionSocket = session.socket;
            const remoteAddress = sessionSocket.remoteAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
            const localAddress = sessionSocket.localAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.localAddress, sessionSocket.localPort) : null;
            let tlsInfo;
            if (session.encrypted) {
              const tlsSocket = sessionSocket;
              const cipherInfo = tlsSocket.getCipher();
              const certificate = tlsSocket.getCertificate();
              const peerCertificate = tlsSocket.getPeerCertificate();
              tlsInfo = {
                cipherSuiteStandardName: (_b = cipherInfo.standardName) !== null && _b !== void 0 ? _b : null,
                cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
                localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
                remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
              };
            } else {
              tlsInfo = null;
            }
            const socketInfo = {
              remoteAddress,
              localAddress,
              security: tlsInfo,
              remoteName: null,
              streamsStarted: sessionInfo.streamTracker.callsStarted,
              streamsSucceeded: sessionInfo.streamTracker.callsSucceeded,
              streamsFailed: sessionInfo.streamTracker.callsFailed,
              messagesSent: sessionInfo.messagesSent,
              messagesReceived: sessionInfo.messagesReceived,
              keepAlivesSent: 0,
              lastLocalStreamCreatedTimestamp: null,
              lastRemoteStreamCreatedTimestamp: sessionInfo.streamTracker.lastCallStartedTimestamp,
              lastMessageSentTimestamp: sessionInfo.lastMessageSentTimestamp,
              lastMessageReceivedTimestamp: sessionInfo.lastMessageReceivedTimestamp,
              localFlowControlWindow: (_c = session.state.localWindowSize) !== null && _c !== void 0 ? _c : null,
              remoteFlowControlWindow: (_d = session.state.remoteWindowSize) !== null && _d !== void 0 ? _d : null
            };
            return socketInfo;
          };
        }
        trace(text) {
          logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + text);
        }
        addProtoService() {
          throw new Error("Not implemented. Use addService() instead");
        }
        addService(service, implementation) {
          if (service === null || typeof service !== "object" || implementation === null || typeof implementation !== "object") {
            throw new Error("addService() requires two objects as arguments");
          }
          const serviceKeys = Object.keys(service);
          if (serviceKeys.length === 0) {
            throw new Error("Cannot add an empty service to a server");
          }
          serviceKeys.forEach((name) => {
            const attrs = service[name];
            let methodType;
            if (attrs.requestStream) {
              if (attrs.responseStream) {
                methodType = "bidi";
              } else {
                methodType = "clientStream";
              }
            } else {
              if (attrs.responseStream) {
                methodType = "serverStream";
              } else {
                methodType = "unary";
              }
            }
            let implFn = implementation[name];
            let impl;
            if (implFn === void 0 && typeof attrs.originalName === "string") {
              implFn = implementation[attrs.originalName];
            }
            if (implFn !== void 0) {
              impl = implFn.bind(implementation);
            } else {
              impl = getDefaultHandler(methodType, name);
            }
            const success = this.register(attrs.path, impl, attrs.responseSerialize, attrs.requestDeserialize, methodType);
            if (success === false) {
              throw new Error(`Method handler for ${attrs.path} already provided.`);
            }
          });
        }
        removeService(service) {
          if (service === null || typeof service !== "object") {
            throw new Error("removeService() requires object as argument");
          }
          const serviceKeys = Object.keys(service);
          serviceKeys.forEach((name) => {
            const attrs = service[name];
            this.unregister(attrs.path);
          });
        }
        bind(port, creds) {
          throw new Error("Not implemented. Use bindAsync() instead");
        }
        registerListenerToChannelz(boundAddress) {
          return (0, channelz_1.registerChannelzSocket)((0, subchannel_address_1.subchannelAddressToString)(boundAddress), () => {
            return {
              localAddress: boundAddress,
              remoteAddress: null,
              security: null,
              remoteName: null,
              streamsStarted: 0,
              streamsSucceeded: 0,
              streamsFailed: 0,
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastLocalStreamCreatedTimestamp: null,
              lastRemoteStreamCreatedTimestamp: null,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null,
              localFlowControlWindow: null,
              remoteFlowControlWindow: null
            };
          }, this.channelzEnabled);
        }
        createHttp2Server(credentials2) {
          let http2Server;
          if (credentials2._isSecure()) {
            const secureServerOptions = Object.assign(this.commonServerOptions, credentials2._getSettings());
            secureServerOptions.enableTrace = this.options["grpc-node.tls_enable_trace"] === 1;
            http2Server = http2.createSecureServer(secureServerOptions);
            http2Server.on("secureConnection", (socket) => {
              socket.on("error", (e) => {
                this.trace("An incoming TLS connection closed with error: " + e.message);
              });
            });
          } else {
            http2Server = http2.createServer(this.commonServerOptions);
          }
          http2Server.setTimeout(0, noop);
          this._setupHandlers(http2Server);
          return http2Server;
        }
        bindOneAddress(address, boundPortObject) {
          this.trace("Attempting to bind " + (0, subchannel_address_1.subchannelAddressToString)(address));
          const http2Server = this.createHttp2Server(boundPortObject.credentials);
          return new Promise((resolve, reject) => {
            const onError = (err) => {
              this.trace("Failed to bind " + (0, subchannel_address_1.subchannelAddressToString)(address) + " with error " + err.message);
              resolve({
                port: "port" in address ? address.port : 1,
                error: err.message
              });
            };
            http2Server.once("error", onError);
            http2Server.listen(address, () => {
              const boundAddress = http2Server.address();
              let boundSubchannelAddress;
              if (typeof boundAddress === "string") {
                boundSubchannelAddress = {
                  path: boundAddress
                };
              } else {
                boundSubchannelAddress = {
                  host: boundAddress.address,
                  port: boundAddress.port
                };
              }
              const channelzRef = this.registerListenerToChannelz(boundSubchannelAddress);
              if (this.channelzEnabled) {
                this.listenerChildrenTracker.refChild(channelzRef);
              }
              this.http2Servers.set(http2Server, {
                channelzRef,
                sessions: /* @__PURE__ */ new Set()
              });
              boundPortObject.listeningServers.add(http2Server);
              this.trace("Successfully bound " + (0, subchannel_address_1.subchannelAddressToString)(boundSubchannelAddress));
              resolve({
                port: "port" in boundSubchannelAddress ? boundSubchannelAddress.port : 1
              });
              http2Server.removeListener("error", onError);
            });
          });
        }
        async bindManyPorts(addressList, boundPortObject) {
          if (addressList.length === 0) {
            return {
              count: 0,
              port: 0,
              errors: []
            };
          }
          if ((0, subchannel_address_1.isTcpSubchannelAddress)(addressList[0]) && addressList[0].port === 0) {
            const firstAddressResult = await this.bindOneAddress(addressList[0], boundPortObject);
            if (firstAddressResult.error) {
              const restAddressResult = await this.bindManyPorts(addressList.slice(1), boundPortObject);
              return Object.assign(Object.assign({}, restAddressResult), { errors: [firstAddressResult.error, ...restAddressResult.errors] });
            } else {
              const restAddresses = addressList.slice(1).map((address) => (0, subchannel_address_1.isTcpSubchannelAddress)(address) ? { host: address.host, port: firstAddressResult.port } : address);
              const restAddressResult = await Promise.all(restAddresses.map((address) => this.bindOneAddress(address, boundPortObject)));
              const allResults = [firstAddressResult, ...restAddressResult];
              return {
                count: allResults.filter((result) => result.error === void 0).length,
                port: firstAddressResult.port,
                errors: allResults.filter((result) => result.error).map((result) => result.error)
              };
            }
          } else {
            const allResults = await Promise.all(addressList.map((address) => this.bindOneAddress(address, boundPortObject)));
            return {
              count: allResults.filter((result) => result.error === void 0).length,
              port: allResults[0].port,
              errors: allResults.filter((result) => result.error).map((result) => result.error)
            };
          }
        }
        async bindAddressList(addressList, boundPortObject) {
          let bindResult;
          try {
            bindResult = await this.bindManyPorts(addressList, boundPortObject);
          } catch (error) {
            throw error;
          }
          if (bindResult.count > 0) {
            if (bindResult.count < addressList.length) {
              logging.log(constants_1.LogVerbosity.INFO, `WARNING Only ${bindResult.count} addresses added out of total ${addressList.length} resolved`);
            }
            return bindResult.port;
          } else {
            const errorString = `No address added out of total ${addressList.length} resolved`;
            logging.log(constants_1.LogVerbosity.ERROR, errorString);
            throw new Error(`${errorString} errors: [${bindResult.errors.join(",")}]`);
          }
        }
        resolvePort(port) {
          return new Promise((resolve, reject) => {
            const resolverListener = {
              onSuccessfulResolution: (endpointList, serviceConfig, serviceConfigError) => {
                resolverListener.onSuccessfulResolution = () => {
                };
                const addressList = [].concat(...endpointList.map((endpoint) => endpoint.addresses));
                if (addressList.length === 0) {
                  reject(new Error(`No addresses resolved for port ${port}`));
                  return;
                }
                resolve(addressList);
              },
              onError: (error) => {
                reject(new Error(error.details));
              }
            };
            const resolver = (0, resolver_1.createResolver)(port, resolverListener, this.options);
            resolver.updateResolution();
          });
        }
        async bindPort(port, boundPortObject) {
          const addressList = await this.resolvePort(port);
          if (boundPortObject.cancelled) {
            this.completeUnbind(boundPortObject);
            throw new Error("bindAsync operation cancelled by unbind call");
          }
          const portNumber = await this.bindAddressList(addressList, boundPortObject);
          if (boundPortObject.cancelled) {
            this.completeUnbind(boundPortObject);
            throw new Error("bindAsync operation cancelled by unbind call");
          }
          return portNumber;
        }
        normalizePort(port) {
          const initialPortUri = (0, uri_parser_1.parseUri)(port);
          if (initialPortUri === null) {
            throw new Error(`Could not parse port "${port}"`);
          }
          const portUri = (0, resolver_1.mapUriDefaultScheme)(initialPortUri);
          if (portUri === null) {
            throw new Error(`Could not get a default scheme for port "${port}"`);
          }
          return portUri;
        }
        bindAsync(port, creds, callback) {
          if (this.shutdown) {
            throw new Error("bindAsync called after shutdown");
          }
          if (typeof port !== "string") {
            throw new TypeError("port must be a string");
          }
          if (creds === null || !(creds instanceof server_credentials_1.ServerCredentials)) {
            throw new TypeError("creds must be a ServerCredentials object");
          }
          if (typeof callback !== "function") {
            throw new TypeError("callback must be a function");
          }
          this.trace("bindAsync port=" + port);
          const portUri = this.normalizePort(port);
          const deferredCallback = (error, port2) => {
            process.nextTick(() => callback(error, port2));
          };
          let boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
          if (boundPortObject) {
            if (!creds._equals(boundPortObject.credentials)) {
              deferredCallback(new Error(`${port} already bound with incompatible credentials`), 0);
              return;
            }
            boundPortObject.cancelled = false;
            if (boundPortObject.completionPromise) {
              boundPortObject.completionPromise.then((portNum) => callback(null, portNum), (error) => callback(error, 0));
            } else {
              deferredCallback(null, boundPortObject.portNumber);
            }
            return;
          }
          boundPortObject = {
            mapKey: (0, uri_parser_1.uriToString)(portUri),
            originalUri: portUri,
            completionPromise: null,
            cancelled: false,
            portNumber: 0,
            credentials: creds,
            listeningServers: /* @__PURE__ */ new Set()
          };
          const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
          const completionPromise = this.bindPort(portUri, boundPortObject);
          boundPortObject.completionPromise = completionPromise;
          if ((splitPort === null || splitPort === void 0 ? void 0 : splitPort.port) === 0) {
            completionPromise.then((portNum) => {
              const finalUri = {
                scheme: portUri.scheme,
                authority: portUri.authority,
                path: (0, uri_parser_1.combineHostPort)({ host: splitPort.host, port: portNum })
              };
              boundPortObject.mapKey = (0, uri_parser_1.uriToString)(finalUri);
              boundPortObject.completionPromise = null;
              boundPortObject.portNumber = portNum;
              this.boundPorts.set(boundPortObject.mapKey, boundPortObject);
              callback(null, portNum);
            }, (error) => {
              callback(error, 0);
            });
          } else {
            this.boundPorts.set(boundPortObject.mapKey, boundPortObject);
            completionPromise.then((portNum) => {
              boundPortObject.completionPromise = null;
              boundPortObject.portNumber = portNum;
              callback(null, portNum);
            }, (error) => {
              callback(error, 0);
            });
          }
        }
        closeServer(server, callback) {
          this.trace("Closing server with address " + JSON.stringify(server.address()));
          const serverInfo = this.http2Servers.get(server);
          server.close(() => {
            if (this.channelzEnabled && serverInfo) {
              this.listenerChildrenTracker.unrefChild(serverInfo.channelzRef);
              (0, channelz_1.unregisterChannelzRef)(serverInfo.channelzRef);
            }
            this.http2Servers.delete(server);
            callback === null || callback === void 0 ? void 0 : callback();
          });
        }
        closeSession(session, callback) {
          var _b;
          this.trace("Closing session initiated by " + ((_b = session.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress));
          const sessionInfo = this.sessions.get(session);
          const closeCallback = () => {
            if (this.channelzEnabled && sessionInfo) {
              this.sessionChildrenTracker.unrefChild(sessionInfo.ref);
              (0, channelz_1.unregisterChannelzRef)(sessionInfo.ref);
            }
            this.sessions.delete(session);
            callback === null || callback === void 0 ? void 0 : callback();
          };
          if (session.closed) {
            process.nextTick(closeCallback);
          } else {
            session.close(closeCallback);
          }
        }
        completeUnbind(boundPortObject) {
          for (const server of boundPortObject.listeningServers) {
            const serverInfo = this.http2Servers.get(server);
            this.closeServer(server, () => {
              boundPortObject.listeningServers.delete(server);
            });
            if (serverInfo) {
              for (const session of serverInfo.sessions) {
                this.closeSession(session);
              }
            }
          }
          this.boundPorts.delete(boundPortObject.mapKey);
        }
        /**
         * Unbind a previously bound port, or cancel an in-progress bindAsync
         * operation. If port 0 was bound, only the actual bound port can be
         * unbound. For example, if bindAsync was called with "localhost:0" and the
         * bound port result was 54321, it can be unbound as "localhost:54321".
         * @param port
         */
        unbind(port) {
          this.trace("unbind port=" + port);
          const portUri = this.normalizePort(port);
          const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
          if ((splitPort === null || splitPort === void 0 ? void 0 : splitPort.port) === 0) {
            throw new Error("Cannot unbind port 0");
          }
          const boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
          if (boundPortObject) {
            this.trace("unbinding " + boundPortObject.mapKey + " originally bound as " + (0, uri_parser_1.uriToString)(boundPortObject.originalUri));
            if (boundPortObject.completionPromise) {
              boundPortObject.cancelled = true;
            } else {
              this.completeUnbind(boundPortObject);
            }
          }
        }
        /**
         * Gracefully close all connections associated with a previously bound port.
         * After the grace time, forcefully close all remaining open connections.
         *
         * If port 0 was bound, only the actual bound port can be
         * drained. For example, if bindAsync was called with "localhost:0" and the
         * bound port result was 54321, it can be drained as "localhost:54321".
         * @param port
         * @param graceTimeMs
         * @returns
         */
        drain(port, graceTimeMs) {
          var _b, _c;
          this.trace("drain port=" + port + " graceTimeMs=" + graceTimeMs);
          const portUri = this.normalizePort(port);
          const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
          if ((splitPort === null || splitPort === void 0 ? void 0 : splitPort.port) === 0) {
            throw new Error("Cannot drain port 0");
          }
          const boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
          if (!boundPortObject) {
            return;
          }
          const allSessions = /* @__PURE__ */ new Set();
          for (const http2Server of boundPortObject.listeningServers) {
            const serverEntry = this.http2Servers.get(http2Server);
            if (!serverEntry) {
              continue;
            }
            for (const session of serverEntry.sessions) {
              allSessions.add(session);
              this.closeSession(session, () => {
                allSessions.delete(session);
              });
            }
          }
          (_c = (_b = setTimeout(() => {
            for (const session of allSessions) {
              session.destroy(http2.constants.NGHTTP2_CANCEL);
            }
          }, graceTimeMs)).unref) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
        forceShutdown() {
          for (const boundPortObject of this.boundPorts.values()) {
            boundPortObject.cancelled = true;
          }
          this.boundPorts.clear();
          for (const server of this.http2Servers.keys()) {
            this.closeServer(server);
          }
          this.sessions.forEach((channelzInfo, session) => {
            this.closeSession(session);
            session.destroy(http2.constants.NGHTTP2_CANCEL);
          });
          this.sessions.clear();
          if (this.channelzEnabled) {
            (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
          }
          this.shutdown = true;
        }
        register(name, handler, serialize, deserialize, type) {
          if (this.handlers.has(name)) {
            return false;
          }
          this.handlers.set(name, {
            func: handler,
            serialize,
            deserialize,
            type,
            path: name
          });
          return true;
        }
        unregister(name) {
          return this.handlers.delete(name);
        }
        /**
         * @deprecated No longer needed as of version 1.10.x
         */
        start() {
          if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every((server) => !server.listening)) {
            throw new Error("server must be bound in order to start");
          }
          if (this.started === true) {
            throw new Error("server is already started");
          }
          this.started = true;
        }
        tryShutdown(callback) {
          var _b;
          const wrappedCallback = (error) => {
            if (this.channelzEnabled) {
              (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
            }
            callback(error);
          };
          let pendingChecks = 0;
          function maybeCallback() {
            pendingChecks--;
            if (pendingChecks === 0) {
              wrappedCallback();
            }
          }
          this.shutdown = true;
          for (const server of this.http2Servers.keys()) {
            pendingChecks++;
            const serverString = this.http2Servers.get(server).channelzRef.name;
            this.trace("Waiting for server " + serverString + " to close");
            this.closeServer(server, () => {
              this.trace("Server " + serverString + " finished closing");
              maybeCallback();
            });
          }
          for (const session of this.sessions.keys()) {
            pendingChecks++;
            const sessionString = (_b = session.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress;
            this.trace("Waiting for session " + sessionString + " to close");
            this.closeSession(session, () => {
              this.trace("Session " + sessionString + " finished closing");
              maybeCallback();
            });
          }
          if (pendingChecks === 0) {
            wrappedCallback();
          }
        }
        addHttp2Port() {
          throw new Error("Not yet implemented");
        }
        /**
         * Get the channelz reference object for this server. The returned value is
         * garbage if channelz is disabled for this server.
         * @returns
         */
        getChannelzRef() {
          return this.channelzRef;
        }
        _verifyContentType(stream, headers) {
          const contentType = headers[http2.constants.HTTP2_HEADER_CONTENT_TYPE];
          if (typeof contentType !== "string" || !contentType.startsWith("application/grpc")) {
            stream.respond({
              [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
            }, { endStream: true });
            return false;
          }
          return true;
        }
        _retrieveHandler(path) {
          this.trace("Received call to method " + path + " at address " + this.serverAddressString);
          const handler = this.handlers.get(path);
          if (handler === void 0) {
            this.trace("No handler registered for method " + path + ". Sending UNIMPLEMENTED status.");
            return null;
          }
          return handler;
        }
        _respondWithError(err, stream, channelzSessionInfo = null) {
          var _b, _c;
          const trailersToSend = Object.assign({ "grpc-status": (_b = err.code) !== null && _b !== void 0 ? _b : constants_1.Status.INTERNAL, "grpc-message": err.details, [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK, [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto" }, (_c = err.metadata) === null || _c === void 0 ? void 0 : _c.toHttp2Headers());
          stream.respond(trailersToSend, { endStream: true });
          if (this.channelzEnabled) {
            this.callTracker.addCallFailed();
            channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
          }
        }
        _channelzHandler(stream, headers) {
          const channelzSessionInfo = this.sessions.get(stream.session);
          this.callTracker.addCallStarted();
          channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallStarted();
          if (!this._verifyContentType(stream, headers)) {
            this.callTracker.addCallFailed();
            channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
            return;
          }
          const path = headers[HTTP2_HEADER_PATH];
          const handler = this._retrieveHandler(path);
          if (!handler) {
            this._respondWithError(getUnimplementedStatusResponse(path), stream, channelzSessionInfo);
            return;
          }
          let callEventTracker = {
            addMessageSent: () => {
              if (channelzSessionInfo) {
                channelzSessionInfo.messagesSent += 1;
                channelzSessionInfo.lastMessageSentTimestamp = /* @__PURE__ */ new Date();
              }
            },
            addMessageReceived: () => {
              if (channelzSessionInfo) {
                channelzSessionInfo.messagesReceived += 1;
                channelzSessionInfo.lastMessageReceivedTimestamp = /* @__PURE__ */ new Date();
              }
            },
            onCallEnd: (status2) => {
              if (status2.code === constants_1.Status.OK) {
                this.callTracker.addCallSucceeded();
              } else {
                this.callTracker.addCallFailed();
              }
            },
            onStreamEnd: (success) => {
              if (channelzSessionInfo) {
                if (success) {
                  channelzSessionInfo.streamTracker.addCallSucceeded();
                } else {
                  channelzSessionInfo.streamTracker.addCallFailed();
                }
              }
            }
          };
          const call = (0, server_interceptors_1.getServerInterceptingCall)(this.interceptors, stream, headers, callEventTracker, handler, this.options);
          if (!this._runHandlerForCall(call, handler)) {
            this.callTracker.addCallFailed();
            channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
            call.sendStatus({
              code: constants_1.Status.INTERNAL,
              details: `Unknown handler type: ${handler.type}`
            });
          }
        }
        _streamHandler(stream, headers) {
          if (this._verifyContentType(stream, headers) !== true) {
            return;
          }
          const path = headers[HTTP2_HEADER_PATH];
          const handler = this._retrieveHandler(path);
          if (!handler) {
            this._respondWithError(getUnimplementedStatusResponse(path), stream, null);
            return;
          }
          const call = (0, server_interceptors_1.getServerInterceptingCall)(this.interceptors, stream, headers, null, handler, this.options);
          if (!this._runHandlerForCall(call, handler)) {
            call.sendStatus({
              code: constants_1.Status.INTERNAL,
              details: `Unknown handler type: ${handler.type}`
            });
          }
        }
        _runHandlerForCall(call, handler) {
          const { type } = handler;
          if (type === "unary") {
            handleUnary(call, handler);
          } else if (type === "clientStream") {
            handleClientStreaming(call, handler);
          } else if (type === "serverStream") {
            handleServerStreaming(call, handler);
          } else if (type === "bidi") {
            handleBidiStreaming(call, handler);
          } else {
            return false;
          }
          return true;
        }
        _setupHandlers(http2Server) {
          if (http2Server === null) {
            return;
          }
          const serverAddress = http2Server.address();
          let serverAddressString = "null";
          if (serverAddress) {
            if (typeof serverAddress === "string") {
              serverAddressString = serverAddress;
            } else {
              serverAddressString = serverAddress.address + ":" + serverAddress.port;
            }
          }
          this.serverAddressString = serverAddressString;
          const handler = this.channelzEnabled ? this._channelzHandler : this._streamHandler;
          http2Server.on("stream", handler.bind(this));
          http2Server.on("session", (session) => {
            var _b, _c, _d, _e, _f, _g;
            const channelzRef = (0, channelz_1.registerChannelzSocket)((_b = session.socket.remoteAddress) !== null && _b !== void 0 ? _b : "unknown", this.getChannelzSessionInfoGetter(session), this.channelzEnabled);
            const channelzSessionInfo = {
              ref: channelzRef,
              streamTracker: new channelz_1.ChannelzCallTracker(),
              messagesSent: 0,
              messagesReceived: 0,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null
            };
            (_c = this.http2Servers.get(http2Server)) === null || _c === void 0 ? void 0 : _c.sessions.add(session);
            this.sessions.set(session, channelzSessionInfo);
            const clientAddress = session.socket.remoteAddress;
            if (this.channelzEnabled) {
              this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + clientAddress);
              this.sessionChildrenTracker.refChild(channelzRef);
            }
            let connectionAgeTimer = null;
            let connectionAgeGraceTimer = null;
            let sessionClosedByServer = false;
            if (this.maxConnectionAgeMs !== UNLIMITED_CONNECTION_AGE_MS) {
              const jitterMagnitude = this.maxConnectionAgeMs / 10;
              const jitter = Math.random() * jitterMagnitude * 2 - jitterMagnitude;
              connectionAgeTimer = (_e = (_d = setTimeout(() => {
                var _b2, _c2;
                sessionClosedByServer = true;
                if (this.channelzEnabled) {
                  this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + clientAddress);
                }
                try {
                  session.goaway(http2.constants.NGHTTP2_NO_ERROR, ~(1 << 31), Buffer.from("max_age"));
                } catch (e) {
                  session.destroy();
                  return;
                }
                session.close();
                if (this.maxConnectionAgeGraceMs !== UNLIMITED_CONNECTION_AGE_MS) {
                  connectionAgeGraceTimer = (_c2 = (_b2 = setTimeout(() => {
                    session.destroy();
                  }, this.maxConnectionAgeGraceMs)).unref) === null || _c2 === void 0 ? void 0 : _c2.call(_b2);
                }
              }, this.maxConnectionAgeMs + jitter)).unref) === null || _e === void 0 ? void 0 : _e.call(_d);
            }
            const keeapliveTimeTimer = (_g = (_f = setInterval(() => {
              var _b2, _c2;
              const timeoutTImer = (_c2 = (_b2 = setTimeout(() => {
                sessionClosedByServer = true;
                if (this.channelzEnabled) {
                  this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + clientAddress);
                }
                session.close();
              }, this.keepaliveTimeoutMs)).unref) === null || _c2 === void 0 ? void 0 : _c2.call(_b2);
              try {
                session.ping((err, duration, payload) => {
                  clearTimeout(timeoutTImer);
                });
              } catch (e) {
                session.destroy();
              }
            }, this.keepaliveTimeMs)).unref) === null || _g === void 0 ? void 0 : _g.call(_f);
            session.on("close", () => {
              var _b2;
              if (this.channelzEnabled) {
                if (!sessionClosedByServer) {
                  this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + clientAddress);
                }
                this.sessionChildrenTracker.unrefChild(channelzRef);
                (0, channelz_1.unregisterChannelzRef)(channelzRef);
              }
              if (connectionAgeTimer) {
                clearTimeout(connectionAgeTimer);
              }
              if (connectionAgeGraceTimer) {
                clearTimeout(connectionAgeGraceTimer);
              }
              if (keeapliveTimeTimer) {
                clearTimeout(keeapliveTimeTimer);
              }
              (_b2 = this.http2Servers.get(http2Server)) === null || _b2 === void 0 ? void 0 : _b2.sessions.delete(session);
              this.sessions.delete(session);
            });
          });
        }
      }, (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
        _start_decorators = [deprecate("Calling start() is no longer necessary. It can be safely omitted.")];
        __esDecorate(_a, null, _start_decorators, { kind: "method", name: "start", static: false, private: false, access: { has: (obj) => "start" in obj, get: (obj) => obj.start }, metadata: _metadata }, null, _instanceExtraInitializers);
        if (_metadata)
          Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      })(), _a;
    })();
    exports2.Server = Server;
    async function handleUnary(call, handler) {
      let stream;
      function respond(err, value, trailer, flags) {
        if (err) {
          call.sendStatus((0, server_call_1.serverErrorToStatus)(err, trailer));
          return;
        }
        call.sendMessage(value, () => {
          call.sendStatus({
            code: constants_1.Status.OK,
            details: "OK",
            metadata: trailer !== null && trailer !== void 0 ? trailer : null
          });
        });
      }
      let requestMetadata;
      let requestMessage = null;
      call.start({
        onReceiveMetadata(metadata) {
          requestMetadata = metadata;
          call.startRead();
        },
        onReceiveMessage(message) {
          if (requestMessage) {
            call.sendStatus({
              code: constants_1.Status.UNIMPLEMENTED,
              details: `Received a second request message for server streaming method ${handler.path}`,
              metadata: null
            });
            return;
          }
          requestMessage = message;
          call.startRead();
        },
        onReceiveHalfClose() {
          if (!requestMessage) {
            call.sendStatus({
              code: constants_1.Status.UNIMPLEMENTED,
              details: `Received no request message for server streaming method ${handler.path}`,
              metadata: null
            });
            return;
          }
          stream = new server_call_1.ServerWritableStreamImpl(handler.path, call, requestMetadata, requestMessage);
          try {
            handler.func(stream, respond);
          } catch (err) {
            call.sendStatus({
              code: constants_1.Status.UNKNOWN,
              details: `Server method handler threw error ${err.message}`,
              metadata: null
            });
          }
        },
        onCancel() {
          if (stream) {
            stream.cancelled = true;
            stream.emit("cancelled", "cancelled");
          }
        }
      });
    }
    function handleClientStreaming(call, handler) {
      let stream;
      function respond(err, value, trailer, flags) {
        if (err) {
          call.sendStatus((0, server_call_1.serverErrorToStatus)(err, trailer));
          return;
        }
        call.sendMessage(value, () => {
          call.sendStatus({
            code: constants_1.Status.OK,
            details: "OK",
            metadata: trailer !== null && trailer !== void 0 ? trailer : null
          });
        });
      }
      call.start({
        onReceiveMetadata(metadata) {
          stream = new server_call_1.ServerDuplexStreamImpl(handler.path, call, metadata);
          try {
            handler.func(stream, respond);
          } catch (err) {
            call.sendStatus({
              code: constants_1.Status.UNKNOWN,
              details: `Server method handler threw error ${err.message}`,
              metadata: null
            });
          }
        },
        onReceiveMessage(message) {
          stream.push(message);
        },
        onReceiveHalfClose() {
          stream.push(null);
        },
        onCancel() {
          if (stream) {
            stream.cancelled = true;
            stream.emit("cancelled", "cancelled");
            stream.destroy();
          }
        }
      });
    }
    function handleServerStreaming(call, handler) {
      let stream;
      let requestMetadata;
      let requestMessage = null;
      call.start({
        onReceiveMetadata(metadata) {
          requestMetadata = metadata;
          call.startRead();
        },
        onReceiveMessage(message) {
          if (requestMessage) {
            call.sendStatus({
              code: constants_1.Status.UNIMPLEMENTED,
              details: `Received a second request message for server streaming method ${handler.path}`,
              metadata: null
            });
            return;
          }
          requestMessage = message;
          call.startRead();
        },
        onReceiveHalfClose() {
          if (!requestMessage) {
            call.sendStatus({
              code: constants_1.Status.UNIMPLEMENTED,
              details: `Received no request message for server streaming method ${handler.path}`,
              metadata: null
            });
            return;
          }
          stream = new server_call_1.ServerWritableStreamImpl(handler.path, call, requestMetadata, requestMessage);
          try {
            handler.func(stream);
          } catch (err) {
            call.sendStatus({
              code: constants_1.Status.UNKNOWN,
              details: `Server method handler threw error ${err.message}`,
              metadata: null
            });
          }
        },
        onCancel() {
          if (stream) {
            stream.cancelled = true;
            stream.emit("cancelled", "cancelled");
            stream.destroy();
          }
        }
      });
    }
    function handleBidiStreaming(call, handler) {
      let stream;
      call.start({
        onReceiveMetadata(metadata) {
          stream = new server_call_1.ServerDuplexStreamImpl(handler.path, call, metadata);
          try {
            handler.func(stream);
          } catch (err) {
            call.sendStatus({
              code: constants_1.Status.UNKNOWN,
              details: `Server method handler threw error ${err.message}`,
              metadata: null
            });
          }
        },
        onReceiveMessage(message) {
          stream.push(message);
        },
        onReceiveHalfClose() {
          stream.push(null);
        },
        onCancel() {
          if (stream) {
            stream.cancelled = true;
            stream.emit("cancelled", "cancelled");
            stream.destroy();
          }
        }
      });
    }
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/status-builder.js
var require_status_builder = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/status-builder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StatusBuilder = void 0;
    var StatusBuilder = class {
      constructor() {
        this.code = null;
        this.details = null;
        this.metadata = null;
      }
      /**
       * Adds a status code to the builder.
       */
      withCode(code) {
        this.code = code;
        return this;
      }
      /**
       * Adds details to the builder.
       */
      withDetails(details) {
        this.details = details;
        return this;
      }
      /**
       * Adds metadata to the builder.
       */
      withMetadata(metadata) {
        this.metadata = metadata;
        return this;
      }
      /**
       * Builds the status object.
       */
      build() {
        const status2 = {};
        if (this.code !== null) {
          status2.code = this.code;
        }
        if (this.details !== null) {
          status2.details = this.details;
        }
        if (this.metadata !== null) {
          status2.metadata = this.metadata;
        }
        return status2;
      }
    };
    exports2.StatusBuilder = StatusBuilder;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/duration.js
var require_duration = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/duration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isDuration = exports2.durationToMs = exports2.msToDuration = void 0;
    function msToDuration(millis) {
      return {
        seconds: millis / 1e3 | 0,
        nanos: millis % 1e3 * 1e6 | 0
      };
    }
    exports2.msToDuration = msToDuration;
    function durationToMs(duration) {
      return duration.seconds * 1e3 + duration.nanos / 1e6 | 0;
    }
    exports2.durationToMs = durationToMs;
    function isDuration(value) {
      return typeof value.seconds === "number" && typeof value.nanos === "number";
    }
    exports2.isDuration = isDuration;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js
var require_load_balancer_pick_first = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-pick-first.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.LeafLoadBalancer = exports2.PickFirstLoadBalancer = exports2.shuffled = exports2.PickFirstLoadBalancingConfig = void 0;
    var load_balancer_1 = require_load_balancer();
    var connectivity_state_1 = require_connectivity_state();
    var picker_1 = require_picker();
    var logging = require_logging();
    var constants_1 = require_constants();
    var subchannel_address_1 = require_subchannel_address();
    var net_1 = require("net");
    var TRACER_NAME = "pick_first";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "pick_first";
    var CONNECTION_DELAY_INTERVAL_MS = 250;
    var PickFirstLoadBalancingConfig = class _PickFirstLoadBalancingConfig {
      constructor(shuffleAddressList) {
        this.shuffleAddressList = shuffleAddressList;
      }
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      toJsonObject() {
        return {
          [TYPE_NAME]: {
            shuffleAddressList: this.shuffleAddressList
          }
        };
      }
      getShuffleAddressList() {
        return this.shuffleAddressList;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      static createFromJson(obj) {
        if ("shuffleAddressList" in obj && !(typeof obj.shuffleAddressList === "boolean")) {
          throw new Error("pick_first config field shuffleAddressList must be a boolean if provided");
        }
        return new _PickFirstLoadBalancingConfig(obj.shuffleAddressList === true);
      }
    };
    exports2.PickFirstLoadBalancingConfig = PickFirstLoadBalancingConfig;
    var PickFirstPicker = class {
      constructor(subchannel) {
        this.subchannel = subchannel;
      }
      pick(pickArgs) {
        return {
          pickResultType: picker_1.PickResultType.COMPLETE,
          subchannel: this.subchannel,
          status: null,
          onCallStarted: null,
          onCallEnded: null
        };
      }
    };
    function shuffled(list) {
      const result = list.slice();
      for (let i = result.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
      return result;
    }
    exports2.shuffled = shuffled;
    function interleaveAddressFamilies(addressList) {
      const result = [];
      const ipv6Addresses = [];
      const ipv4Addresses = [];
      const ipv6First = (0, subchannel_address_1.isTcpSubchannelAddress)(addressList[0]) && (0, net_1.isIPv6)(addressList[0].host);
      for (const address of addressList) {
        if ((0, subchannel_address_1.isTcpSubchannelAddress)(address) && (0, net_1.isIPv6)(address.host)) {
          ipv6Addresses.push(address);
        } else {
          ipv4Addresses.push(address);
        }
      }
      const firstList = ipv6First ? ipv6Addresses : ipv4Addresses;
      const secondList = ipv6First ? ipv4Addresses : ipv6Addresses;
      for (let i = 0; i < Math.max(firstList.length, secondList.length); i++) {
        if (i < firstList.length) {
          result.push(firstList[i]);
        }
        if (i < secondList.length) {
          result.push(secondList[i]);
        }
      }
      return result;
    }
    var REPORT_HEALTH_STATUS_OPTION_NAME = "grpc-node.internal.pick-first.report_health_status";
    var PickFirstLoadBalancer = class {
      /**
       * Load balancer that attempts to connect to each backend in the address list
       * in order, and picks the first one that connects, using it for every
       * request.
       * @param channelControlHelper `ChannelControlHelper` instance provided by
       *     this load balancer's owner.
       */
      constructor(channelControlHelper, options) {
        this.channelControlHelper = channelControlHelper;
        this.children = [];
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.currentSubchannelIndex = 0;
        this.currentPick = null;
        this.subchannelStateListener = (subchannel, previousState, newState, keepaliveTime, errorMessage) => {
          this.onSubchannelStateUpdate(subchannel, previousState, newState, errorMessage);
        };
        this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState();
        this.triedAllSubchannels = false;
        this.stickyTransientFailureMode = false;
        this.requestedResolutionSinceLastUpdate = false;
        this.lastError = null;
        this.latestAddressList = null;
        this.connectionDelayTimeout = setTimeout(() => {
        }, 0);
        clearTimeout(this.connectionDelayTimeout);
        this.reportHealthStatus = options[REPORT_HEALTH_STATUS_OPTION_NAME];
      }
      allChildrenHaveReportedTF() {
        return this.children.every((child) => child.hasReportedTransientFailure);
      }
      calculateAndReportNewState() {
        if (this.currentPick) {
          if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
            this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({
              details: `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`
            }));
          } else {
            this.updateState(connectivity_state_1.ConnectivityState.READY, new PickFirstPicker(this.currentPick));
          }
        } else if (this.children.length === 0) {
          this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        } else {
          if (this.stickyTransientFailureMode) {
            this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({ details: `No connection established. Last error: ${this.lastError}` }));
          } else {
            this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
          }
        }
      }
      requestReresolution() {
        this.requestedResolutionSinceLastUpdate = true;
        this.channelControlHelper.requestReresolution();
      }
      maybeEnterStickyTransientFailureMode() {
        if (!this.allChildrenHaveReportedTF()) {
          return;
        }
        if (!this.requestedResolutionSinceLastUpdate) {
          this.requestReresolution();
        }
        if (this.stickyTransientFailureMode) {
          return;
        }
        this.stickyTransientFailureMode = true;
        for (const { subchannel } of this.children) {
          subchannel.startConnecting();
        }
        this.calculateAndReportNewState();
      }
      removeCurrentPick() {
        if (this.currentPick !== null) {
          const currentPick = this.currentPick;
          this.currentPick = null;
          currentPick.unref();
          currentPick.removeConnectivityStateListener(this.subchannelStateListener);
          this.channelControlHelper.removeChannelzChild(currentPick.getChannelzRef());
          if (this.reportHealthStatus) {
            currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener);
          }
        }
      }
      onSubchannelStateUpdate(subchannel, previousState, newState, errorMessage) {
        var _a;
        if ((_a = this.currentPick) === null || _a === void 0 ? void 0 : _a.realSubchannelEquals(subchannel)) {
          if (newState !== connectivity_state_1.ConnectivityState.READY) {
            this.removeCurrentPick();
            this.calculateAndReportNewState();
            this.requestReresolution();
          }
          return;
        }
        for (const [index, child] of this.children.entries()) {
          if (subchannel.realSubchannelEquals(child.subchannel)) {
            if (newState === connectivity_state_1.ConnectivityState.READY) {
              this.pickSubchannel(child.subchannel);
            }
            if (newState === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
              child.hasReportedTransientFailure = true;
              if (errorMessage) {
                this.lastError = errorMessage;
              }
              this.maybeEnterStickyTransientFailureMode();
              if (index === this.currentSubchannelIndex) {
                this.startNextSubchannelConnecting(index + 1);
              }
            }
            child.subchannel.startConnecting();
            return;
          }
        }
      }
      startNextSubchannelConnecting(startIndex) {
        clearTimeout(this.connectionDelayTimeout);
        if (this.triedAllSubchannels) {
          return;
        }
        for (const [index, child] of this.children.entries()) {
          if (index >= startIndex) {
            const subchannelState = child.subchannel.getConnectivityState();
            if (subchannelState === connectivity_state_1.ConnectivityState.IDLE || subchannelState === connectivity_state_1.ConnectivityState.CONNECTING) {
              this.startConnecting(index);
              return;
            }
          }
        }
        this.triedAllSubchannels = true;
        this.maybeEnterStickyTransientFailureMode();
      }
      /**
       * Have a single subchannel in the `subchannels` list start connecting.
       * @param subchannelIndex The index into the `subchannels` list.
       */
      startConnecting(subchannelIndex) {
        var _a, _b;
        clearTimeout(this.connectionDelayTimeout);
        this.currentSubchannelIndex = subchannelIndex;
        if (this.children[subchannelIndex].subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.IDLE) {
          trace("Start connecting to subchannel with address " + this.children[subchannelIndex].subchannel.getAddress());
          process.nextTick(() => {
            var _a2;
            (_a2 = this.children[subchannelIndex]) === null || _a2 === void 0 ? void 0 : _a2.subchannel.startConnecting();
          });
        }
        this.connectionDelayTimeout = (_b = (_a = setTimeout(() => {
          this.startNextSubchannelConnecting(subchannelIndex + 1);
        }, CONNECTION_DELAY_INTERVAL_MS)).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
      pickSubchannel(subchannel) {
        if (this.currentPick && subchannel.realSubchannelEquals(this.currentPick)) {
          return;
        }
        trace("Pick subchannel with address " + subchannel.getAddress());
        this.stickyTransientFailureMode = false;
        this.removeCurrentPick();
        this.currentPick = subchannel;
        subchannel.ref();
        if (this.reportHealthStatus) {
          subchannel.addHealthStateWatcher(this.pickedSubchannelHealthListener);
        }
        this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
        this.resetSubchannelList();
        clearTimeout(this.connectionDelayTimeout);
        this.calculateAndReportNewState();
      }
      updateState(newState, picker) {
        trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        this.currentState = newState;
        this.channelControlHelper.updateState(newState, picker);
      }
      resetSubchannelList() {
        for (const child of this.children) {
          if (!(this.currentPick && child.subchannel.realSubchannelEquals(this.currentPick))) {
            child.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
          }
          child.subchannel.unref();
          this.channelControlHelper.removeChannelzChild(child.subchannel.getChannelzRef());
        }
        this.currentSubchannelIndex = 0;
        this.children = [];
        this.triedAllSubchannels = false;
        this.requestedResolutionSinceLastUpdate = false;
      }
      connectToAddressList(addressList) {
        const newChildrenList = addressList.map((address) => ({
          subchannel: this.channelControlHelper.createSubchannel(address, {}),
          hasReportedTransientFailure: false
        }));
        for (const { subchannel } of newChildrenList) {
          subchannel.ref();
          this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
        }
        this.resetSubchannelList();
        this.children = newChildrenList;
        for (const { subchannel } of this.children) {
          subchannel.addConnectivityStateListener(this.subchannelStateListener);
          if (subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.READY) {
            this.pickSubchannel(subchannel);
            return;
          }
        }
        for (const child of this.children) {
          if (child.subchannel.getConnectivityState() === connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) {
            child.hasReportedTransientFailure = true;
          }
        }
        this.startNextSubchannelConnecting(0);
        this.calculateAndReportNewState();
      }
      updateAddressList(endpointList, lbConfig) {
        if (!(lbConfig instanceof PickFirstLoadBalancingConfig)) {
          return;
        }
        if (lbConfig.getShuffleAddressList()) {
          endpointList = shuffled(endpointList);
        }
        const rawAddressList = [].concat(...endpointList.map((endpoint) => endpoint.addresses));
        if (rawAddressList.length === 0) {
          throw new Error("No addresses in endpoint list passed to pick_first");
        }
        const addressList = interleaveAddressFamilies(rawAddressList);
        this.latestAddressList = addressList;
        this.connectToAddressList(addressList);
      }
      exitIdle() {
        if (this.currentState === connectivity_state_1.ConnectivityState.IDLE && this.latestAddressList) {
          this.connectToAddressList(this.latestAddressList);
        }
      }
      resetBackoff() {
      }
      destroy() {
        this.resetSubchannelList();
        this.removeCurrentPick();
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.PickFirstLoadBalancer = PickFirstLoadBalancer;
    var LEAF_CONFIG = new PickFirstLoadBalancingConfig(false);
    var LeafLoadBalancer = class {
      constructor(endpoint, channelControlHelper, options) {
        this.endpoint = endpoint;
        this.latestState = connectivity_state_1.ConnectivityState.IDLE;
        const childChannelControlHelper = (0, load_balancer_1.createChildChannelControlHelper)(channelControlHelper, {
          updateState: (connectivityState, picker) => {
            this.latestState = connectivityState;
            this.latestPicker = picker;
            channelControlHelper.updateState(connectivityState, picker);
          }
        });
        this.pickFirstBalancer = new PickFirstLoadBalancer(childChannelControlHelper, Object.assign(Object.assign({}, options), { [REPORT_HEALTH_STATUS_OPTION_NAME]: true }));
        this.latestPicker = new picker_1.QueuePicker(this.pickFirstBalancer);
      }
      startConnecting() {
        this.pickFirstBalancer.updateAddressList([this.endpoint], LEAF_CONFIG);
      }
      /**
       * Update the endpoint associated with this LeafLoadBalancer to a new
       * endpoint. Does not trigger connection establishment if a connection
       * attempt is not already in progress.
       * @param newEndpoint
       */
      updateEndpoint(newEndpoint) {
        this.endpoint = newEndpoint;
        if (this.latestState !== connectivity_state_1.ConnectivityState.IDLE) {
          this.startConnecting();
        }
      }
      getConnectivityState() {
        return this.latestState;
      }
      getPicker() {
        return this.latestPicker;
      }
      getEndpoint() {
        return this.endpoint;
      }
      exitIdle() {
        this.pickFirstBalancer.exitIdle();
      }
      destroy() {
        this.pickFirstBalancer.destroy();
      }
    };
    exports2.LeafLoadBalancer = LeafLoadBalancer;
    function setup() {
      (0, load_balancer_1.registerLoadBalancerType)(TYPE_NAME, PickFirstLoadBalancer, PickFirstLoadBalancingConfig);
      (0, load_balancer_1.registerDefaultLoadBalancerType)(TYPE_NAME);
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/experimental.js
var require_experimental = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/experimental.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseSubchannelWrapper = exports2.registerAdminService = exports2.FilterStackFactory = exports2.BaseFilter = exports2.PickResultType = exports2.QueuePicker = exports2.UnavailablePicker = exports2.ChildLoadBalancerHandler = exports2.EndpointMap = exports2.endpointHasAddress = exports2.endpointToString = exports2.subchannelAddressToString = exports2.LeafLoadBalancer = exports2.isLoadBalancerNameRegistered = exports2.parseLoadBalancingConfig = exports2.selectLbConfigFromList = exports2.registerLoadBalancerType = exports2.createChildChannelControlHelper = exports2.BackoffTimeout = exports2.durationToMs = exports2.uriToString = exports2.createResolver = exports2.registerResolver = exports2.log = exports2.trace = void 0;
    var logging_1 = require_logging();
    Object.defineProperty(exports2, "trace", { enumerable: true, get: function() {
      return logging_1.trace;
    } });
    Object.defineProperty(exports2, "log", { enumerable: true, get: function() {
      return logging_1.log;
    } });
    var resolver_1 = require_resolver();
    Object.defineProperty(exports2, "registerResolver", { enumerable: true, get: function() {
      return resolver_1.registerResolver;
    } });
    Object.defineProperty(exports2, "createResolver", { enumerable: true, get: function() {
      return resolver_1.createResolver;
    } });
    var uri_parser_1 = require_uri_parser();
    Object.defineProperty(exports2, "uriToString", { enumerable: true, get: function() {
      return uri_parser_1.uriToString;
    } });
    var duration_1 = require_duration();
    Object.defineProperty(exports2, "durationToMs", { enumerable: true, get: function() {
      return duration_1.durationToMs;
    } });
    var backoff_timeout_1 = require_backoff_timeout();
    Object.defineProperty(exports2, "BackoffTimeout", { enumerable: true, get: function() {
      return backoff_timeout_1.BackoffTimeout;
    } });
    var load_balancer_1 = require_load_balancer();
    Object.defineProperty(exports2, "createChildChannelControlHelper", { enumerable: true, get: function() {
      return load_balancer_1.createChildChannelControlHelper;
    } });
    Object.defineProperty(exports2, "registerLoadBalancerType", { enumerable: true, get: function() {
      return load_balancer_1.registerLoadBalancerType;
    } });
    Object.defineProperty(exports2, "selectLbConfigFromList", { enumerable: true, get: function() {
      return load_balancer_1.selectLbConfigFromList;
    } });
    Object.defineProperty(exports2, "parseLoadBalancingConfig", { enumerable: true, get: function() {
      return load_balancer_1.parseLoadBalancingConfig;
    } });
    Object.defineProperty(exports2, "isLoadBalancerNameRegistered", { enumerable: true, get: function() {
      return load_balancer_1.isLoadBalancerNameRegistered;
    } });
    var load_balancer_pick_first_1 = require_load_balancer_pick_first();
    Object.defineProperty(exports2, "LeafLoadBalancer", { enumerable: true, get: function() {
      return load_balancer_pick_first_1.LeafLoadBalancer;
    } });
    var subchannel_address_1 = require_subchannel_address();
    Object.defineProperty(exports2, "subchannelAddressToString", { enumerable: true, get: function() {
      return subchannel_address_1.subchannelAddressToString;
    } });
    Object.defineProperty(exports2, "endpointToString", { enumerable: true, get: function() {
      return subchannel_address_1.endpointToString;
    } });
    Object.defineProperty(exports2, "endpointHasAddress", { enumerable: true, get: function() {
      return subchannel_address_1.endpointHasAddress;
    } });
    Object.defineProperty(exports2, "EndpointMap", { enumerable: true, get: function() {
      return subchannel_address_1.EndpointMap;
    } });
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    Object.defineProperty(exports2, "ChildLoadBalancerHandler", { enumerable: true, get: function() {
      return load_balancer_child_handler_1.ChildLoadBalancerHandler;
    } });
    var picker_1 = require_picker();
    Object.defineProperty(exports2, "UnavailablePicker", { enumerable: true, get: function() {
      return picker_1.UnavailablePicker;
    } });
    Object.defineProperty(exports2, "QueuePicker", { enumerable: true, get: function() {
      return picker_1.QueuePicker;
    } });
    Object.defineProperty(exports2, "PickResultType", { enumerable: true, get: function() {
      return picker_1.PickResultType;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports2, "BaseFilter", { enumerable: true, get: function() {
      return filter_1.BaseFilter;
    } });
    var filter_stack_1 = require_filter_stack();
    Object.defineProperty(exports2, "FilterStackFactory", { enumerable: true, get: function() {
      return filter_stack_1.FilterStackFactory;
    } });
    var admin_1 = require_admin();
    Object.defineProperty(exports2, "registerAdminService", { enumerable: true, get: function() {
      return admin_1.registerAdminService;
    } });
    var subchannel_interface_1 = require_subchannel_interface();
    Object.defineProperty(exports2, "BaseSubchannelWrapper", { enumerable: true, get: function() {
      return subchannel_interface_1.BaseSubchannelWrapper;
    } });
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver-uds.js
var require_resolver_uds = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver-uds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var resolver_1 = require_resolver();
    var UdsResolver = class {
      constructor(target, listener, channelOptions) {
        this.listener = listener;
        this.hasReturnedResult = false;
        this.endpoints = [];
        let path;
        if (target.authority === "") {
          path = "/" + target.path;
        } else {
          path = target.path;
        }
        this.endpoints = [{ addresses: [{ path }] }];
      }
      updateResolution() {
        if (!this.hasReturnedResult) {
          this.hasReturnedResult = true;
          process.nextTick(this.listener.onSuccessfulResolution, this.endpoints, null, null, null, {});
        }
      }
      destroy() {
      }
      static getDefaultAuthority(target) {
        return "localhost";
      }
    };
    function setup() {
      (0, resolver_1.registerResolver)("unix", UdsResolver);
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver-ip.js
var require_resolver_ip = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/resolver-ip.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = void 0;
    var net_1 = require("net");
    var constants_1 = require_constants();
    var metadata_1 = require_metadata();
    var resolver_1 = require_resolver();
    var uri_parser_1 = require_uri_parser();
    var logging = require_logging();
    var TRACER_NAME = "ip_resolver";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var IPV4_SCHEME = "ipv4";
    var IPV6_SCHEME = "ipv6";
    var DEFAULT_PORT = 443;
    var IpResolver = class {
      constructor(target, listener, channelOptions) {
        var _a;
        this.listener = listener;
        this.endpoints = [];
        this.error = null;
        this.hasReturnedResult = false;
        trace("Resolver constructed for target " + (0, uri_parser_1.uriToString)(target));
        const addresses = [];
        if (!(target.scheme === IPV4_SCHEME || target.scheme === IPV6_SCHEME)) {
          this.error = {
            code: constants_1.Status.UNAVAILABLE,
            details: `Unrecognized scheme ${target.scheme} in IP resolver`,
            metadata: new metadata_1.Metadata()
          };
          return;
        }
        const pathList = target.path.split(",");
        for (const path of pathList) {
          const hostPort = (0, uri_parser_1.splitHostPort)(path);
          if (hostPort === null) {
            this.error = {
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse ${target.scheme} address ${path}`,
              metadata: new metadata_1.Metadata()
            };
            return;
          }
          if (target.scheme === IPV4_SCHEME && !(0, net_1.isIPv4)(hostPort.host) || target.scheme === IPV6_SCHEME && !(0, net_1.isIPv6)(hostPort.host)) {
            this.error = {
              code: constants_1.Status.UNAVAILABLE,
              details: `Failed to parse ${target.scheme} address ${path}`,
              metadata: new metadata_1.Metadata()
            };
            return;
          }
          addresses.push({
            host: hostPort.host,
            port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : DEFAULT_PORT
          });
        }
        this.endpoints = addresses.map((address) => ({ addresses: [address] }));
        trace("Parsed " + target.scheme + " address list " + addresses);
      }
      updateResolution() {
        if (!this.hasReturnedResult) {
          this.hasReturnedResult = true;
          process.nextTick(() => {
            if (this.error) {
              this.listener.onError(this.error);
            } else {
              this.listener.onSuccessfulResolution(this.endpoints, null, null, null, {});
            }
          });
        }
      }
      destroy() {
        this.hasReturnedResult = false;
      }
      static getDefaultAuthority(target) {
        return target.path.split(",")[0];
      }
    };
    function setup() {
      (0, resolver_1.registerResolver)(IPV4_SCHEME, IpResolver);
      (0, resolver_1.registerResolver)(IPV6_SCHEME, IpResolver);
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js
var require_load_balancer_round_robin = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-round-robin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.RoundRobinLoadBalancer = void 0;
    var load_balancer_1 = require_load_balancer();
    var connectivity_state_1 = require_connectivity_state();
    var picker_1 = require_picker();
    var logging = require_logging();
    var constants_1 = require_constants();
    var subchannel_address_1 = require_subchannel_address();
    var load_balancer_pick_first_1 = require_load_balancer_pick_first();
    var TRACER_NAME = "round_robin";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "round_robin";
    var RoundRobinLoadBalancingConfig = class _RoundRobinLoadBalancingConfig {
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      constructor() {
      }
      toJsonObject() {
        return {
          [TYPE_NAME]: {}
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      static createFromJson(obj) {
        return new _RoundRobinLoadBalancingConfig();
      }
    };
    var RoundRobinPicker = class {
      constructor(children, nextIndex = 0) {
        this.children = children;
        this.nextIndex = nextIndex;
      }
      pick(pickArgs) {
        const childPicker = this.children[this.nextIndex].picker;
        this.nextIndex = (this.nextIndex + 1) % this.children.length;
        return childPicker.pick(pickArgs);
      }
      /**
       * Check what the next subchannel returned would be. Used by the load
       * balancer implementation to preserve this part of the picker state if
       * possible when a subchannel connects or disconnects.
       */
      peekNextEndpoint() {
        return this.children[this.nextIndex].endpoint;
      }
    };
    var RoundRobinLoadBalancer = class {
      constructor(channelControlHelper, options) {
        this.channelControlHelper = channelControlHelper;
        this.options = options;
        this.children = [];
        this.currentState = connectivity_state_1.ConnectivityState.IDLE;
        this.currentReadyPicker = null;
        this.updatesPaused = false;
        this.lastError = null;
        this.childChannelControlHelper = (0, load_balancer_1.createChildChannelControlHelper)(channelControlHelper, {
          updateState: (connectivityState, picker) => {
            this.calculateAndUpdateState();
          }
        });
      }
      countChildrenWithState(state) {
        return this.children.filter((child) => child.getConnectivityState() === state).length;
      }
      calculateAndUpdateState() {
        if (this.updatesPaused) {
          return;
        }
        if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.READY) > 0) {
          const readyChildren = this.children.filter((child) => child.getConnectivityState() === connectivity_state_1.ConnectivityState.READY);
          let index = 0;
          if (this.currentReadyPicker !== null) {
            const nextPickedEndpoint = this.currentReadyPicker.peekNextEndpoint();
            index = readyChildren.findIndex((child) => (0, subchannel_address_1.endpointEqual)(child.getEndpoint(), nextPickedEndpoint));
            if (index < 0) {
              index = 0;
            }
          }
          this.updateState(connectivity_state_1.ConnectivityState.READY, new RoundRobinPicker(readyChildren.map((child) => ({
            endpoint: child.getEndpoint(),
            picker: child.getPicker()
          })), index));
        } else if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.CONNECTING) > 0) {
          this.updateState(connectivity_state_1.ConnectivityState.CONNECTING, new picker_1.QueuePicker(this));
        } else if (this.countChildrenWithState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE) > 0) {
          this.updateState(connectivity_state_1.ConnectivityState.TRANSIENT_FAILURE, new picker_1.UnavailablePicker({ details: `No connection established. Last error: ${this.lastError}` }));
        } else {
          this.updateState(connectivity_state_1.ConnectivityState.IDLE, new picker_1.QueuePicker(this));
        }
        for (const child of this.children) {
          if (child.getConnectivityState() === connectivity_state_1.ConnectivityState.IDLE) {
            child.exitIdle();
          }
        }
      }
      updateState(newState, picker) {
        trace(connectivity_state_1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1.ConnectivityState[newState]);
        if (newState === connectivity_state_1.ConnectivityState.READY) {
          this.currentReadyPicker = picker;
        } else {
          this.currentReadyPicker = null;
        }
        this.currentState = newState;
        this.channelControlHelper.updateState(newState, picker);
      }
      resetSubchannelList() {
        for (const child of this.children) {
          child.destroy();
        }
      }
      updateAddressList(endpointList, lbConfig) {
        this.resetSubchannelList();
        trace("Connect to endpoint list " + endpointList.map(subchannel_address_1.endpointToString));
        this.updatesPaused = true;
        this.children = endpointList.map((endpoint) => new load_balancer_pick_first_1.LeafLoadBalancer(endpoint, this.childChannelControlHelper, this.options));
        for (const child of this.children) {
          child.startConnecting();
        }
        this.updatesPaused = false;
        this.calculateAndUpdateState();
      }
      exitIdle() {
      }
      resetBackoff() {
      }
      destroy() {
        this.resetSubchannelList();
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.RoundRobinLoadBalancer = RoundRobinLoadBalancer;
    function setup() {
      (0, load_balancer_1.registerLoadBalancerType)(TYPE_NAME, RoundRobinLoadBalancer, RoundRobinLoadBalancingConfig);
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-outlier-detection.js
var require_load_balancer_outlier_detection = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/load-balancer-outlier-detection.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.setup = exports2.OutlierDetectionLoadBalancer = exports2.OutlierDetectionLoadBalancingConfig = void 0;
    var connectivity_state_1 = require_connectivity_state();
    var constants_1 = require_constants();
    var duration_1 = require_duration();
    var experimental_1 = require_experimental();
    var load_balancer_1 = require_load_balancer();
    var load_balancer_child_handler_1 = require_load_balancer_child_handler();
    var picker_1 = require_picker();
    var subchannel_address_1 = require_subchannel_address();
    var subchannel_interface_1 = require_subchannel_interface();
    var logging = require_logging();
    var TRACER_NAME = "outlier_detection";
    function trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, text);
    }
    var TYPE_NAME = "outlier_detection";
    var OUTLIER_DETECTION_ENABLED = ((_a = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && _a !== void 0 ? _a : "true") === "true";
    var defaultSuccessRateEjectionConfig = {
      stdev_factor: 1900,
      enforcement_percentage: 100,
      minimum_hosts: 5,
      request_volume: 100
    };
    var defaultFailurePercentageEjectionConfig = {
      threshold: 85,
      enforcement_percentage: 100,
      minimum_hosts: 5,
      request_volume: 50
    };
    function validateFieldType(obj, fieldName, expectedType, objectName) {
      if (fieldName in obj && obj[fieldName] !== void 0 && typeof obj[fieldName] !== expectedType) {
        const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
        throw new Error(`outlier detection config ${fullFieldName} parse error: expected ${expectedType}, got ${typeof obj[fieldName]}`);
      }
    }
    function validatePositiveDuration(obj, fieldName, objectName) {
      const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
      if (fieldName in obj && obj[fieldName] !== void 0) {
        if (!(0, duration_1.isDuration)(obj[fieldName])) {
          throw new Error(`outlier detection config ${fullFieldName} parse error: expected Duration, got ${typeof obj[fieldName]}`);
        }
        if (!(obj[fieldName].seconds >= 0 && obj[fieldName].seconds <= 315576e6 && obj[fieldName].nanos >= 0 && obj[fieldName].nanos <= 999999999)) {
          throw new Error(`outlier detection config ${fullFieldName} parse error: values out of range for non-negative Duaration`);
        }
      }
    }
    function validatePercentage(obj, fieldName, objectName) {
      const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
      validateFieldType(obj, fieldName, "number", objectName);
      if (fieldName in obj && obj[fieldName] !== void 0 && !(obj[fieldName] >= 0 && obj[fieldName] <= 100)) {
        throw new Error(`outlier detection config ${fullFieldName} parse error: value out of range for percentage (0-100)`);
      }
    }
    var OutlierDetectionLoadBalancingConfig = class _OutlierDetectionLoadBalancingConfig {
      constructor(intervalMs, baseEjectionTimeMs, maxEjectionTimeMs, maxEjectionPercent, successRateEjection, failurePercentageEjection, childPolicy) {
        this.childPolicy = childPolicy;
        if (childPolicy.getLoadBalancerName() === "pick_first") {
          throw new Error("outlier_detection LB policy cannot have a pick_first child policy");
        }
        this.intervalMs = intervalMs !== null && intervalMs !== void 0 ? intervalMs : 1e4;
        this.baseEjectionTimeMs = baseEjectionTimeMs !== null && baseEjectionTimeMs !== void 0 ? baseEjectionTimeMs : 3e4;
        this.maxEjectionTimeMs = maxEjectionTimeMs !== null && maxEjectionTimeMs !== void 0 ? maxEjectionTimeMs : 3e5;
        this.maxEjectionPercent = maxEjectionPercent !== null && maxEjectionPercent !== void 0 ? maxEjectionPercent : 10;
        this.successRateEjection = successRateEjection ? Object.assign(Object.assign({}, defaultSuccessRateEjectionConfig), successRateEjection) : null;
        this.failurePercentageEjection = failurePercentageEjection ? Object.assign(Object.assign({}, defaultFailurePercentageEjectionConfig), failurePercentageEjection) : null;
      }
      getLoadBalancerName() {
        return TYPE_NAME;
      }
      toJsonObject() {
        var _a2, _b;
        return {
          outlier_detection: {
            interval: (0, duration_1.msToDuration)(this.intervalMs),
            base_ejection_time: (0, duration_1.msToDuration)(this.baseEjectionTimeMs),
            max_ejection_time: (0, duration_1.msToDuration)(this.maxEjectionTimeMs),
            max_ejection_percent: this.maxEjectionPercent,
            success_rate_ejection: (_a2 = this.successRateEjection) !== null && _a2 !== void 0 ? _a2 : void 0,
            failure_percentage_ejection: (_b = this.failurePercentageEjection) !== null && _b !== void 0 ? _b : void 0,
            child_policy: [this.childPolicy.toJsonObject()]
          }
        };
      }
      getIntervalMs() {
        return this.intervalMs;
      }
      getBaseEjectionTimeMs() {
        return this.baseEjectionTimeMs;
      }
      getMaxEjectionTimeMs() {
        return this.maxEjectionTimeMs;
      }
      getMaxEjectionPercent() {
        return this.maxEjectionPercent;
      }
      getSuccessRateEjectionConfig() {
        return this.successRateEjection;
      }
      getFailurePercentageEjectionConfig() {
        return this.failurePercentageEjection;
      }
      getChildPolicy() {
        return this.childPolicy;
      }
      static createFromJson(obj) {
        var _a2;
        validatePositiveDuration(obj, "interval");
        validatePositiveDuration(obj, "base_ejection_time");
        validatePositiveDuration(obj, "max_ejection_time");
        validatePercentage(obj, "max_ejection_percent");
        if ("success_rate_ejection" in obj && obj.success_rate_ejection !== void 0) {
          if (typeof obj.success_rate_ejection !== "object") {
            throw new Error("outlier detection config success_rate_ejection must be an object");
          }
          validateFieldType(obj.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection");
          validatePercentage(obj.success_rate_ejection, "enforcement_percentage", "success_rate_ejection");
          validateFieldType(obj.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection");
          validateFieldType(obj.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
        }
        if ("failure_percentage_ejection" in obj && obj.failure_percentage_ejection !== void 0) {
          if (typeof obj.failure_percentage_ejection !== "object") {
            throw new Error("outlier detection config failure_percentage_ejection must be an object");
          }
          validatePercentage(obj.failure_percentage_ejection, "threshold", "failure_percentage_ejection");
          validatePercentage(obj.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection");
          validateFieldType(obj.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection");
          validateFieldType(obj.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
        }
        if (!("child_policy" in obj) || !Array.isArray(obj.child_policy)) {
          throw new Error("outlier detection config child_policy must be an array");
        }
        const childPolicy = (0, load_balancer_1.selectLbConfigFromList)(obj.child_policy);
        if (!childPolicy) {
          throw new Error("outlier detection config child_policy: no valid recognized policy found");
        }
        return new _OutlierDetectionLoadBalancingConfig(obj.interval ? (0, duration_1.durationToMs)(obj.interval) : null, obj.base_ejection_time ? (0, duration_1.durationToMs)(obj.base_ejection_time) : null, obj.max_ejection_time ? (0, duration_1.durationToMs)(obj.max_ejection_time) : null, (_a2 = obj.max_ejection_percent) !== null && _a2 !== void 0 ? _a2 : null, obj.success_rate_ejection, obj.failure_percentage_ejection, childPolicy);
      }
    };
    exports2.OutlierDetectionLoadBalancingConfig = OutlierDetectionLoadBalancingConfig;
    var OutlierDetectionSubchannelWrapper = class extends subchannel_interface_1.BaseSubchannelWrapper {
      constructor(childSubchannel, mapEntry) {
        super(childSubchannel);
        this.mapEntry = mapEntry;
        this.refCount = 0;
      }
      ref() {
        this.child.ref();
        this.refCount += 1;
      }
      unref() {
        this.child.unref();
        this.refCount -= 1;
        if (this.refCount <= 0) {
          if (this.mapEntry) {
            const index = this.mapEntry.subchannelWrappers.indexOf(this);
            if (index >= 0) {
              this.mapEntry.subchannelWrappers.splice(index, 1);
            }
          }
        }
      }
      eject() {
        this.setHealthy(false);
      }
      uneject() {
        this.setHealthy(true);
      }
      getMapEntry() {
        return this.mapEntry;
      }
      getWrappedSubchannel() {
        return this.child;
      }
    };
    function createEmptyBucket() {
      return {
        success: 0,
        failure: 0
      };
    }
    var CallCounter = class {
      constructor() {
        this.activeBucket = createEmptyBucket();
        this.inactiveBucket = createEmptyBucket();
      }
      addSuccess() {
        this.activeBucket.success += 1;
      }
      addFailure() {
        this.activeBucket.failure += 1;
      }
      switchBuckets() {
        this.inactiveBucket = this.activeBucket;
        this.activeBucket = createEmptyBucket();
      }
      getLastSuccesses() {
        return this.inactiveBucket.success;
      }
      getLastFailures() {
        return this.inactiveBucket.failure;
      }
    };
    var OutlierDetectionPicker = class {
      constructor(wrappedPicker, countCalls) {
        this.wrappedPicker = wrappedPicker;
        this.countCalls = countCalls;
      }
      pick(pickArgs) {
        const wrappedPick = this.wrappedPicker.pick(pickArgs);
        if (wrappedPick.pickResultType === picker_1.PickResultType.COMPLETE) {
          const subchannelWrapper = wrappedPick.subchannel;
          const mapEntry = subchannelWrapper.getMapEntry();
          if (mapEntry) {
            let onCallEnded = wrappedPick.onCallEnded;
            if (this.countCalls) {
              onCallEnded = (statusCode) => {
                var _a2;
                if (statusCode === constants_1.Status.OK) {
                  mapEntry.counter.addSuccess();
                } else {
                  mapEntry.counter.addFailure();
                }
                (_a2 = wrappedPick.onCallEnded) === null || _a2 === void 0 ? void 0 : _a2.call(wrappedPick, statusCode);
              };
            }
            return Object.assign(Object.assign({}, wrappedPick), { subchannel: subchannelWrapper.getWrappedSubchannel(), onCallEnded });
          } else {
            return Object.assign(Object.assign({}, wrappedPick), { subchannel: subchannelWrapper.getWrappedSubchannel() });
          }
        } else {
          return wrappedPick;
        }
      }
    };
    var OutlierDetectionLoadBalancer = class {
      constructor(channelControlHelper, options) {
        this.entryMap = new subchannel_address_1.EndpointMap();
        this.latestConfig = null;
        this.timerStartTime = null;
        this.childBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler((0, experimental_1.createChildChannelControlHelper)(channelControlHelper, {
          createSubchannel: (subchannelAddress, subchannelArgs) => {
            const originalSubchannel = channelControlHelper.createSubchannel(subchannelAddress, subchannelArgs);
            const mapEntry = this.entryMap.getForSubchannelAddress(subchannelAddress);
            const subchannelWrapper = new OutlierDetectionSubchannelWrapper(originalSubchannel, mapEntry);
            if ((mapEntry === null || mapEntry === void 0 ? void 0 : mapEntry.currentEjectionTimestamp) !== null) {
              subchannelWrapper.eject();
            }
            mapEntry === null || mapEntry === void 0 ? void 0 : mapEntry.subchannelWrappers.push(subchannelWrapper);
            return subchannelWrapper;
          },
          updateState: (connectivityState, picker) => {
            if (connectivityState === connectivity_state_1.ConnectivityState.READY) {
              channelControlHelper.updateState(connectivityState, new OutlierDetectionPicker(picker, this.isCountingEnabled()));
            } else {
              channelControlHelper.updateState(connectivityState, picker);
            }
          }
        }), options);
        this.ejectionTimer = setInterval(() => {
        }, 0);
        clearInterval(this.ejectionTimer);
      }
      isCountingEnabled() {
        return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
      }
      getCurrentEjectionPercent() {
        let ejectionCount = 0;
        for (const mapEntry of this.entryMap.values()) {
          if (mapEntry.currentEjectionTimestamp !== null) {
            ejectionCount += 1;
          }
        }
        return ejectionCount * 100 / this.entryMap.size;
      }
      runSuccessRateCheck(ejectionTimestamp) {
        if (!this.latestConfig) {
          return;
        }
        const successRateConfig = this.latestConfig.getSuccessRateEjectionConfig();
        if (!successRateConfig) {
          return;
        }
        trace("Running success rate check");
        const targetRequestVolume = successRateConfig.request_volume;
        let addresesWithTargetVolume = 0;
        const successRates = [];
        for (const [endpoint, mapEntry] of this.entryMap.entries()) {
          const successes = mapEntry.counter.getLastSuccesses();
          const failures = mapEntry.counter.getLastFailures();
          trace("Stats for " + (0, subchannel_address_1.endpointToString)(endpoint) + ": successes=" + successes + " failures=" + failures + " targetRequestVolume=" + targetRequestVolume);
          if (successes + failures >= targetRequestVolume) {
            addresesWithTargetVolume += 1;
            successRates.push(successes / (successes + failures));
          }
        }
        trace("Found " + addresesWithTargetVolume + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + successRates + "]");
        if (addresesWithTargetVolume < successRateConfig.minimum_hosts) {
          return;
        }
        const successRateMean = successRates.reduce((a, b) => a + b) / successRates.length;
        let successRateDeviationSum = 0;
        for (const rate of successRates) {
          const deviation = rate - successRateMean;
          successRateDeviationSum += deviation * deviation;
        }
        const successRateVariance = successRateDeviationSum / successRates.length;
        const successRateStdev = Math.sqrt(successRateVariance);
        const ejectionThreshold = successRateMean - successRateStdev * (successRateConfig.stdev_factor / 1e3);
        trace("stdev=" + successRateStdev + " ejectionThreshold=" + ejectionThreshold);
        for (const [address, mapEntry] of this.entryMap.entries()) {
          if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
            break;
          }
          const successes = mapEntry.counter.getLastSuccesses();
          const failures = mapEntry.counter.getLastFailures();
          if (successes + failures < targetRequestVolume) {
            continue;
          }
          const successRate = successes / (successes + failures);
          trace("Checking candidate " + address + " successRate=" + successRate);
          if (successRate < ejectionThreshold) {
            const randomNumber = Math.random() * 100;
            trace("Candidate " + address + " randomNumber=" + randomNumber + " enforcement_percentage=" + successRateConfig.enforcement_percentage);
            if (randomNumber < successRateConfig.enforcement_percentage) {
              trace("Ejecting candidate " + address);
              this.eject(mapEntry, ejectionTimestamp);
            }
          }
        }
      }
      runFailurePercentageCheck(ejectionTimestamp) {
        if (!this.latestConfig) {
          return;
        }
        const failurePercentageConfig = this.latestConfig.getFailurePercentageEjectionConfig();
        if (!failurePercentageConfig) {
          return;
        }
        trace("Running failure percentage check. threshold=" + failurePercentageConfig.threshold + " request volume threshold=" + failurePercentageConfig.request_volume);
        let addressesWithTargetVolume = 0;
        for (const mapEntry of this.entryMap.values()) {
          const successes = mapEntry.counter.getLastSuccesses();
          const failures = mapEntry.counter.getLastFailures();
          if (successes + failures >= failurePercentageConfig.request_volume) {
            addressesWithTargetVolume += 1;
          }
        }
        if (addressesWithTargetVolume < failurePercentageConfig.minimum_hosts) {
          return;
        }
        for (const [address, mapEntry] of this.entryMap.entries()) {
          if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
            break;
          }
          const successes = mapEntry.counter.getLastSuccesses();
          const failures = mapEntry.counter.getLastFailures();
          trace("Candidate successes=" + successes + " failures=" + failures);
          if (successes + failures < failurePercentageConfig.request_volume) {
            continue;
          }
          const failurePercentage = failures * 100 / (failures + successes);
          if (failurePercentage > failurePercentageConfig.threshold) {
            const randomNumber = Math.random() * 100;
            trace("Candidate " + address + " randomNumber=" + randomNumber + " enforcement_percentage=" + failurePercentageConfig.enforcement_percentage);
            if (randomNumber < failurePercentageConfig.enforcement_percentage) {
              trace("Ejecting candidate " + address);
              this.eject(mapEntry, ejectionTimestamp);
            }
          }
        }
      }
      eject(mapEntry, ejectionTimestamp) {
        mapEntry.currentEjectionTimestamp = /* @__PURE__ */ new Date();
        mapEntry.ejectionTimeMultiplier += 1;
        for (const subchannelWrapper of mapEntry.subchannelWrappers) {
          subchannelWrapper.eject();
        }
      }
      uneject(mapEntry) {
        mapEntry.currentEjectionTimestamp = null;
        for (const subchannelWrapper of mapEntry.subchannelWrappers) {
          subchannelWrapper.uneject();
        }
      }
      switchAllBuckets() {
        for (const mapEntry of this.entryMap.values()) {
          mapEntry.counter.switchBuckets();
        }
      }
      startTimer(delayMs) {
        var _a2, _b;
        this.ejectionTimer = setTimeout(() => this.runChecks(), delayMs);
        (_b = (_a2 = this.ejectionTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a2);
      }
      runChecks() {
        const ejectionTimestamp = /* @__PURE__ */ new Date();
        trace("Ejection timer running");
        this.switchAllBuckets();
        if (!this.latestConfig) {
          return;
        }
        this.timerStartTime = ejectionTimestamp;
        this.startTimer(this.latestConfig.getIntervalMs());
        this.runSuccessRateCheck(ejectionTimestamp);
        this.runFailurePercentageCheck(ejectionTimestamp);
        for (const [address, mapEntry] of this.entryMap.entries()) {
          if (mapEntry.currentEjectionTimestamp === null) {
            if (mapEntry.ejectionTimeMultiplier > 0) {
              mapEntry.ejectionTimeMultiplier -= 1;
            }
          } else {
            const baseEjectionTimeMs = this.latestConfig.getBaseEjectionTimeMs();
            const maxEjectionTimeMs = this.latestConfig.getMaxEjectionTimeMs();
            const returnTime = new Date(mapEntry.currentEjectionTimestamp.getTime());
            returnTime.setMilliseconds(returnTime.getMilliseconds() + Math.min(baseEjectionTimeMs * mapEntry.ejectionTimeMultiplier, Math.max(baseEjectionTimeMs, maxEjectionTimeMs)));
            if (returnTime < /* @__PURE__ */ new Date()) {
              trace("Unejecting " + address);
              this.uneject(mapEntry);
            }
          }
        }
      }
      updateAddressList(endpointList, lbConfig, attributes) {
        if (!(lbConfig instanceof OutlierDetectionLoadBalancingConfig)) {
          return;
        }
        for (const endpoint of endpointList) {
          if (!this.entryMap.has(endpoint)) {
            trace("Adding map entry for " + (0, subchannel_address_1.endpointToString)(endpoint));
            this.entryMap.set(endpoint, {
              counter: new CallCounter(),
              currentEjectionTimestamp: null,
              ejectionTimeMultiplier: 0,
              subchannelWrappers: []
            });
          }
        }
        this.entryMap.deleteMissing(endpointList);
        const childPolicy = lbConfig.getChildPolicy();
        this.childBalancer.updateAddressList(endpointList, childPolicy, attributes);
        if (lbConfig.getSuccessRateEjectionConfig() || lbConfig.getFailurePercentageEjectionConfig()) {
          if (this.timerStartTime) {
            trace("Previous timer existed. Replacing timer");
            clearTimeout(this.ejectionTimer);
            const remainingDelay = lbConfig.getIntervalMs() - ((/* @__PURE__ */ new Date()).getTime() - this.timerStartTime.getTime());
            this.startTimer(remainingDelay);
          } else {
            trace("Starting new timer");
            this.timerStartTime = /* @__PURE__ */ new Date();
            this.startTimer(lbConfig.getIntervalMs());
            this.switchAllBuckets();
          }
        } else {
          trace("Counting disabled. Cancelling timer.");
          this.timerStartTime = null;
          clearTimeout(this.ejectionTimer);
          for (const mapEntry of this.entryMap.values()) {
            this.uneject(mapEntry);
            mapEntry.ejectionTimeMultiplier = 0;
          }
        }
        this.latestConfig = lbConfig;
      }
      exitIdle() {
        this.childBalancer.exitIdle();
      }
      resetBackoff() {
        this.childBalancer.resetBackoff();
      }
      destroy() {
        clearTimeout(this.ejectionTimer);
        this.childBalancer.destroy();
      }
      getTypeName() {
        return TYPE_NAME;
      }
    };
    exports2.OutlierDetectionLoadBalancer = OutlierDetectionLoadBalancer;
    function setup() {
      if (OUTLIER_DETECTION_ENABLED) {
        (0, experimental_1.registerLoadBalancerType)(TYPE_NAME, OutlierDetectionLoadBalancer, OutlierDetectionLoadBalancingConfig);
      }
    }
    exports2.setup = setup;
  }
});

// node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/.pnpm/@grpc+grpc-js@1.10.1/node_modules/@grpc/grpc-js/build/src/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.experimental = exports2.ServerInterceptingCall = exports2.ResponderBuilder = exports2.ServerListenerBuilder = exports2.addAdminServicesToServer = exports2.getChannelzHandlers = exports2.getChannelzServiceDefinition = exports2.InterceptorConfigurationError = exports2.InterceptingCall = exports2.RequesterBuilder = exports2.ListenerBuilder = exports2.StatusBuilder = exports2.getClientChannel = exports2.ServerCredentials = exports2.Server = exports2.setLogVerbosity = exports2.setLogger = exports2.load = exports2.loadObject = exports2.CallCredentials = exports2.ChannelCredentials = exports2.waitForClientReady = exports2.closeClient = exports2.Channel = exports2.makeGenericClientConstructor = exports2.makeClientConstructor = exports2.loadPackageDefinition = exports2.Client = exports2.compressionAlgorithms = exports2.propagate = exports2.connectivityState = exports2.status = exports2.logVerbosity = exports2.Metadata = exports2.credentials = void 0;
    var call_credentials_1 = require_call_credentials();
    Object.defineProperty(exports2, "CallCredentials", { enumerable: true, get: function() {
      return call_credentials_1.CallCredentials;
    } });
    var channel_1 = require_channel();
    Object.defineProperty(exports2, "Channel", { enumerable: true, get: function() {
      return channel_1.ChannelImplementation;
    } });
    var compression_algorithms_1 = require_compression_algorithms();
    Object.defineProperty(exports2, "compressionAlgorithms", { enumerable: true, get: function() {
      return compression_algorithms_1.CompressionAlgorithms;
    } });
    var connectivity_state_1 = require_connectivity_state();
    Object.defineProperty(exports2, "connectivityState", { enumerable: true, get: function() {
      return connectivity_state_1.ConnectivityState;
    } });
    var channel_credentials_1 = require_channel_credentials();
    Object.defineProperty(exports2, "ChannelCredentials", { enumerable: true, get: function() {
      return channel_credentials_1.ChannelCredentials;
    } });
    var client_1 = require_client();
    Object.defineProperty(exports2, "Client", { enumerable: true, get: function() {
      return client_1.Client;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports2, "logVerbosity", { enumerable: true, get: function() {
      return constants_1.LogVerbosity;
    } });
    Object.defineProperty(exports2, "status", { enumerable: true, get: function() {
      return constants_1.Status;
    } });
    Object.defineProperty(exports2, "propagate", { enumerable: true, get: function() {
      return constants_1.Propagate;
    } });
    var logging = require_logging();
    var make_client_1 = require_make_client();
    Object.defineProperty(exports2, "loadPackageDefinition", { enumerable: true, get: function() {
      return make_client_1.loadPackageDefinition;
    } });
    Object.defineProperty(exports2, "makeClientConstructor", { enumerable: true, get: function() {
      return make_client_1.makeClientConstructor;
    } });
    Object.defineProperty(exports2, "makeGenericClientConstructor", { enumerable: true, get: function() {
      return make_client_1.makeClientConstructor;
    } });
    var metadata_1 = require_metadata();
    Object.defineProperty(exports2, "Metadata", { enumerable: true, get: function() {
      return metadata_1.Metadata;
    } });
    var server_1 = require_server();
    Object.defineProperty(exports2, "Server", { enumerable: true, get: function() {
      return server_1.Server;
    } });
    var server_credentials_1 = require_server_credentials();
    Object.defineProperty(exports2, "ServerCredentials", { enumerable: true, get: function() {
      return server_credentials_1.ServerCredentials;
    } });
    var status_builder_1 = require_status_builder();
    Object.defineProperty(exports2, "StatusBuilder", { enumerable: true, get: function() {
      return status_builder_1.StatusBuilder;
    } });
    exports2.credentials = {
      /**
       * Combine a ChannelCredentials with any number of CallCredentials into a
       * single ChannelCredentials object.
       * @param channelCredentials The ChannelCredentials object.
       * @param callCredentials Any number of CallCredentials objects.
       * @return The resulting ChannelCredentials object.
       */
      combineChannelCredentials: (channelCredentials, ...callCredentials) => {
        return callCredentials.reduce((acc, other) => acc.compose(other), channelCredentials);
      },
      /**
       * Combine any number of CallCredentials into a single CallCredentials
       * object.
       * @param first The first CallCredentials object.
       * @param additional Any number of additional CallCredentials objects.
       * @return The resulting CallCredentials object.
       */
      combineCallCredentials: (first, ...additional) => {
        return additional.reduce((acc, other) => acc.compose(other), first);
      },
      // from channel-credentials.ts
      createInsecure: channel_credentials_1.ChannelCredentials.createInsecure,
      createSsl: channel_credentials_1.ChannelCredentials.createSsl,
      createFromSecureContext: channel_credentials_1.ChannelCredentials.createFromSecureContext,
      // from call-credentials.ts
      createFromMetadataGenerator: call_credentials_1.CallCredentials.createFromMetadataGenerator,
      createFromGoogleCredential: call_credentials_1.CallCredentials.createFromGoogleCredential,
      createEmpty: call_credentials_1.CallCredentials.createEmpty
    };
    var closeClient = (client) => client.close();
    exports2.closeClient = closeClient;
    var waitForClientReady = (client, deadline, callback) => client.waitForReady(deadline, callback);
    exports2.waitForClientReady = waitForClientReady;
    var loadObject = (value, options) => {
      throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    exports2.loadObject = loadObject;
    var load = (filename, format, options) => {
      throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    exports2.load = load;
    var setLogger = (logger) => {
      logging.setLogger(logger);
    };
    exports2.setLogger = setLogger;
    var setLogVerbosity = (verbosity) => {
      logging.setLoggerVerbosity(verbosity);
    };
    exports2.setLogVerbosity = setLogVerbosity;
    var getClientChannel = (client) => {
      return client_1.Client.prototype.getChannel.call(client);
    };
    exports2.getClientChannel = getClientChannel;
    var client_interceptors_1 = require_client_interceptors();
    Object.defineProperty(exports2, "ListenerBuilder", { enumerable: true, get: function() {
      return client_interceptors_1.ListenerBuilder;
    } });
    Object.defineProperty(exports2, "RequesterBuilder", { enumerable: true, get: function() {
      return client_interceptors_1.RequesterBuilder;
    } });
    Object.defineProperty(exports2, "InterceptingCall", { enumerable: true, get: function() {
      return client_interceptors_1.InterceptingCall;
    } });
    Object.defineProperty(exports2, "InterceptorConfigurationError", { enumerable: true, get: function() {
      return client_interceptors_1.InterceptorConfigurationError;
    } });
    var channelz_1 = require_channelz();
    Object.defineProperty(exports2, "getChannelzServiceDefinition", { enumerable: true, get: function() {
      return channelz_1.getChannelzServiceDefinition;
    } });
    Object.defineProperty(exports2, "getChannelzHandlers", { enumerable: true, get: function() {
      return channelz_1.getChannelzHandlers;
    } });
    var admin_1 = require_admin();
    Object.defineProperty(exports2, "addAdminServicesToServer", { enumerable: true, get: function() {
      return admin_1.addAdminServicesToServer;
    } });
    var server_interceptors_1 = require_server_interceptors();
    Object.defineProperty(exports2, "ServerListenerBuilder", { enumerable: true, get: function() {
      return server_interceptors_1.ServerListenerBuilder;
    } });
    Object.defineProperty(exports2, "ResponderBuilder", { enumerable: true, get: function() {
      return server_interceptors_1.ResponderBuilder;
    } });
    Object.defineProperty(exports2, "ServerInterceptingCall", { enumerable: true, get: function() {
      return server_interceptors_1.ServerInterceptingCall;
    } });
    var experimental = require_experimental();
    exports2.experimental = experimental;
    var resolver_dns = require_resolver_dns();
    var resolver_uds = require_resolver_uds();
    var resolver_ip = require_resolver_ip();
    var load_balancer_pick_first = require_load_balancer_pick_first();
    var load_balancer_round_robin = require_load_balancer_round_robin();
    var load_balancer_outlier_detection = require_load_balancer_outlier_detection();
    var channelz = require_channelz();
    (() => {
      resolver_dns.setup();
      resolver_uds.setup();
      resolver_ip.setup();
      load_balancer_pick_first.setup();
      load_balancer_round_robin.setup();
      load_balancer_outlier_detection.setup();
      channelz.setup();
    })();
  }
});

// node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/minimal.js
var require_minimal2 = __commonJS({
  "node_modules/.pnpm/protobufjs@7.2.6/node_modules/protobufjs/minimal.js"(exports2, module2) {
    "use strict";
    module2.exports = require_index_minimal();
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Channel: () => Channel,
  DocumentDB: () => DocumentDB,
  IndexType: () => IndexType,
  KeyValueDB: () => KeyValueDB,
  KeyspaceManager: () => KeyspaceManager,
  indexStatusFromJSON: () => indexStatusFromJSON2,
  indexTypeFromJSON: () => indexTypeFromJSON2
});
module.exports = __toCommonJS(src_exports);

// src/channel.ts
var grpc = __toESM(require_src3(), 1);
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

// src/document_db.ts
var import_apache_arrow = require("apache-arrow");

// src/proto/generated/document_db.ts
var import_grpc_js = __toESM(require_src3(), 1);

// node_modules/.pnpm/long@5.2.3/node_modules/long/index.js
var wasm = null;
try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    13,
    2,
    96,
    0,
    1,
    127,
    96,
    4,
    127,
    127,
    127,
    127,
    1,
    127,
    3,
    7,
    6,
    0,
    1,
    1,
    1,
    1,
    1,
    6,
    6,
    1,
    127,
    1,
    65,
    0,
    11,
    7,
    50,
    6,
    3,
    109,
    117,
    108,
    0,
    1,
    5,
    100,
    105,
    118,
    95,
    115,
    0,
    2,
    5,
    100,
    105,
    118,
    95,
    117,
    0,
    3,
    5,
    114,
    101,
    109,
    95,
    115,
    0,
    4,
    5,
    114,
    101,
    109,
    95,
    117,
    0,
    5,
    8,
    103,
    101,
    116,
    95,
    104,
    105,
    103,
    104,
    0,
    0,
    10,
    191,
    1,
    6,
    4,
    0,
    35,
    0,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    126,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    127,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    128,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    129,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    130,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11
  ])), {}).exports;
} catch (e) {
}
function Long(low, high, unsigned) {
  this.low = low | 0;
  this.high = high | 0;
  this.unsigned = !!unsigned;
}
Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}
function ctz32(value) {
  var c = Math.clz32(value & -value);
  return value ? 31 - c : c;
}
Long.isLong = isLong;
var INT_CACHE = {};
var UINT_CACHE = {};
function fromInt(value, unsigned) {
  var obj, cachedObj, cache;
  if (unsigned) {
    value >>>= 0;
    if (cache = 0 <= value && value < 256) {
      cachedObj = UINT_CACHE[value];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits(value, 0, true);
    if (cache)
      UINT_CACHE[value] = obj;
    return obj;
  } else {
    value |= 0;
    if (cache = -128 <= value && value < 128) {
      cachedObj = INT_CACHE[value];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits(value, value < 0 ? -1 : 0, false);
    if (cache)
      INT_CACHE[value] = obj;
    return obj;
  }
}
Long.fromInt = fromInt;
function fromNumber(value, unsigned) {
  if (isNaN(value))
    return unsigned ? UZERO : ZERO;
  if (unsigned) {
    if (value < 0)
      return UZERO;
    if (value >= TWO_PWR_64_DBL)
      return MAX_UNSIGNED_VALUE;
  } else {
    if (value <= -TWO_PWR_63_DBL)
      return MIN_VALUE;
    if (value + 1 >= TWO_PWR_63_DBL)
      return MAX_VALUE;
  }
  if (value < 0)
    return fromNumber(-value, unsigned).neg();
  return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
Long.fromNumber = fromNumber;
function fromBits(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}
Long.fromBits = fromBits;
var pow_dbl = Math.pow;
function fromString(str, unsigned, radix) {
  if (str.length === 0)
    throw Error("empty string");
  if (typeof unsigned === "number") {
    radix = unsigned;
    unsigned = false;
  } else {
    unsigned = !!unsigned;
  }
  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
    return unsigned ? UZERO : ZERO;
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError("radix");
  var p;
  if ((p = str.indexOf("-")) > 0)
    throw Error("interior hyphen");
  else if (p === 0) {
    return fromString(str.substring(1), unsigned, radix).neg();
  }
  var radixToPower = fromNumber(pow_dbl(radix, 8));
  var result = ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = result.mul(power).add(fromNumber(value));
    } else {
      result = result.mul(radixToPower);
      result = result.add(fromNumber(value));
    }
  }
  result.unsigned = unsigned;
  return result;
}
Long.fromString = fromString;
function fromValue(val, unsigned) {
  if (typeof val === "number")
    return fromNumber(val, unsigned);
  if (typeof val === "string")
    return fromString(val, unsigned);
  return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
}
Long.fromValue = fromValue;
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
var ZERO = fromInt(0);
Long.ZERO = ZERO;
var UZERO = fromInt(0, true);
Long.UZERO = UZERO;
var ONE = fromInt(1);
Long.ONE = ONE;
var UONE = fromInt(1, true);
Long.UONE = UONE;
var NEG_ONE = fromInt(-1);
Long.NEG_ONE = NEG_ONE;
var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
Long.MAX_VALUE = MAX_VALUE;
var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
Long.MIN_VALUE = MIN_VALUE;
var LongPrototype = Long.prototype;
LongPrototype.toInt = function toInt() {
  return this.unsigned ? this.low >>> 0 : this.low;
};
LongPrototype.toNumber = function toNumber() {
  if (this.unsigned)
    return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
  return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};
LongPrototype.toString = function toString(radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError("radix");
  if (this.isZero())
    return "0";
  if (this.isNegative()) {
    if (this.eq(MIN_VALUE)) {
      var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
      return div.toString(radix) + rem1.toInt().toString(radix);
    } else
      return "-" + this.neg().toString(radix);
  }
  var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
  var result = "";
  while (true) {
    var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero())
      return digits + result;
    else {
      while (digits.length < 6)
        digits = "0" + digits;
      result = "" + digits + result;
    }
  }
};
LongPrototype.getHighBits = function getHighBits() {
  return this.high;
};
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
  return this.high >>> 0;
};
LongPrototype.getLowBits = function getLowBits() {
  return this.low;
};
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
  return this.low >>> 0;
};
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
  if (this.isNegative())
    return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
  var val = this.high != 0 ? this.high : this.low;
  for (var bit = 31; bit > 0; bit--)
    if ((val & 1 << bit) != 0)
      break;
  return this.high != 0 ? bit + 33 : bit + 1;
};
LongPrototype.isZero = function isZero() {
  return this.high === 0 && this.low === 0;
};
LongPrototype.eqz = LongPrototype.isZero;
LongPrototype.isNegative = function isNegative() {
  return !this.unsigned && this.high < 0;
};
LongPrototype.isPositive = function isPositive() {
  return this.unsigned || this.high >= 0;
};
LongPrototype.isOdd = function isOdd() {
  return (this.low & 1) === 1;
};
LongPrototype.isEven = function isEven() {
  return (this.low & 1) === 0;
};
LongPrototype.equals = function equals(other) {
  if (!isLong(other))
    other = fromValue(other);
  if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
    return false;
  return this.high === other.high && this.low === other.low;
};
LongPrototype.eq = LongPrototype.equals;
LongPrototype.notEquals = function notEquals(other) {
  return !this.eq(
    /* validates */
    other
  );
};
LongPrototype.neq = LongPrototype.notEquals;
LongPrototype.ne = LongPrototype.notEquals;
LongPrototype.lessThan = function lessThan(other) {
  return this.comp(
    /* validates */
    other
  ) < 0;
};
LongPrototype.lt = LongPrototype.lessThan;
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
  return this.comp(
    /* validates */
    other
  ) <= 0;
};
LongPrototype.lte = LongPrototype.lessThanOrEqual;
LongPrototype.le = LongPrototype.lessThanOrEqual;
LongPrototype.greaterThan = function greaterThan(other) {
  return this.comp(
    /* validates */
    other
  ) > 0;
};
LongPrototype.gt = LongPrototype.greaterThan;
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
  return this.comp(
    /* validates */
    other
  ) >= 0;
};
LongPrototype.gte = LongPrototype.greaterThanOrEqual;
LongPrototype.ge = LongPrototype.greaterThanOrEqual;
LongPrototype.compare = function compare(other) {
  if (!isLong(other))
    other = fromValue(other);
  if (this.eq(other))
    return 0;
  var thisNeg = this.isNegative(), otherNeg = other.isNegative();
  if (thisNeg && !otherNeg)
    return -1;
  if (!thisNeg && otherNeg)
    return 1;
  if (!this.unsigned)
    return this.sub(other).isNegative() ? -1 : 1;
  return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
};
LongPrototype.comp = LongPrototype.compare;
LongPrototype.negate = function negate() {
  if (!this.unsigned && this.eq(MIN_VALUE))
    return MIN_VALUE;
  return this.not().add(ONE);
};
LongPrototype.neg = LongPrototype.negate;
LongPrototype.add = function add(addend) {
  if (!isLong(addend))
    addend = fromValue(addend);
  var a48 = this.high >>> 16;
  var a32 = this.high & 65535;
  var a16 = this.low >>> 16;
  var a00 = this.low & 65535;
  var b48 = addend.high >>> 16;
  var b32 = addend.high & 65535;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 + b48;
  c48 &= 65535;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
LongPrototype.subtract = function subtract(subtrahend) {
  if (!isLong(subtrahend))
    subtrahend = fromValue(subtrahend);
  return this.add(subtrahend.neg());
};
LongPrototype.sub = LongPrototype.subtract;
LongPrototype.multiply = function multiply(multiplier) {
  if (this.isZero())
    return this;
  if (!isLong(multiplier))
    multiplier = fromValue(multiplier);
  if (wasm) {
    var low = wasm["mul"](
      this.low,
      this.high,
      multiplier.low,
      multiplier.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }
  if (multiplier.isZero())
    return this.unsigned ? UZERO : ZERO;
  if (this.eq(MIN_VALUE))
    return multiplier.isOdd() ? MIN_VALUE : ZERO;
  if (multiplier.eq(MIN_VALUE))
    return this.isOdd() ? MIN_VALUE : ZERO;
  if (this.isNegative()) {
    if (multiplier.isNegative())
      return this.neg().mul(multiplier.neg());
    else
      return this.neg().mul(multiplier).neg();
  } else if (multiplier.isNegative())
    return this.mul(multiplier.neg()).neg();
  if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
    return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
  var a48 = this.high >>> 16;
  var a32 = this.high & 65535;
  var a16 = this.low >>> 16;
  var a00 = this.low & 65535;
  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 65535;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 65535;
  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 65535;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 65535;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 65535;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 65535;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
LongPrototype.mul = LongPrototype.multiply;
LongPrototype.divide = function divide(divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (divisor.isZero())
    throw Error("division by zero");
  if (wasm) {
    if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
      return this;
    }
    var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
      this.low,
      this.high,
      divisor.low,
      divisor.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }
  if (this.isZero())
    return this.unsigned ? UZERO : ZERO;
  var approx, rem, res;
  if (!this.unsigned) {
    if (this.eq(MIN_VALUE)) {
      if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
        return MIN_VALUE;
      else if (divisor.eq(MIN_VALUE))
        return ONE;
      else {
        var halfThis = this.shr(1);
        approx = halfThis.div(divisor).shl(1);
        if (approx.eq(ZERO)) {
          return divisor.isNegative() ? ONE : NEG_ONE;
        } else {
          rem = this.sub(divisor.mul(approx));
          res = approx.add(rem.div(divisor));
          return res;
        }
      }
    } else if (divisor.eq(MIN_VALUE))
      return this.unsigned ? UZERO : ZERO;
    if (this.isNegative()) {
      if (divisor.isNegative())
        return this.neg().div(divisor.neg());
      return this.neg().div(divisor).neg();
    } else if (divisor.isNegative())
      return this.div(divisor.neg()).neg();
    res = ZERO;
  } else {
    if (!divisor.unsigned)
      divisor = divisor.toUnsigned();
    if (divisor.gt(this))
      return UZERO;
    if (divisor.gt(this.shru(1)))
      return UONE;
    res = UZERO;
  }
  rem = this;
  while (rem.gte(divisor)) {
    approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
    var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
    while (approxRem.isNegative() || approxRem.gt(rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, this.unsigned);
      approxRem = approxRes.mul(divisor);
    }
    if (approxRes.isZero())
      approxRes = ONE;
    res = res.add(approxRes);
    rem = rem.sub(approxRem);
  }
  return res;
};
LongPrototype.div = LongPrototype.divide;
LongPrototype.modulo = function modulo(divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (wasm) {
    var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
      this.low,
      this.high,
      divisor.low,
      divisor.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }
  return this.sub(this.div(divisor).mul(divisor));
};
LongPrototype.mod = LongPrototype.modulo;
LongPrototype.rem = LongPrototype.modulo;
LongPrototype.not = function not() {
  return fromBits(~this.low, ~this.high, this.unsigned);
};
LongPrototype.countLeadingZeros = function countLeadingZeros() {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};
LongPrototype.clz = LongPrototype.countLeadingZeros;
LongPrototype.countTrailingZeros = function countTrailingZeros() {
  return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
};
LongPrototype.ctz = LongPrototype.countTrailingZeros;
LongPrototype.and = function and(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};
LongPrototype.or = function or(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};
LongPrototype.xor = function xor(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};
LongPrototype.shiftLeft = function shiftLeft(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  else if (numBits < 32)
    return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
  else
    return fromBits(0, this.low << numBits - 32, this.unsigned);
};
LongPrototype.shl = LongPrototype.shiftLeft;
LongPrototype.shiftRight = function shiftRight(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  else if (numBits < 32)
    return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
  else
    return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
};
LongPrototype.shr = LongPrototype.shiftRight;
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  if (numBits < 32)
    return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
  if (numBits === 32)
    return fromBits(this.high, 0, this.unsigned);
  return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
};
LongPrototype.shru = LongPrototype.shiftRightUnsigned;
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
LongPrototype.rotateLeft = function rotateLeft(numBits) {
  var b;
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  if (numBits === 32)
    return fromBits(this.high, this.low, this.unsigned);
  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
  }
  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
};
LongPrototype.rotl = LongPrototype.rotateLeft;
LongPrototype.rotateRight = function rotateRight(numBits) {
  var b;
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  if (numBits === 32)
    return fromBits(this.high, this.low, this.unsigned);
  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
  }
  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
};
LongPrototype.rotr = LongPrototype.rotateRight;
LongPrototype.toSigned = function toSigned() {
  if (!this.unsigned)
    return this;
  return fromBits(this.low, this.high, false);
};
LongPrototype.toUnsigned = function toUnsigned() {
  if (this.unsigned)
    return this;
  return fromBits(this.low, this.high, true);
};
LongPrototype.toBytes = function toBytes(le) {
  return le ? this.toBytesLE() : this.toBytesBE();
};
LongPrototype.toBytesLE = function toBytesLE() {
  var hi = this.high, lo = this.low;
  return [
    lo & 255,
    lo >>> 8 & 255,
    lo >>> 16 & 255,
    lo >>> 24,
    hi & 255,
    hi >>> 8 & 255,
    hi >>> 16 & 255,
    hi >>> 24
  ];
};
LongPrototype.toBytesBE = function toBytesBE() {
  var hi = this.high, lo = this.low;
  return [
    hi >>> 24,
    hi >>> 16 & 255,
    hi >>> 8 & 255,
    hi & 255,
    lo >>> 24,
    lo >>> 16 & 255,
    lo >>> 8 & 255,
    lo & 255
  ];
};
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
  return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
  return new Long(
    bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24,
    bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24,
    unsigned
  );
};
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
  return new Long(
    bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7],
    bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3],
    unsigned
  );
};
var long_default = Long;

// src/proto/generated/document_db.ts
var import_minimal2 = __toESM(require_minimal2(), 1);

// src/proto/generated/document.ts
var import_minimal = __toESM(require_minimal2(), 1);
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
  encode(message, writer = import_minimal.default.Writer.create()) {
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
    const reader = input instanceof import_minimal.default.Reader ? input : import_minimal.default.Reader.create(input);
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
    return Value.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseValue();
    message.null = object.null ?? void 0;
    message.bool = object.bool ?? void 0;
    message.int64 = object.int64 ?? void 0;
    message.uint64 = object.uint64 ?? void 0;
    message.double = object.double ?? void 0;
    message.string = object.string ?? void 0;
    message.array = object.array !== void 0 && object.array !== null ? Array2.fromPartial(object.array) : void 0;
    message.object = object.object !== void 0 && object.object !== null ? ObjectType.fromPartial(object.object) : void 0;
    return message;
  }
};
function createBaseArray() {
  return { value: [] };
}
var Array2 = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    for (const v of message.value) {
      Value.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : import_minimal.default.Reader.create(input);
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
    return { value: globalThis.Array.isArray(object?.value) ? object.value.map((e) => Value.fromJSON(e)) : [] };
  },
  toJSON(message) {
    const obj = {};
    if (message.value?.length) {
      obj.value = message.value.map((e) => Value.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Array2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseArray();
    message.value = object.value?.map((e) => Value.fromPartial(e)) || [];
    return message;
  }
};
function createBaseObjectType() {
  return { value: {} };
}
var ObjectType = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    Object.entries(message.value).forEach(([key, value]) => {
      ObjectType_ValueEntry.encode({ key, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : import_minimal.default.Reader.create(input);
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
    return ObjectType.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseObjectType();
    message.value = Object.entries(object.value ?? {}).reduce((acc, [key, value]) => {
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
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== void 0) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : import_minimal.default.Reader.create(input);
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
    return ObjectType_ValueEntry.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseObjectType_ValueEntry();
    message.key = object.key ?? "";
    message.value = object.value !== void 0 && object.value !== null ? Value.fromPartial(object.value) : void 0;
    return message;
  }
};
function createBaseDocument() {
  return { object: void 0, json: void 0 };
}
var Document = {
  encode(message, writer = import_minimal.default.Writer.create()) {
    if (message.object !== void 0) {
      ObjectType.encode(message.object, writer.uint32(10).fork()).ldelim();
    }
    if (message.json !== void 0) {
      writer.uint32(18).string(message.json);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal.default.Reader ? input : import_minimal.default.Reader.create(input);
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
    return Document.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDocument();
    message.object = object.object !== void 0 && object.object !== null ? ObjectType.fromPartial(object.object) : void 0;
    message.json = object.json ?? void 0;
    return message;
  }
};
function longToNumber(long) {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
if (import_minimal.default.util.Long !== long_default) {
  import_minimal.default.util.Long = long_default;
  import_minimal.default.configure();
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      fields: globalThis.Array.isArray(object?.fields) ? object.fields.map((e) => globalThis.String(e)) : [],
      unique: isSet2(object.unique) ? globalThis.Boolean(object.unique) : false,
      indexType: isSet2(object.indexType) ? indexTypeFromJSON(object.indexType) : 0,
      status: isSet2(object.status) ? indexStatusFromJSON(object.status) : 0,
      options: isSet2(object.options) ? Document.fromJSON(object.options) : void 0
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
    if (message.options !== void 0) {
      obj.options = Document.toJSON(message.options);
    }
    return obj;
  },
  create(base) {
    return IndexDescriptor.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseIndexDescriptor();
    message.indexId = object.indexId ?? 0;
    message.indexName = object.indexName ?? "";
    message.fields = object.fields?.map((e) => e) || [];
    message.unique = object.unique ?? false;
    message.indexType = object.indexType ?? 0;
    message.status = object.status ?? 0;
    message.options = object.options !== void 0 && object.options !== null ? Document.fromPartial(object.options) : void 0;
    return message;
  }
};
function createBaseFTSFieldStats() {
  return { fieldName: "", totalDocCount: 0, totalDocSize: 0, docCount: 0, docSize: 0, sumTermFreq: 0, sumDocFreq: 0 };
}
var FTSFieldStats = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return FTSFieldStats.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFTSFieldStats();
    message.fieldName = object.fieldName ?? "";
    message.totalDocCount = object.totalDocCount ?? 0;
    message.totalDocSize = object.totalDocSize ?? 0;
    message.docCount = object.docCount ?? 0;
    message.docSize = object.docSize ?? 0;
    message.sumTermFreq = object.sumTermFreq ?? 0;
    message.sumDocFreq = object.sumDocFreq ?? 0;
    return message;
  }
};
function createBaseFTSIndexStats() {
  return { docCount: 0, docSize: 0, fieldStats: [] };
}
var FTSIndexStats = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      fieldStats: globalThis.Array.isArray(object?.fieldStats) ? object.fieldStats.map((e) => FTSFieldStats.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
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
  create(base) {
    return FTSIndexStats.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFTSIndexStats();
    message.docCount = object.docCount ?? 0;
    message.docSize = object.docSize ?? 0;
    message.fieldStats = object.fieldStats?.map((e) => FTSFieldStats.fromPartial(e)) || [];
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return IndexStats.fromPartial(base ?? {});
  },
  fromPartial(object) {
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
    message.ftsStats = object.ftsStats !== void 0 && object.ftsStats !== null ? FTSIndexStats.fromPartial(object.ftsStats) : void 0;
    return message;
  }
};
function createBaseCollectionInfo() {
  return { collectionName: "", indexDescriptors: [], indexStats: [] };
}
var CollectionInfo = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      indexDescriptors: globalThis.Array.isArray(object?.indexDescriptors) ? object.indexDescriptors.map((e) => IndexDescriptor.fromJSON(e)) : [],
      indexStats: globalThis.Array.isArray(object?.indexStats) ? object.indexStats.map((e) => IndexStats.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
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
  create(base) {
    return CollectionInfo.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCollectionInfo();
    message.collectionName = object.collectionName ?? "";
    message.indexDescriptors = object.indexDescriptors?.map((e) => IndexDescriptor.fromPartial(e)) || [];
    message.indexStats = object.indexStats?.map((e) => IndexStats.fromPartial(e)) || [];
    return message;
  }
};
function createBaseProfileInfo() {
  return { matched: 0, scanned: 0, filtered: 0, queryDurationUs: 0, serializationDurationUs: 0 };
}
var ProfileInfo = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return ProfileInfo.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseProfileInfo();
    message.matched = object.matched ?? 0;
    message.scanned = object.scanned ?? 0;
    message.filtered = object.filtered ?? 0;
    message.queryDurationUs = object.queryDurationUs ?? 0;
    message.serializationDurationUs = object.serializationDurationUs ?? 0;
    return message;
  }
};
function createBaseCreateCollectionRequest() {
  return { collection: void 0 };
}
var CreateCollectionRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collection !== void 0) {
      CollectionInfo.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return CreateCollectionRequest.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return CreateCollectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCreateCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseDropCollectionRequest() {
  return { collectionName: "" };
}
var DropCollectionRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return DropCollectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDropCollectionRequest();
    message.collectionName = object.collectionName ?? "";
    return message;
  }
};
function createBaseDropCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var DropCollectionResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return DropCollectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDropCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseRenameCollectionRequest() {
  return { oldCollectionName: "", newCollectionName: "" };
}
var RenameCollectionRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.oldCollectionName !== "") {
      writer.uint32(10).string(message.oldCollectionName);
    }
    if (message.newCollectionName !== "") {
      writer.uint32(18).string(message.newCollectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return RenameCollectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRenameCollectionRequest();
    message.oldCollectionName = object.oldCollectionName ?? "";
    message.newCollectionName = object.newCollectionName ?? "";
    return message;
  }
};
function createBaseRenameCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var RenameCollectionResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return RenameCollectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRenameCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseGetCollectionRequest() {
  return { collectionName: "" };
}
var GetCollectionRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return GetCollectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetCollectionRequest();
    message.collectionName = object.collectionName ?? "";
    return message;
  }
};
function createBaseGetCollectionResponse() {
  return { status: 0, message: "", collection: void 0, profile: void 0 };
}
var GetCollectionResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return GetCollectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collection = object.collection !== void 0 && object.collection !== null ? CollectionInfo.fromPartial(object.collection) : void 0;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseGetCollectionsRequest() {
  return { collectionNames: [] };
}
var GetCollectionsRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    for (const v of message.collectionNames) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      collectionNames: globalThis.Array.isArray(object?.collectionNames) ? object.collectionNames.map((e) => globalThis.String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.collectionNames?.length) {
      obj.collectionNames = message.collectionNames;
    }
    return obj;
  },
  create(base) {
    return GetCollectionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetCollectionsRequest();
    message.collectionNames = object.collectionNames?.map((e) => e) || [];
    return message;
  }
};
function createBaseGetCollectionsResponse() {
  return { status: 0, message: "", collections: [], profile: void 0 };
}
var GetCollectionsResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      collections: globalThis.Array.isArray(object?.collections) ? object.collections.map((e) => CollectionInfo.fromJSON(e)) : [],
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
    if (message.collections?.length) {
      obj.collections = message.collections.map((e) => CollectionInfo.toJSON(e));
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return GetCollectionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetCollectionsResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collections = object.collections?.map((e) => CollectionInfo.fromPartial(e)) || [];
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseCreateIndexRequest() {
  return { collectionName: "", indexDesc: void 0 };
}
var CreateIndexRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexDesc !== void 0) {
      IndexDescriptor.encode(message.indexDesc, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return CreateIndexRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCreateIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexDesc = object.indexDesc !== void 0 && object.indexDesc !== null ? IndexDescriptor.fromPartial(object.indexDesc) : void 0;
    return message;
  }
};
function createBaseCreateIndexResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var CreateIndexResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return CreateIndexResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCreateIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseDropIndexRequest() {
  return { collectionName: "", indexName: "" };
}
var DropIndexRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return DropIndexRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDropIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
    return message;
  }
};
function createBaseDropIndexResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var DropIndexResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return DropIndexResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDropIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseRenameIndexRequest() {
  return { collectionName: "", oldIndexName: "", newIndexName: "" };
}
var RenameIndexRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return RenameIndexRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRenameIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.oldIndexName = object.oldIndexName ?? "";
    message.newIndexName = object.newIndexName ?? "";
    return message;
  }
};
function createBaseRenameIndexResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var RenameIndexResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return RenameIndexResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRenameIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseGetIndexRequest() {
  return { collectionName: "", indexName: "" };
}
var GetIndexRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.indexName !== "") {
      writer.uint32(18).string(message.indexName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return GetIndexRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetIndexRequest();
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return GetIndexResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetIndexResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collectionName = object.collectionName ?? "";
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    if (message.query !== void 0) {
      Document.encode(message.query, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return Query.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseQuery();
    message.collectionName = object.collectionName ?? "";
    message.query = object.query !== void 0 && object.query !== null ? Document.fromPartial(object.query) : void 0;
    return message;
  }
};
function createBaseFindRequest() {
  return { query: void 0, limit: 0, indexColumns: [], columns: [], dtypes: {} };
}
var FindRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      indexColumns: globalThis.Array.isArray(object?.indexColumns) ? object.indexColumns.map((e) => globalThis.String(e)) : [],
      columns: globalThis.Array.isArray(object?.columns) ? object.columns.map((e) => globalThis.String(e)) : [],
      dtypes: isObject2(object.dtypes) ? Object.entries(object.dtypes).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.query !== void 0) {
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
  create(base) {
    return FindRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFindRequest();
    message.query = object.query !== void 0 && object.query !== null ? Query.fromPartial(object.query) : void 0;
    message.limit = object.limit ?? 0;
    message.indexColumns = object.indexColumns?.map((e) => e) || [];
    message.columns = object.columns?.map((e) => e) || [];
    message.dtypes = Object.entries(object.dtypes ?? {}).reduce((acc, [key, value]) => {
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return FindRequest_DtypesEntry.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFindRequest_DtypesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseFindResponse() {
  return { numColumns: 0, numRows: 0, buffer: Buffer.alloc(0), profile: void 0 };
}
var FindResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return FindResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFindResponse();
    message.numColumns = object.numColumns ?? 0;
    message.numRows = object.numRows ?? 0;
    message.buffer = object.buffer ?? Buffer.alloc(0);
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseFindBatchRequest() {
  return { requests: [] };
}
var FindBatchRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    for (const v of message.requests) {
      FindRequest.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      requests: globalThis.Array.isArray(object?.requests) ? object.requests.map((e) => FindRequest.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => FindRequest.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return FindBatchRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFindBatchRequest();
    message.requests = object.requests?.map((e) => FindRequest.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFindBatchResponse() {
  return { responses: [] };
}
var FindBatchResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    for (const v of message.responses) {
      FindResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e) => FindResponse.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => FindResponse.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return FindBatchResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseFindBatchResponse();
    message.responses = object.responses?.map((e) => FindResponse.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCountRequest() {
  return { query: void 0 };
}
var CountRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.query !== void 0) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return CountRequest.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return CountResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCountResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.count = object.count ?? 0;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseContainsRequest() {
  return { query: void 0 };
}
var ContainsRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.query !== void 0) {
      Query.encode(message.query, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return ContainsRequest.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return ContainsResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseContainsResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.found = object.found ?? false;
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseInsertRequest() {
  return { requests: [] };
}
var InsertRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    for (const v of message.requests) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      requests: globalThis.Array.isArray(object?.requests) ? object.requests.map((e) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => Query.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return InsertRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInsertRequest();
    message.requests = object.requests?.map((e) => Query.fromPartial(e)) || [];
    return message;
  }
};
function createBaseInsertResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var InsertResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return InsertResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseInsertResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseUpdateRequest() {
  return { collectionName: "", filter: void 0, updates: void 0 };
}
var UpdateRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return UpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseUpdateRequest();
    message.collectionName = object.collectionName ?? "";
    message.filter = object.filter !== void 0 && object.filter !== null ? Document.fromPartial(object.filter) : void 0;
    message.updates = object.updates !== void 0 && object.updates !== null ? Document.fromPartial(object.updates) : void 0;
    return message;
  }
};
function createBaseUpdateResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var UpdateResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return UpdateResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseUpdateResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseRemoveRequest() {
  return { requests: [] };
}
var RemoveRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    for (const v of message.requests) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      requests: globalThis.Array.isArray(object?.requests) ? object.requests.map((e) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => Query.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return RemoveRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRemoveRequest();
    message.requests = object.requests?.map((e) => Query.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRemoveResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var RemoveResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return RemoveResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRemoveResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseExplainRequest() {
  return { queries: [] };
}
var ExplainRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    for (const v of message.queries) {
      Query.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      queries: globalThis.Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.queries?.length) {
      obj.queries = message.queries.map((e) => Query.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return ExplainRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseExplainRequest();
    message.queries = object.queries?.map((e) => Query.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryPlan() {
  return { status: 0, message: "", collectionName: "", indexName: "", queryPlan: "" };
}
var QueryPlan = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return QueryPlan.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseQueryPlan();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collectionName = object.collectionName ?? "";
    message.indexName = object.indexName ?? "";
    message.queryPlan = object.queryPlan ?? "";
    return message;
  }
};
function createBaseExplainResponse() {
  return { status: 0, queryPlans: [] };
}
var ExplainResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.queryPlans) {
      QueryPlan.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      queryPlans: globalThis.Array.isArray(object?.queryPlans) ? object.queryPlans.map((e) => QueryPlan.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.queryPlans?.length) {
      obj.queryPlans = message.queryPlans.map((e) => QueryPlan.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return ExplainResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseExplainResponse();
    message.status = object.status ?? 0;
    message.queryPlans = object.queryPlans?.map((e) => QueryPlan.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTruncateCollectionRequest() {
  return { collectionName: "" };
}
var TruncateCollectionRequest = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
    if (message.collectionName !== "") {
      writer.uint32(10).string(message.collectionName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return TruncateCollectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTruncateCollectionRequest();
    message.collectionName = object.collectionName ?? "";
    return message;
  }
};
function createBaseTruncateCollectionResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var TruncateCollectionResponse = {
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return TruncateCollectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTruncateCollectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBaseListCollectionsRequest() {
  return {};
}
var ListCollectionsRequest = {
  encode(_, writer = import_minimal2.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
    return ListCollectionsRequest.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal2.default.Writer.create()) {
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
    const reader = input instanceof import_minimal2.default.Reader ? input : import_minimal2.default.Reader.create(input);
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
      collectionNames: globalThis.Array.isArray(object?.collectionNames) ? object.collectionNames.map((e) => globalThis.String(e)) : [],
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
    if (message.collectionNames?.length) {
      obj.collectionNames = message.collectionNames;
    }
    if (message.profile !== void 0) {
      obj.profile = ProfileInfo.toJSON(message.profile);
    }
    return obj;
  },
  create(base) {
    return ListCollectionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseListCollectionsResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.collectionNames = object.collectionNames?.map((e) => e) || [];
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
var DocumentDBServiceClient = (0, import_grpc_js.makeGenericClientConstructor)(
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
if (import_minimal2.default.util.Long !== long_default) {
  import_minimal2.default.util.Long = long_default;
  import_minimal2.default.configure();
}
function isObject2(value) {
  return typeof value === "object" && value !== null;
}
function isSet2(value) {
  return value !== null && value !== void 0;
}

// src/client.ts
var import_grpc_js2 = __toESM(require_src3(), 1);
var import_grpc_js3 = __toESM(require_src3(), 1);
var GrpcClient = class {
  constructor(channel, client, timeout = void 0) {
    this._channel = channel;
    this._client = client;
    this._timeout = timeout;
  }
  createPromise(request, methodName, response_mapper = () => null, waitForReady = true) {
    const metadata = new import_grpc_js2.Metadata();
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
  find(request, query, limit, indexColumns, columns, dtypes) {
    let findRequest;
    if (typeof request === "string") {
      findRequest = _DocumentDB.toFindRequest({
        collectionName: request,
        query,
        limit,
        indexColumns,
        columns,
        dtypes
      });
    } else {
      findRequest = _DocumentDB.toFindRequest(request);
    }
    return this.createPromise(findRequest, "find", (response) => {
      return _DocumentDB.toDataFrame(response);
    });
  }
  findRaw(request) {
    const findRequest = _DocumentDB.toFindRequest(request);
    return this.createPromise(findRequest, "find", (response) => {
      return response.buffer;
    });
  }
  findBatch(requests) {
    const findRequests = {
      requests: requests.map((request) => {
        return _DocumentDB.toFindRequest(request);
      })
    };
    return this.createPromise(findRequests, "findBatch", (response) => {
      return response.responses.map(
        (response2) => _DocumentDB.toDataFrame(response2)
      );
    });
  }
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
  empty(collectionName, query, dtypes = void 0) {
    return this.find({
      collectionName,
      query,
      dtypes
    }).then((result) => {
      if (result) {
        return result.data.numRows == 0;
      }
      return true;
    });
  }
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
  static async toDataFrame(response) {
    if (response.numRows) {
      const parquet = await import("parquet-wasm/node/arrow1");
      const arrowBuffer = parquet.readParquet(response.buffer);
      const df = (0, import_apache_arrow.tableFromIPC)(arrowBuffer.intoIPCStream());
      const meta_json = df.schema.metadata.get("pandas");
      let meta;
      if (meta_json) {
        meta = JSON.parse(meta_json);
      }
      return {
        data: df,
        meta
      };
    }
    return null;
  }
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
var import_grpc_js4 = __toESM(require_src3(), 1);
var import_minimal3 = __toESM(require_minimal2(), 1);
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
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.durationUs !== 0) {
      writer.uint32(8).uint64(message.durationUs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return ProfileInfo2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseProfileInfo2();
    message.durationUs = object.durationUs ?? 0;
    return message;
  }
};
function createBaseResponse() {
  return { status: 0, message: "", profile: void 0 };
}
var Response = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
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
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return Response.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.profile = object.profile !== void 0 && object.profile !== null ? ProfileInfo2.fromPartial(object.profile) : void 0;
    return message;
  }
};
function createBasePutRequest() {
  return { keyspaceName: "", key: Buffer.alloc(0), value: Buffer.alloc(0), ttl: 0, createIfMissing: false };
}
var PutRequest = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
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
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return PutRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBasePutRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.key = object.key ?? Buffer.alloc(0);
    message.value = object.value ?? Buffer.alloc(0);
    message.ttl = object.ttl ?? 0;
    message.createIfMissing = object.createIfMissing ?? false;
    return message;
  }
};
function createBasePutResponse() {
  return { response: void 0 };
}
var PutResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return PutResponse.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return RemoveRequest2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRemoveRequest2();
    message.keyspaceName = object.keyspaceName ?? "";
    message.key = object.key ?? Buffer.alloc(0);
    return message;
  }
};
function createBaseRemoveResponse2() {
  return { response: void 0 };
}
var RemoveResponse2 = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return RemoveResponse2.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return GetRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.key = object.key ?? Buffer.alloc(0);
    return message;
  }
};
function createBaseGetResponse() {
  return { response: void 0, value: Buffer.alloc(0) };
}
var GetResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return GetResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseGetResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    message.value = object.value ?? Buffer.alloc(0);
    return message;
  }
};
function createBaseMultiGetRequest() {
  return { keyspaceName: "", keys: [] };
}
var MultiGetRequest = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return MultiGetRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseMultiGetRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  }
};
function createBaseMultiGetResponse() {
  return { responses: [], values: [] };
}
var MultiGetResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e) => Response.fromJSON(e)) : [],
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return MultiGetResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseMultiGetResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.values = object.values?.map((e) => e) || [];
    return message;
  }
};
function createBaseBatchedPutRequest() {
  return { keyspaceName: "", keys: [], values: [], ttls: [], createIfMissing: false };
}
var BatchedPutRequest = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
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
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : [],
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e) => Buffer.from(bytesFromBase642(e))) : [],
      ttls: globalThis.Array.isArray(object?.ttls) ? object.ttls.map((e) => globalThis.Number(e)) : [],
      createIfMissing: isSet3(object.createIfMissing) ? globalThis.Boolean(object.createIfMissing) : false
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => base64FromBytes2(e));
    }
    if (message.ttls?.length) {
      obj.ttls = message.ttls.map((e) => Math.round(e));
    }
    if (message.createIfMissing === true) {
      obj.createIfMissing = message.createIfMissing;
    }
    return obj;
  },
  create(base) {
    return BatchedPutRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBatchedPutRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    message.values = object.values?.map((e) => e) || [];
    message.ttls = object.ttls?.map((e) => e) || [];
    message.createIfMissing = object.createIfMissing ?? false;
    return message;
  }
};
function createBaseBatchedPutResponse() {
  return { responses: [] };
}
var BatchedPutResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e) => Response.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return BatchedPutResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBatchedPutResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBatchedRemoveRequest() {
  return { keyspaceName: "", keys: [] };
}
var BatchedRemoveRequest = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return BatchedRemoveRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBatchedRemoveRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  }
};
function createBaseBatchedRemoveResponse() {
  return { responses: [] };
}
var BatchedRemoveResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e) => Response.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return BatchedRemoveResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBatchedRemoveResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBatchedGetRequest() {
  return { keyspaceName: "", keys: [] };
}
var BatchedGetRequest = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    for (const v of message.keys) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.keyspaceName !== "") {
      obj.keyspaceName = message.keyspaceName;
    }
    if (message.keys?.length) {
      obj.keys = message.keys.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return BatchedGetRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBatchedGetRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  }
};
function createBaseBatchedGetResponse() {
  return { responses: [], values: [] };
}
var BatchedGetResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    for (const v of message.responses) {
      Response.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.values) {
      writer.uint32(18).bytes(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e) => Response.fromJSON(e)) : [],
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e) => Buffer.from(bytesFromBase642(e))) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Response.toJSON(e));
    }
    if (message.values?.length) {
      obj.values = message.values.map((e) => base64FromBytes2(e));
    }
    return obj;
  },
  create(base) {
    return BatchedGetResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseBatchedGetResponse();
    message.responses = object.responses?.map((e) => Response.fromPartial(e)) || [];
    message.values = object.values?.map((e) => e) || [];
    return message;
  }
};
function createBaseCreateKeyspaceRequest() {
  return { keyspaceName: "" };
}
var CreateKeyspaceRequest = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return CreateKeyspaceRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseCreateKeyspaceRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    return message;
  }
};
function createBaseCreateKeyspaceResponse() {
  return { response: void 0 };
}
var CreateKeyspaceResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return CreateKeyspaceResponse.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return DropKeyspaceRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseDropKeyspaceRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    return message;
  }
};
function createBaseDropKeyspaceResponse() {
  return { response: void 0 };
}
var DropKeyspaceResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return DropKeyspaceResponse.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.keyspaceName !== "") {
      writer.uint32(10).string(message.keyspaceName);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return TruncateKeyspaceRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTruncateKeyspaceRequest();
    message.keyspaceName = object.keyspaceName ?? "";
    return message;
  }
};
function createBaseTruncateKeyspaceResponse() {
  return { response: void 0 };
}
var TruncateKeyspaceResponse = {
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return TruncateKeyspaceResponse.fromPartial(base ?? {});
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
  encode(_, writer = import_minimal3.default.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
    return ListKeyspacesRequest.fromPartial(base ?? {});
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
  encode(message, writer = import_minimal3.default.Writer.create()) {
    if (message.response !== void 0) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.keyspaceNames) {
      writer.uint32(18).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_minimal3.default.Reader ? input : import_minimal3.default.Reader.create(input);
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
      keyspaceNames: globalThis.Array.isArray(object?.keyspaceNames) ? object.keyspaceNames.map((e) => globalThis.String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.response !== void 0) {
      obj.response = Response.toJSON(message.response);
    }
    if (message.keyspaceNames?.length) {
      obj.keyspaceNames = message.keyspaceNames;
    }
    return obj;
  },
  create(base) {
    return ListKeyspacesResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseListKeyspacesResponse();
    message.response = object.response !== void 0 && object.response !== null ? Response.fromPartial(object.response) : void 0;
    message.keyspaceNames = object.keyspaceNames?.map((e) => e) || [];
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
var KeyValueDBServiceClient = (0, import_grpc_js4.makeGenericClientConstructor)(
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
var KeyspaceManagerServiceClient = (0, import_grpc_js4.makeGenericClientConstructor)(
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
if (import_minimal3.default.util.Long !== long_default) {
  import_minimal3.default.util.Long = long_default;
  import_minimal3.default.configure();
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
        return response.response?.status == 0 /* kOK */;
      }
    );
  }
  putBatch(requests, keys, values, ttls, createIfMissing = true) {
    let batchedRequest;
    if (typeof requests === "string") {
      batchedRequest = {
        keyspaceName: requests,
        keys: keys?.map((key) => this.toBuffer(key)),
        values: values?.map((value) => this.toBuffer(value)),
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
      return response.response?.status == 0 /* kOK */;
    });
  }
  removeBatch(keyspaceName, keys) {
    const request = {
      keyspaceName,
      keys: keys.map((key) => this.toBuffer(key))
    };
    return this.createPromise(request, "removeBatch", (response) => {
      return response.responses?.map(
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
        return response.response?.status === 0 /* kOK */;
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
        return response.response?.status === 0 /* kOK */;
      }
    );
  }
  dropKeyspace(keyspaceName) {
    return this.createPromise(
      { keyspaceName },
      "dropKeyspace",
      (response) => {
        return response.response?.status === 0 /* kOK */;
      }
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Channel,
  DocumentDB,
  IndexType,
  KeyValueDB,
  KeyspaceManager,
  indexStatusFromJSON,
  indexTypeFromJSON
});
/*! Bundled license information:

@grpc/proto-loader/build/src/util.js:
  (**
   * @license
   * Copyright 2018 gRPC authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   *)

long/umd/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)

@grpc/proto-loader/build/src/index.js:
  (**
   * @license
   * Copyright 2018 gRPC authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   *)

long/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
