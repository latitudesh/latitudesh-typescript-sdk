# StoragePlans

## Example Usage

```typescript
import { StoragePlans } from "latitudesh-typescript-sdk/models";

let value: StoragePlans = {
  data: [
    {
      attributes: {
        regions: [
          {
            pricing: {
              "USD": {
                month: 30,
              },
              "BRL": {
                month: 165,
              },
            },
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
| `data`                                                   | [models.StoragePlanData](../models/storageplandata.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `meta`                                                   | [models.StoragePlansMeta](../models/storageplansmeta.md) | :heavy_minus_sign:                                       | N/A                                                      |