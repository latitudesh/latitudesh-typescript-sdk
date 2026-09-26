# LksNodePools

## Example Usage

```typescript
import { LksNodePools } from "latitudesh-typescript-sdk/models";

let value: LksNodePools = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [models.LksNodePoolData](../models/lksnodepooldata.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `meta`                                                   | [models.LksNodePoolsMeta](../models/lksnodepoolsmeta.md) | :heavy_minus_sign:                                       | N/A                                                      |