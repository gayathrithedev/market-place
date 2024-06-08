import AsyncStorage from '@react-native-async-storage/async-storage';

const storeLoginInfo = async value => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    // saving error
  }
};

const getLoginInfo = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export {storeLoginInfo, getLoginInfo};
