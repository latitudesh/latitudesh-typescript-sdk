# AccessCredentials

S3 credentials used with backup (postgres only)

## Example Usage

```typescript
import { AccessCredentials } from "latitudesh-typescript-sdk/models";

let value: AccessCredentials = {
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accessKeyId`      | *string*           | :heavy_minus_sign: | N/A                |
| `secretAccessKey`  | *string*           | :heavy_minus_sign: | N/A                |