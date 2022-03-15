import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: Colors.lightPrimary,
    fontFamily: 'Open Sans',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
