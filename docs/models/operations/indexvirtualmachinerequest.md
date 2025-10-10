# IndexVirtualMachineRequest

## Example Usage

```typescript
import { IndexVirtualMachineRequest } from "latitudesh-typescript-sdk/models/operations";

let value: IndexVirtualMachineRequest = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filterProject`                                                                                                                                                    | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The project ID or Slug to filter by                                                                                                                                |
| `extraFieldsVirtualMachines`                                                                                                                                       | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The `credentials` are provided as extra attributes that are lazy loaded. To request it, just set `extra_fields[virtual_machines]=credentials` in the query string. |