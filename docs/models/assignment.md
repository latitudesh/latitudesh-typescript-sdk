# Assignment

Server assignment information. Returns an empty object when the IP is not assigned to an active server (e.g., when the server is decommissioning or deleted). The hostname is null when the assigned server has no hostname set.

## Example Usage

```typescript
import { Assignment } from "latitudesh-typescript-sdk/models";

let value: Assignment = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `serverId`         | *string*           | :heavy_minus_sign: | N/A                |
| `hostname`         | *string*           | :heavy_minus_sign: | N/A                |
| `assignedAt`       | *string*           | :heavy_minus_sign: | N/A                |