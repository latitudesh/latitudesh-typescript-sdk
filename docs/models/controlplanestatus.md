# ControlPlaneStatus

Current status of control plane nodes. 'ready' when control plane is operational, 'scaling' when nodes are being provisioned/removed, 'error' when a control plane node has failed.

## Example Usage

```typescript
import { ControlPlaneStatus } from "latitudesh-typescript-sdk/models";

let value: ControlPlaneStatus = "ready";
```

## Values

```typescript
"ready" | "scaling" | "error"
```