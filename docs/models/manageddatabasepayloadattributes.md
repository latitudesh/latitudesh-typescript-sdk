# ManagedDatabasePayloadAttributes

## Example Usage

```typescript
import { ManagedDatabasePayloadAttributes } from "latitudesh-typescript-sdk/models";

let value: ManagedDatabasePayloadAttributes = {
  projectId: "<id>",
  region: "<value>",
  plan: "<value>",
  engine: "postgres",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | Display name (optional)                                                              |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | Project slug                                                                         |
| `region`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | Target region                                                                        |
| `plan`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Plan slug (e.g. db.clickhouse.dev)                                                   |
| `engine`                                                                             | [models.Engine](../models/engine.md)                                                 | :heavy_check_mark:                                                                   | Database engine                                                                      |
| `billing`                                                                            | [models.ManagedDatabasePayloadBilling](../models/manageddatabasepayloadbilling.md)   | :heavy_minus_sign:                                                                   | Billing cycle (postgres/clickhouse). Defaults to monthly when omitted.               |
| `parameters`                                                                         | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | Custom PostgreSQL parameters at create (postgres only)                               |
| `pooler`                                                                             | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | PgBouncer pooler configuration at create (postgres only)                             |
| `backup`                                                                             | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | Scheduled backup configuration at create (postgres only)                             |
| `recovery`                                                                           | [models.ManagedDatabasePayloadRecovery](../models/manageddatabasepayloadrecovery.md) | :heavy_minus_sign:                                                                   | Restore from a source database backup at create (postgres only)                      |