import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from 'screens/LoginScreen';
import BottomTabNavigator from 'navigation/BottomNavigator';
import OrderDetailsScreen from 'screens/OrderDetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
