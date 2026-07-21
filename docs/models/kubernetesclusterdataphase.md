# KubernetesClusterDataPhase

The current phase of the cluster lifecycle. 'Upgrading' is reported while a Kubernetes version upgrade is rolling through the cluster.

## Example Usage

```typescript
import { KubernetesClusterDataPhase } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterDataPhase = "Provisioned";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Pending" | "Provisioning" | "Provisioned" | "Upgrading" | "Deleting" | "Failed" | "Unknown" | Unrecognized<string>
```