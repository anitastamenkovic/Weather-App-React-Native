import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SearchInput from '../UI/SearchInput';
import MainButton from '../UI/MainButton';

const Form = ({submitSearch}) => {
  const [location, setLocation] = useState('');

  const inputHandler = value => {
    setLocation(value);
  };

  // onPress handler would be better naming convention
  const clickHandler = () => {
    if (!location || location === '') {
      return;
    }
    submitSearch(location);
    setLocation('');
  };

  return (
    <View style={styles.container}>
      <SearchInput onChangeInput={inputHandler} location={location} />
      <MainButton onClick={clickHandler}>SEARCH</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

export default Form;
