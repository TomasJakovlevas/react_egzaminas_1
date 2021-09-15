import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contacts'>Contact</Link>
      </li>
    </nav>
  );
};

export default Navigation;
