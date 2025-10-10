# UpdateVirtualNetworkRequest

## Example Usage

```typescript
import { UpdateVirtualNetworkRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateVirtualNetworkRequest = {
  vlanId: "<id>",
  requestBody: {
    data: {
      id: "<id>",
      type: "virtual_networks",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `vlanId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The Virtual Network ID                                                                                     |
| `requestBody`                                                                                              | [operations.UpdateVirtualNetworkRequestBody2](../../models/operations/updatevirtualnetworkrequestbody2.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |