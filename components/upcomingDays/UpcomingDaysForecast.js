import React from 'react';
import {StyleSheet, View} from 'react-native';

import UpcomingDaysForecastItem from './UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({days}) => {
  return (
    <View>
      {days.map(day => (
        <UpcomingDaysForecastItem {...day} key={day.weekday} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default UpcomingDaysForecast;
