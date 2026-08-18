# UpdateFirewallAttributes2

## Example Usage

```typescript
import { UpdateFirewallAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateFirewallAttributes2 = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `tags`                                                                                                        | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | IDs of the tags to attach to the firewall. Replaces the current tags; send an empty array to remove all tags. |
| `rules`                                                                                                       | [operations.UpdateFirewallRule2](../../models/operations/updatefirewallrule2.md)[]                            | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |