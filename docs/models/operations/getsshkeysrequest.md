# GetSshKeysRequest

## Example Usage

```typescript
import { GetSshKeysRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetSshKeysRequest = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `filterProject`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Project ID or slug                                                                                                          |
| `filterTags`                                                                                                                | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The tags ids to filter by, separated by comma, e.g. `filter[tags]=tag_1,tag_2`will return ssh keys with `tag_1` AND `tag_2` |