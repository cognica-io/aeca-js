#!/usr/bin/env bash

protoc --plugin=node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_opt=env=node \
    --ts_proto_opt=useDate=true \
    --ts_proto_opt=forceLong=number \
    --ts_proto_opt=returnObservable=true \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=addGrpcMetadata=true \
    --ts_proto_opt=outputServices=grpc-js \
    -I src/proto/cognica \
    --ts_proto_out=src/proto/generated \
    src/proto/cognica/*.proto
