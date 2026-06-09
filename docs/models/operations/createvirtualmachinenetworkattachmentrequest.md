# CreateVirtualMachineNetworkAttachmentRequest

## Example Usage

```typescript
import { CreateVirtualMachineNetworkAttachmentRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateVirtualMachineNetworkAttachmentRequest = {
  virtualMachineId: "<id>",
  virtualMachineNetworkAttachmentCreatePayload: {
    data: {
      type: "virtual_machine_network_attachments",
      attributes: {
        virtualNetworkId: "<id>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `virtualMachineId`                                                                                                  | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `virtualMachineNetworkAttachmentCreatePayload`                                                                      | [models.VirtualMachineNetworkAttachmentCreatePayload](../../models/virtualmachinenetworkattachmentcreatepayload.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |