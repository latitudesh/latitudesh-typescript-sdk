# VirtualNetworkDataAttributes

## Example Usage

```typescript
import { VirtualNetworkDataAttributes } from "latitudesh-typescript-sdk/models";

let value: VirtualNetworkDataAttributes = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `vid`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | vlan ID of the virtual network                                                                |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name of the virtual network                                                                   |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the virtual network                                                            |
| `project`                                                                                     | [models.ProjectInclude](../models/projectinclude.md)                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `region`                                                                                      | [models.VirtualNetworkDataRegion](../models/virtualnetworkdataregion.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `assignmentsCount`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Amount of devices assigned to the virtual network                                             |
| `tags`                                                                                        | [models.Tag](../models/tag.md)[]                                                              | :heavy_minus_sign:                                                                            | Tags associated with the virtual network                                                      |