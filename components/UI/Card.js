import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 300,
    minHeight: 300,
    maxHeight: 520,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8, // for android
  },
});

export default Card;
