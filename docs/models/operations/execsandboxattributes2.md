# ExecSandboxAttributes2

## Example Usage

```typescript
import { ExecSandboxAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: ExecSandboxAttributes2 = {
  command: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `command`                                               | *string*[]                                              | :heavy_check_mark:                                      | Command and arguments to run                            |
| `environment`                                           | Record<string, *string*>                                | :heavy_minus_sign:                                      | Environment variables set for the command               |
| `workdir`                                               | *string*                                                | :heavy_minus_sign:                                      | Working directory for the command                       |
| `timeoutSeconds`                                        | *number*                                                | :heavy_minus_sign:                                      | Maximum run time of the command. Defaults to 30 seconds |