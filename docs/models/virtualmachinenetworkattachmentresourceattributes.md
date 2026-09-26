# VirtualMachineNetworkAttachmentResourceAttributes

## Example Usage

```typescript
import { VirtualMachineNetworkAttachmentResourceAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineNetworkAttachmentResourceAttributes = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `virtualNetworkId`                                                                                                                | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The encoded VLAN id_hash                                                                                                          |
| `vid`                                                                                                                             | *number*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The 802.1Q VLAN ID                                                                                                                |
| `pendingRestart`                                                                                                                  | *boolean*                                                                                                                         | :heavy_minus_sign:                                                                                                                | Deprecated, always false. Attaching and detaching restart the VM automatically, so an attachment never waits on a manual restart. |