# ServerDataPrefix

**Preview** (`prefixes_api` feature flag). The customer prefix this server is bonded onto, or null. Fetch full details from GET /prefixes/{id}.

## Example Usage

```typescript
import { ServerDataPrefix } from "latitudesh-typescript-sdk/models";

let value: ServerDataPrefix = {
  id: "pfx_2aBcDeFgH",
  ipv4: "10.90.0.0/26",
  ipv6: "2001:db8::/64",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                | pfx_2aBcDeFgH      |
| `ipv4`             | *string*           | :heavy_minus_sign: | N/A                | 10.90.0.0/26       |
| `ipv6`             | *string*           | :heavy_minus_sign: | N/A                | 2001:db8::/64      |