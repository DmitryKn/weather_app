import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

function Result() {
  const { weatherData, loading, cityName, temperatureIn, setPageName } =
    useGlobalContext();
  const tempApi = weatherData.main?.temp || 0;
  let capitalName;

  if (cityName) {
    capitalName = cityName[0].toUpperCase() + cityName.slice(1) || '';
  }

  const toFahrenheit = (kelvin) => {
    let result = (kelvin * 9) / 5 - 459.67;
    return Math.floor(result);
  };

  const toСelsius = (kelvin) => {
    let result = kelvin - 273.15;
    return Math.floor(result);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='col-md-12 mt-5'>
      <h3 className='text-center'>
        Weather in {capitalName} in {temperatureIn}:
      </h3>
      {temperatureIn === 'Fahrenheit' ? (
        <p className='mt-3'>Temperature: {toFahrenheit(tempApi)}&#176; F</p>
      ) : (
        <p className='mt-3'>Temperature: {toСelsius(tempApi)}&#176; C</p>
      )}
      <div>
        <p>Description: {weatherData?.weather[0]?.description}</p>
        <p>Humidity: {weatherData.main?.humidity}</p>
      </div>

      <div className='d-flex justify-between'>
        <Link
          className='btn btn-primary mt-3'
          to='/'
          role='button'
          onClick={() => {
            setPageName('result');
          }}
        >
          Close
        </Link>
        <Link className='btn btn-primary mt-3 mx-4' to='/getinfo' role='button'>
          More Weather
        </Link>
      </div>
    </div>
  );
}

export default Result;
