# VirtualMachinePlansRegion

## Example Usage

```typescript
import { VirtualMachinePlansRegion } from "latitudesh-typescript-sdk/models";

let value: VirtualMachinePlansRegion = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the region                                                       |
| `available`                                                                  | *string*[]                                                                   | :heavy_minus_sign:                                                           | List of site codes where this virtual machine plan can be deployed           |
| `pricing`                                                                    | [models.VirtualMachinePlansPricing](../models/virtualmachineplanspricing.md) | :heavy_minus_sign:                                                           | Pricing information for this plan in the region                              |