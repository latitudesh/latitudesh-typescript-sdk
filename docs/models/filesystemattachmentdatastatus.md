# FilesystemAttachmentDataStatus

Whether the server is attached to the filesystem storage network. "attaching"/"detaching" while an attach or detach runs, "failed" when it gave up.

## Example Usage

```typescript
import { FilesystemAttachmentDataStatus } from "latitudesh-typescript-sdk/models";

let value: FilesystemAttachmentDataStatus = "failed";
```

## Values

```typescript
"attaching" | "attached" | "detaching" | "detached" | "failed"
```