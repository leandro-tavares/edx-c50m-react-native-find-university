import React from "react";
import { YellowBox } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import { Provider, connect } from "react-redux";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./screens/home";
import FavoriteScreen from "./screens/favorite";
import DetailScreen from "./screens/detail";
import AboutScreen from "./screens/about";
import FilterScreen from "./screens/filter";

import store from "./redux/store";
import { getCountry } from "./components/search/functions";
import { updateCountry } from "./redux/actions";

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Filter: FilterScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const FilterStack = createStackNavigator(
  {
    Filter: FilterScreen,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

MainStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="university" size={22} color={tintColor} />
  ),
};

FavoriteScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name="favorite" size={22} color={tintColor} />
  ),
};

AboutScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="info" size={22} color={tintColor} />
  ),
};

const MainTabs = createBottomTabNavigator(
  {
    Universities: MainStack,
    Favorites: FavoriteScreen,
    About: AboutScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "#e06d06",
      style: {
        height: 60,
        paddingTop: 10,
        shadowColor: "#333",
        shadowOpacity: 0.1,
      },
    },
  }
);

const AppNavigator = createSwitchNavigator({
  Main: MainTabs,
});

export class App extends React.Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      "Warning: componentWillReceiveProps has been renamed",
    ]);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
