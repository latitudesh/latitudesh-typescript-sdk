# LksPlansLocations

## Example Usage

```typescript
import { LksPlansLocations } from "latitudesh-typescript-sdk/models";

let value: LksPlansLocations = {
  inStockCount: {
    "DAL2": 4,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `available`                                                                              | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Sites where LKS can deploy this plan                                                     |                                                                                          |
| `inStock`                                                                                | *string*[]                                                                               | :heavy_minus_sign:                                                                       | Sites with available capacity for an LKS node on this plan                               |                                                                                          |
| `inStockCount`                                                                           | Record<string, *number*>                                                                 | :heavy_minus_sign:                                                                       | Available servers for an LKS node keyed by site slug. Only sites with stock are present. | {<br/>"DAL2": 4<br/>}                                                                    |