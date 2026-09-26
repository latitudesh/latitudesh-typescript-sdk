# MountVolumeRequestBody

## Example Usage

```typescript
import { MountVolumeRequestBody } from "latitudesh-typescript-sdk/models/operations";

let value: MountVolumeRequestBody = {
  data: {
    type: "volumes",
    attributes: {
      nqn: "nqn.2024-01.com.example:server01",
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.MountVolumeData](../../models/operations/mountvolumedata.md) | :heavy_check_mark:                                                       | N/A                                                                      |