# MountVolumeData

## Example Usage

```typescript
import { MountVolumeData } from "latitudesh-typescript-sdk/models/operations";

let value: MountVolumeData = {
  type: "volumes",
  attributes: {
    nqn: "nqn.2024-01.com.example:server01",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [operations.MountVolumeType](../../models/operations/mountvolumetype.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `attributes`                                                                         | [operations.MountVolumeAttributes](../../models/operations/mountvolumeattributes.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |