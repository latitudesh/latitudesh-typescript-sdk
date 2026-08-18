# RegionsAttributes

## Example Usage

```typescript
import { RegionsAttributes } from "latitudesh-typescript-sdk/models";

let value: RegionsAttributes = {
  features: [
    "prefixes",
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `slug`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `country`                                                           | [models.RegionsCountry](../models/regionscountry.md)                | :heavy_minus_sign:                                                  | N/A                                                                 |
| `features`                                                          | *string*[]                                                          | :heavy_minus_sign:                                                  | Location capabilities available at this location (e.g. `prefixes`). |