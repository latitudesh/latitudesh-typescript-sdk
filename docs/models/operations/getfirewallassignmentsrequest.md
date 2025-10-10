# GetFirewallAssignmentsRequest

## Example Usage

```typescript
import { GetFirewallAssignmentsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetFirewallAssignmentsRequest = {
  firewallId: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `firewallId`                        | *string*                            | :heavy_check_mark:                  | The Firewall ID                     |
| `pageSize`                          | *number*                            | :heavy_minus_sign:                  | Number of items to return per page  |
| `pageNumber`                        | *number*                            | :heavy_minus_sign:                  | Page number to return (starts at 1) |