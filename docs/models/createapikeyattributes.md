# CreateApiKeyAttributes

## Example Usage

```typescript
import { CreateApiKeyAttributes } from "latitudesh-typescript-sdk/models";

let value: CreateApiKeyAttributes = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Name of the API Key                                                                                        |
| `readOnly`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Whether the API Key is read-only. Read-only keys can only perform GET, HEAD, and OPTIONS requests.         |
| `allowedIps`                                                                                               | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | List of allowed IP addresses or CIDR ranges. If set, the API key can only be used from these IP addresses. |