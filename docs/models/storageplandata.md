# StoragePlanData

## Example Usage

```typescript
import { StoragePlanData } from "latitudesh-typescript-sdk/models";

let value: StoragePlanData = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | [models.StoragePlanDataType](../models/storageplandatatype.md)             | :heavy_minus_sign:                                                         | N/A                                                                        |
| `attributes`                                                               | [models.StoragePlanDataAttributes](../models/storageplandataattributes.md) | :heavy_minus_sign:                                                         | N/A                                                                        |