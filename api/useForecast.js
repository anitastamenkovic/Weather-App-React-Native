import {useState} from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
// const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
// const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
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
      console.log('Woeid', woeid);
      return woeid;
    } catch (error) {
      console.log('getWoeid', error.message);
      throw error;
    }

    // axios
    //   .get(`${BASE_URL}/search/?query=${location}`)
    //   .then(response => {
    //     const woeid = response.data[0].woeid;
    //     if (!woeid || woeid.length === 0) {
    //       setError('There is no such location');
    //       setLoading(false);
    //       return;
    //     }
    //     console.log('Woeid', woeid);
    //     return woeid;
    //   })
    //   .catch(error => {
    //     console.log('getWoeid', error.message);
    //     throw error;
    //   });
  };

  const getForecastData = async woeid => {
    try {
      const {data} = await axios.get(`${BASE_URL}/${woeid}/`);
      if (!woeid || woeid.length === 0) {
        setError('Something went wrong');
        setLoading(false);
        return;
      }
      return data;
    } catch (error) {
      console.log('getForecastData', error.message);
      throw error;
    }
    // axios
    //   .get(`${BASE_URL}/${woeid}/`)
    //   .then(response => {
    //     const data = response.data;
    //     if (!data || data.length === 0) {
    //       setError('Something went wrong');
    //       setLoading(false);
    //       return;
    //     }
    //     return data;
    //   })
    //   .catch(error => {
    //     console.log('getForecastData', error.message);
    //     throw error;
    //   });
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
    setError(false);

    try {
      const woeid = await getWoeid(location);
      console.log('submitRequest', woeid);
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
      throw error;
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
