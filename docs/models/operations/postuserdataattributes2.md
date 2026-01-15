# PostUserDataAttributes2

## Example Usage

```typescript
import { PostUserDataAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: PostUserDataAttributes2 = {
  description: "pfft jaggedly kookily failing thorny uselessly every meanwhile",
  content: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `description`                           | *string*                                | :heavy_check_mark:                      | description of the User Data            |
| `project`                               | *string*                                | :heavy_minus_sign:                      | Project ID or slug                      |
| `content`                               | *string*                                | :heavy_check_mark:                      | base64 encoded content of the User Data |