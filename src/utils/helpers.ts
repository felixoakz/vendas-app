import Toast from 'react-native-toast-message';

export const toast = (message: string, type: string = 'success', fontSize: number = 16) => {
  Toast.show({
    type: type,
    text2: message,
    text2Style: { fontSize: fontSize, color: '#000' },
  });
} // a toast() function that takes a required message string and a type string. defaults to success.

export const displayCurrency = (value: number): string => {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
};

export const getTimeSince = (saleTime: string): string => {
  const saleDate = new Date(saleTime);
  const now = new Date();
  const diffMs = now.getTime() - saleDate.getTime(); // Difference in milliseconds
  const diffMinutes = Math.floor(diffMs / (1000 * 60)); // Convert to minutes

  // You can modify this to return hours or days as needed
  if (diffMinutes < 1) {
    return 'Recém iniciada';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''} atrás`;
  } else {
    const diffHours = Math.floor(diffMinutes / 60);
    return `${diffHours} hora${diffHours > 1 ? 's' : ''} atrás`;
  }
};
