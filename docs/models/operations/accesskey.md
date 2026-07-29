# AccessKey

The newly created access key. The secret is included only in this create response and cannot be retrieved again. Field names depend on the provider: `standard` (Wasabi) returns `access_key_id` and `secret_access_key`; `high_performance` (VAST) returns `access_key` and `secret_key`.

## Example Usage

```typescript
import { AccessKey } from "latitudesh-typescript-sdk/models/operations";

let value: AccessKey = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accessKeyId`                                              | *string*                                                   | :heavy_minus_sign:                                         | Access key ID (standard / Wasabi).                         |
| `secretAccessKey`                                          | *string*                                                   | :heavy_minus_sign:                                         | Secret access key (standard / Wasabi). Returned only once. |
| `accessKey`                                                | *string*                                                   | :heavy_minus_sign:                                         | Access key ID (high_performance / VAST).                   |
| `secretKey`                                                | *string*                                                   | :heavy_minus_sign:                                         | Secret key (high_performance / VAST). Returned only once.  |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Access key name.                                           |
| `status`                                                   | *string*                                                   | :heavy_minus_sign:                                         | Access key status (e.g., `Active`).                        |
| `username`                                                 | *string*                                                   | :heavy_minus_sign:                                         | Underlying IAM user the key belongs to.                    |