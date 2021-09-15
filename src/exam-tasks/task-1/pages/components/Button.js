import React from 'react';
import { useHistory } from 'react-router-dom';

const Button = () => {
  // Hooks
  // -- history
  let history = useHistory();

  // Custom Functions
  const handleClick = () => {
    history.push('/');
  };

  return <button onClick={handleClick}>Grįžti atgal</button>;
};

export default Button;
