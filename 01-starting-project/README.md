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
