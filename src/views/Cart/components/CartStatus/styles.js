import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/global';

export default StyleSheet.create({
  content: {
    backgroundColor: colors.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.lightColor,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: colors.secondaryColor,
  },
  button: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});
