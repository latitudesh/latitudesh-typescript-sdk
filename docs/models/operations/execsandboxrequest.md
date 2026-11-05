# ExecSandboxRequest

## Example Usage

```typescript
import { ExecSandboxRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ExecSandboxRequest = {
  sandboxId: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `sandboxId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | Sandbox name                                                                             |
| `requestBody`                                                                            | [operations.ExecSandboxRequestBody2](../../models/operations/execsandboxrequestbody2.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |