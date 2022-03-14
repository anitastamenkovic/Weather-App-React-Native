import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

const BodyText = ({text}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Open Sans',
    fontSize: Dimensions.get('window').height < 400 ? 18 : 20,
    color: Colors.lightGray,
  },
});

export default BodyText;
