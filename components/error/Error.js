import React from 'react';
import {StyleSheet, View} from 'react-native';

import BoldText from '../UI/BoldText';

const Error = ({message}) => {
  return (
    <View style={styles.container}>
      <BoldText>{message}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default Error;
