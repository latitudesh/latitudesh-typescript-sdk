# ProjectStats

## Example Usage

```typescript
import { ProjectStats } from "latitudesh-typescript-sdk/models";

let value: ProjectStats = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `databases`                                                   | *number*                                                      | :heavy_minus_sign:                                            | The number of database servers assigned to the project        |
| `ipAddresses`                                                 | *number*                                                      | :heavy_minus_sign:                                            | The number of IP addresses assigned to the project            |
| `prefixes`                                                    | *number*                                                      | :heavy_minus_sign:                                            | The IP address prefixes in the project                        |
| `servers`                                                     | *number*                                                      | :heavy_minus_sign:                                            | The number of servers assigned to the project                 |
| `storages`                                                    | *number*                                                      | :heavy_minus_sign:                                            | The number of storages assigned to the project                |
| `virtualMachines`                                             | *number*                                                      | :heavy_minus_sign:                                            | The number of active virtual machines assigned to the project |
| `vlans`                                                       | *number*                                                      | :heavy_minus_sign:                                            | The number of VLANs assigned to the project                   |