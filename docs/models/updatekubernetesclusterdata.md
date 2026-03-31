# UpdateKubernetesClusterData

## Example Usage

```typescript
import { UpdateKubernetesClusterData } from "latitudesh-typescript-sdk/models";

let value: UpdateKubernetesClusterData = {
  type: "kubernetes_clusters",
  attributes: {},
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                        | [models.UpdateKubernetesClusterType](../models/updatekubernetesclustertype.md)                                | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `attributes`                                                                                                  | [models.UpdateKubernetesClusterAttributes](../models/updatekubernetesclusterattributes.md)                    | :heavy_check_mark:                                                                                            | Exactly one of worker_count or control_plane_count must be provided. These parameters are mutually exclusive. |