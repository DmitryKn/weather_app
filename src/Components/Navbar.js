import React from 'react';
import { useGlobalContext } from '../context';

function Navbar() {
  const { pageName } = useGlobalContext();
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <span className='navbar-text'>
          {pageName === 'result' ? 'Weather in your area' : 'Get your weather'}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
