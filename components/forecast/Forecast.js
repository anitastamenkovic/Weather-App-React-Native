import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import CurrentDay from '../currentDay/CurrentDay';
import CurrentDayDescription from '../currentDay/CurrentDayDescription';
import UpcomingDaysForecast from '../upcomingDays/UpcomingDaysForecast';

const Forecast = ({forecast}) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width,
  );

  useEffect(() => {
    const updateLayout = () => {
      setDeviceWidth(Dimensions.get('window').width);
    };

    const subscribe = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscribe.remove();
    };
  });

  let screenStyle = '';
  let topContainerStyle = '';
  let bottomContainerStyle = '';

  if (deviceWidth > 450) {
    screenStyle = styles.screenBig;
    topContainerStyle = styles.topContainer;
    bottomContainerStyle = styles.bottomContainer;
  }

  return (
    <View style={screenStyle}>
      <View style={topContainerStyle}>
        <CurrentDay {...forecast.currentDay} />
      </View>
      <View style={bottomContainerStyle}>
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDaysForecast days={forecast.upcomingDays} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenBig: {
    flexDirection: 'row',
  },
  topContainer: {
    height: 300,
  },
  bottomContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    padding: 20,
  },
});

export default Forecast;
