# VirtualMachineRestorePayloadAttributes

## Example Usage

```typescript
import { VirtualMachineRestorePayloadAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineRestorePayloadAttributes = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `backup`                                                                                                                            | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Source backup id. Required on the flat `POST /virtual_machine_restores`; taken from the path when nested under a backup.            |
| `name`                                                                                                                              | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Optional name for the restored VM. Auto-generated from the source VM when omitted.                                                  |
| `site`                                                                                                                              | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Optional target site slug. Restores into that region (migration) instead of the backup's own region. Defaults to the backup's site. |