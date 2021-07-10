import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PetServices } from '../views/PetServices';
import { Cart } from '../views/Cart';
import { colors } from '../styles/global';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primaryColor,
          inactiveTintColor: colors.lightColor,
          activeBackgroundColor: colors.primaryColor,
          inactiveBackgroundColor: colors.secondaryColor,
          labelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 21,
            marginTop: 3,
            paddingTop: 12,
            backgroundColor: colors.secondaryColor,
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Serviços" component={PetServices} />
        <Tab.Screen name="Carrinho" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
