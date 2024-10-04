import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { useState } from 'react';

import { toast } from 'utils/helpers';
import useKeyboard from 'hooks/useKeyboard';

export default function LoginScreen() {
  const isKeyboardUp = useKeyboard();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const proceedLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username and Password are required');
      return;
    }
    console.log({ username, password });
    toast('Login Successful');
  };

  return (
    <View className='flex-1 justify-around items-center bg-marianblue p-6'>

      {!isKeyboardUp &&
        <View className='flex justify-start w-full'>
          <View className='flex flex-col space-y-4'>
            <Text className='text-5xl text-pear font-semibold'>Vendas</Text>
            <Text className='text-5xl text-pear font-semibold'>App</Text>
          </View>
        </View>
      }

      <View className='w-full'>

        <View className='w-full'>
          <TextInput
            className="rounded-md px-4 py-2"
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            cursorColor={'#000'}
          />
        </View>

        <View className='w-full pt-2'>
          <TextInput
            className="rounded-md px-4 py-2"
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            cursorColor={'#000'}
            secureTextEntry
          />
        </View>

        <Pressable
          onPress={handleForgotPassword}
          className='pb-6 pt-2'
        >
          <Text className='text-pear text-right'>Esqueceu a senha?</Text>
        </Pressable>

        <View className="bg-pear rounded-md overflow-hidden">
          <Pressable
            onPress={proceedLogin}
            android_ripple={{ color: '#000' }}
            className="p-4"
          >
            <Text className="text-night text-center font-bold">Submit</Text>
          </Pressable>
        </View>

      </View>

    </View>
  );
}
