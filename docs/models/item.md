# Item

## Example Usage

```typescript
import { Item } from "latitudesh-typescript-sdk/models";

let value: Item = {
  id: "bios_smt",
  label: "BIOS: multithreading",
  category: "bios",
  check: "bios_smt",
  nodeGroupId: "7",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | bios_smt                                                                        |
| `label`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | BIOS: multithreading                                                            |
| `category`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | bios                                                                            |
| `check`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | bios_smt                                                                        |
| `expected`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `note`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `nodeGroupId`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The node group the requirement applies to; absent or null for the whole cluster | 7                                                                               |