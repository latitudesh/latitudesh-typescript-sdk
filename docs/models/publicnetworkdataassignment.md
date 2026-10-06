# PublicNetworkDataAssignment

The resource holding the address, when it is a server or an elastic IP

## Example Usage

```typescript
import { PublicNetworkDataAssignment } from "latitudesh-typescript-sdk/models";

let value: PublicNetworkDataAssignment = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | [models.AssignmentType](../models/assignmenttype.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `hostname`                                           | *string*                                             | :heavy_minus_sign:                                   | Servers only                                         |