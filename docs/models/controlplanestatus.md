# ControlPlaneStatus

Current status of control plane nodes. 'ready' when control plane is operational, 'scaling' when nodes are being provisioned/removed, 'upgrading' while a Kubernetes version upgrade is rolling through the control plane, 'error' when a control plane node has failed.

## Example Usage

```typescript
import { ControlPlaneStatus } from "latitudesh-typescript-sdk/models";

let value: ControlPlaneStatus = "ready";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ready" | "scaling" | "upgrading" | "error" | Unrecognized<string>
```