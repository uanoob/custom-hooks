import React from 'react';
import { useInc } from '../hooks/useInc';

const Inc = () => {
  const [count, { decrease, increase }] = useInc(0);
  return (
    <div>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Inc;
