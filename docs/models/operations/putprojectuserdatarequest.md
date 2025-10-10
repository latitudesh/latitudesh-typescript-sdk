# PutProjectUserDataRequest

## Example Usage

```typescript
import { PutProjectUserDataRequest } from "latitudesh-typescript-sdk/models/operations";

let value: PutProjectUserDataRequest = {
  projectId: "<id>",
  userDataId: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | Project ID or Slug                                                                                     |
| `userDataId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.PutProjectUserDataRequestBody2](../../models/operations/putprojectuserdatarequestbody2.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |