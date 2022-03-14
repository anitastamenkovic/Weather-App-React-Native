import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import WeatherForecastScreen from './screens/WeatherForecastScreen';

const App: () => Node = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('./assets/clouds.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <HomeScreen />
        <WeatherForecastScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    opacity: 0.8,
    backgroundColor: 'black',
  },
});

export default App;
