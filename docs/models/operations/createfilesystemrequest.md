# CreateFilesystemRequest

## Example Usage

```typescript
import { CreateFilesystemRequest } from "latitudesh-typescript-sdk/models/operations";

let value: CreateFilesystemRequest = {
  data: {
    type: "filesystems",
    attributes: {
      project: "<value>",
      name: "<value>",
      region: "<value>",
      protocols: [
        "nfs3",
      ],
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.CreateFilesystemData2](../../models/operations/createfilesystemdata2.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |