# LksClusters

## Example Usage

```typescript
import { LksClusters } from "latitudesh-typescript-sdk/models";

let value: LksClusters = {
  data: [
    {
      id: "lksc_pRMLydp0dQKr1",
      attributes: {
        status: "provisioning",
        kubernetesVersion: "1.36.3",
        platformVersion: "lks-v1.36.3-002",
      },
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [models.LksClusterData](../models/lksclusterdata.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `meta`                                                 | [models.LksClustersMeta](../models/lksclustersmeta.md) | :heavy_minus_sign:                                     | N/A                                                    |