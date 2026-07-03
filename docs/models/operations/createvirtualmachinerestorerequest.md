# CreateVirtualMachineRestoreRequest

## Example Usage

```typescript
import { CreateVirtualMachineRestoreRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateVirtualMachineRestoreRequest = {
  virtualMachineId: "<id>",
  backupId: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `virtualMachineId`                                                                  | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `backupId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `virtualMachineRestorePayload`                                                      | [models.VirtualMachineRestorePayload](../../models/virtualmachinerestorepayload.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |