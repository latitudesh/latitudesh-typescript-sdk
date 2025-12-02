# latitudesh-typescript-sdk
<!-- Start Summary [summary] -->
## Summary

Latitude.sh API: The Latitude.sh API is a RESTful API to manage your Latitude.sh account. It allows you to perform the same actions as the Latitude.sh dashboard.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [latitudesh-typescript-sdk](#latitudesh-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add latitudesh-typescript-sdk
```

### PNPM

```bash
pnpm add latitudesh-typescript-sdk
```

### Bun

```bash
bun add latitudesh-typescript-sdk
```

### Yarn

```bash
yarn add latitudesh-typescript-sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "-y", "--package", "latitudesh-typescript-sdk",
        "--",
        "mcp", "start",
        "--bearer", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "-y", "--package", "latitudesh-typescript-sdk",
        "--",
        "mcp", "start",
        "--bearer", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package latitudesh-typescript-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.apiKeys.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `bearer` | apiKey | API key | `LATITUDESH_BEARER`  |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.apiKeys.list();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiKeys](docs/sdks/apikeys/README.md)

* [list](docs/sdks/apikeys/README.md#list) - List API Keys
* [create](docs/sdks/apikeys/README.md#create) - Create API Key
* [update](docs/sdks/apikeys/README.md#update) - Regenerate API Key
* [delete](docs/sdks/apikeys/README.md#delete) - Delete API Key

### [billing](docs/sdks/billing/README.md)

* [listUsage](docs/sdks/billing/README.md#listusage) - List Billing Usage

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - List all Events

### [firewalls](docs/sdks/firewalls/README.md)

* [getAllFirewallAssignments](docs/sdks/firewalls/README.md#getallfirewallassignments) - List All Firewall Assignments
* [list](docs/sdks/firewalls/README.md#list) - List firewalls
* [create](docs/sdks/firewalls/README.md#create) - Create a firewall
* [get](docs/sdks/firewalls/README.md#get) - Retrieve Firewall
* [delete](docs/sdks/firewalls/README.md#delete) - Delete Firewall
* [update](docs/sdks/firewalls/README.md#update) - Update Firewall
* [listAssignments](docs/sdks/firewalls/README.md#listassignments) - Firewall Assignments
* [deleteAssignment](docs/sdks/firewalls/README.md#deleteassignment) - Delete Firewall Assignment

#### [firewalls.assignments](docs/sdks/assignments/README.md)

* [create](docs/sdks/assignments/README.md#create) - Firewall Assignment

### [ipAddresses](docs/sdks/ipaddresses/README.md)

* [list](docs/sdks/ipaddresses/README.md#list) - List IPs
* [get](docs/sdks/ipaddresses/README.md#get) - Retrieve an IP

### [operatingSystems](docs/sdks/operatingsystems/README.md)

* [listPlans](docs/sdks/operatingsystems/README.md#listplans) - List all operating systems available

### [plans](docs/sdks/plans/README.md)

* [list](docs/sdks/plans/README.md#list) - List all Plans
* [get](docs/sdks/plans/README.md#get) - Retrieve a Plan
* [getBandwidth](docs/sdks/plans/README.md#getbandwidth) - List all bandwidth plans
* [updateBandwidth](docs/sdks/plans/README.md#updatebandwidth) - Buy or remove bandwidth packages
* [getContainersPlan](docs/sdks/plans/README.md#getcontainersplan) - Retrieve container plan
* [listStorage](docs/sdks/plans/README.md#liststorage) - List all Storage Plans

#### [plans.vm](docs/sdks/vm/README.md)

* [list](docs/sdks/vm/README.md#list) - List all Virtual Machines Plans

### [privateNetworks](docs/sdks/privatenetworks/README.md)

* [list](docs/sdks/privatenetworks/README.md#list) - List all Virtual Networks
* [create](docs/sdks/privatenetworks/README.md#create) - Create a Virtual Network
* [get](docs/sdks/privatenetworks/README.md#get) - Retrieve a Virtual Network
* [update](docs/sdks/privatenetworks/README.md#update) - Update a Virtual Network
* [listAssignments](docs/sdks/privatenetworks/README.md#listassignments) - List all servers assigned to virtual networks
* [assign](docs/sdks/privatenetworks/README.md#assign) - Assign Virtual network
* [deleteAssignment](docs/sdks/privatenetworks/README.md#deleteassignment) - Delete Virtual Network Assignment

### [projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - List all Projects
* [create](docs/sdks/projects/README.md#create) - Create a Project
* [delete](docs/sdks/projects/README.md#delete) - Delete a Project
* [update](docs/sdks/projects/README.md#update) - Update a Project

#### [~~projects.sshKeys~~](docs/sdks/projectssshkeys/README.md)

* [~~postProjectSshKey~~](docs/sdks/projectssshkeys/README.md#postprojectsshkey) - Create a Project SSH Key :warning: **Deprecated**

### [regions](docs/sdks/regions/README.md)

* [get](docs/sdks/regions/README.md#get) - List all Regions
* [fetch](docs/sdks/regions/README.md#fetch) - Retrieve a Region

### [roles](docs/sdks/roles/README.md)

* [list](docs/sdks/roles/README.md#list) - List all Roles
* [get](docs/sdks/roles/README.md#get) - Retrieve Role

### [servers](docs/sdks/servers/README.md)

* [list](docs/sdks/servers/README.md#list) - List all Servers
* [create](docs/sdks/servers/README.md#create) - Deploy Server
* [get](docs/sdks/servers/README.md#get) - Retrieve a Server
* [delete](docs/sdks/servers/README.md#delete) - Remove Server
* [update](docs/sdks/servers/README.md#update) - Update Server
* [getDeployConfig](docs/sdks/servers/README.md#getdeployconfig) - Retrieve Deploy Config
* [updateDeployConfig](docs/sdks/servers/README.md#updatedeployconfig) - Update Deploy Config
* [lock](docs/sdks/servers/README.md#lock) - Lock the server
* [unlock](docs/sdks/servers/README.md#unlock) - Unlock the server
* [getOutOfBand](docs/sdks/servers/README.md#getoutofband) - List Out of Band Connections
* [startOutOfBandConnection](docs/sdks/servers/README.md#startoutofbandconnection) - Start Out of Band Connection
* [runAction](docs/sdks/servers/README.md#runaction) - Run Server Action
* [createIpmiSession](docs/sdks/servers/README.md#createipmisession) - Generate IPMI credentials
* [startRescueMode](docs/sdks/servers/README.md#startrescuemode) - Puts a Server in rescue mode
* [exitRescueMode](docs/sdks/servers/README.md#exitrescuemode) - Exits rescue mode for a Server
* [scheduleDeletion](docs/sdks/servers/README.md#scheduledeletion) - Schedule the server deletion
* [unscheduleDeletion](docs/sdks/servers/README.md#unscheduledeletion) - Unschedule the server deletion
* [reinstall](docs/sdks/servers/README.md#reinstall) - Run Server Reinstall

### [sshKeys](docs/sdks/sshkeys/README.md)

* [~~list~~](docs/sdks/sshkeys/README.md#list) - List all Project SSH Keys :warning: **Deprecated**
* [~~get~~](docs/sdks/sshkeys/README.md#get) - Retrieve a Project SSH Key :warning: **Deprecated**
* [~~removeFromProject~~](docs/sdks/sshkeys/README.md#removefromproject) - Delete a Project SSH Key :warning: **Deprecated**
* [~~modifyProjectKey~~](docs/sdks/sshkeys/README.md#modifyprojectkey) - Update a Project SSH Key :warning: **Deprecated**
* [listAll](docs/sdks/sshkeys/README.md#listall) - List all SSH Keys
* [create](docs/sdks/sshkeys/README.md#create) - Create a SSH Key
* [retrieve](docs/sdks/sshkeys/README.md#retrieve) - Retrieve a SSH Key
* [delete](docs/sdks/sshkeys/README.md#delete) - Delete a SSH Key
* [update](docs/sdks/sshkeys/README.md#update) - Update a SSH Key

### [storage](docs/sdks/storage/README.md)

* [listFilesystems](docs/sdks/storage/README.md#listfilesystems) - List filesystems
* [createFilesystem](docs/sdks/storage/README.md#createfilesystem) - Create a filesystem for a project
* [deleteFilesystem](docs/sdks/storage/README.md#deletefilesystem) - Delete a filesystem for a project
* [updateFilesystem](docs/sdks/storage/README.md#updatefilesystem) - Update a filesystem for a project
* [getStorageVolumes](docs/sdks/storage/README.md#getstoragevolumes) - List volumes
* [postStorageVolumes](docs/sdks/storage/README.md#poststoragevolumes) - Create volume
* [getStorageVolume](docs/sdks/storage/README.md#getstoragevolume) - Get volume
* [deleteStorageVolumes](docs/sdks/storage/README.md#deletestoragevolumes) - Delete volume
* [postStorageVolumesMount](docs/sdks/storage/README.md#poststoragevolumesmount) - Mount volume

### [tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List all Tags
* [create](docs/sdks/tags/README.md#create) - Create a Tag
* [delete](docs/sdks/tags/README.md#delete) - Delete Tag
* [update](docs/sdks/tags/README.md#update) - Update Tag

### [teamMembers](docs/sdks/teammembers/README.md)

* [postTeamMembers](docs/sdks/teammembers/README.md#postteammembers) - Add a Team Member
* [delete](docs/sdks/teammembers/README.md#delete) - Remove a Team Member

### [teams](docs/sdks/teams/README.md)

* [get](docs/sdks/teams/README.md#get) - Retrieve the team
* [create](docs/sdks/teams/README.md#create) - Create a team
* [update](docs/sdks/teams/README.md#update) - Update a team

#### [teams.members](docs/sdks/members/README.md)

* [getTeamMembers](docs/sdks/members/README.md#getteammembers) - List all Team Members

### [traffic](docs/sdks/traffic/README.md)

* [get](docs/sdks/traffic/README.md#get) - Retrieve Traffic consumption
* [getQuota](docs/sdks/traffic/README.md#getquota) - Retrieve Traffic Quota

### [userData](docs/sdks/userdata/README.md)

* [~~getProjectUsersData~~](docs/sdks/userdata/README.md#getprojectusersdata) - List all Project User Data :warning: **Deprecated**
* [~~getProjectUserData~~](docs/sdks/userdata/README.md#getprojectuserdata) - Retrieve a Project User Data :warning: **Deprecated**
* [~~deleteProjectUserData~~](docs/sdks/userdata/README.md#deleteprojectuserdata) - Delete a Project User Data :warning: **Deprecated**
* [~~create~~](docs/sdks/userdata/README.md#create) - Create a Project User Data :warning: **Deprecated**
* [~~updateForProject~~](docs/sdks/userdata/README.md#updateforproject) - Update a Project User Data :warning: **Deprecated**
* [list](docs/sdks/userdata/README.md#list) - List all User Data
* [createNew](docs/sdks/userdata/README.md#createnew) - Create an User Data
* [retrieve](docs/sdks/userdata/README.md#retrieve) - Retrieve an User Data
* [delete](docs/sdks/userdata/README.md#delete) - Delete an User Data
* [update](docs/sdks/userdata/README.md#update) - Update an User Data

### [userProfile](docs/sdks/userprofile/README.md)

* [get](docs/sdks/userprofile/README.md#get) - Get user profile
* [update](docs/sdks/userprofile/README.md#update) - Update User Profile
* [listTeams](docs/sdks/userprofile/README.md#listteams) - List User Teams

### [virtualMachines](docs/sdks/virtualmachines/README.md)

* [list](docs/sdks/virtualmachines/README.md#list) - Get Teams Virtual Machines
* [create](docs/sdks/virtualmachines/README.md#create) - Create a Virtual Machine
* [get](docs/sdks/virtualmachines/README.md#get) - Get a Virtual Machine
* [delete](docs/sdks/virtualmachines/README.md#delete) - Destroy a Virtual Machine
* [createVirtualMachineAction](docs/sdks/virtualmachines/README.md#createvirtualmachineaction) - Run Virtual Machine Action

### [virtualNetworks](docs/sdks/virtualnetworks/README.md)

* [delete](docs/sdks/virtualnetworks/README.md#delete) - Delete a Virtual Network

### [vpnSessions](docs/sdks/vpnsessions/README.md)

* [list](docs/sdks/vpnsessions/README.md#list) - List all Active VPN Sessions
* [create](docs/sdks/vpnsessions/README.md#create) - Create a VPN Session
* [refreshPassword](docs/sdks/vpnsessions/README.md#refreshpassword) - Refresh a VPN Session
* [delete](docs/sdks/vpnsessions/README.md#delete) - Delete a VPN Session

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiKeysCreate`](docs/sdks/apikeys/README.md#create) - Create API Key
- [`apiKeysDelete`](docs/sdks/apikeys/README.md#delete) - Delete API Key
- [`apiKeysList`](docs/sdks/apikeys/README.md#list) - List API Keys
- [`apiKeysUpdate`](docs/sdks/apikeys/README.md#update) - Regenerate API Key
- [`billingListUsage`](docs/sdks/billing/README.md#listusage) - List Billing Usage
- [`eventsList`](docs/sdks/events/README.md#list) - List all Events
- [`firewallsAssignmentsCreate`](docs/sdks/assignments/README.md#create) - Firewall Assignment
- [`firewallsCreate`](docs/sdks/firewalls/README.md#create) - Create a firewall
- [`firewallsDelete`](docs/sdks/firewalls/README.md#delete) - Delete Firewall
- [`firewallsDeleteAssignment`](docs/sdks/firewalls/README.md#deleteassignment) - Delete Firewall Assignment
- [`firewallsGet`](docs/sdks/firewalls/README.md#get) - Retrieve Firewall
- [`firewallsGetAllFirewallAssignments`](docs/sdks/firewalls/README.md#getallfirewallassignments) - List All Firewall Assignments
- [`firewallsList`](docs/sdks/firewalls/README.md#list) - List firewalls
- [`firewallsListAssignments`](docs/sdks/firewalls/README.md#listassignments) - Firewall Assignments
- [`firewallsUpdate`](docs/sdks/firewalls/README.md#update) - Update Firewall
- [`ipAddressesGet`](docs/sdks/ipaddresses/README.md#get) - Retrieve an IP
- [`ipAddressesList`](docs/sdks/ipaddresses/README.md#list) - List IPs
- [`operatingSystemsListPlans`](docs/sdks/operatingsystems/README.md#listplans) - List all operating systems available
- [`plansGet`](docs/sdks/plans/README.md#get) - Retrieve a Plan
- [`plansGetBandwidth`](docs/sdks/plans/README.md#getbandwidth) - List all bandwidth plans
- [`plansGetContainersPlan`](docs/sdks/plans/README.md#getcontainersplan) - Retrieve container plan
- [`plansList`](docs/sdks/plans/README.md#list) - List all Plans
- [`plansListStorage`](docs/sdks/plans/README.md#liststorage) - List all Storage Plans
- [`plansUpdateBandwidth`](docs/sdks/plans/README.md#updatebandwidth) - Buy or remove bandwidth packages
- [`plansVmList`](docs/sdks/vm/README.md#list) - List all Virtual Machines Plans
- [`privateNetworksAssign`](docs/sdks/privatenetworks/README.md#assign) - Assign Virtual network
- [`privateNetworksCreate`](docs/sdks/privatenetworks/README.md#create) - Create a Virtual Network
- [`privateNetworksDeleteAssignment`](docs/sdks/privatenetworks/README.md#deleteassignment) - Delete Virtual Network Assignment
- [`privateNetworksGet`](docs/sdks/privatenetworks/README.md#get) - Retrieve a Virtual Network
- [`privateNetworksList`](docs/sdks/privatenetworks/README.md#list) - List all Virtual Networks
- [`privateNetworksListAssignments`](docs/sdks/privatenetworks/README.md#listassignments) - List all servers assigned to virtual networks
- [`privateNetworksUpdate`](docs/sdks/privatenetworks/README.md#update) - Update a Virtual Network
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Create a Project
- [`projectsDelete`](docs/sdks/projects/README.md#delete) - Delete a Project
- [`projectsList`](docs/sdks/projects/README.md#list) - List all Projects
- [`projectsUpdate`](docs/sdks/projects/README.md#update) - Update a Project
- [`regionsFetch`](docs/sdks/regions/README.md#fetch) - Retrieve a Region
- [`regionsGet`](docs/sdks/regions/README.md#get) - List all Regions
- [`rolesGet`](docs/sdks/roles/README.md#get) - Retrieve Role
- [`rolesList`](docs/sdks/roles/README.md#list) - List all Roles
- [`serversCreate`](docs/sdks/servers/README.md#create) - Deploy Server
- [`serversCreateIpmiSession`](docs/sdks/servers/README.md#createipmisession) - Generate IPMI credentials
- [`serversDelete`](docs/sdks/servers/README.md#delete) - Remove Server
- [`serversExitRescueMode`](docs/sdks/servers/README.md#exitrescuemode) - Exits rescue mode for a Server
- [`serversGet`](docs/sdks/servers/README.md#get) - Retrieve a Server
- [`serversGetDeployConfig`](docs/sdks/servers/README.md#getdeployconfig) - Retrieve Deploy Config
- [`serversGetOutOfBand`](docs/sdks/servers/README.md#getoutofband) - List Out of Band Connections
- [`serversList`](docs/sdks/servers/README.md#list) - List all Servers
- [`serversLock`](docs/sdks/servers/README.md#lock) - Lock the server
- [`serversReinstall`](docs/sdks/servers/README.md#reinstall) - Run Server Reinstall
- [`serversRunAction`](docs/sdks/servers/README.md#runaction) - Run Server Action
- [`serversScheduleDeletion`](docs/sdks/servers/README.md#scheduledeletion) - Schedule the server deletion
- [`serversStartOutOfBandConnection`](docs/sdks/servers/README.md#startoutofbandconnection) - Start Out of Band Connection
- [`serversStartRescueMode`](docs/sdks/servers/README.md#startrescuemode) - Puts a Server in rescue mode
- [`serversUnlock`](docs/sdks/servers/README.md#unlock) - Unlock the server
- [`serversUnscheduleDeletion`](docs/sdks/servers/README.md#unscheduledeletion) - Unschedule the server deletion
- [`serversUpdate`](docs/sdks/servers/README.md#update) - Update Server
- [`serversUpdateDeployConfig`](docs/sdks/servers/README.md#updatedeployconfig) - Update Deploy Config
- [`sshKeysCreate`](docs/sdks/sshkeys/README.md#create) - Create a SSH Key
- [`sshKeysDelete`](docs/sdks/sshkeys/README.md#delete) - Delete a SSH Key
- [`sshKeysListAll`](docs/sdks/sshkeys/README.md#listall) - List all SSH Keys
- [`sshKeysRetrieve`](docs/sdks/sshkeys/README.md#retrieve) - Retrieve a SSH Key
- [`sshKeysUpdate`](docs/sdks/sshkeys/README.md#update) - Update a SSH Key
- [`storageCreateFilesystem`](docs/sdks/storage/README.md#createfilesystem) - Create a filesystem for a project
- [`storageDeleteFilesystem`](docs/sdks/storage/README.md#deletefilesystem) - Delete a filesystem for a project
- [`storageDeleteStorageVolumes`](docs/sdks/storage/README.md#deletestoragevolumes) - Delete volume
- [`storageGetStorageVolume`](docs/sdks/storage/README.md#getstoragevolume) - Get volume
- [`storageGetStorageVolumes`](docs/sdks/storage/README.md#getstoragevolumes) - List volumes
- [`storageListFilesystems`](docs/sdks/storage/README.md#listfilesystems) - List filesystems
- [`storagePostStorageVolumes`](docs/sdks/storage/README.md#poststoragevolumes) - Create volume
- [`storagePostStorageVolumesMount`](docs/sdks/storage/README.md#poststoragevolumesmount) - Mount volume
- [`storageUpdateFilesystem`](docs/sdks/storage/README.md#updatefilesystem) - Update a filesystem for a project
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create a Tag
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete Tag
- [`tagsList`](docs/sdks/tags/README.md#list) - List all Tags
- [`tagsUpdate`](docs/sdks/tags/README.md#update) - Update Tag
- [`teamMembersDelete`](docs/sdks/teammembers/README.md#delete) - Remove a Team Member
- [`teamMembersPostTeamMembers`](docs/sdks/teammembers/README.md#postteammembers) - Add a Team Member
- [`teamsCreate`](docs/sdks/teams/README.md#create) - Create a team
- [`teamsGet`](docs/sdks/teams/README.md#get) - Retrieve the team
- [`teamsMembersGetTeamMembers`](docs/sdks/members/README.md#getteammembers) - List all Team Members
- [`teamsUpdate`](docs/sdks/teams/README.md#update) - Update a team
- [`trafficGet`](docs/sdks/traffic/README.md#get) - Retrieve Traffic consumption
- [`trafficGetQuota`](docs/sdks/traffic/README.md#getquota) - Retrieve Traffic Quota
- [`userDataCreateNew`](docs/sdks/userdata/README.md#createnew) - Create an User Data
- [`userDataDelete`](docs/sdks/userdata/README.md#delete) - Delete an User Data
- [`userDataList`](docs/sdks/userdata/README.md#list) - List all User Data
- [`userDataRetrieve`](docs/sdks/userdata/README.md#retrieve) - Retrieve an User Data
- [`userDataUpdate`](docs/sdks/userdata/README.md#update) - Update an User Data
- [`userProfileGet`](docs/sdks/userprofile/README.md#get) - Get user profile
- [`userProfileListTeams`](docs/sdks/userprofile/README.md#listteams) - List User Teams
- [`userProfileUpdate`](docs/sdks/userprofile/README.md#update) - Update User Profile
- [`virtualMachinesCreate`](docs/sdks/virtualmachines/README.md#create) - Create a Virtual Machine
- [`virtualMachinesCreateVirtualMachineAction`](docs/sdks/virtualmachines/README.md#createvirtualmachineaction) - Run Virtual Machine Action
- [`virtualMachinesDelete`](docs/sdks/virtualmachines/README.md#delete) - Destroy a Virtual Machine
- [`virtualMachinesGet`](docs/sdks/virtualmachines/README.md#get) - Get a Virtual Machine
- [`virtualMachinesList`](docs/sdks/virtualmachines/README.md#list) - Get Teams Virtual Machines
- [`virtualNetworksDelete`](docs/sdks/virtualnetworks/README.md#delete) - Delete a Virtual Network
- [`vpnSessionsCreate`](docs/sdks/vpnsessions/README.md#create) - Create a VPN Session
- [`vpnSessionsDelete`](docs/sdks/vpnsessions/README.md#delete) - Delete a VPN Session
- [`vpnSessionsList`](docs/sdks/vpnsessions/README.md#list) - List all Active VPN Sessions
- [`vpnSessionsRefreshPassword`](docs/sdks/vpnsessions/README.md#refreshpassword) - Refresh a VPN Session
- ~~[`projectsSshKeysPostProjectSshKey`](docs/sdks/projectssshkeys/README.md#postprojectsshkey)~~ - Create a Project SSH Key :warning: **Deprecated**
- ~~[`sshKeysGet`](docs/sdks/sshkeys/README.md#get)~~ - Retrieve a Project SSH Key :warning: **Deprecated**
- ~~[`sshKeysList`](docs/sdks/sshkeys/README.md#list)~~ - List all Project SSH Keys :warning: **Deprecated**
- ~~[`sshKeysModifyProjectKey`](docs/sdks/sshkeys/README.md#modifyprojectkey)~~ - Update a Project SSH Key :warning: **Deprecated**
- ~~[`sshKeysRemoveFromProject`](docs/sdks/sshkeys/README.md#removefromproject)~~ - Delete a Project SSH Key :warning: **Deprecated**
- ~~[`userDataCreate`](docs/sdks/userdata/README.md#create)~~ - Create a Project User Data :warning: **Deprecated**
- ~~[`userDataDeleteProjectUserData`](docs/sdks/userdata/README.md#deleteprojectuserdata)~~ - Delete a Project User Data :warning: **Deprecated**
- ~~[`userDataGetProjectUserData`](docs/sdks/userdata/README.md#getprojectuserdata)~~ - Retrieve a Project User Data :warning: **Deprecated**
- ~~[`userDataGetProjectUsersData`](docs/sdks/userdata/README.md#getprojectusersdata)~~ - List all Project User Data :warning: **Deprecated**
- ~~[`userDataUpdateForProject`](docs/sdks/userdata/README.md#updateforproject)~~ - Update a Project User Data :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.events.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.apiKeys.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.apiKeys.list();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`LatitudeshError`](./src/models/errors/latitudesherror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";
import * as errors from "latitudesh-typescript-sdk/models/errors";

const latitudesh = new Latitudesh({
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  try {
    const result = await latitudesh.apiKeys.list();

    console.log(result);
  } catch (error) {
    if (error instanceof errors.LatitudeshError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`LatitudeshError`](./src/models/errors/latitudesherror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`LatitudeshError`](./src/models/errors/latitudesherror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                    | Variables          | Description |
| --- | ------------------------- | ------------------ | ----------- |
| 0   | `https://api.latitude.sh` | `latitude_api_key` |             |
| 1   | `http://api.latitude.sh`  | `latitude_api_key` |             |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable           | Parameter                | Default                        | Description |
| ------------------ | ------------------------ | ------------------------------ | ----------- |
| `latitude_api_key` | `latitudeApiKey: string` | `"<insert your api key here>"` |             |

#### Example

```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  serverIdx: 0,
  latitudeApiKey: "<insert your api key here>",
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.apiKeys.list();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const latitudesh = new Latitudesh({
  serverURL: "http://api.latitude.sh",
  bearer: process.env["LATITUDESH_BEARER"] ?? "",
});

async function run() {
  const result = await latitudesh.apiKeys.list();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";
import { HTTPClient } from "latitudesh-typescript-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Latitudesh({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Latitudesh } from "latitudesh-typescript-sdk";

const sdk = new Latitudesh({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LATITUDESH_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
