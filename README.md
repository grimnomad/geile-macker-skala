# Geile Macker Skala

## Setup

Clone this repository. Then run the following commands ([pnpm](https://pnpm.io/) is needed) , which will setup the repository:

```
pnpm install
```

## Development

### Shared

Change the directory to the shared project and run `pnpm dev`.

### Server

Change the directory to the server project and run `pnpm dev`.

#### Environment File
The server needs an environment file. The `.env` file is in the root directory of the server located.
The file needs the following entries:

```
MONGODB_ADDRESS=mongodb://localhost
DATABASE_NAME=gms
MONGODB_URI=${MONGODB_ADDRESS}/${DATABASE_NAME}
JWT_SECRET=secret
PORT=3001
```

### Client

Change the directory to the client project and run `pnpm dev`.

### Components

Change the directory to the components project and run `pnpm dev`.
