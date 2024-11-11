# Back-end Service for FujiRecipeApp

![Demo App](https://i.ibb.co/DC0828r/Screenshot-20241111-153329-Fuji-Recipe-App.jpg)

Welcome to the MERN GraphQL Back-end service for FujiRecipeApp!

[Link to the application's repo](https://github.com/alvinle2901/fuji-recipe-react-native)

## Features:

-   Tech stack: MERN (MongoDB, Express.js, React.js, Node.js) + Apollo GraphQL
-   Mutations for modifying data in the GraphQL API and establishing graph relations
-   Global state management with [Apollo Client](https://www.apollographql.com/docs/react)
-   Deployment with [Render](https://render.com/)
-   [Cron jobs](https://www.npmjs.com/package/cron) for scheduled tasks and automation

## Steps to reproduce:

### Setup .env file

```js
MONGO_URI=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```