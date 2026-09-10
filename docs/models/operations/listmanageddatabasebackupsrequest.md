# ListManagedDatabaseBackupsRequest

## Example Usage

```typescript
import { ListManagedDatabaseBackupsRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ListManagedDatabaseBackupsRequest = {
  managedDatabaseId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `managedDatabaseId`                                                       | *string*                                                                  | :heavy_check_mark:                                                        | Managed database ID                                                       |
| `phase`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Filter backups by phase. Use 'completed' to return only finished backups. |