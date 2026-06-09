# VirtualMachineUpdatePayloadAttributes

## Example Usage

```typescript
import { VirtualMachineUpdatePayloadAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineUpdatePayloadAttributes = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | The new display name (hostname) for the Virtual Machine           |
| `tags`                                                            | *string*[]                                                        | :heavy_minus_sign:                                                | Array of tag IDs to assign to the VM. Replaces all existing tags. |