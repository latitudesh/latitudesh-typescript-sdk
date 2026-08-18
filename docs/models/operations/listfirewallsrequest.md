# ListFirewallsRequest

## Example Usage

```typescript
import { ListFirewallsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ListFirewallsRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `filterProject`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `filterTags`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Comma-separated tag IDs. Returns firewalls that have all the given tags. |
| `pageSize`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | Number of items to return per page                                       |
| `pageNumber`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | Page number to return (starts at 1)                                      |