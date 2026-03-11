# Node

## Example Usage

```typescript
import { Node } from "latitudesh-typescript-sdk/models";

let value: Node = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for the node (machine name)                              |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Name of the node                                                           |
| `hostname`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | Hostname of the node                                                       |
| `serverId`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | The Latitude server ID associated with this node                           |
| `type`                                                                     | [models.KubernetesClusterDataType](../models/kubernetesclusterdatatype.md) | :heavy_minus_sign:                                                         | The role of this node in the cluster                                       |
| `status`                                                                   | [models.NodeStatus](../models/nodestatus.md)                               | :heavy_minus_sign:                                                         | Current status of the node                                                 |
| `ip`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Primary IP address (external if available, otherwise internal)             |
| `internalIp`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Internal/private IP address                                                |
| `externalIp`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | External/public IP address                                                 |