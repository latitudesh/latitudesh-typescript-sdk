# StoragePlanDataAttributes

## Example Usage

```typescript
import { StoragePlanDataAttributes } from "latitudesh-typescript-sdk/models";

let value: StoragePlanDataAttributes = {
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
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `storagePlanStorageType`                                               | [models.StoragePlanStorageType](../models/storageplanstoragetype.md)   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `storagePlanStorageClass`                                              | [models.StoragePlanStorageClass](../models/storageplanstorageclass.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `regions`                                                              | [models.StoragePlanDataRegion](../models/storageplandataregion.md)[]   | :heavy_minus_sign:                                                     | N/A                                                                    |