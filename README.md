# NodeJS API

Before start will be necessary to create an .env file which must contain
```shell
NODE_ENV=
```
using any of this environments: [development, production]

To start the server:

  * Install dependencies with `npm install`
  * Start NodeJS endpoint with `npm start`

## Development
Server run in http://localhost:3000.

## Production
Server run in http://localhost:8080.

Also its possible to define a different port adding the following to your .env file
```shell
PORT=8000
```

## API
Currently project already have a V1 with a resource

``` shell
POST   api/v1/resource Controllers/Resource#create
GET    api/v1/resource Controllers/Resource#show
PUT    api/v1/resource Controllers/Resource#update
DELETE api/v1/resource Controllers/Resource#remove
```

| Method | Route | Description |
|--------|-------|-------------|
| POST   | api/v1/resource | respond with message including data |
| GET   | api/v1/resource/:id | respond with message including id |
| PUT   | api/v1/resource/:id | respond with message including id |
| DELETE   | api/v1/resource/:id | respond with message including id |

## Add new Resource to the current version

First will be necessary to create the routes adding a new file inside `src/config/routes/api/v1` using the name of the resource you want to create

**Examples: users (resource) users.js file**

And then copy the content of `src/config/routes/api/v1/resource.js` to add it yo the application routes

Now will be necessary to create a Controller to manage requests, so create a new file in `src/controllers` called with the same name as your resource following the above example.

In this file you must modify the name of the class `Resource => YourResourceName` as well as the constant `resourceClass => YourResourceClassName`

With this you must be ready to pick any of the endpoints mentioned above and make a request to your new resource.

## Add new Version

It is also pretty straightforward to add a new version. Just follow the steps below.

Create a new folder, called `v[new_version]` inside `src/config/routes/api` and copy all files from `src/config/routes/api/v1`

**Example: src/config/routes/api/v2**

Then open your index.js and modify the `version` constant with the same name of the folder you just created.

**Example: const version = 'v2'**

And with this you must be ready to use your new version

NOTES: Right now controllers are not versioned, but I will be adding them in the next months.

