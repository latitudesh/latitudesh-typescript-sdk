# ShowVirtualMachineRequest

## Example Usage

```typescript
import { ShowVirtualMachineRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ShowVirtualMachineRequest = {
  virtualMachineId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `virtualMachineId`                                                                                                                                                                | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | N/A                                                                                                                                                                               |
| `extraFieldsVirtualMachines`                                                                                                                                                      | *string*                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                | Comma-separated extra attributes that are lazy-loaded. Supported values: `credentials`, `pending_restart`. Example: `extra_fields[virtual_machines]=credentials,pending_restart`. |