import classes from './Counter.module.css';
import {useSelector} from "react-redux";

const Counter = () => {

  // counter managed by redux, we will always have the most recent data on the conter instance
  const counter =
    useSelector(state => {
      // state managed by redux
        return state.counter
    })


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
