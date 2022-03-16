import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

import UpcomingDaysForecastItem from './UpcomingDaysForecastItem';

const UpcomingDaysForecast = ({days}) => {
  return (
    <View style={styles.screen}>
      {days.map(day => (
        <UpcomingDaysForecastItem {...day} key={day.weekday} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingTop: 10,
    borderTopColor: Colors.darkGrey,
    borderTopWidth: 2,
  },
});

export default UpcomingDaysForecast;
