# ManagedDatabasePayload

## Example Usage

```typescript
import { ManagedDatabasePayload } from "latitudesh-typescript-sdk/models";

let value: ManagedDatabasePayload = {
  data: {
    type: "managed_databases",
    attributes: {
      name: "my-analytics-db",
      projectId: "proj_ABC123",
      region: "ASH",
      plan: "db.clickhouse.dev",
      engine: "clickhouse",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [models.ManagedDatabasePayloadData](../models/manageddatabasepayloaddata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |