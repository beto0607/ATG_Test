# ATG Test

## Solution

-   I used create-react-app as boiler plate with Typescript.
-   Added Redux to manage state and  Redux Thunk for API calls.
-   Added TSLint as linter
-   Added Jest and Enzyme for testing.
-   Bootstrap for styling
-   The dropped CORS errors when called directly, so I added an Express.js server as proxy. Enabled CORS in the proxy and added libraries for fetch and async/await.

## Usage

1. Install the dependencies with `yarn install` or `npm install`
2. Run the proxy server in one terminal with `yarn server` or `npm server`
3. Run the React app in another terminal with `yarn start`or `npm start`

## Test

1. Install the dependencies(see above).
2. Run the proxy server(see above).
3. Run `yarn test` or `npm test`in another terminal.

## Dependencies

-   React
-   Redux
    -   Redux-Thunk
-   Typescript
-   TSLint
-   Bootstrap
-   Express: Node.js server used as proxy
    -   cors: Enables cors in server
    -   node-fetch: Adds fetch to server-side scripts
    -   express-async-await: Adds await to server-side scripts
-   Moment.js: Date manipulation
-   Testing:
    -   Jest
        -   ts-test
        -   @types/jest
    -   Enzyme
        -   @types/enzyme 
        -   enzyme-to-json
        -   enzyme-adapter-react-16

