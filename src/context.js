import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userFullName, setUserFullName] = useState('');
  const [cityName, setCityName] = useState('Toronto');
  const [weatherData, setWeatherData] = useState({});
  const [temperatureIn, setTemperatureIn] = useState('');
  const [pageName, setPageName] = useState('');
  const APIkey = '3e3f6ebc981fb6a9badcedf7fad458e4';

  const fetchWeather = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
      );
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [cityName]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return (
    <AppContext.Provider
      value={{
        weatherData,
        userFullName,
        cityName,
        loading,
        temperatureIn,
        pageName,
        setPageName,
        setTemperatureIn,
        setUserFullName,
        setCityName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
