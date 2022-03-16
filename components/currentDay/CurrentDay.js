import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => {
  return (
    <View>
      <View>
        <Text>{weekday}</Text>
        <Text>{date}</Text>
        <Text>
          <Image
            source={require('../../assets/location-pin.png')}
            resizeMode="cover"
          />
          <Text>{location}</Text>
        </Text>
      </View>
      <View>
        <Image source={{uri: weatherIcon}} />
        <Text>{temperature}°C</Text>
        <Text>{weatherDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CurrentDay;
