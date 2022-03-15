import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Colors from '../../constants/colors';

const SearchInput = ({onChangeInput, location}) => {
  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.inputFocus : '';

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.inputContainer}>
        <TextInput
          blurOnSubmit
          onFocus={focusHandler}
          onBlur={blurHandler}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          minLength={2}
          placeholder="Search any city"
          placeholderTextColor={Colors.grey}
          style={{...styles.input, ...customStyle}}
          value={location}
          onChangeText={onChangeInput}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: Colors.lightGray,
    color: Colors.grey,
    marginVertical: 10,
    fontFamily: 'Open Sans',
    borderRadius: 5,
    padding: 10,
  },
  inputFocus: {
    borderColor: Colors.primary,
    borderWidth: 2,
    shadowColor: Colors.primary,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    shadowOpacity: 0.27,
    elevation: 8, // for android
  },
});

export default SearchInput;
