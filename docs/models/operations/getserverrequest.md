# GetServerRequest

## Example Usage

```typescript
import { GetServerRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetServerRequest = {
  serverId: "<id>",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serverId`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The Server ID                                                                                                                                            |
| `extraFieldsServers`                                                                                                                                     | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | The `credentials` are provided as extra attributes that is lazy loaded. To request it, just set `extra_fields[servers]=credentials` in the query string. |