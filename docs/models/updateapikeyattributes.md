# UpdateApiKeyAttributes

## Example Usage

```typescript
import { UpdateApiKeyAttributes } from "latitudesh-typescript-sdk/models";

let value: UpdateApiKeyAttributes = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Name of the API Key                                                                |
| `readOnly`                                                                         | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the API Key is read-only. Read-only keys can only perform GET requests.    |
| `allowedIps`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | List of allowed IP addresses or CIDR ranges (e.g., "192.168.1.100", "10.0.0.0/24") |