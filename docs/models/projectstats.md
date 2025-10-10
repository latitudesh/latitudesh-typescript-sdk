# ProjectStats

## Example Usage

```typescript
import { ProjectStats } from "latitudesh-typescript-sdk/models";

let value: ProjectStats = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `ipAddresses`                                      | *number*                                           | :heavy_minus_sign:                                 | The number of IP addresses assigned to the project |
| `prefixes`                                         | *number*                                           | :heavy_minus_sign:                                 | The IP address prefixes in the project             |
| `servers`                                          | *number*                                           | :heavy_minus_sign:                                 | The number of servers assigned to the project      |
| `containers`                                       | *number*                                           | :heavy_minus_sign:                                 | The number of containers assigned to the project   |
| `vlans`                                            | *number*                                           | :heavy_minus_sign:                                 | The number of VLANs assigned to the project        |