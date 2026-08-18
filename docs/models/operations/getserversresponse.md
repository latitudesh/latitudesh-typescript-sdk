# GetServersResponse

## Example Usage

```typescript
import { GetServersResponse } from "latitudesh-typescript-sdk/models/operations";

let value: GetServersResponse = {
  result: {
    data: [
      {
        attributes: {
          prefix: {
            id: "pfx_2aBcDeFgH",
            ipv4: "10.90.0.0/26",
            ipv6: "2001:db8::/64",
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `result`                                  | [models.Servers](../../models/servers.md) | :heavy_check_mark:                        | N/A                                       |