import Toast from 'react-native-toast-message';


// a toast() function that takes a required message string and a type string. defaults to success.
export const toast = (message: string, type: string = 'success', fontSize: number = 16) => {
  Toast.show({
    type: type,
    text2: message,
    text2Style: { fontSize: fontSize, color: '#000' },
  });
}
