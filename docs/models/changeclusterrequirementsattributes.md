# ChangeClusterRequirementsAttributes

Exactly one of add, add_checks, remove, remove_checks or set. expected and note go with add and set.

## Example Usage

```typescript
import { ChangeClusterRequirementsAttributes } from "latitudesh-typescript-sdk/models";

let value: ChangeClusterRequirementsAttributes = {
  add: "storage_fs",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `add`                                                 | *string*                                              | :heavy_minus_sign:                                    | A requirement to add                                  | storage_fs                                            |
| `addChecks`                                           | *string*[]                                            | :heavy_minus_sign:                                    | Checks to add at once                                 |                                                       |
| `remove`                                              | *string*                                              | :heavy_minus_sign:                                    | A requirement id to remove                            |                                                       |
| `removeChecks`                                        | *string*[]                                            | :heavy_minus_sign:                                    | Checks to remove at once                              |                                                       |
| `set`                                                 | *string*                                              | :heavy_minus_sign:                                    | A requirement id whose expected value or note changes |                                                       |
| `expected`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |                                                       |
| `note`                                                | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |                                                       |