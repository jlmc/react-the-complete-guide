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