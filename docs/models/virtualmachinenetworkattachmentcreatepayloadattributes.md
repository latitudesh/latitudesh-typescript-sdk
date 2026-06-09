# VirtualMachineNetworkAttachmentCreatePayloadAttributes

## Example Usage

```typescript
import { VirtualMachineNetworkAttachmentCreatePayloadAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineNetworkAttachmentCreatePayloadAttributes = {
  virtualNetworkId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `virtualNetworkId`                         | *string*                                   | :heavy_check_mark:                         | VLAN id_hash to attach (e.g. vlan_abc123). |