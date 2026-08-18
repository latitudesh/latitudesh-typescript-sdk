# CreatePrefixAttributes

## Example Usage

```typescript
import { CreatePrefixAttributes } from "latitudesh-typescript-sdk/models";

let value: CreatePrefixAttributes = {
  projectId: "<id>",
  site: "<value>",
  size: 28,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The project to create the network in                                  |
| `site`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The site slug the network is bound to                                 |
| `size`                                                                | [models.CreatePrefixSize](../models/createprefixsize.md)              | :heavy_check_mark:                                                    | IPv4 prefix length. Determines how many servers the network can host. |