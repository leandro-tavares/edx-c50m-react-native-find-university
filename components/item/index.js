import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "../../styles";

import {
  getFavorites,
  checkFavorite,
  setFavorite,
  removeFavorite,
} from "../favorite/functions";

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
    };

    this.onPress = this.props.onPress.bind(this);
  }

  async componentDidMount() {
    const check = await checkFavorite(
      this.props.data.country,
      this.props.data.name
    );
    if (check) {
      this.setState({
        favorite: true,
      });
    }
    // AsyncStorage.removeItem(APP_STORAGE_NAME);
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.itemFavorite}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.favorite) {
                removeFavorite(this.props.data.country, this.props.data.name);
              } else {
                setFavorite(this.props.data);
              }
              this.setState({
                favorite: !this.state.favorite,
              });
            }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            activeOpacity={0.5}
          >
            <MaterialIcons
              name={this.state.favorite ? "favorite" : "favorite-border"}
              size={18}
              color="#ffcb00"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.onPress(this.props.data.country, this.props.data.name);
          }}
        >
          <View>
            <Text style={styles.itemName}>{this.props.data.name}</Text>
          </View>

          <View>
            <View style={styles.itemDescription}>
              <Text style={styles.itemDetail}>Country: </Text>
              <Text style={styles.itemTitle}>{this.props.data.country}</Text>
            </View>

            <View style={styles.itemDescription}>
              <Text style={styles.itemDetail}>Webpage: </Text>
              <Text style={styles.itemTitle}>
                {this.props.data.web_pages && this.props.data.web_pages[0]}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
