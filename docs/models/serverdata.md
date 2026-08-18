# ServerData

## Example Usage

```typescript
import { ServerData } from "latitudesh-typescript-sdk/models";

let value: ServerData = {
  attributes: {
    prefix: {
      id: "pfx_2aBcDeFgH",
      ipv4: "10.90.0.0/26",
      ipv6: "2001:db8::/64",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `type`                                                           | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `attributes`                                                     | [models.ServerDataAttributes](../models/serverdataattributes.md) | :heavy_minus_sign:                                               | N/A                                                              |