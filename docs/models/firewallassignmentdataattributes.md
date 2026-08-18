# FirewallAssignmentDataAttributes

## Example Usage

```typescript
import { FirewallAssignmentDataAttributes } from "latitudesh-typescript-sdk/models";

let value: FirewallAssignmentDataAttributes = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `server`                                                                                         | [models.FirewallAssignmentDataServer](../models/firewallassignmentdataserver.md)                 | :heavy_minus_sign:                                                                               | Present only when the assignment targets a server.                                               |
| `virtualMachine`                                                                                 | [models.FirewallAssignmentDataVirtualMachine](../models/firewallassignmentdatavirtualmachine.md) | :heavy_minus_sign:                                                                               | Present only when the assignment targets a virtual machine.                                      |
| `firewall`                                                                                       | [models.FirewallAssignmentDataFirewall](../models/firewallassignmentdatafirewall.md)             | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `firewallId`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |