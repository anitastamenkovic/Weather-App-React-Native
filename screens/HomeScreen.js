import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';

import useForecast from '../api/useForecast';
import Header from '../components/layout/Header';
import Card from '../components/UI/Card';
import Form from '../components/form/Form';
import Error from '../components/error/Error';
import Loader from '../components/loader/Loader';
import Forecast from '../components/forecast/Forecast';

const HomeScreen = () => {
  const [deviceHeight, setDeviceHeight] = useState(
    Dimensions.get('window').height,
  );

  useEffect(() => {
    const updateLayout = () => {
      setDeviceHeight(Dimensions.get('window').height);
    };

    const subscribe = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscribe.remove();
    };
  });

  const {isError, isLoading, forecast, submitRequest} = useForecast();

  const onSubmit = value => {
    submitRequest(value);
  };

  return (
    <View style={styles.screen}>
      {deviceHeight > 400 ? <Header title="Weather Forecast" /> : null}
      <ImageBackground
        source={require('../assets/clouds.jpg')}
        resizeMode="cover"
        style={styles.image}>
        {!forecast ? (
          <Card>
            {!isLoading ? <Form submitSearch={onSubmit} /> : null}
            {isError ? <Error message={isError} /> : null}
            {isLoading ? <Loader /> : null}
          </Card>
        ) : null}
        {forecast ? (
          <Card>
            <Forecast forecast={forecast} />
          </Card>
        ) : null}
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

export default HomeScreen;
