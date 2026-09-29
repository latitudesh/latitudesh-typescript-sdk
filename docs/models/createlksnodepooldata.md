# CreateLksNodePoolData

## Example Usage

```typescript
import { CreateLksNodePoolData } from "latitudesh-typescript-sdk/models";

let value: CreateLksNodePoolData = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.CreateLksNodePoolType](../models/createlksnodepooltype.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `attributes`                                                                   | [models.CreateLksNodePoolAttributes](../models/createlksnodepoolattributes.md) | :heavy_check_mark:                                                             | N/A                                                                            |