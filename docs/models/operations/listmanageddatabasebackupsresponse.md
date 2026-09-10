# ListManagedDatabaseBackupsResponse

OK

## Example Usage

```typescript
import { ListManagedDatabaseBackupsResponse } from "latitudesh-typescript-sdk/models/operations";

let value: ListManagedDatabaseBackupsResponse = {
  scheduledBackup: {},
  backups: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scheduledBackup`                                                        | [operations.ScheduledBackup](../../models/operations/scheduledbackup.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `backups`                                                                | [operations.Backup](../../models/operations/backup.md)[]                 | :heavy_check_mark:                                                       | N/A                                                                      |