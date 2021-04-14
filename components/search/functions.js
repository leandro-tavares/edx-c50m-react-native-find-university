import { AsyncStorage } from "react-native";

const APP_STORAGE_COUNTRY = "@CS50M_UniversityFind:Country";

export const setCountry = async (country) => {
  try {
    await AsyncStorage.setItem(APP_STORAGE_COUNTRY, JSON.stringify(country));

    return true;
  } catch (error) {
    console.error("setCountry", error);
  }
};

export const getCountry = async () => {
  try {
    const country = await AsyncStorage.getItem(APP_STORAGE_COUNTRY);

    if (country) {
      return JSON.parse(country);
    }

    return null;
  } catch (error) {
    console.error("getFavorites", error);
  }
};
