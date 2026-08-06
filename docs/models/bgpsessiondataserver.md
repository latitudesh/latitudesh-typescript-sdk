# BgpSessionDataServer

The server announcing the Elastic IP over BGP. Null when the announcer could not be resolved to a server record.

## Example Usage

```typescript
import { BgpSessionDataServer } from "latitudesh-typescript-sdk/models";

let value: BgpSessionDataServer = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `hostname`         | *string*           | :heavy_minus_sign: | N/A                |
| `primaryIpv4`      | *string*           | :heavy_minus_sign: | N/A                |
| `operatingSystem`  | *string*           | :heavy_minus_sign: | N/A                |