# ManagedDatabasePayloadData

## Example Usage

```typescript
import { ManagedDatabasePayloadData } from "latitudesh-typescript-sdk/models";

let value: ManagedDatabasePayloadData = {
  attributes: {
    projectId: "<id>",
    region: "ASH",
    plan: "db.psql.small",
    engine: "postgres",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [models.ManagedDatabasePayloadType](../models/manageddatabasepayloadtype.md)             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `attributes`                                                                             | [models.ManagedDatabasePayloadAttributes](../models/manageddatabasepayloadattributes.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |