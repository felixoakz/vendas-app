import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (callback?: () => void) => {

  useEffect(() => {
    const backAction = () => {
      if (callback) {
        callback(); // Execute the provided callback function
      }
      return true; // Prevent the default back action
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Cleanup listener on unmount
  }, [callback]);
};

export default useBackHandler;
