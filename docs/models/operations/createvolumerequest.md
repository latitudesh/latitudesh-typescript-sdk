# CreateVolumeRequest

## Example Usage

```typescript
import { CreateVolumeRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateVolumeRequest = {
  data: {
    type: "volumes",
    attributes: {
      project: "<value>",
      name: "<value>",
      region: "<value>",
      sizeInGb: 506847,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.CreateVolumeData2](../../models/operations/createvolumedata2.md) | :heavy_check_mark:                                                           | N/A                                                                          |