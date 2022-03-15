import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../constants/colors';

import WeatherData from '../components/layout/WeatherData';
import Card from '../components/UI/Card';

const WeatherForecastScreen = () => {
  return (
    <Card>
      <WeatherData />
    </Card>
  );
};

const styles = StyleSheet.create({});

export default WeatherForecastScreen;
