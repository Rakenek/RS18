import classes from "./Counter.module.css";
import { counterActions } from "../store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const increment = () => dispatch(counterActions.increment());
  const decrement = () => dispatch(counterActions.decrement());
  const increaseBy5 = () => dispatch(counterActions.increase(5));
  const toggleCounter = () => dispatch(counterActions.toggleCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={increaseBy5}>increase by 5</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
