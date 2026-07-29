# GetStorageAccessKeysData

Access keys grouped by storage class.

## Example Usage

```typescript
import { GetStorageAccessKeysData } from "latitudesh-typescript-sdk/models/operations";

let value: GetStorageAccessKeysData = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `standard`                                                                 | [operations.Standard](../../models/operations/standard.md)[]               | :heavy_minus_sign:                                                         | Wasabi (standard) access keys.                                             |
| `highPerformance`                                                          | [operations.HighPerformance](../../models/operations/highperformance.md)[] | :heavy_minus_sign:                                                         | VAST (high_performance) access keys, across all regions.                   |