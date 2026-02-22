# ServerDataStatus

`on` - The server is powered ON
`off` - The server is powered OFF
`unknown` - The server power status is unknown
`disk_erasing` - The server is in reinstalling state `disk_erasing`
`deploying` - The server is deploying or reinstalling
`failed_deployment` - The server has failed deployment or reinstall
`rescue_mode` - The server is in rescue mode


## Example Usage

```typescript
import { ServerDataStatus } from "latitudesh-typescript-sdk/models";

let value: ServerDataStatus = "deploying";
```

## Values

```typescript
"on" | "off" | "unknown" | "disk_erasing" | "deploying" | "failed_deployment" | "rescue_mode"
```