# PostProjectSshKeyRequest

## Example Usage

```typescript
import { PostProjectSshKeyRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostProjectSshKeyRequest = {
  projectId: "<id>",
  requestBody: {
    data: {
      type: "ssh_keys",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Project ID or Slug                                                                                   |
| `requestBody`                                                                                        | [operations.PostProjectSshKeyRequestBody2](../../models/operations/postprojectsshkeyrequestbody2.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |