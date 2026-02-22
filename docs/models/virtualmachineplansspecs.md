# VirtualMachinePlansSpecs

## Example Usage

```typescript
import { VirtualMachinePlansSpecs } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlansSpecs = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `memory`                                                               | *number*                                                               | :heavy_minus_sign:                                                     | The total memory                                                       |
| `gpu`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | The GPU type                                                           |
| `vramPerGpu`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | VRAM per GPU in GB                                                     |
| `vcpus`                                                                | *number*                                                               | :heavy_minus_sign:                                                     | The number of virtual CPUs (legacy field)                              |
| `vcpu`                                                                 | [models.Vcpu](../models/vcpu.md)                                       | :heavy_minus_sign:                                                     | Detailed vCPU specifications                                           |
| `nics`                                                                 | [models.VirtualMachinePlansNic](../models/virtualmachineplansnic.md)[] | :heavy_minus_sign:                                                     | Network interface cards                                                |
| `disk`                                                                 | [models.Disk](../models/disk.md)                                       | :heavy_minus_sign:                                                     | N/A                                                                    |