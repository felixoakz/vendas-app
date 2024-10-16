import React from 'react';
import { View, Text } from 'react-native';
import useBackHandler from 'hooks/useBackHandler';

const OrderDetailsScreen = ({ route }) => {
  useBackHandler()
  const { order } = route.params;


  return (
    <View className="flex-1 justify-center items-center">
      <Text>Order Details</Text>
      <Text>Mesa: {order.id}</Text>
      <Text>Total: R$ {order.totalValue.toFixed(2).replace('.', ',')}</Text>
      <Text>Time: {order.time}</Text>
    </View>
  );
};

export default OrderDetailsScreen;
