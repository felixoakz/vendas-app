import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator.tsx';

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar style="light" />

      <StackNavigator />

      <Toast />

    </NavigationContainer>
  );
}
