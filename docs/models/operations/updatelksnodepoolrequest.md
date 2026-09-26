# UpdateLksNodePoolRequest

## Example Usage

```typescript
import { UpdateLksNodePoolRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateLksNodePoolRequest = {
  clusterId: "<id>",
  id: "<id>",
  updateLksNodePool: {
    data: {
      type: "lks_node_pools",
      attributes: {
        taints: [
          {
            key: "dedicated",
            value: "gpu",
            effect: "NoSchedule",
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `clusterId`                                                   | *string*                                                      | :heavy_check_mark:                                            | The cluster ID (format: `lksc_<hash>`).                       |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | The node pool ID (format: `lksnp_<hash>`).                    |
| `updateLksNodePool`                                           | [models.UpdateLksNodePool](../../models/updatelksnodepool.md) | :heavy_check_mark:                                            | N/A                                                           |