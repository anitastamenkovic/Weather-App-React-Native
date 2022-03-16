import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

const BoldText = ({children, style}) => {
  return (
    <View style={{...styles.textContainer, ...style}}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width < 400 ? 20 : 22,
    color: Colors.lightGray,
    marginVertical: 2,
  },
});

export default BoldText;
