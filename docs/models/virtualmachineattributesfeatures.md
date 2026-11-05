# VirtualMachineAttributesFeatures

Features supported by this operating system

## Example Usage

```typescript
import { VirtualMachineAttributesFeatures } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineAttributesFeatures = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `raid`                                                              | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether RAID is supported                                           |
| `sshKeys`                                                           | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether SSH keys are supported                                      |
| `userData`                                                          | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether user data is supported                                      |
| `rescue`                                                            | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether rescue mode is supported                                    |
| `arm64`                                                             | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether the operating system can be deployed on ARM (arm64) servers |
| `workflow`                                                          | *boolean*                                                           | :heavy_minus_sign:                                                  | Whether workflow is supported                                       |