# UpdateKubernetesClusterRequest

## Example Usage

```typescript
import { UpdateKubernetesClusterRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateKubernetesClusterRequest = {
  kubernetesClusterId: "<id>",
  updateKubernetesCluster: {
    data: {
      type: "kubernetes_clusters",
      attributes: {},
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `kubernetesClusterId`                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The cluster ID (format: kc_<hash>) or cluster name. Both formats are accepted for backward compatibility. |
| `updateKubernetesCluster`                                                                                 | [models.UpdateKubernetesCluster](../../models/updatekubernetescluster.md)                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |