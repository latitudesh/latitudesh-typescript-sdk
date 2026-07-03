# VirtualMachineBackupPayloadAttributes

## Example Usage

```typescript
import { VirtualMachineBackupPayloadAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineBackupPayloadAttributes = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `virtualMachine`                                                                                                                      | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Virtual machine id to back up. Required on the top-level `POST /virtual_machine_backups`; taken from the path when nested under a VM. |