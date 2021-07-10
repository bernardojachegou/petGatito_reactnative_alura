import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export default (small, upsideDown) =>
  StyleSheet.create({
    button: {
      width: 140,
      paddingVertical: small ? 3 : 9,
      paddingHorizontal: 20,
      backgroundColor: upsideDown ? colors.secondaryColor : colors.primaryColor,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderRadius: 20,
    },
    buttonText: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: upsideDown ? colors.primaryColor : colors.secondaryColor,
    },
  });
