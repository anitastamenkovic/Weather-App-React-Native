import {useState} from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';

const useForecast = () => {
  const [isError, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async location => {
    try {
      const {data} = await axios.get(`${BASE_URL}/search/?query=${location}`);
      const woeid = data[0].woeid;
      if (!woeid || woeid.length === 0) {
        setError('There is no such location');
        setLoading(false);
        return;
      }
      return woeid;
    } catch (error) {
      console.log('getWoeid', error.message);
      throw new Error('There is no such location');
    }
  };

  const getForecastData = async woeid => {
    try {
      const {data} = await axios.get(`${BASE_URL}/${woeid}/`);
      if (!data || data.length === 0) {
        setError('Something went wrong');
        setLoading(false);
        return;
      }
      return data;
    } catch (error) {
      console.log('getForecastData', error.message);
      throw new Error('Something went wrong');
    }
  };

  const gatherForecastData = data => {
    const currentDay = getCurrentDayForecast(
      data.consolidated_weather[0],
      data.title,
    );
    const currentDayDetails = getCurrentDayDetailedForecast(
      data.consolidated_weather[0],
    );
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

    setForecast({currentDay, currentDayDetails, upcomingDays});
    setLoading(false);
  };

  const submitRequest = async location => {
    setLoading(true);
    setError('');

    try {
      const woeid = await getWoeid(location);
      if (!woeid) {
        return;
      }

      const data = await getForecastData(woeid);
      if (!data) {
        return;
      }
      gatherForecastData(data);
    } catch (error) {
      console.log('submitRequest', error.message);
      throw new Error('Something went wrong');
    }
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
