import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/colors';

const MainButton = ({children, onClick, style}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onClick}>
      <View style={{...styles.btnContainer, ...style}}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 100,
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: Colors.lightPrimary,
    fontFamily: 'Open Sans',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MainButton;
