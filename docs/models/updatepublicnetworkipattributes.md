# UpdatePublicNetworkIpAttributes

## Example Usage

```typescript
import { UpdatePublicNetworkIpAttributes } from "latitudesh-typescript-sdk/models";

let value: UpdatePublicNetworkIpAttributes = {
  address: "288 N Locust Street",
  reserved: true,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The IPv4 address, e.g. 203.0.113.4                                                                               |
| `reserved`                                                                                                       | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | true reserves an available address so servers are never attached with it; false releases an address you reserved |