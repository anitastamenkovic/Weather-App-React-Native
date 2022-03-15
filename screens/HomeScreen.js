import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
// import Colors from '../constants/colors';

import Card from '../components/UI/Card';
import SearchInput from '../components/UI/SearchInput';
import MainButton from '../components/UI/MainButton';

const HomeScreen = ({onSearchLocation}) => {
  const [location, setLocation] = useState('');

  const inputHandler = value => {
    setLocation(value);
  };

  const clickHandler = () => {
    onSearchLocation(location);
  };

  return (
    <Card style={styles.card}>
      <SearchInput onChangeInput={inputHandler} location={location} />
      <MainButton onClick={clickHandler}>SEARCH</MainButton>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
