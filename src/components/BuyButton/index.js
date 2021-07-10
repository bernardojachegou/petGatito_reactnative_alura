import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import setStyles from './styles';

export const BuyButton = ({
  small = false,
  changeColor = false,
  value,
  action,
  styles,
}) => {
  const staticStyles = setStyles(small, changeColor);
  return (
    <TouchableOpacity onPress={action} style={[staticStyles.button, styles]}>
      <Text style={staticStyles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};
