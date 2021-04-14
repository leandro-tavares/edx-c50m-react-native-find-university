import React from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";

import { connect } from "react-redux";
import { styles } from "../../styles";

import Header from "../../components/header";
import Favorite from "../../components/favorite";
import Statistics from "../../components/statistics";

import { updateUniversity } from "../../redux/actions";

import {
  getFavorites,
  removeFavorite,
  clearFavorites,
} from "../../components/favorite/functions";

export class FavoriteScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: null,
      statistics: 0,
    };
  }

  showUniversity = async (university) => {
    await this.props.updateUniversity({
      country: university.country,
      name: university.name,
      webpage: university.webpage,
    });

    this.props.navigation.navigate("Detail", {
      name: university.name,
    });
  };

  getItems = async () => {
    const favorites = await getFavorites();
    if (favorites) {
      const items = JSON.parse(favorites);
      this.setState({
        favorites: items,
        statistics: items.length,
      });
    }
  };

  removeItem = async (country, name) => {
    await removeFavorite(country, name);
    await this.getItems();
  };

  componentDidMount() {
    this.props.navigation.addListener("willFocus", async () => {
      await this.getItems();
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <Header />

        {this.state.favorites ? (
          <View>
            <Statistics data={this.state.statistics} info="universities" />

            <ScrollView
              style={{
                ...styles.items,
                maxHeight: Dimensions.get("window").height - 300,
              }}
            >
              {this.state.favorites.map((university, i) => {
                const country = university.country;
                const name = university.name;
                const webpage = university.webpage;

                return (
                  <View key={i}>
                    <Favorite
                      country={country}
                      name={name}
                      removeItem={this.removeItem}
                      onPress={() =>
                        this.showUniversity({
                          country,
                          name,
                          webpage,
                        })
                      }
                    />
                  </View>
                );
              })}

              <TouchableOpacity
                style={styles.clearButton}
                onPress={() =>
                  Alert.alert(
                    "Clear favorites",
                    "Do you confirm clearing all favorites?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          clearFavorites();
                          this.setState({
                            favorites: null,
                          });
                        },
                      },
                    ],
                    { cancelable: false }
                  )
                }
              >
                <Text>Clear favorites</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        ) : (
          <Text>No favorite universities</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  country: state.country,
});

export default connect(mapStateToProps, {
  updateUniversity: updateUniversity,
})(FavoriteScreen);
