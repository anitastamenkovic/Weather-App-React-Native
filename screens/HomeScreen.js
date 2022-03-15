import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import useForecast from '../api/useForecast';
import Header from '../components/layout/Header';
import Card from '../components/UI/Card';
import Form from '../components/form/Form';
import Error from '../components/error/Error';
import Loader from '../components/loader/Loader';
import Forecast from '../components/forecast/Forecast';

const HomeScreen = () => {
  const {isError, isLoading, forecast, submitRequest} = useForecast();

  const onSubmit = value => {
    submitRequest(value);
  };

  return (
    <View style={styles.screen}>
      <Header title="Weather Forecast" />
      <ImageBackground
        source={require('../assets/clouds.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Card style={styles.card}>
          {!forecast && !isLoading && <Form submitSearch={onSubmit} />}
          {!forecast && isError && <Error message={isError} />}
          {!forecast && isLoading && <Loader />}
          {forecast && <Forecast forecast={forecast} />}
        </Card>
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
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
