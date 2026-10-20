# CreateLksNodePool

## Example Usage

```typescript
import { CreateLksNodePool } from "latitudesh-typescript-sdk/models";

let value: CreateLksNodePool = {
  data: {
    type: "lks_node_pools",
    attributes: {
      serverIds: [
        "sv_9dQKr1pRMLyd",
      ],
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [models.CreateLksNodePoolData](../models/createlksnodepooldata.md) | :heavy_check_mark:                                                 | N/A                                                                |