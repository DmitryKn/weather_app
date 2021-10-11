import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Home() {
  const { setUserFullName, setPageName } = useGlobalContext();
  const [name, setName] = useState('');

  const history = useHistory();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    setUserFullName(name);
    setPageName('home');
    history.push('/getinfo');
  };

  return (
    <div>
      <form>
        <div className='col-md-6 mt-5'>
          <label
            className='col-sm-3 col-form-label text-secondary'
            htmlFor='userName'
          >
            User name:
          </label>
          <input
            className='form-control form-control-md'
            id='userName'
            type='text'
            onChange={handleChangeName}
            value={name}
            placeholder='Enter your name'
          />
        </div>
        {name.length < 3 ? (
          <button
            type='submit'
            className='btn btn-primary mt-4'
            onClick={handleSubmitName}
            disabled
          >
            Submit
          </button>
        ) : (
          <button
            type='submit'
            className='btn btn-primary mt-4'
            onClick={handleSubmitName}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default Home;
