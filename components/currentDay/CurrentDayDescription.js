import React from 'react';
import {StyleSheet, View} from 'react-native';

import CurrentDayDescriptionItem from './CurrentDayDescriptionItem';

const CurrentDayDescription = ({forecast}) => {
  return (
    <View style={styles.screen}>
      {forecast.map(item => (
        <CurrentDayDescriptionItem {...item} key={item.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default CurrentDayDescription;
