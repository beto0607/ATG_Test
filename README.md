# ATG Test

## Solution

-   Used create-react-app as boiler plate with Typescript.
-   Used yarn as package manager, but it could be run with npm.
-   Added Redux to manage state and Redux Thunk for API calls.
-   Added TSLint as linter
-   Added Jest and Enzyme for testing.
-   Added Bootstrap for styling
-   The server reponds with CORS errors when called directly, so I added an Express.js server as proxy. Enabled CORS in the proxy and added libraries for fetch and async/await.
-   When you search a term that is invalid, it'll show a message. When the term is valid it'll show you 'closest upcomings' and 'closest results'. If now you insert an invalid term, it'll do nothing.
-   The Game Data is loaded only once for id. The Game Schedule is loaded everytime you click the button search. I did it this way because I asume that the Game Schedule can vary in time and Game Data cannot.

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

## Dependencies versions

-   In yarn.lock file
