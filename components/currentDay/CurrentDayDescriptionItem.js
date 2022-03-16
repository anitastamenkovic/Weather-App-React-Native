import React from 'react';
import {StyleSheet, View} from 'react-native';

import BodyUppercase from '../UI/BodyUppercase';
import BodyText from '../UI/BodyText';

const CurrentDayDescriptionItem = ({name, value, unit}) => {
  return (
    <View style={styles.screen}>
      <BodyUppercase style={styles.name}>{name}</BodyUppercase>
      <BodyText>
        {value} {unit}
      </BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CurrentDayDescriptionItem;
