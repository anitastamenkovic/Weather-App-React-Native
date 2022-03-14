import React from 'react';
import {StyleSheet, View} from 'react-native';

import BoldText from '../UI/BoldText';
import BodyText from '../UI/BodyText';

const WeatherData = () => {
  return (
    <View style={styles.container}>
      <BoldText text="City" />
      <BodyText text="Weather" />
      <BoldText text="Temperature" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default WeatherData;
