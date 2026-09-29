# LksSiteData

## Example Usage

```typescript
import { LksSiteData } from "latitudesh-typescript-sdk/models";

let value: LksSiteData = {
  id: "DAL2",
  attributes: {
    name: "Dallas",
    slug: "DAL2",
    facility: "DAL2",
    country: {
      slug: "US",
      name: "United States",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Site slug — pass it as `site` when creating a cluster              | DAL2                                                               |
| `type`                                                             | [models.LksSiteDataType](../models/lkssitedatatype.md)             | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |
| `attributes`                                                       | [models.LksSiteDataAttributes](../models/lkssitedataattributes.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |