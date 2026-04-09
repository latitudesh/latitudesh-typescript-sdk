# KubernetesClusterUpdateResponseStatus

The update status. 'scaling' indicates nodes are being added or removed. 'upgrading' indicates a version upgrade is in progress. 'unchanged' indicates no change was needed.

## Example Usage

```typescript
import { KubernetesClusterUpdateResponseStatus } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterUpdateResponseStatus = "scaling";
```

## Values

```typescript
"scaling" | "upgrading" | "unchanged"
```