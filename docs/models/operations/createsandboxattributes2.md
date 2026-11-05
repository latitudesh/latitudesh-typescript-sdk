# CreateSandboxAttributes2

## Example Usage

```typescript
import { CreateSandboxAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateSandboxAttributes2 = {
  projectId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | ID of the project that owns the sandbox                          |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Name of the sandbox. Generated when omitted                      |
| `image`                                                          | *string*                                                         | :heavy_minus_sign:                                               | Container image to run. The runtime default is used when omitted |
| `environment`                                                    | Record<string, *string*>                                         | :heavy_minus_sign:                                               | Environment variables set in the sandbox                         |