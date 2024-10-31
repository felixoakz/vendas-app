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


export const getTimeSince = (createdAt: string): string => {
  const saleDate = new Date(createdAt);
  const now = new Date();
  const diffMs = now.getTime() - saleDate.getTime(); // Difference in milliseconds
  const diffMinutes = Math.floor(diffMs / (1000 * 60)); // Convert to minutes

  if (diffMinutes < 1) {
    return 'Recém iniciada';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''} atrás`;
  } else {
    const diffHours = Math.floor(diffMinutes / 60);
    const remainingMinutes = diffMinutes % 60; // Calculate remaining minutes

    return `${diffHours} hora${diffHours > 1 ? 's' : ''} e ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} atrás`;
  }
};


