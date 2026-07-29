# PostStorageAccessKeysRequest

## Example Usage

```typescript
import { PostStorageAccessKeysRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageAccessKeysRequest = {
  data: {
    type: "access_keys",
    attributes: {
      project: "<value>",
      accessKeyStorageClass: "standard",
      name: "<value>",
      accessScope: "limited_access",
      region: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.PostStorageAccessKeysDataRequest](../../models/operations/poststorageaccesskeysdatarequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |