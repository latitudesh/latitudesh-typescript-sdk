# PostStorageBucketsRequest

## Example Usage

```typescript
import { PostStorageBucketsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PostStorageBucketsRequest = {
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
| `data`                                                                                 | [operations.PostStorageBucketsData](../../models/operations/poststoragebucketsdata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |