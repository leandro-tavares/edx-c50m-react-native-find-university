import { AsyncStorage } from "react-native";

const APP_STORAGE_FAVORITE = "@CS50M_UniversityFind:Favorites";

const merge = (prev, next) => Object.assign({}, prev, next);

export const setFavorite = async (university) => {
  const country = university.country;
  const name = university.name;
  const webpage = university.web_pages[0];

  const favorites = await getFavorites();
  const favorite = [
    {
      id: new Date().getTime(),
      country,
      name,
      webpage,
    },
  ];

  try {
    let oldFavorites;
    let newFavorite = favorite;

    if (favorites) {
      oldFavorites = JSON.parse(favorites);
      newFavorite = [...oldFavorites, ...newFavorite];
    }

    const result = JSON.stringify(newFavorite);
    await AsyncStorage.setItem(APP_STORAGE_FAVORITE, result);

    return true;
  } catch (error) {
    console.error("setFavorite", error);
  }
};

export const removeFavorite = async (country, name) => {
  const favorites = await getFavorites();

  if (favorites) {
    try {
      const items = JSON.parse(favorites);
      const newFavorite = items.filter((favorite) => {
        if (favorite.country === country && favorite.name === name) {
          return null;
        }
        return favorite;
      });

      const result = JSON.stringify(newFavorite);

      await AsyncStorage.removeItem(APP_STORAGE_FAVORITE);
      await AsyncStorage.setItem(APP_STORAGE_FAVORITE, result);

      return false;
    } catch (error) {
      console.error("removeFavorite", error);
    }
  }
};

export const checkFavorite = async (country, name) => {
  const favorites = await getFavorites();

  if (favorites) {
    try {
      const items = JSON.parse(favorites);
      const favorited = items.find((favorite) => {
        if (favorite.country === country && favorite.name === name) {
          return favorite;
        }
        return null;
      });

      if (favorited) {
        return true;
      }

      return false;
    } catch (error) {
      console.error("checkFavorite", error);
    }
  }

  return false;
};

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem(APP_STORAGE_FAVORITE);

    if (favorites) {
      return favorites;
    }

    return null;
  } catch (error) {
    console.error("getFavorites", error);
  }
};

export const clearFavorites = async () => {
  try {
    await AsyncStorage.removeItem(APP_STORAGE_FAVORITE);
    console.log("Favorites cleared");
    return null;
  } catch (error) {
    console.error("clearFavorites", error);
  }
};
