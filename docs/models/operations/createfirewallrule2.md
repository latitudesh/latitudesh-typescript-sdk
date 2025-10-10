# CreateFirewallRule2

## Example Usage

```typescript
import { CreateFirewallRule2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFirewallRule2 = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Source IP address, IP range in CIDR notation, or 'ANY' (e.g., "192.168.1.1", "192.168.1.0/24", "ANY")      |
| `to`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Destination IP address, IP range in CIDR notation, or 'ANY' (e.g., "192.168.1.1", "192.168.1.0/24", "ANY") |
| `protocol`                                                                                                 | [operations.CreateFirewallProtocol2](../../models/operations/createfirewallprotocol2.md)                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `port`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Port number or range (e.g., "80", "80-443")                                                                |