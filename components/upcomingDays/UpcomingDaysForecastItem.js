import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import BodyText from '../UI/BodyText';
import BodyUppercase from '../UI/BodyUppercase';

const imgUrlBase = 'https://www.metaweather.com/static/img/weather/png/';

const UpcomingDaysDescriptionItem = ({weekday, temperature, imgUrl}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${imgUrlBase}${imgUrl}.png`}}
        resizeMode="cover"
        style={styles.image}
        fadeDuration={1000}
      />
      <BodyText>{weekday}</BodyText>
      <BodyUppercase>{temperature}&deg;</BodyUppercase>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default UpcomingDaysDescriptionItem;
