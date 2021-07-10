import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/global';

export default StyleSheet.create({
  information: {
    padding: 24,
  },
  name: {
    color: colors.primaryColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: colors.darkColor,
    fontSize: 14,
  },
  price: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  productPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calculedValue: {
    color: colors.darkColor,
    fontSize: 14,
    paddingHorizontal: 14,
  },
  breakLine: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryColor,
  },
  cart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
