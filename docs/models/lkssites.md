# LksSites

## Example Usage

```typescript
import { LksSites } from "latitudesh-typescript-sdk/models";

let value: LksSites = {
  data: [
    {
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
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `data`                                           | [models.LksSiteData](../models/lkssitedata.md)[] | :heavy_minus_sign:                               | N/A                                              |
| `meta`                                           | [models.LksSitesMeta](../models/lkssitesmeta.md) | :heavy_minus_sign:                               | N/A                                              |