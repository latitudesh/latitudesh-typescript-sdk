# UpdateLksNodePoolData

## Example Usage

```typescript
import { UpdateLksNodePoolData } from "latitudesh-typescript-sdk/models";

let value: UpdateLksNodePoolData = {
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
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                  | [models.UpdateLksNodePoolType](../models/updatelksnodepooltype.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `attributes`                                                                                                                                                            | [models.UpdateLksNodePoolAttributes](../models/updatelksnodepoolattributes.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                      | At least one attribute must be provided. max_pods_per_node and mode are set once, at creation, and are not updatable: a PATCH that carries either is rejected with 422. |