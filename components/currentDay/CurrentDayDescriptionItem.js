import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CurrentDayDescriptionItem = ({name, value, unit}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>
        {value} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CurrentDayDescriptionItem;
