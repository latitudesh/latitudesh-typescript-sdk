# UpdateLksNodePool

## Example Usage

```typescript
import { UpdateLksNodePool } from "latitudesh-typescript-sdk/models";

let value: UpdateLksNodePool = {
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [models.UpdateLksNodePoolData](../models/updatelksnodepooldata.md) | :heavy_check_mark:                                                 | N/A                                                                |