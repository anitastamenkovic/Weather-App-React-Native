import React from 'react';
import {StyleSheet, View} from 'react-native';

import CurrentDay from '../currentDay/CurrentDay';
import CurrentDayDescription from '../currentDay/CurrentDayDescription';
import UpcomingDaysForecast from '../upcomingDays/UpcomingDaysForecast';

const Forecast = ({forecast}) => {
  return (
    <View style={styles.screen}>
      <View>
        <CurrentDay {...forecast.currentDay} />
      </View>
      <View>
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDaysForecast days={forecast.upcomingDays} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
});

export default Forecast;
