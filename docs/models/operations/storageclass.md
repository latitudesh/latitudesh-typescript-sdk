# StorageClass

Backend storage tier. `standard` is the default S3-compatible tier. `high_performance` is a lower-latency, higher-throughput tier available in select regions only.

## Example Usage

```typescript
import { StorageClass } from "latitudesh-typescript-sdk/models/operations";

let value: StorageClass = "high_performance";
```

## Values

```typescript
"standard" | "high_performance"
```