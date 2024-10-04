import { ParamListBase, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import useKeyboard from 'hooks/useKeyboard';
import { toast } from 'utils/helpers';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const isKeyboardUp = useKeyboard();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  const proceedLogin = () => {
    //if (!username || !password) {
    //  toast('Campos usuário e senha obrigatórios', 'error');
    //  return;
    //} WARN:
    navigation.navigate('Main')
  };

  return (
    <View className='flex-1 bg-gray-100 justify-around items-center p-6'>

      {!isKeyboardUp &&
        <View className='flex justify-start w-full pt-32'>
          <View className='flex flex-col space-y-4'>
            <Text className='text-5xl text-pear font-semibold'>Vendas</Text>
            <Text className='text-5xl text-pear font-semibold'>App</Text>
          </View>
        </View>
      }

      <View className='w-full'>

        <View className='w-full'>
          <TextInput
            className="rounded-md px-4 py-2 bg-white"
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            cursorColor={'#000'}
          />
        </View>

        <View className='w-full pt-2'>
          <TextInput
            className="rounded-md px-4 py-2 bg-white"
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

        <View className="rounded-md overflow-hidden">
          <Pressable
            onPress={proceedLogin}
            android_ripple={{ color: '#000' }}
            className="p-4"
          >
            <Text className="text-center font-bold">Login</Text>
          </Pressable>
        </View>

      </View>

    </View>
  );
}
