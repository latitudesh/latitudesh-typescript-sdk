# ManagedDatabaseUpdatePayloadAttributes

At least one attribute is required. trusted_sources applies to any engine; parameters, pooler, backup and supabase apply to postgres only.

## Example Usage

```typescript
import { ManagedDatabaseUpdatePayloadAttributes } from "latitudesh-typescript-sdk/models";

let value: ManagedDatabaseUpdatePayloadAttributes = {
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
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `trustedSources`                                                                                                                                                         | *string*[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | Array of CIDR addresses to allow connections from                                                                                                                        | [<br/>"203.0.113.0/24",<br/>"198.51.100.0/24"<br/>]                                                                                                                      |
| `parameters`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Custom PostgreSQL parameters (postgres only). Each value must fall within the selected plan's allowed range.                                                             | {<br/>"shared_buffers": "256MB",<br/>"work_mem": "16MB",<br/>"effective_cache_size": "1GB"<br/>}                                                                         |
| `pooler`                                                                                                                                                                 | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | PgBouncer pooler configuration (postgres only)                                                                                                                           | {<br/>"enabled": true,<br/>"default_pool_size": 30,<br/>"max_client_conn": 200<br/>}                                                                                     |
| `backup`                                                                                                                                                                 | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | Scheduled backup configuration (postgres only)                                                                                                                           | {<br/>"enabled": true,<br/>"schedule": "0 0 0 * * *",<br/>"s3Endpoint": "https://s3.amazonaws.com",<br/>"bucketName": "my-db-backups",<br/>"path": "prod/postgres",<br/>"retentionPolicy": "7"<br/>} |
| `accessCredentials`                                                                                                                                                      | [models.AccessCredentials](../models/accesscredentials.md)                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | S3 credentials used with backup (postgres only)                                                                                                                          | {<br/>"accessKeyId": "AKIAIOSFODNN7EXAMPLE",<br/>"secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"<br/>}                                                     |
| `supabase`                                                                                                                                                               | *boolean*                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                       | Enable the Supabase service layer (postgres only)                                                                                                                        | true                                                                                                                                                                     |