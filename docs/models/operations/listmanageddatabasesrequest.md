# ListManagedDatabasesRequest

## Example Usage

```typescript
import { ListManagedDatabasesRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ListManagedDatabasesRequest = {
  projectId: "<id>",
  engine: "postgres",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `projectId`                             | *string*                                | :heavy_check_mark:                      | The project slug to filter databases by |                                         |
| `engine`                                | *string*                                | :heavy_minus_sign:                      | Filter by database engine               | postgres                                |