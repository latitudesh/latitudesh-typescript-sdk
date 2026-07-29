# PostStorageAccessKeysDataRequest

## Example Usage

```typescript
import { PostStorageAccessKeysDataRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageAccessKeysDataRequest = {
  type: "access_keys",
  attributes: {
    project: "<value>",
    accessKeyStorageClass: "standard",
    name: "<value>",
    accessScope: "limited_access",
    region: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.PostStorageAccessKeysTypeRequestBody](../../models/operations/poststorageaccesskeystyperequestbody.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `attributes`                                                                                                                   | [operations.PostStorageAccessKeysAttributesRequestBody](../../models/operations/poststorageaccesskeysattributesrequestbody.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |