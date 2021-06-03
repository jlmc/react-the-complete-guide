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
- Note that the jest is a transient dependency from react `testing-library`

# 

If we create a project using the command: 

```
npx create-react-app my-app
```

then the necessary dependencies to tests our application are already in place.  
At the folder /src we can also find the files:

- setupTests.js
  - As the name implies just does some setup work, and we don't need to do anything else in this file.

- App.test.js
  - This is a file that contains some testing code and is there out of the box.
  - the convention is to name your testing files like your component files, just with the word test in the file name. `Component.test.js`
  


```
// App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

We have this test function which we execute here, which takes two arguments.

 - The first argument is a description of the test. This is up to you and it helps you identify this test in the testing output.

  - The second argument is an anonymous function, which is the point here which contains the actual test and code.
    - So that's the code which will be executed once we run our test.

    1. `render(<App />);` We rendered the app component in the end with help of that render function imported from the testing library.
    2. `const linkElement = screen.getByText(/learn react/i);` Then we get hold of some element on that virtual screen. So to say, so in that simulated browser.
       - `/learn react/i` in a case-insensitive way.
    3. `expect(linkElement).toBeInTheDocument();` And then we just check if that element actually is in the document, if it exists in the document. The test will fail if this element has not found, otherwise it will succeed if it is found.
  
Now how can we run this test:

```
npm test
```

```
yarn test
```
