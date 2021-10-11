import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Error() {
  const { setPageName } = useGlobalContext();

  return (
    <div>
      <h3 className='text-center mt-5'>Sorry, something went wrong.</h3>
      <div className='d-flex justify-content-center'>
        <Link
          className='btn btn-primary mt-3'
          to='/'
          role='button'
          onClick={() => setPageName('home')}
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default Error;
