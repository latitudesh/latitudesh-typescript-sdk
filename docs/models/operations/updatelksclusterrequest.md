# UpdateLksClusterRequest

## Example Usage

```typescript
import { UpdateLksClusterRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateLksClusterRequest = {
  id: "<id>",
  updateLksCluster: {
    data: {
      type: "lks_clusters",
      attributes: {
        kubernetesVersion: "1.37.2",
      },
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | The cluster ID (format: `lksc_<hash>`).                     |
| `updateLksCluster`                                          | [models.UpdateLksCluster](../../models/updatelkscluster.md) | :heavy_check_mark:                                          | N/A                                                         |