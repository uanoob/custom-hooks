import React from 'react';
import { useInc } from '../hooks/useInc';

const Inc = () => {
  const [count, { decrease, increase, reset }] = useInc({
    initial: 5,
    step: 2,
    minValue: 0,
    maxValue: 10,
  });
  return (
    <div>
      <h3>Volume</h3>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Inc;
