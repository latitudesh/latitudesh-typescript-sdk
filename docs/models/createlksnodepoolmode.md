# CreateLksNodePoolMode

on_demand provisions new servers of `plan` from stock. allocated builds the pool from `server_ids`, servers already in the cluster project: each one is reinstalled with the LKS node image (erasing its disks) and, when it leaves the pool, reinstalled with a clean OS (no data, keys or user data are restored).

## Example Usage

```typescript
import { CreateLksNodePoolMode } from "latitudesh-typescript-sdk/models";

let value: CreateLksNodePoolMode = "on_demand";
```

## Values

```typescript
"on_demand" | "allocated"
```