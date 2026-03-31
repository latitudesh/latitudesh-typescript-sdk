# WorkerStatus

Current status of worker nodes. 'idle' when 0 workers, 'ready' when all workers are ready, 'scaling' when workers are being provisioned/removed, 'error' when a worker has failed.

## Example Usage

```typescript
import { WorkerStatus } from "latitudesh-typescript-sdk/models";

let value: WorkerStatus = "error";
```

## Values

```typescript
"idle" | "ready" | "scaling" | "error"
```