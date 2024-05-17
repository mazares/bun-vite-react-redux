import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  decrementAsync,
} from "../state/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="counter">
      <div>
        <h1>Counter React Redux Typescript</h1>

        <div className="counter__display">
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            - 1
          </button>

          <button
            onClick={() => {
              dispatch(decrementByAmount(100));
            }}
          >
            - 100
          </button>

          <button
            onClick={() => {
              dispatch(decrementAsync(1000));
            }}
          >
            - 1000
          </button>

          <span>
            <h2
              style={{
                backgroundColor: `hsl(${count * 10}, ${count}%, 75%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {count}
            </h2>
          </span>

          <button
            onClick={() => {
              dispatch(incrementAsync(1000));
            }}
          >
            + 1000
          </button>
          <button
            onClick={() => {
              dispatch(incrementByAmount(100));
            }}
          >
            + 100
          </button>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            + 1
          </button>
        </div>
        <article>
          <h2>Async Thunks</h2>
          <p>
            The async thunks are used to dispatch actions that are asynchronous.
            In this example, the async thunks incrementAsync and decrementAsync
            are used to increment and decrement the counter by 1000 after 1
            second.
          </p>
          <p>
            The async thunks are created using the createAsyncThunk function
            from the @reduxjs/toolkit package. The createAsyncThunk function
            takes two arguments: a string that represents the action type, and a
            function that returns a promise. The function takes one argument,
            which is the payload of the action.
          </p>
        </article>
      </div>
    </div>
  );
}
