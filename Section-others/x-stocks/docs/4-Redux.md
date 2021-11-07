# Redux

- [Documentação oficial do Redux](https://redux.js.org/)  
- [React Redux](https://redux.js.org/faq/react-redux#react-redux)


## why we need it

![redux diagram](redux-example.png)

The main goal it to have a central datastore that can be used by any component of our application.

### flow
![redux flow](redux-simple-flow.png)

#### Advantages:

- Maintenance
- Single data routing
- Single source of truth
- Helps control the UI
- Data persistence

## Installing redux

- https://redux.js.org/introduction/core-concepts

- manual in package.json
```json
"react-redux": "^7.2.6",
"redux": "^4.1.2",
        
"@types/react-redux": "^7.1.20",
```
- using yarn
```
yarn add react-redux
yarn add redux
yarn add -D @types/react-redux
```
- using npm
```
npm i react-redux redux
npm i -D @types/react-redux
```
