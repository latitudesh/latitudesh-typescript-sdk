# VirtualMachineAttributesOperatingSystem

The operating system installed on the virtual machine

## Example Usage

```typescript
import { VirtualMachineAttributesOperatingSystem } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineAttributesOperatingSystem = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The full name of the operating system                                                    |
| `slug`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The unique slug identifier for the operating system                                      |
| `version`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The version of the operating system                                                      |
| `features`                                                                               | [models.VirtualMachineAttributesFeatures](../models/virtualmachineattributesfeatures.md) | :heavy_minus_sign:                                                                       | Features supported by this operating system                                              |
| `distro`                                                                                 | [models.VirtualMachineAttributesDistro](../models/virtualmachineattributesdistro.md)     | :heavy_minus_sign:                                                                       | Distribution information                                                                 |