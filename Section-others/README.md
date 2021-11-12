# Ignition React

## Free Curse
- https://egghead.io/lessons/react-handling-errors-in-async-thunks-with-builder-addcase

## Content

1. x-stock
2. Redux-example-local-actions
3. Redux-with-async-tunks
4. Redux-store-with-slice
5. React-router

## 1. Learning the basics of React in Codepen


https://codepen.io/
https://codepen.io/pen/


JS-Settings


JavaScript Preprocessor: Babel
Add External Scripts/Pen
- React
- React-dom


### html
```
<div id="app"></div>
```

### JS

```
function Hello(props) {
  return <div>Olá, { props.name }</div>
}

const App = () => <div>
  <Hello name="Mikael" />
</div>

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)

```

```
const HelloDukes = () => React.createElement('div', null. 'Hello dukes!!!')


const MyApp = <div> <HelloDukes/> </div>

ReactDOM.render(
  <MyApp />,
  document.querySelector('#app')
)

```


## Mock backend

- [stock](https://github.com/algaworks/api-alga-stock)
