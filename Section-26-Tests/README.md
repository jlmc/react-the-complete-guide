# What to test

- what 
- how

## what

- Test the different building blocks
- Unit Test: The smallest building blocks that make up your app


## how

- Test success and error cases. also test rare (but possible) result.


## Tools

- we need a tool for running our tests and asserting the results
  - `Jest`
  
- In a React app we need a tool for simulating (rendering) our React app / components. We to simulate the browser
  - `React Testing Library`

- *Both tools are already set up for you when using create-react-app*

package.json
```
dependencies: {
  @testing-library/jest-dom
  @testing-library/react
  @testing-library/user-event

```
- Note that the jest is a transient dependency from react testing-library
