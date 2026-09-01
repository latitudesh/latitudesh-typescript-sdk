# ShowManagedDatabaseMetricsRequest

## Example Usage

```typescript
import { ShowManagedDatabaseMetricsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ShowManagedDatabaseMetricsRequest = {
  managedDatabaseId: "<id>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `managedDatabaseId`                                                                                                                          | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Managed database ID                                                                                                                          |
| `period`                                                                                                                                     | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Time window in seconds. One of 1800, 3600, 21600, 86400, 604800 (default 1800).                                                              |
| `queries`                                                                                                                                    | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Comma-separated metrics to fetch. Defaults to all: cpuUsage, memoryUsage, tpsUsage, maxConnections, deadlocks, blockedQueries, databaseSize. |