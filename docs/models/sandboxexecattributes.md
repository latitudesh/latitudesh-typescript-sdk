# SandboxExecAttributes

## Example Usage

```typescript
import { SandboxExecAttributes } from "latitudesh-typescript-sdk/models";

let value: SandboxExecAttributes = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `stdout`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Standard output, capped at 1 MiB                                   |
| `stderr`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Standard error, capped at 1 MiB                                    |
| `exitCode`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | Exit code of the command. Null when the command did not report one |
| `truncated`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether stdout or stderr exceeded the cap and was truncated        |