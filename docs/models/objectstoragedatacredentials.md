# ObjectStorageDataCredentials

S3 access credentials. Only included when `extra_fields[object_storages]=credentials` is requested and the requesting user is the bucket's creator.

## Example Usage

```typescript
import { ObjectStorageDataCredentials } from "latitudesh-typescript-sdk/models";

let value: ObjectStorageDataCredentials = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `accessKey`                      | *string*                         | :heavy_minus_sign:               | S3 access key for authentication |