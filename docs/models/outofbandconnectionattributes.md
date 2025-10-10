# OutOfBandConnectionAttributes

## Example Usage

```typescript
import { OutOfBandConnectionAttributes } from "latitudesh-typescript-sdk/models";

let value: OutOfBandConnectionAttributes = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sshKey`                                                                             | [models.SshKey](../models/sshkey.md)                                                 | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `username`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `credentials`                                                                        | [models.OutOfBandConnectionCredentials](../models/outofbandconnectioncredentials.md) | :heavy_minus_sign:                                                                   | credentials are valid only when the server is deployed with ssh keys                 |
| `port`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `accessIp`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `serverId`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `status`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |