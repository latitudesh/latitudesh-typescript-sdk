# KubernetesClusterData

## Example Usage

```typescript
import { KubernetesClusterData } from "latitudesh-typescript-sdk/models";

let value: KubernetesClusterData = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | The cluster ID in hashed format (kc_<hash>)                                            |
| `type`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `attributes`                                                                           | [models.KubernetesClusterDataAttributes](../models/kubernetesclusterdataattributes.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |