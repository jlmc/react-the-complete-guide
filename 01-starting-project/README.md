# Styling

76. Introducing Styled Components

## How to avoid styling collisions

There are two approaches:

### styled-components

1. use a package `styled components`

- https://styled-components.com/

Styled components, is a package that help you build components which have certain styles attached to them where the styles really only affect the components to which they were attached and not any other components.

```
npm install --save styled-components
```


```
import styled from "styled-components";

const Button = styled.button`
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid #8b005d;
color: white;
background: #8b005d;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
cursor: pointer;

.&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

```

instead of:

```
const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
```


And we can also change other components:

```
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from "styled-components";


const FormControl = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
  }
  
  @media (min-width: 768px) {
    width: auto;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  let [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      <FormControl invalid={!isValid}>

        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;

```

### CSS Modules

CSS Modules is a feature which is only available in projects that are configured to support it because it needs a code transformation that needs to be done before your code runs in the browser.

The good thing is that React projects created with `create react app` command are already configured to support CSS Modules

- https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

1. Rename your css file to `XXX.module.css`, for example `Button.module.css` 
```
.button {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
```

2. In the js file we must import the css module different way:
```
import React from 'react';

import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

*Consequences:*
- What Css-Modules does basically:
  - Takes those Css classes in a CSS file and basically changes those class names to be *unique*.
  - For every component it changes the class names of the classes you are importing `import styles from './Button.module.css';` to be unique:
  - Therefore, it will create unique classes , unique versions of all those style and classes here for this component.
    - Component + '_' + css name + '__' + hash
