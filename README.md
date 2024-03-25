Live on EC2 (for now): http://ec2-34-209-251-63.us-west-2.compute.amazonaws.com/

## Installation
From project root:
`npm i && cd frontend && npm i`

Postgres, node, npm are also required.

## Environment

.env template: 

```sh
# Database config
POSTGRES_USER=
POSTGRES_PASS=
POSTGRES_PORT=
DB_NAME=

# Signing jwt
TOKEN_SECRET=
```

## Database setup
To initialize the database with starter data (found in `./backend/setup`):

`npm run setup`

## Build
`npm run build && cd frontend && npm run build`

## Run
Local dev is set to port 4000. 

`npm start`

If you want to interact with all available functionality, log in as `Adam` with password `adam`. Other logins can be found in the starter data. 
