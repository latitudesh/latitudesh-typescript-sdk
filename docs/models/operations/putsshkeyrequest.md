# PutSshKeyRequest

## Example Usage

```typescript
import { PutSshKeyRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PutSshKeyRequest = {
  sshKeyId: "<id>",
  requestBody: {
    data: {
      type: "ssh_keys",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sshKeyId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `requestBody`                                                                        | [operations.PutSshKeyRequestBody2](../../models/operations/putsshkeyrequestbody2.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |