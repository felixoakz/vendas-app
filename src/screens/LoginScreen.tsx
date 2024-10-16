import { ParamListBase, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import useKeyboard from 'hooks/useKeyboard';
import { toast } from 'utils/helpers';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const isKeyboardUp = useKeyboard();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const proceedLogin = () => {
    //const { username, password } = credentials;
    //if (!username || !password) {
    //  toast('Campos usuário e senha obrigatórios', 'error');
    //  return;
    //}
    navigation.navigate('Main');
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
          placeholder="Usuário"
          value={credentials.username}
          onChangeText={(username) => setCredentials({ ...credentials, username })}
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
