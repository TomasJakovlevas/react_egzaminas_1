import React, { useContext } from 'react';

import { Counter } from './Task6';

function CompA1() {
  // Hooks
  // state
  const { counter, setCounter } = useContext(Counter);

  return (
    <div>
      <h3>CompA1</h3>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 10);
        }}
      >
        -
      </button>
    </div>
  );
}

export default CompA1;
