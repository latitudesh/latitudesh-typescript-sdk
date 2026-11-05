# SandboxDataAttributes

## Example Usage

```typescript
import { SandboxDataAttributes } from "latitudesh-typescript-sdk/models";

let value: SandboxDataAttributes = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Name of the sandbox                                                                                  |
| `status`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Lifecycle phase reported by the sandbox runtime (e.g. provisioning, ready, error, deleting, unknown) |
| `image`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Container image the sandbox runs. Omitted when the runtime default is used                           |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Date the sandbox was created. Omitted while the runtime has not reported it                          |
| `project`                                                                                            | [models.SandboxDataProject](../models/sandboxdataproject.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |