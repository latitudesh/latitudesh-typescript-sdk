# PostSshKeyAttributes2

## Example Usage

```typescript
import { PostSshKeyAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: PostSshKeyAttributes2 = {
  name: "<value>",
  publicKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `name`              | *string*            | :heavy_check_mark:  | Name of the SSH Key |
| `project`           | *string*            | :heavy_minus_sign:  | Project ID or slug  |
| `publicKey`         | *string*            | :heavy_check_mark:  | SSH Public Key      |