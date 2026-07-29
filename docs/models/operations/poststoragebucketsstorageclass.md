# PostStorageBucketsStorageClass

Backend storage tier. `standard` is the default S3-compatible tier. `high_performance` is a lower-latency, higher-throughput tier available in select regions only.

## Example Usage

```typescript
import { PostStorageBucketsStorageClass } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageBucketsStorageClass = "standard";
```

## Values

```typescript
"standard" | "high_performance"
```