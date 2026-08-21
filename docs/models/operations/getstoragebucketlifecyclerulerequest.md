# GetStorageBucketLifecycleRuleRequest

## Example Usage

```typescript
import { GetStorageBucketLifecycleRuleRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetStorageBucketLifecycleRuleRequest = {
  bucketId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `bucketId`                   | *string*                     | :heavy_check_mark:           | The object storage bucket ID |
| `id`                         | *string*                     | :heavy_check_mark:           | The lifecycle rule ID        |