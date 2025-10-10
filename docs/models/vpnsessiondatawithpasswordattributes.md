# VpnSessionDataWithPasswordAttributes

## Example Usage

```typescript
import { VpnSessionDataWithPasswordAttributes } from "latitudesh-typescript-sdk/models";

let value: VpnSessionDataWithPasswordAttributes = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `userName`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | VPN username                                                                             |
| `password`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | VPN password                                                                             |
| `port`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | VPN port                                                                                 |
| `host`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | VPN host                                                                                 |
| `region`                                                                                 | [models.RegionResourceData](../models/regionresourcedata.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [models.VpnSessionDataWithPasswordStatus](../models/vpnsessiondatawithpasswordstatus.md) | :heavy_minus_sign:                                                                       | from Firewall Response                                                                   |
| `expiresAt`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Time to expiry                                                                           |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |