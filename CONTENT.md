# REACT - react-the-complete-guide

## Content 

- Basic & foundations
  - Introduction key feactures
    - Components & Building UIs
    - Working with Events & props and state
    - Styling React Apps & compoments
    - Introduduction in React Hooks

- Advanced Concepts
  - building for production
    - Side Effects "Refs" & More React Hooks
    - React Context API & Redex
    - Forms http request & custom hooks
    - Routing Deployment, NexJS & More

- Summaries & refreshers
  - JavaScript Refresher
  - React JS Summary

## Visual Studio code extensions

- Change Terminal font: https://youngstone89.medium.com/how-to-change-font-for-terminal-in-visual-studio-code-c3305fe6d4c2

- Prettier - Code formatter
  - Shift + option + F
  - NOTE: After install the extension Go to Settings > formater and change the default formation to `Prettier code formater`

- Material Icon Theme
  - Change the file icons


## JavaScript - Refresher

#### let & const

- Use `let` if you want to create a variable that really is variable
- Use `const` if you plan on creating a constant value
- Avoid to create `var` variables


#### Arrow Functions

```
const myFnc () => {

}
```

- No more issue with `this` keyword

#### Export & Imports (Modules)

- person.js
```
const person = {

  name: 'Max'

}
export default person
```

- utility.js
```
export const clean = () => { ... }

export const baseData = 10;
```

- app.js

```
import person from './person.js'
import prs from './person.js'
```
  - we can choise witch name we want
  - note  that the file have default export

```
import { baseData } from './utility.js'
import { clean } from './utility.js'
```


- for compatibility reasons
```
import {smts as Smth} from './utility.js'

import * as bundled from './utility.js'
```

#### Spread & Rest Operators

```
const newArray = [ ...oldArray, 1,2 ]
const new Object = { ...oldObject, newProp:5 }
```

#### Destructuring

```
const numbers = [1,2,3];

[num1, num2] = numbers;
console.log(num1, num2); // 1 2


[num1, , num3] = numbers
console.log(num1, num2); // 1 3
```

---

## Create React App

[See](https://reactjs.org/docs/create-a-new-react-app.html)

```
npx create-react-app my-app
cd my-app
mpm install
mpm start
```

Output:
```
Success! Created react-complete-guide at react-complete-guide
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-complete-guide
  npm start

Happy hacking!
```


# NOTES:

- Compoments should Start with UpperCase this is a react rule.
  - React consider that lower case is html and UpperCase are Rect components
- Only one root element is allowed for code snnaped
- [resources](https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components)


### Tips

```
function App() {

can be also writen as:

const App = () => {
```

QUIZ:

1. Which kind of code do you write when using React.js?
> Declarative JavaScript

2. What is "JSX"?
> React projects like the ones we create via "create-react-app" support JSX syntax. It gets compiled to standard JS code behind the scenes.

3. Why is React all about "Components"?
> "Components" are really just a way of thinking about user interfaces. React embraces that concept and gives you tools to build components that you can then combine.

4. What does "declarative" mean?
>  You define the target "state" (UI) and React figures out which JS commands need to be executed to bring that result to life.

5. What is a "React Component"?
> A component is just that: A JS function that typically returns some HTML (or, to be precise: JSX) code which will be shown on the screen when that component is used.

6. How many custom React components must a React app have?
> You can have as many React components as you want / need.

7. Which statement is correct?
> With React, you build a component tree with one root component that's mounted into a DOM node.


8. What does "component tree" mean?
> You build a tree by nesting components into each other - just as you build a HTML tree when building a standard HTML document.

9. How do you pass data between components?
> You build your own "HTML elements" in the end, hence you can also define your own attributes (called "props" in React's world)

10. How can you output dynamic data in React components (i.e. in the returned JSX code)?
> You can't put block statements (e.g. if statements) between those curly braces but you can output any result of any JS expression by using this special feature.



----

# React State

- Scenario 1:

```js
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  let [titleValue, setTitleValue] = useState('');
  let [priceValue, setPriceValue] = useState('');
  let [dateValue, setDateValue] = useState('');

  function titleChangeHandler(event) {
    let enteredValue = event.target.value;
    setTitleValue(enteredValue);
  }

  function PriceChangeHandler(event) {
    let enteredValue = event.target.value;
    setPriceValue(enteredValue);
  }

  function dateChangeHandler(event) {
    let enteredValue = event.target.value;
    setDateValue(enteredValue);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price:</label>
          <input type="number" min="0.01" step="0.01" onChange={PriceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="date" min="2019-01-01" max="2050-01-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

```

- Scenario 2: 
```js
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //let [titleValue, setTitleValue] = useState('');
  //let [priceValue, setPriceValue] = useState('');
  //let [dateValue, setDateValue] = useState('');

  let [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  function titleChangeHandler(event) {
    let enteredValue = event.target.value;
    console.log(`The Title ${JSON.stringify(userInput)}`);
    //1 - setTitleValue(enteredValue);
    //3 -  this this is the best approach
    setUserInput((prevStatus) => {
      return {...prevStatus, title: enteredValue}
    });
  }

  function PriceChangeHandler(event) {
    let enteredValue = event.target.value;

    console.log(`The Price ${JSON.stringify(userInput)}`);
    setUserInput({ ...userInput, price: enteredValue });
  }

  function dateChangeHandler(event) {
    let enteredValue = event.target.value;

    console.log(`The Date ${userInput}`);
    setUserInput({ ...userInput, date: enteredValue });
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price:</label>
          <input type="number" min="0.01" step="0.01" onChange={PriceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="date" min="2019-01-01" max="2050-01-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

```


# Module Resources
You may want to compare your code to mine (e.g. to find + fix errors).

For that, you find multiple code snapshots for this module here in this [Github repository](https://github.com/academind/react-complete-guide-code/tree/04-react-state-events)

Usage instructions can be found on the page that link is leading to.

Simply pick one of the snapshots in the /code folder - the subfolder names are chosen such that they are easy to match against lecture names in this course section.

You also find section slides (if available) in that Github repository.


## Styling

[How to Styling React Apps](/01-starting-project/README.md)


## How to Debug React Apps

- How find and fix errors
- Debugging & analyzing react Apps
- Using the React DevTools

[React DevTools Browser Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en)


## 8 - hands up project

```
yarn add --dev --exact prettier
# in the package.json file add the new script:
"prettier": "npx prettier --write ."
```


## 9 - Drive Deeper: Working with Fragments, Portals and Refs

- If we only need to read values from http input then we can use Refs instead of status.
- let's see one example: `AddUser.js`


```javascript
import React, {useRef, useState} from 'react';

import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  let usernameInputRef = useRef();
  let ageInputRef = useRef();

  let [isValid, setIsValid] = useState(true);
  let [_error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();

    console.log(usernameInputRef)

    let _username = usernameInputRef.current.value;
    let _age = ageInputRef.current.value;

    if (_username.trim().length === 0) {
      setIsValid(false);

      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });

      return;
    }

    if (!isNumeric(_age) || +_age <= 0) {
      setIsValid(false);
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    let newUser = {
      name: _username,
      age: +_age,
    };

    console.log(newUser);

    props.addUser(newUser);

    setIsValid(true);

    // Note that we should never use ref to manipulate the dom... DOM should only be manipulated by the React
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '0';
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {_error && <ErrorModal title={_error.title} message={_error.message} onConfirm={errorHandler} />}
      <Card className={`${styles.input} ${!isValid && styles.invalid}`}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={usernameInputRef}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" min="0" step="1" type="number" ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

```


## Section 10: Advanced: Handling Side Effects, Using Reducers & Using the…

We can define Side Effects was anything that can happens in our application like for example:

  - Store Data in Browser Storage
  - Send Http Request to backend Server
  - Set & Manage Timers

- Tasks that are all not related with bring something to the screen.
- Because all react components are just javascript functions we should not declare those side effects inside the components, because for example we should not execute some http request every time a components is rendered.

React have a better tool that allow us to segregate to side effects: `useEffect()` Hook
  - The useEffect() Hook is simply another built in Hook. So another function you can run inside your component function that will do something special. 
  - The useEffect() Hook is called with two arguments with two parameters. 

```javascript
useEffect(() => { ... }, [dependencies ])
```

  - The first one is a function that should be executed after every component evaluation , if the specified dependencies changed.
  - And the specified dependencies are the second argument  

![use Effect](docs/useEffects.png)

More About:

[What to add & Not to add as Dependencies](10-sideeffect/USE-EFFECTS.md)

## UseReduce

![Use Reduce](docs/useReduce.png)
