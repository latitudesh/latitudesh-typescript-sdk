# PostStorageObjectsRequest

## Example Usage

```typescript
import { PostStorageObjectsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageObjectsRequest = {
  data: {
    type: "objects",
    attributes: {
      project: "<value>",
      name: "<value>",
      region: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.PostStorageObjectsData](../../models/operations/poststorageobjectsdata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |