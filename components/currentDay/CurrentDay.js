import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

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
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width,
  );

  useEffect(() => {
    const updateLayout = () => {
      setDeviceWidth(Dimensions.get('window').width);
    };

    const subscribe = Dimensions.addEventListener('change', updateLayout);

    return () => {
      subscribe.remove();
    };
  });

  let screenStyle = styles.screen;

  if (deviceWidth > 450) {
    screenStyle = styles.screenBig;
  }

  return (
    <View style={screenStyle}>
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
                  source={require('../../assets/location.png')}
                  resizeMode="cover"
                  style={styles.image}
                />
              </View>
              <BodyText>{location}</BodyText>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <SvgUri width={30} height={30} uri={weatherIcon} />
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
  screenBig: {
    width: 300,
    height: 300,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 12,
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
  icon: {
    width: 20,
    height: 20,
  },
});

export default CurrentDay;
