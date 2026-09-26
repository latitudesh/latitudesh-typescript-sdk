# LksNodePoolData

## Example Usage

```typescript
import { LksNodePoolData } from "latitudesh-typescript-sdk/models";

let value: LksNodePoolData = {
  id: "lksnp_9dQKr1pRMLyd",
  attributes: {
    name: "pool-a",
    type: "bare_metal",
    mode: "on_demand",
    maxPodsPerNode: 110,
    kubernetesVersion: "1.36.3",
    platformVersion: "lks-v1.36.3-002",
    status: "provisioning",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | lksnp_9dQKr1pRMLyd                                                         |
| `type`                                                                     | [models.LksNodePoolDataType](../models/lksnodepooldatatype.md)             | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `attributes`                                                               | [models.LksNodePoolDataAttributes](../models/lksnodepooldataattributes.md) | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |