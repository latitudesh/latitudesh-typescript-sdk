# AccessScope

`fullaccess` grants access to all of the project's buckets. `limited_access` restricts the key to the buckets listed in `bucket_permissions`.

## Example Usage

```typescript
import { AccessScope } from "latitudesh-typescript-sdk/models/operations";

let value: AccessScope = "fullaccess";
```

## Values

```typescript
"fullaccess" | "limited_access"
```