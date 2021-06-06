
```
$ yarn add redux

$ yarn add react-redux
```


## 235 How to connect Redux with Class-based components

```
import classes from './Counter.module.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}> {this.props.counter} </div>
                <div>
                    <button onClick={this.incrementHandlerFunction.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandlerFunction.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
            </main>
        );
    }

    incrementHandlerFunction() {
        this.props.increment();
    }

    decrementHandlerFunction() {
        this.props.decrement();
    }

    toggleCounterHandler() {
        this.props.reset()
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'increment'}),
        decrement: () => dispatch({type: 'decrement'}),
        reset: () => dispatch({type: 'reset'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```


## Redux tool kit

```shell
npm install @reduxjs/toolkit
or
yarn add @reduxjs/toolkit
```

# Section 19: Advanced Redux

- Reducers must be **pure**, **side-effect free**, **synchronous**  

> Where should side effect code and async task be executed? like for example http requests?

- we have  2 Possibilities:

1. Inside the components (e.g. useEffect())

2. Inside the action creators functions: :)
  - This is a provided by the redux
