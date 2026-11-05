# MountVolumeRequestBody2

## Example Usage

```typescript
import { MountVolumeRequestBody2 } from "latitudesh-typescript-sdk/models/operations";

let value: MountVolumeRequestBody2 = {
  data: {
    type: "volumes",
    attributes: {
      nqn: "nqn.2024-01.com.example:server01",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [operations.MountVolumeData2](../../models/operations/mountvolumedata2.md) | :heavy_check_mark:                                                         | N/A                                                                        |