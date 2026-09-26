# CreateLksNodePoolRequest

## Example Usage

```typescript
import { CreateLksNodePoolRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateLksNodePoolRequest = {
  clusterId: "<id>",
  createLksNodePool: {
    data: {
      type: "lks_node_pools",
      attributes: {
        plan: "<value>",
        count: 523154,
        kubernetesVersion: "1.36.3",
        maxPodsPerNode: 110,
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
| `createLksNodePool`                                           | [models.CreateLksNodePool](../../models/createlksnodepool.md) | :heavy_check_mark:                                            | N/A                                                           |