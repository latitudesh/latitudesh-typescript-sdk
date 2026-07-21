# KubernetesClusterSummaryDataPhase

The current phase of the cluster lifecycle.

## Example Usage

```typescript
import { KubernetesClusterSummaryDataPhase } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterSummaryDataPhase = "Provisioning";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Pending" | "Provisioning" | "Provisioned" | "Upgrading" | "Deleting" | "Failed" | "Unknown" | Unrecognized<string>
```