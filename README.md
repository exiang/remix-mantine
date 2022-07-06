# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```


### How to
#### Install Mantine Form:
```
npm install @mantine/form 
```

#### Install & Init prisma:
```
npm i prisma @prisma/client
npx prisma init --datasource-provider sqlite
```

#### Populate the tables in prisma:
```
npx prisma generate
npx prisma db push
node prisma/seed
```

Every update to the database schema will required to repopulate the tables. Also not to forget restart the server with `npm run dev`.

#### database editor
a handy web base database viewer/editor
`npx prisma studio`

#### Pass state from parent to child in nested route:
You can pass multiple state back and forth between nested route back and forth by using `useOutletContext()`.

`parent.jsx`
```
import { useState } from "react";

export default function Parent(){
    const [theUrl, setTheUrl] = useState("http://www.yeesiang.com");
    const [theBrand, setTheBrand] = useState('YS');
    const context = { theUrl, setTheUrl, theBrand, setTheBrand };

    return (<>
        <TextInput placeholder="Insert URL here" value={theUrl} onChange={(event) => setTheUrl(event.currentTarget.value)} ></TextInput>
        <TextInput placeholder="Insert Brand here" value={theBrand} onChange={(event) => setTheBrand(event.currentTarget.value)} ></TextInput>
        <Outlet context={context} />
    </>)
}
```

`child.jsx`
```
import {useOutletContext} from "@remix-run/react";
export default function Child(){

    const {theUrl, setTheUrl, theBrand, setTheBrand} = useOutletContext();
    
    return (<>Web Analysis: {theUrl} - {theBrand} <Button onClick={() => setTheUrl('http://www.google.com')}>Change URl</Button><Button onClick={() => setTheBrand('TZL')}>Change Brand</Button></>)

}
```


### The .env
Use the following sample code to init .env
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
```

### Login
You may use the following user account to test:

  * username: exiang83@yahoo.com
  * password: twixrox
