import React from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';

const Loader = () => (
  <View>
    <LottieView
      source={require('../../assets/99084-circle-loader.json')}
      style={styles.animation}
      autoPlay
    />
  </View>
);

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});

export default Loader;
