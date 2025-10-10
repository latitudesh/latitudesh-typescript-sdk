# CreateServerReinstallRequest

## Example Usage

```typescript
import { CreateServerReinstallRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateServerReinstallRequest = {
  serverId: "<id>",
  requestBody: {
    data: {
      type: "reinstalls",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.CreateServerReinstallRequestBody2](../../models/operations/createserverreinstallrequestbody2.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |