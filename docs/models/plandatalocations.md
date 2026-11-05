# PlanDataLocations

## Example Usage

```typescript
import { PlanDataLocations } from "latitudesh-typescript-sdk/models";

let value: PlanDataLocations = {
  inStockCount: {
    "SAO": 5,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `available`                                                             | *string*[]                                                              | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `inStock`                                                               | *string*[]                                                              | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |
| `inStockCount`                                                          | Record<string, *number*>                                                | :heavy_minus_sign:                                                      | Servers in stock keyed by site slug. Only sites with stock are present. | {<br/>"SAO": 5<br/>}                                                    |