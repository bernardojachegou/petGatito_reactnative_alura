import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../../styles/global';

export const BaseScreen = ({ children }) => {
  return (
    <SafeAreaView style={styles.fill}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};
