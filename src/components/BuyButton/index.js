import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import defaultStylesFunc from './styles';

export const BuyButton = ({
  small = false,
  upsideDown = false,
  value,
  action,
  styles,
}) => {
  const defaultStyles = defaultStylesFunc(small, upsideDown);
  return (
    <TouchableOpacity onPress={action} style={[defaultStyles.button, styles]}>
      <Text style={defaultStyles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};
