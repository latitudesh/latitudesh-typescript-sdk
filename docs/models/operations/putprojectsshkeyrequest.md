# PutProjectSshKeyRequest

## Example Usage

```typescript
import { PutProjectSshKeyRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PutProjectSshKeyRequest = {
  projectId: "<id>",
  sshKeyId: "<id>",
  requestBody: {
    data: {
      type: "ssh_keys",
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Project ID or Slug                                                                                 |
| `sshKeyId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.PutProjectSshKeyRequestBody2](../../models/operations/putprojectsshkeyrequestbody2.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |