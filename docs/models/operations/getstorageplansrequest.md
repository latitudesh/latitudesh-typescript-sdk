# GetStoragePlansRequest

## Example Usage

```typescript
import { GetStoragePlansRequest } from "latitudesh-typescript-sdk/models/operations";

let value: GetStoragePlansRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `filterStorageType`                                    | *string*                                               | :heavy_minus_sign:                                     | Filter by storage type (filesystem or object)          |
| `filterStorageClass`                                   | *string*                                               | :heavy_minus_sign:                                     | Filter by storage class (standard or high_performance) |