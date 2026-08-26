# Block

NVMe-TCP block mapping of a high performance volume. Null for volumes that are not mapped to a server.

## Example Usage

```typescript
import { Block } from "latitudesh-typescript-sdk/models";

let value: Block = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `nqn`                                     | *string*                                  | :heavy_minus_sign:                        | NVMe Qualified Name of the mapped server. |
| `nsid`                                    | *number*                                  | :heavy_minus_sign:                        | NVMe namespace ID of the mapping.         |
| `serverId`                                | *string*                                  | :heavy_minus_sign:                        | ID of the server the volume is mapped to. |