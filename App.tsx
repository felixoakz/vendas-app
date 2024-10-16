import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import StackNavigator from './src/navigation/StackNavigator.tsx';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>

          <StatusBar backgroundColor='#f3f4f6' style="dark" />

          <StackNavigator />

          <Toast />

        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
