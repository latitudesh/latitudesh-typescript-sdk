# Servers

## Example Usage

```typescript
import { Servers } from "latitudesh-typescript-sdk/models";

let value: Servers = {
  data: [
    {
      attributes: {
        publicNetwork: {
          id: "pn_2aBcDeFgH",
          ipv4: "10.90.0.0/26",
          ipv6: "2001:db8::/64",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `data`                                               | [models.ServerData](../models/serverdata.md)[]       | :heavy_minus_sign:                                   | N/A                                                  |
| `meta`                                               | [models.PaginationMeta](../models/paginationmeta.md) | :heavy_minus_sign:                                   | N/A                                                  |