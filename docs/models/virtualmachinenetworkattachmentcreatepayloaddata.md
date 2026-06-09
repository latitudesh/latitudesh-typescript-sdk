# VirtualMachineNetworkAttachmentCreatePayloadData

## Example Usage

```typescript
import { VirtualMachineNetworkAttachmentCreatePayloadData } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineNetworkAttachmentCreatePayloadData = {
  type: "virtual_machine_network_attachments",
  attributes: {
    virtualNetworkId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [models.VirtualMachineNetworkAttachmentCreatePayloadType](../models/virtualmachinenetworkattachmentcreatepayloadtype.md)             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `attributes`                                                                                                                         | [models.VirtualMachineNetworkAttachmentCreatePayloadAttributes](../models/virtualmachinenetworkattachmentcreatepayloadattributes.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |