import axios, { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';

interface LoginData {
  email: string;
  password: string;
  deviceName: string;
}

const api = axios.create({
  baseURL: "https://vendas.oakz.org/api/dev",
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('authToken');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;

}, (error) => {
  return Promise.reject(error);
});

export const loginApi = async (data: LoginData): Promise<AxiosResponse<any>> => {
  return api.post('/login', {
    email: data.email,
    password: data.password,
    device_name: data.deviceName,
  });
};

export const fetchOrdersApi = async (): Promise<AxiosResponse<any>> => {
  return api.get('/sales');
};
