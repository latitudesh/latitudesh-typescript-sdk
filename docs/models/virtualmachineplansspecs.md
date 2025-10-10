# VirtualMachinePlansSpecs

## Example Usage

```typescript
import { VirtualMachinePlansSpecs } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlansSpecs = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `memory`                         | *number*                         | :heavy_minus_sign:               | The total memory                 |
| `vcpus`                          | *number*                         | :heavy_minus_sign:               | The number of virtual CPUs       |
| `disk`                           | [models.Disk](../models/disk.md) | :heavy_minus_sign:               | N/A                              |