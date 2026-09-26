# LksNodePoolDataAttributes

## Example Usage

```typescript
import { LksNodePoolDataAttributes } from "latitudesh-typescript-sdk/models";

let value: LksNodePoolDataAttributes = {
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
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `name`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | pool-a                                                                    |
| `type`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | bare_metal                                                                |
| `mode`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | on_demand                                                                 |
| `plan`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `description`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `count`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `maxPodsPerNode`                                                          | *number*                                                                  | :heavy_minus_sign:                                                        | null when it was not set at creation — the platform default (110) applies | 110                                                                       |
| `kubernetesVersion`                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | 1.36.3                                                                    |
| `platformVersion`                                                         | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | lks-v1.36.3-002                                                           |
| `status`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       | provisioning                                                              |
| `message`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `reason`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Machine-readable status reason (open enum)                                |                                                                           |
| `readyNodes`                                                              | *number*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `labels`                                                                  | Record<string, *string*>                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `taints`                                                                  | [models.LksNodePoolTaint](../models/lksnodepooltaint.md)[]                | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `createdAt`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |
| `updatedAt`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |