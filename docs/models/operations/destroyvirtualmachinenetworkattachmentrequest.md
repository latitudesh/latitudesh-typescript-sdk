# DestroyVirtualMachineNetworkAttachmentRequest

## Example Usage

```typescript
import { DestroyVirtualMachineNetworkAttachmentRequest } from "latitudesh-typescript-sdk/models/operations";

let value: DestroyVirtualMachineNetworkAttachmentRequest = {
  virtualMachineId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `virtualMachineId`         | *string*                   | :heavy_check_mark:         | N/A                        |
| `id`                       | *string*                   | :heavy_check_mark:         | The VLAN id_hash to detach |