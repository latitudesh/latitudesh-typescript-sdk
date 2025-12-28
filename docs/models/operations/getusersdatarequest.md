# GetUsersDataRequest

## Example Usage

```typescript
import { GetUsersDataRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetUsersDataRequest = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `filterProject`                                                                             | *string*                                                                                    | :heavy_minus_sign:                                                                          | Project ID or slug                                                                          |
| `filterScope`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Filter by scope: `project` (has project), `team` (no project), or empty (all)               |
| `extraFieldsUserData`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | The `decoded_content` is provided as an extra attribute that shows content in decoded form. |