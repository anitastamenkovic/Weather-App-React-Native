import React from 'react';
import {StyleSheet, View} from 'react-native';

import CurrentDayDescriptionItem from './CurrentDayDescriptionItem';

const CurrentDayDescription = ({forecast}) => {
  return (
    <View>
      {forecast.map(item => (
        <CurrentDayDescriptionItem {...item} key={item.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CurrentDayDescription;
