import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

const BodyUppercase = ({children}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Open Sans',
    fontSize: Dimensions.get('window').width < 400 ? 16 : 18,
    fontWeight: 'bold',
    color: Colors.lightGray,
    textTransform: 'uppercase',
  },
});

export default BodyUppercase;
