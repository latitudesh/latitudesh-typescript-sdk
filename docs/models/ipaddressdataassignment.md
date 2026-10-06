# IpAddressDataAssignment

Server assignment information. Returns an empty object when the IP is not assigned to an active server (e.g., when the server is decommissioning or deleted). The hostname is null when the assigned server has no hostname set.

## Example Usage

```typescript
import { IpAddressDataAssignment } from "latitudesh-typescript-sdk/models";

let value: IpAddressDataAssignment = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `serverId`         | *string*           | :heavy_minus_sign: | N/A                |
| `hostname`         | *string*           | :heavy_minus_sign: | N/A                |
| `assignedAt`       | *string*           | :heavy_minus_sign: | N/A                |