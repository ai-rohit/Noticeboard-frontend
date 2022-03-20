import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, data)=>{
  await AsyncStorage.setItem(key, data);
}

const getData = async (key)=>{
  return await AsyncStorage.getItem(key);
}

export {storeData, getData};