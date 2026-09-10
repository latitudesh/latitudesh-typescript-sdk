# ManagedDatabaseUpdatePayloadData

## Example Usage

```typescript
import { ManagedDatabaseUpdatePayloadData } from "latitudesh-typescript-sdk/models";

let value: ManagedDatabaseUpdatePayloadData = {
  attributes: {
    trustedSources: [
      "203.0.113.0/24",
      "198.51.100.0/24",
    ],
    parameters: {
      "shared_buffers": "256MB",
      "work_mem": "16MB",
      "effective_cache_size": "1GB",
    },
    pooler: {
      "enabled": true,
      "default_pool_size": 30,
      "max_client_conn": 200,
    },
    backup: {
      "enabled": true,
      "schedule": "0 0 0 * * *",
      "s3Endpoint": "https://s3.amazonaws.com",
      "bucketName": "my-db-backups",
      "path": "prod/postgres",
      "retentionPolicy": "7",
    },
    accessCredentials: {
      accessKeyId: "AKIAIOSFODNN7EXAMPLE",
      secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    },
    supabase: true,
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [models.ManagedDatabaseUpdatePayloadType](../models/manageddatabaseupdatepayloadtype.md)                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `attributes`                                                                                                                               | [models.ManagedDatabaseUpdatePayloadAttributes](../models/manageddatabaseupdatepayloadattributes.md)                                       | :heavy_minus_sign:                                                                                                                         | At least one attribute is required. trusted_sources applies to any engine; parameters, pooler, backup and supabase apply to postgres only. |