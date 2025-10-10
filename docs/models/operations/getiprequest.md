# GetIpRequest

## Example Usage

```typescript
import { GetIpRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetIpRequest = {
  ipId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ipId`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The IP Address ID                                                                                                                                                        |
| `extraFieldsIpAddresses`                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | The `region` and `server` are provided as extra attributes that are lazy loaded. To request it, just set `extra_fields[ip_addresses]=region,server` in the query string. |