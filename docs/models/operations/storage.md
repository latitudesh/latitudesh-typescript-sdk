# Storage

Storage consumption metrics

## Example Usage

```typescript
import { Storage } from "latitudesh-typescript-sdk/models/operations";

let value: Storage = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `consumed`                                         | *number*                                           | :heavy_minus_sign:                                 | Amount of storage consumed                         |
| `unit`                                             | [operations.Unit](../../models/operations/unit.md) | :heavy_minus_sign:                                 | Unit of measurement for storage                    |