# Cognica Javascript Client

A Javascript client for Cognica database server.

## Installation

```
npm install @cognica/client
```

## Example

```typescript
const collection = "cognica.js.test"
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
