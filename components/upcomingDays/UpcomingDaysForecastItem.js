import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysDescriptionItem = ({weekday, temperature, imgUrl}) => {
  return (
    <View>
      <Image source={{uri: `${imgUrlBase}img/weather/${imgUrl}.svg`}} />
      <Text>{weekday}</Text>
      <Text>{temperature}&deg;</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UpcomingDaysDescriptionItem;
