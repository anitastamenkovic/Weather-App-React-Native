import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../constants/colors';

import Card from '../components/UI/Card';
import SearchInput from '../components/UI/SearchInput';

const HomeScreen = () => {
  return (
    <Card style={styles.card}>
      <SearchInput />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
  },
});

export default HomeScreen;
