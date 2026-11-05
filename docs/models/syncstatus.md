# SyncStatus

Control-plane refresh observation. Synced confirms the receiver observed an active key; revoked confirms it observed the key absent. Other regions reconcile independently.

## Example Usage

```typescript
import { SyncStatus } from "latitudesh-typescript-sdk/models";

let value: SyncStatus = "failed";
```

## Values

```typescript
"pending" | "synced" | "failed" | "revoked"
```