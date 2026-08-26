# FirewallServerAttributes

## Example Usage

```typescript
import { FirewallServerAttributes } from "latitudesh-typescript-sdk/models";

let value: FirewallServerAttributes = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `server`                                                                         | [models.FirewallServerServer](../models/firewallserverserver.md)                 | :heavy_minus_sign:                                                               | Present only when the assignment targets a server.                               |
| `virtualMachine`                                                                 | [models.FirewallServerVirtualMachine](../models/firewallservervirtualmachine.md) | :heavy_minus_sign:                                                               | Present only when the assignment targets a virtual machine.                      |
| `firewallId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |