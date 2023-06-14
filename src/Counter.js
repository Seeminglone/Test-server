import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <div className='btn-container'>
        <button onClick={increment} className='btn'>Increment</button>
        <button onClick={decrement} className='btn'>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;