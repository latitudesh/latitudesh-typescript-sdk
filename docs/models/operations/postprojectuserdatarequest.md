# PostProjectUserDataRequest

## Example Usage

```typescript
import { PostProjectUserDataRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostProjectUserDataRequest = {
  projectId: "<id>",
  requestBody: {
    data: {
      type: "user_data",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Project ID or Slug                                                                                       |
| `requestBody`                                                                                            | [operations.PostProjectUserDataRequestBody2](../../models/operations/postprojectuserdatarequestbody2.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |