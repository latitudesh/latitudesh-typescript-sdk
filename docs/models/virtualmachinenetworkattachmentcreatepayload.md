# VirtualMachineNetworkAttachmentCreatePayload

## Example Usage

```typescript
import { VirtualMachineNetworkAttachmentCreatePayload } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineNetworkAttachmentCreatePayload = {
  data: {
    type: "virtual_machine_network_attachments",
    attributes: {
      virtualNetworkId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                                   | [models.VirtualMachineNetworkAttachmentCreatePayloadData](../models/virtualmachinenetworkattachmentcreatepayloaddata.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |