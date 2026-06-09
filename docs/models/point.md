# Point

## Example Usage

```typescript
import { Point } from "latitudesh-typescript-sdk/models";

let value: Point = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO 8601 UTC timestamp (seconds precision)                                                    |
| `value`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Sampled value, rounded to 2 decimal places                                                    |