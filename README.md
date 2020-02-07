# react-graphql

Follow the steps below to setup your react-graphql project:

### Front-end

- Create a react project
```sh
npx create-react-app <project-name>
cd my-app
```
- Install packages
```sh
npm i apollo-boost react-apollo graphql
```
Here’s an overview of the packages you just installed:

**apollo-boost** offers some convenience by bundling several packages you need when working with Apollo Client:
- **apollo-client**: Where all the magic happens
- **apollo-cache-inmemory**: Our recommended cache
- **apollo-link-http**: An Apollo Link for remote data fetching
- **apollo-link-error**: An Apollo Link for error handling
- **apollo-link-state**: An Apollo Link for local state management
- **apollo-cache-inmemory**: Our recommended cache

**graphql-tag** Exports the gql function for your queries & mutations

**react-apollo** contains the bindings to use Apollo Client with React

**graphql** contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality as well.

### Back-end

- In your terminal, navigate to the <project> directory and run the following commands:
  ```sh
  curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server
  ```
- In your terminal, navigate to the server directory and execute the following commands:
  ```sh
  cd server
  npm install
  npm install -g prisma
  npm prisma deploy
    ```
When prompted where you want to set/deploy your service, select Demo server (it requires login, you could sign in with your GitHub account), then choose a `region`, e.g. demo-us1 or demo-eu1

- Run `npm start` in server directory. The script first starts the server (which is then running on `http://localhost:4000`)

Replace npm with yarn in case you have yarn installed.

