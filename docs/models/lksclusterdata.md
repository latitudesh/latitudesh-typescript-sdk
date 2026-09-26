# LksClusterData

## Example Usage

```typescript
import { LksClusterData } from "latitudesh-typescript-sdk/models";

let value: LksClusterData = {
  id: "lksc_pRMLydp0dQKr1",
  attributes: {
    status: "provisioning",
    kubernetesVersion: "1.36.3",
    platformVersion: "lks-v1.36.3-002",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      | lksc_pRMLydp0dQKr1                                                       |
| `type`                                                                   | [models.LksClusterDataType](../models/lksclusterdatatype.md)             | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `attributes`                                                             | [models.LksClusterDataAttributes](../models/lksclusterdataattributes.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |