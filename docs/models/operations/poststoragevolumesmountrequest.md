# PostStorageVolumesMountRequest

## Example Usage

```typescript
import { PostStorageVolumesMountRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageVolumesMountRequest = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Volume storage ID                                                                                              |
| `requestBody`                                                                                                  | [operations.PostStorageVolumesMountRequestBody](../../models/operations/poststoragevolumesmountrequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |