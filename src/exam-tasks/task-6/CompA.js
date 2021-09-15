import React, { useContext } from 'react';
import CompA1 from './CompA1';

import { Counter } from './Task6';

function CompA() {
  // Hooks
  // state
  const { counter, setCounter } = useContext(Counter);

  return (
    <div>
      <h2>CompA</h2>
      <button onClick={() => {}}>+</button>
      <button>-</button>
      <CompA1 />
    </div>
  );
}

export default CompA;
