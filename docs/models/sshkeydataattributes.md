# SshKeyDataAttributes

## Example Usage

```typescript
import { SshKeyDataAttributes } from "latitudesh-typescript-sdk/models";

let value: SshKeyDataAttributes = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_minus_sign:                                   | Name of the SSH Key                                  |
| `publicKey`                                          | *string*                                             | :heavy_minus_sign:                                   | SSH Public Key                                       |
| `fingerprint`                                        | *string*                                             | :heavy_minus_sign:                                   | SSH Key fingerprint                                  |
| `user`                                               | [models.UserInclude](../models/userinclude.md)       | :heavy_minus_sign:                                   | N/A                                                  |
| `createdAt`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `updatedAt`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `project`                                            | [models.ProjectInclude](../models/projectinclude.md) | :heavy_minus_sign:                                   | N/A                                                  |