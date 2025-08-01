import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFavorites = async () => JSON.parse(await AsyncStorage.getItem('favorites')) || [];

export const saveFavorite = async (event) => {
  const current = await getFavorites();
  await AsyncStorage.setItem('favorites', JSON.stringify([...current, event]));
};