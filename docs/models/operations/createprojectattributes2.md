# CreateProjectAttributes2

## Example Usage

```typescript
import { CreateProjectAttributes2 } from "latitudesh-typescript-sdk/models/operations";

let value: CreateProjectAttributes2 = {
  name: "<value>",
  provisioningType: "on_demand",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The project name. Must be unique.                                                            |
| `provisioningType`                                                                           | [operations.ProvisioningType2](../../models/operations/provisioningtype2.md)                 | :heavy_check_mark:                                                                           | The provisioning type of the project. Default: on_demand                                     |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The project description.                                                                     |
| `environment`                                                                                | [operations.CreateProjectEnvironment2](../../models/operations/createprojectenvironment2.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |