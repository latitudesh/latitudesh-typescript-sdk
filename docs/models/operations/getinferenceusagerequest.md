# GetInferenceUsageRequest

## Example Usage

```typescript
import { GetInferenceUsageRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetInferenceUsageRequest = {
  projectId: "<id>",
  from: new Date("2024-08-31T07:07:49.925Z"),
  to: new Date("2024-03-19T13:23:20.557Z"),
  granularity: "1h",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Project ID or Slug                                                                            |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of the window (inclusive), truncated to whole seconds                                   |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End of the window (exclusive), truncated to whole seconds; at most 31 days after from         |
| `granularity`                                                                                 | [operations.Granularity](../../models/operations/granularity.md)                              | :heavy_check_mark:                                                                            | Size of each series bucket                                                                    |