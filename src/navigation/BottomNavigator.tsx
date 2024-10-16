import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from 'screens/HomeScreen';
import OrdersScreen from 'screens/OrderScreen';
import ConfigScreen from 'screens/ConfigScreen';
import useBackHandler from 'hooks/useBackHandler';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  useBackHandler()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Pedidos') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Configs') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 5 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Pedidos" component={OrdersScreen} />
      <Tab.Screen name="Configs" component={ConfigScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
