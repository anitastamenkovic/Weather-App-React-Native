import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import CurrentDay from '../currentDay/CurrentDay';
import CurrentDayDescription from '../currentDay/CurrentDayDescription';
import UpcomingDaysForecast from '../upcomingDays/UpcomingDaysForecast';

const Forecast = ({forecast}) => {
  return (
    <ScrollView>
      <CurrentDay {...forecast.currentDay} />
      <CurrentDayDescription forecast={forecast.currentDayDetails} />
      <UpcomingDaysForecast days={forecast.upcomingDays} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Forecast;
