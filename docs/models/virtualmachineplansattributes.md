# VirtualMachinePlansAttributes

## Example Usage

```typescript
import { VirtualMachinePlansAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlansAttributes = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the plan                                                                           |
| `specs`                                                                                        | [models.VirtualMachinePlansSpecs](../models/virtualmachineplansspecs.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `regions`                                                                                      | [models.VirtualMachinePlansRegion](../models/virtualmachineplansregion.md)[]                   | :heavy_minus_sign:                                                                             | List of regions where infrastructure with available stock exists for this virtual machine plan |
| `stockLevel`                                                                                   | [models.VirtualMachinePlansStockLevel](../models/virtualmachineplansstocklevel.md)             | :heavy_minus_sign:                                                                             | The stock level of the plan                                                                    |