# WorkerStatus

Current status of worker nodes. 'idle' when 0 workers, 'ready' when all workers are ready, 'scaling' when workers are being provisioned/removed, 'upgrading' while a Kubernetes version upgrade is rolling through the workers, 'error' when a worker has failed.

## Example Usage

```typescript
import { WorkerStatus } from "latitudesh-typescript-sdk/models";

let value: WorkerStatus = "error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"idle" | "ready" | "scaling" | "upgrading" | "error" | Unrecognized<string>
```