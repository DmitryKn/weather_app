import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../context';

function GetInfo() {
  const { userFullName, setTemperatureIn, setCityName, setPageName } =
    useGlobalContext();
  const [info, setInfo] = useState({ city: '', temperature: '' });
  const history = useHistory();

  const handleChangeCityAndTemp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmitCityAndTemp = (e) => {
    e.preventDefault();
    setCityName(info.city.toLowerCase());
    setTemperatureIn(info.temperature);
    setPageName('result');
    history.push('/result');
  };

  return (
    <div>
      <h3 className='mt-5'>Hello, {userFullName}</h3>
      <p>
        Please Enter City Name, and choose &#8220;Weather response in&#8221;
      </p>
      <form>
        <div className='col-md-6'>
          <label
            className='col-sm-6 col-form-label text-secondary'
            htmlFor='city'
          >
            City Name:
          </label>
          <input
            className='form-control form-control-md'
            id='city'
            name='city'
            type='text'
            value={info.city}
            onChange={handleChangeCityAndTemp}
            placeholder='Enter City / Location'
          />
        </div>
        <div className='col-md-8 mt-5'>
          <h4>Select the Weather response in:</h4>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='temperature'
              id='Fahrenheit'
              value='Fahrenheit'
              onChange={handleChangeCityAndTemp}
            />
            <label className='form-check-label' htmlFor='Fahrenheit'>
              Fahrenheit
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='temperature'
              id='Сelsius'
              value='Сelsius'
              onChange={handleChangeCityAndTemp}
            />
            <label className='form-check-label' htmlFor='Сelsius'>
              Сelsius
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='btn  btn-primary mt-4'
          onClick={handleSubmitCityAndTemp}
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default GetInfo;
