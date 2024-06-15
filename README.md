# Aeca Javascript Client

A Javascript client for Aeca database server.

## Install

```
npm install @aeca/client
```

## Example

```typescript
const collection = "aeca.js.test"
const channel = new Channel("localhost", 10080)
const doc_db = new DocumentDB(channel)

await doc_db.createCollection(collection, indexes)
const data = [
  { doc_id: "1", author: "jaepil", content: "get started" },
  { doc_id: "2", author: "finn", content: "vector database cookbook" },
]
await doc_db.insert(collection, data)

const df = await doc_db.find(collection, { author: "finn" })
```
