import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Colors from '../../constants/colors';

const SearchInput = () => {
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
          placeholderTextColor={Colors.lightPrimary}
          style={{...styles.input, ...customStyle}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: Colors.grey,
    color: Colors.lightPrimary,
    marginVertical: 10,
    fontFamily: 'Open Sans',
    borderRadius: 5,
    padding: 10,
  },
  inputFocus: {
    borderColor: Colors.primary,
    borderWidth: 3,
  },
});

export default SearchInput;
