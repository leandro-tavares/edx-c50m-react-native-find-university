import { AsyncStorage } from "react-native";

const APP_STORAGE_API = "@CS50M_UniversityFind:API";

export const setAccessKeyPositionstack = async (access_key) => {
  try {
    const api = {
      access_key: access_key,
    };

    await AsyncStorage.setItem(APP_STORAGE_API, JSON.stringify(api));

    return true;
  } catch (error) {
    console.error("setAccessKeyPositionstack", error);
  }
};

export const getAccessKeyPositionstack = async () => {
  try {
    const api = await AsyncStorage.getItem(APP_STORAGE_API);

    if (api) {
      return JSON.parse(api);
    }

    return null;
  } catch (error) {
    console.error("getAccessKeyPositionstack", error);
  }
};
