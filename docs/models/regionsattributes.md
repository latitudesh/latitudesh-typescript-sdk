# RegionsAttributes

## Example Usage

```typescript
import { RegionsAttributes } from "latitudesh-typescript-sdk/models";

let value: RegionsAttributes = {
  features: [
    "public_network",
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `slug`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `facility`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `country`                                                                                   | [models.RegionsCountry](../models/regionscountry.md)                                        | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `type`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `features`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Location capabilities available at this location (e.g. `public_network`, `elastic_ip_bgp`). |
| `networkGroup`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | The location's network group slug (e.g. `TYO`, `LON2`).                                     |