# GetProjectUsersDataRequest

## Example Usage

```typescript
import { GetProjectUsersDataRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetProjectUsersDataRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `projectId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | Project ID or Slug                                                                          |
| `extraFieldsUserData`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | The `decoded_content` is provided as an extra attribute that shows content in decoded form. |