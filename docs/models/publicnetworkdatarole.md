# PublicNetworkDataRole

gateway: reserved for the network gateway; server: a server on the network; elastic_ip: an elastic IP; reserved: held in IPAM but not by a server; available: free to use

## Example Usage

```typescript
import { PublicNetworkDataRole } from "latitudesh-typescript-sdk/models";

let value: PublicNetworkDataRole = "server";
```

## Values

```typescript
"gateway" | "server" | "elastic_ip" | "reserved" | "available"
```