# LksClusterDataNetwork

Configured cluster CIDRs. Always present: the ranges are columns on the cluster with platform defaults.

## Example Usage

```typescript
import { LksClusterDataNetwork } from "latitudesh-typescript-sdk/models";

let value: LksClusterDataNetwork = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `podCidrs`         | *string*[]         | :heavy_minus_sign: | N/A                |
| `serviceCidrs`     | *string*[]         | :heavy_minus_sign: | N/A                |
| `nodeCidrs`        | *string*[]         | :heavy_minus_sign: | N/A                |