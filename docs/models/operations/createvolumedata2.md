# CreateVolumeData2

## Example Usage

```typescript
import { CreateVolumeData2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateVolumeData2 = {
  type: "volumes",
  attributes: {
    project: "<value>",
    name: "<value>",
    region: "<value>",
    sizeInGb: 506847,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [operations.CreateVolumeType2](../../models/operations/createvolumetype2.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `attributes`                                                                             | [operations.CreateVolumeAttributes2](../../models/operations/createvolumeattributes2.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |