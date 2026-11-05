# GetSandboxesRequest

## Example Usage

```typescript
import { GetSandboxesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetSandboxesRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `projectId`                                                   | *string*                                                      | :heavy_check_mark:                                            | ID of the project whose sandboxes are listed                  |
| `pageToken`                                                   | *string*                                                      | :heavy_minus_sign:                                            | Token returned in `meta.next_page_token` by the previous page |