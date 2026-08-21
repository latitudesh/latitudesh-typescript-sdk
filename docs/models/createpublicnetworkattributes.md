# CreatePublicNetworkAttributes

## Example Usage

```typescript
import { CreatePublicNetworkAttributes } from "latitudesh-typescript-sdk/models";

let value: CreatePublicNetworkAttributes = {
  projectId: "<id>",
  site: "<value>",
  size: 28,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `projectId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The project to create the public network in                                  |
| `site`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The site slug the public network is bound to                                 |
| `size`                                                                       | [models.CreatePublicNetworkSize](../models/createpublicnetworksize.md)       | :heavy_check_mark:                                                           | IPv4 prefix length. Determines how many servers the public network can host. |