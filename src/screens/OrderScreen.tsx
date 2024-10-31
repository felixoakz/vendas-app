import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/native';
import { View, Text, FlatList, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { fetchOrdersApi } from 'api/config';
import { getTimeSince } from 'utils/helpers';


export type RootStackParamList = {
  Orders: undefined;
  OrderDetails: { order: Order };
};

interface Order {
  id: number;
  title: string;
  status: number;
  created_at: string;
}


const OrdersScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetchOrdersApi();
        setOrders(res.data);
      } catch (e) {
        console.log({e})
      }
    };

    fetchOrders();
  }, []);

  const handleOrderPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  };


  const renderItem = ({ item }: { item: Order }) => {
    return (
      <Pressable
        className="my-1 bg-white rounded-md"
        onPress={() => handleOrderPress(item)}
      >
        <View className='m-1'>
          <Text>Venda: {item.title}</Text>
          <Text>Status: {item.status}</Text>
          <Text>Tempo: {getTimeSince(item.created_at)}</Text>
        </View>
      </Pressable>
    );
  };

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
