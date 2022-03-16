import React from 'react';
import {StyleSheet, ImageBackground, View, Image} from 'react-native';

import BoldText from '../UI/BoldText';
import BodyText from '../UI/BodyText';

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../../assets/clouds.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View>
          <View style={styles.topContainer}>
            <BoldText>{weekday}</BoldText>
            <BodyText>{date}</BodyText>
            <View style={styles.locationContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/location-pin.png')}
                  resizeMode="cover"
                  style={styles.image}
                />
              </View>
              <BodyText>{location}</BodyText>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.imageContainer}>
              <Image source={{uri: weatherIcon}} style={styles.img} />
            </View>
            <BoldText style={styles.text}>{temperature}°C</BoldText>
            <BodyText>{weatherDescription}</BodyText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: 300,
    height: 230,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    padding: 10,
  },
  bottomContainer: {
    padding: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 11,
    height: 15,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginVertical: 0,
  },
});

export default CurrentDay;
