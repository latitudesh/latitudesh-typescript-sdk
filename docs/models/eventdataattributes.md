# EventDataAttributes

## Example Usage

```typescript
import { EventDataAttributes } from "latitudesh-typescript-sdk/models";

let value: EventDataAttributes = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `action`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `createdAt`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `author`                                                 | [models.Author](../models/author.md)                     | :heavy_minus_sign:                                       | N/A                                                      |
| `project`                                                | [models.EventDataProject](../models/eventdataproject.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `team`                                                   | [models.EventDataTeam](../models/eventdatateam.md)       | :heavy_minus_sign:                                       | N/A                                                      |
| `target`                                                 | [models.Target](../models/target.md)                     | :heavy_minus_sign:                                       | N/A                                                      |
| `properties`                                             | [models.Properties](../models/properties.md)             | :heavy_minus_sign:                                       | Additional event-specific data                           |