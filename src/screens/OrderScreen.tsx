import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';
import { View, Text, FlatList, Pressable, BackHandler } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { displayCurrency, getTimeSince } from 'utils/helpers';


export type RootStackParamList = {
  Orders: undefined; // No params for Orders screen
  OrderDetails: { order: Order }; // Params for OrderDetails screen
};

interface Order {
  id: number;
  totalValue: number;
  time: string;
}

const OrdersScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleOrderPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  };

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const orders: Order[] = [

    { id: 1, totalValue: 12050, time: `${today}T08:15:00` },
    { id: 2, totalValue: 7525, time: `${today}T08:45:00` },
    { id: 3, totalValue: 9999, time: `${today}T09:00:00` },
    { id: 4, totalValue: 5000, time: `${today}T09:30:00` },
    { id: 5, totalValue: 15075, time: `${today}T10:00:00` },
    { id: 6, totalValue: 3550, time: `${today}T10:30:00` },
    { id: 7, totalValue: 20000, time: `${today}T11:00:00` },
    { id: 8, totalValue: 8020, time: `${today}T11:15:00` },
    { id: 9, totalValue: 6000, time: `${today}T11:45:00` },
    { id: 10, totalValue: 11099, time: `${today}T11:50:00` },
    { id: 11, totalValue: 14500, time: `${today}T10:20:00` },
    { id: 12, totalValue: 9275, time: `${today}T09:40:00` },
    { id: 13, totalValue: 6750, time: `${today}T08:30:00` },
    { id: 14, totalValue: 8200, time: `${today}T10:15:00` },
    { id: 15, totalValue: 10200, time: `${today}T12:00:00` },
  ];

  const renderItem = ({ item }: { item: Order }) => (
    <Pressable
      className="my-1 bg-white rounded-md"
      onPress={() => handleOrderPress(item)}
    >
      <View className='m-1'>
        <Text>Venda: {item.id}</Text>
        <Text>Total: {displayCurrency(item.totalValue)}</Text>
        <Text>Tempo: {getTimeSince(item.time)}</Text>
      </View>
    </Pressable>
  );

  return (
    <View className="flex-1 m-4">
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default OrdersScreen;
