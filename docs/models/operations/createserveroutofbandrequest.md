# CreateServerOutOfBandRequest

## Example Usage

```typescript
import { CreateServerOutOfBandRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateServerOutOfBandRequest = {
  serverId: "<id>",
  requestBody: {
    data: {
      type: "out_of_band",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.CreateServerOutOfBandRequestBody2](../../models/operations/createserveroutofbandrequestbody2.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |