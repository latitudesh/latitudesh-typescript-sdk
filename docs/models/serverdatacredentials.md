# ServerDataCredentials

Latest provisioning credentials, lazy loaded. Request it with `extra_fields[servers]=credentials`. Empty when the latest provisioning has no valid credentials.

## Example Usage

```typescript
import { ServerDataCredentials } from "latitudesh-typescript-sdk/models";

let value: ServerDataCredentials = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `username`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `password`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sshKeys`                                                                                     | [models.ServerDataSshKey](../models/serverdatasshkey.md)[]                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |