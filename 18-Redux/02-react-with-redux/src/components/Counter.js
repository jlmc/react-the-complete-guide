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

  const showCounter = useSelector(state => state.showCounter);


  const toggleCounterHandler = () => {
    dispatch( {type: 'toggle' } )
  };

  function incrementHandlerFunction() {
    dispatch( {type: 'increment' } )
  }

    function incrementByHandlerFunction() {
        dispatch( {type: 'increase', amount: 5   } )
    }

  function decrementHandlerFunction() {
    dispatch( {type: 'decrement' } )
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCounter &&  <div className={classes.value}> {counter} </div>}
      <div>
          <button onClick={incrementHandlerFunction}>Increment</button>
          <button onClick={incrementByHandlerFunction}>Increment by 5</button>
          <button onClick={decrementHandlerFunction}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
