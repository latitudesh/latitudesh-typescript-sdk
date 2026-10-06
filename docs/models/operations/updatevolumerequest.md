# UpdateVolumeRequest

## Example Usage

```typescript
import { UpdateVolumeRequest } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateVolumeRequest = {
  id: "<id>",
  requestBody: {
    data: {
      type: "volumes",
      attributes: {
        sizeInGb: 880750,
      },
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Volume ID                                                                                  |
| `requestBody`                                                                              | [operations.UpdateVolumeRequestBody2](../../models/operations/updatevolumerequestbody2.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |