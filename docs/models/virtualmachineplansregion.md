# VirtualMachinePlansRegion

## Example Usage

```typescript
import { VirtualMachinePlansRegion } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlansRegion = {
  pricing: {
    "USD": {
      hour: 2.18,
      month: 796,
      year: 6686,
    },
    "BRL": {
      hour: 11.99,
      month: 4376,
      year: 36758,
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `available`                                                                                                     | *string*[]                                                                                                      | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `pricing`                                                                                                       | Record<string, [models.VirtualMachinePlansPricing](../models/virtualmachineplanspricing.md)>                    | :heavy_minus_sign:                                                                                              | Prices keyed by ISO 4217 currency code (e.g. USD, BRL).                                                         | {<br/>"USD": {<br/>"hour": 2.18,<br/>"month": 796,<br/>"year": 6686<br/>},<br/>"BRL": {<br/>"hour": 11.99,<br/>"month": 4376,<br/>"year": 36758<br/>}<br/>} |
| `locations`                                                                                                     | [models.VirtualMachinePlansLocations](../models/virtualmachineplanslocations.md)                                | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `stockLevel`                                                                                                    | [models.VirtualMachinePlansRegionStockLevel](../models/virtualmachineplansregionstocklevel.md)                  | :heavy_minus_sign:                                                                                              | The stock level in this region                                                                                  |                                                                                                                 |