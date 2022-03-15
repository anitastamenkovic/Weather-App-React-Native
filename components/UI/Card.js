import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';

const Card = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    minHeight: 200,
    backgroundColor: Colors.grey,
    padding: 20,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8, // for android
  },
});

export default Card;
