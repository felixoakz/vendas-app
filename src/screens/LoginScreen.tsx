import { ParamListBase, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';

import useKeyboard from 'hooks/useKeyboard';
import { toast } from 'utils/helpers';
import { loginApi } from 'api/config';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const isKeyboardUp = useKeyboard();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const proceedLogin = async () => {
    const { email , password } = credentials;

    if (!email || !password) {
      toast('Campos usuário e senha obrigatórios', 'error');
      return;
    }

    const deviceName = 'xiaomi'

    try {
      const response = await loginApi({ email, password, deviceName });

      const { token } = response.data;
      await SecureStore.setItemAsync('authToken', token);

      navigation.navigate('Main');

    } catch (e) {
      console.log({e})

      //FIX: corrigir validacao em caso de email/senha errada
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center p-6">

      {!isKeyboardUp &&
        <View className="w-full mb-10">
          <Text className="text-6xl font-bold text-black">Vendas App</Text>
        </View>
      }

      <View className="w-full space-y-4">

        <TextInput
          className="rounded-lg px-4 py-3 bg-white border border-gray-300 text-black"
          placeholder="Email"
          value={credentials.email}
          onChangeText={(email) => setCredentials({ ...credentials, email: email })}
          cursorColor={'#000'}
          placeholderTextColor="#7e7e7e"
        />

        <TextInput
          className="rounded-lg px-4 py-3 bg-white border border-gray-300 text-black"
          placeholder="Senha"
          value={credentials.password}
          onChangeText={(password) => setCredentials({ ...credentials, password })}
          cursorColor={'#000'}
          secureTextEntry
          placeholderTextColor="#7e7e7e"
        />

        <Pressable onPress={() => console.log('Forgot password pressed')} className="mt-2">
          <Text className="text-right text-sm text-gray-500">Esqueceu a senha?</Text>
        </Pressable>

        <Pressable
          onPress={proceedLogin}
          className="mt-6 rounded-lg bg-black p-4"
          android_ripple={{ color: '#444' }}
        >
          <Text className="text-center text-white font-semibold">Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
