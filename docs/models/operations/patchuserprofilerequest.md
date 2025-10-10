# PatchUserProfileRequest

## Example Usage

```typescript
import { PatchUserProfileRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PatchUserProfileRequest = {
  id: "<id>",
  requestBody: {
    data: {
      id: "<id>",
      type: "users",
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.PatchUserProfileRequestBody2](../../models/operations/patchuserprofilerequestbody2.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |