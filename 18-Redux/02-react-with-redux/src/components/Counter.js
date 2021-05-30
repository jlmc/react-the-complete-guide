import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterSliceXXActions} from "../store/index";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterSliceXXActions.toggle())
  };

  function incrementHandlerFunction() {
      console.log("---")
      dispatch(counterSliceXXActions.increment())
  }

    function incrementByHandlerFunction() {
        dispatch(counterSliceXXActions.incrementBy(5)); // {type: 'UNIQUE_IDENTIFIER', payload: 5}
    }

  function decrementHandlerFunction() {
      dispatch(counterSliceXXActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}> {counter} </div> }
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
