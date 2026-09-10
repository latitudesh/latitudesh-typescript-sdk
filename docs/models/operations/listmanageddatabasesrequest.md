# ListManagedDatabasesRequest

## Example Usage

```typescript
import { ListManagedDatabasesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ListManagedDatabasesRequest = {
  projectId: "<id>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `projectId`                             | *string*                                | :heavy_check_mark:                      | The project slug to filter databases by |
| `engine`                                | *string*                                | :heavy_minus_sign:                      | Filter by database engine               |