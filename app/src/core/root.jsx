import React, { Fragment } from 'react';
import './root.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'partials/Navbar';
import { decrement, increment } from 'features/counter/counterSlice';

function Root() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Navbar />
      <div>
        <div>
          <button
            type="button"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button
            type="button"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Root;
