# StoragePlanDataRegion

## Example Usage

```typescript
import { StoragePlanDataRegion } from "latitudesh-typescript-sdk/models";

let value: StoragePlanDataRegion = {
  pricing: {
    "USD": {
      month: 30,
    },
    "BRL": {
      month: 165,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `locations`                                                                          | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `pricing`                                                                            | Record<string, [models.StoragePlanDataPricing](../models/storageplandatapricing.md)> | :heavy_minus_sign:                                                                   | Prices keyed by ISO 4217 currency code (e.g. USD, BRL).                              | {<br/>"USD": {<br/>"month": 30<br/>},<br/>"BRL": {<br/>"month": 165<br/>}<br/>}      |