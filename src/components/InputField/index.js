import React from 'react';
import { TextInput } from 'react-native';
import Styles from './styles';

export const InputField = ({ itemValue, action, styles }) => {
  const updateValue = (newItemValue, callbackAction) => {
    const checkIntValue = newItemValue.match(/^[0-9]*$/);
    if (!checkIntValue) return;

    const deleteLeftZeroValue = newItemValue.replace(/^(0)(.+)/, '$2');

    callbackAction(deleteLeftZeroValue);
  };

  const stringNumber = String(itemValue);
  return (
    <TextInput
      style={[Styles.field, styles]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(newItemValue) => {
        updateValue(newItemValue, action);
      }}
      value={stringNumber}
    />
  );
};
