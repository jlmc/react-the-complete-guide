# Class based components


- Function components, is the default, and the most modern approach of building components:

```javascript
function Product(props) {
    return <h2>A product !!!</h2>
}
```

Alternatively to Function components we can write the same components using a class.  
Class Based components exist and are an alternative to functions.

```javascript
class Product extends Component {
    render() {
        return <h2>A product !!!</h2>;
    }
}
```
- Classes are not a React feature, classes exist in modern JavaScript.


### Why class based components

- Class based components exist because they are required in the pass.
- Prior to react 16.8, there were scenarios and use cases where you needed Class based components.
  - When dealing with `state`.
    - Prior to React 16.8 you could not change state in functional components.
  - When dealing with `side effects`
    - Prior to React 16.8 you could really handle side effects in functional components.
  
That Changed with React 16.8 because that React version introduced a concept called react Hooks.
  - `useState`
  - `useEffect`
  - `useContext`
  - `useReduce`
  - etc

- These are functional for Functional Components which bring features to functional components which previously were reserved for Class-based Components. 
