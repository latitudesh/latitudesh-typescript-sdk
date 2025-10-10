# GetProjectUserDataRequest

## Example Usage

```typescript
import { GetProjectUserDataRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetProjectUserDataRequest = {
  projectId: "<id>",
  userDataId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `projectId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | Project ID or Slug                                                                          |
| `userDataId`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `extraFieldsUserData`                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | The `decoded_content` is provided as an extra attribute that shows content in decoded form. |