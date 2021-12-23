import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  onSubmitEditing: () => any;
  value: string;
  onChangeText: (e: string) => any;
}

const Input = ({onSubmitEditing, value, onChangeText}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={'You can search by name or disease'}
        placeholderTextColor={'#c0c0c0'}
        onFocus={() => {}}
        onBlur={() => {}}
        style={[styles.inputBox]}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={40}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={'done'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
    width: '100%',
    marginBottom: 11,
  },
  inputBox: {
    height: 45,
    borderColor: '#BE64FF',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingLeft: 11,
  },
});
