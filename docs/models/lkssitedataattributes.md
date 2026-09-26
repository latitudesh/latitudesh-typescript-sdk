# LksSiteDataAttributes

## Example Usage

```typescript
import { LksSiteDataAttributes } from "latitudesh-typescript-sdk/models";

let value: LksSiteDataAttributes = {
  name: "Dallas",
  slug: "DAL2",
  facility: "DAL2",
  country: {
    slug: "US",
    name: "United States",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `name`                                 | *string*                               | :heavy_minus_sign:                     | N/A                                    | Dallas                                 |
| `slug`                                 | *string*                               | :heavy_minus_sign:                     | N/A                                    | DAL2                                   |
| `facility`                             | *string*                               | :heavy_minus_sign:                     | N/A                                    | DAL2                                   |
| `country`                              | [models.Country](../models/country.md) | :heavy_minus_sign:                     | N/A                                    |                                        |