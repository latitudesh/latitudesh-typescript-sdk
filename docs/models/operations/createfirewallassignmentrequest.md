# CreateFirewallAssignmentRequest

## Example Usage

```typescript
import { CreateFirewallAssignmentRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFirewallAssignmentRequest = {
  firewallId: "<id>",
  requestBody: {
    data: {
      type: "firewall_assignments",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `firewallId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The Firewall ID                                                                                                    |
| `requestBody`                                                                                                      | [operations.CreateFirewallAssignmentRequestBody2](../../models/operations/createfirewallassignmentrequestbody2.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |