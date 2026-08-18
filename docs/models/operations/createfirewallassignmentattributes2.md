# CreateFirewallAssignmentAttributes2

## Example Usage

```typescript
import { CreateFirewallAssignmentAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFirewallAssignmentAttributes2 = {};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serverId`                                                                                                                                           | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The server ID to assign. Provide exactly one of server_id or virtual_machine_id.                                                                     |
| `virtualMachineId`                                                                                                                                   | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The virtual machine ID to assign. Provide exactly one of server_id or virtual_machine_id. A virtual machine can be assigned to at most one firewall. |