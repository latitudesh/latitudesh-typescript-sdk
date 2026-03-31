# KubernetesClusterUpdateResponseStatus

The update status. 'scaling' indicates nodes are being added or removed. 'unchanged' indicates the requested count matches the current count.

## Example Usage

```typescript
import { KubernetesClusterUpdateResponseStatus } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterUpdateResponseStatus = "scaling";
```

## Values

```typescript
"scaling" | "unchanged"
```