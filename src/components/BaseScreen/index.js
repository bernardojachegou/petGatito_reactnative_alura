import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import globalStyle from '../../styles/global';

export const BaseScreen = ({ children }) => {
  return (
    <SafeAreaView style={globalStyle.fill}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};
