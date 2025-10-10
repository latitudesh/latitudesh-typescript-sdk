# UpdateServerAttributes2

## Example Usage

```typescript
import { UpdateServerAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: UpdateServerAttributes2 = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `hostname`                                                                                                         | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `billing`                                                                                                          | [operations.UpdateServerBilling2](../../models/operations/updateserverbilling2.md)                                 | :heavy_minus_sign:                                                                                                 | The server billing type. Accepts `hourly` and `monthly` for on demand projects and `yearly` for reserved projects. |
| `tags`                                                                                                             | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | List of Tag IDs                                                                                                    |
| `project`                                                                                                          | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Project ID or slug to move the server to                                                                           |