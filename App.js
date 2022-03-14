import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import WeatherData from './components/layout/WeatherData';
import SearchInput from './components/UI/SearchInput';

const App: () => Node = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('./assets/clouds.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <WeatherData />
        <SearchInput />
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
    width: '100%',
    opacity: 0.8,
    backgroundColor: 'black',
  },
});

export default App;
