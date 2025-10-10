# CreateServerActionRequest

## Example Usage

```typescript
import { CreateServerActionRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateServerActionRequest = {
  serverId: "<id>",
  requestBody: {
    data: {
      type: "actions",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.CreateServerActionRequestBody2](../../models/operations/createserveractionrequestbody2.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |