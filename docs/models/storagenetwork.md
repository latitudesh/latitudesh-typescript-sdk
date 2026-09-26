# StorageNetwork

Storage network the mapped server joins to reach the volume over NVMe-TCP. Null until the network has been provisioned for the volume.

## Example Usage

```typescript
import { StorageNetwork } from "latitudesh-typescript-sdk/models";

let value: StorageNetwork = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `vid`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | VLAN ID of the storage VLAN to tag on the server bond.                                        |
| `hostCidr`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Storage IP of the mapped server, in CIDR notation. Null until the mapping status is "mapped". |
| `gateway`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Gateway of the storage network, used for the routes below.                                    |
| `routes`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Storage infrastructure prefixes to route via the gateway.                                     |
| `blockGateway`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | NVMe-oF/TCP discovery portal address.                                                         |
| `blockPort`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | NVMe-oF/TCP discovery portal port.                                                            |