# Requirements

The cluster's requirements, and what is expected of each

## Example Usage

```typescript
import { Requirements } from "latitudesh-typescript-sdk/models";

let value: Requirements = {
  items: [
    {
      id: "bios_smt",
      label: "BIOS: multithreading",
      category: "bios",
      check: "bios_smt",
    },
  ],
  values: {
    "key": {
      expected: "Disabled",
      note: "HPC jobs",
    },
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [models.Item](../models/item.md)[]                               | :heavy_minus_sign:                                               | The requirements                                                 |
| `values`                                                         | Record<string, [models.Values](../models/values.md)>             | :heavy_minus_sign:                                               | What is expected of each requirement, and why, by requirement id |