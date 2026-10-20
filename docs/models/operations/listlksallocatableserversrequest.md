# ListLksAllocatableServersRequest

## Example Usage

```typescript
import { ListLksAllocatableServersRequest } from "latitudesh-typescript-sdk/models/operations";

let value: ListLksAllocatableServersRequest = {
  filterProject: "<value>",
  filterSite: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `filterProject`    | *string*           | :heavy_check_mark: | Project id or slug |
| `filterSite`       | *string*           | :heavy_check_mark: | Site slug          |