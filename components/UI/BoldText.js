import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

const BoldText = ({text}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').height < 400 ? 20 : 22,
    color: Colors.lightGray,
  },
});

export default BoldText;
