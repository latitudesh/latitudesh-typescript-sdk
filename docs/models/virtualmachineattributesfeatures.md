# VirtualMachineAttributesFeatures

Features supported by this operating system

## Example Usage

```typescript
import { VirtualMachineAttributesFeatures } from "latitudesh-typescript-sdk/models";

let value: VirtualMachineAttributesFeatures = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `raid`                         | *boolean*                      | :heavy_minus_sign:             | Whether RAID is supported      |
| `sshKeys`                      | *boolean*                      | :heavy_minus_sign:             | Whether SSH keys are supported |
| `userData`                     | *boolean*                      | :heavy_minus_sign:             | Whether user data is supported |