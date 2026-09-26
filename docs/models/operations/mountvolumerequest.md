# MountVolumeRequest

## Example Usage

```typescript
import { MountVolumeRequest } from "latitudesh-typescript-sdk/models/operations";

let value: MountVolumeRequest = {
  id: "<id>",
  requestBody: {
    data: {
      type: "volumes",
      attributes: {
        nqn: "nqn.2024-01.com.example:server01",
      },
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Volume ID                                                                              |
| `requestBody`                                                                          | [operations.MountVolumeRequestBody](../../models/operations/mountvolumerequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |