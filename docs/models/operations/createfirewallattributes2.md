# CreateFirewallAttributes2

## Example Usage

```typescript
import { CreateFirewallAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFirewallAttributes2 = {
  name: "<value>",
  project: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `project`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `tags`                                                                                                | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | IDs of the tags to attach to the firewall                                                             |
| `rules`                                                                                               | [operations.CreateFirewallRule2](../../models/operations/createfirewallrule2.md)[]                    | :heavy_minus_sign:                                                                                    | Firewall rules. When empty, Latitude seeds a default rule allowing SSH (TCP port 22) from any source. |