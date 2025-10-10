# UpdateFirewallRequest

## Example Usage

```typescript
import { UpdateFirewallRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateFirewallRequest = {
  firewallId: "<id>",
  requestBody: {
    data: {
      type: "firewalls",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `firewallId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | The Firewall ID                                                                                |
| `requestBody`                                                                                  | [operations.UpdateFirewallRequestBody2](../../models/operations/updatefirewallrequestbody2.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |