import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  // counter managed by redux, we will always have the most recent data on the conter instance
  const counter =
    useSelector(state => {
      // state managed by redux
        return state.counter
    })


  const toggleCounterHandler = () => {
    dispatch( {type: 'reset' } )
  };

  function incrementHandlerFunction() {
    dispatch( {type: 'increment' } )
  }

  function decrementHandlerFunction() {
    dispatch( {type: 'decrement' } )
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div>
          <button onClick={incrementHandlerFunction}>Increment</button>
          <button onClick={decrementHandlerFunction}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
