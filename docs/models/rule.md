# Rule

## Example Usage

```typescript
import { Rule } from "latitudesh-typescript-sdk/models";

let value: Rule = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Source IP address, IP range in CIDR notation, or 'ANY' (e.g., "192.168.1.1", "192.168.1.0/24", "ANY")      |
| `to`                                                                                                       | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Destination IP address, IP range in CIDR notation, or 'ANY' (e.g., "192.168.1.1", "192.168.1.0/24", "ANY") |
| `port`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `protocol`                                                                                                 | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Optional description explaining the purpose of this rule                                                   |