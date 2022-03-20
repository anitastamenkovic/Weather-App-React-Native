import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';

// You could use just one Typography component, with prop bold or regular
const BodyText = ({children}) => {
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
    color: Colors.lightGray,
    marginVertical: 2,
  },
});

export default BodyText;
