# Ignition React

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
