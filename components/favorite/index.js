import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "../../styles";

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ ...styles.item, height: 85 }}>
        <View style={styles.itemFavorite}>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            activeOpacity={0.5}
            onPress={() =>
              Alert.alert(
                "Remove favorite",
                `Do confirm remove: ${this.props.name}?`,
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      this.props.removeItem(
                        this.props.country,
                        this.props.name
                      );
                    },
                  },
                ],
                { cancelable: false }
              )
            }
          >
            <MaterialIcons name="favorite" size={18} color="#ffcb00" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.props.onPress}>
          <View>
            <Text style={styles.itemName}>{this.props.name}</Text>
          </View>

          <View style={{ ...styles.itemDescription, marginTop: 5 }}>
            <Text style={styles.itemDetail}>Country: </Text>
            <Text style={styles.itemTitle}>{this.props.country}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
