import React, { useContext } from 'react';

import { Counter } from './Task6';

function CompB() {
  // Hooks
  // state
  const { counter, setCounter } = useContext(Counter);

  return (
    <div>
      <h2>CompB</h2>
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

export default CompB;
