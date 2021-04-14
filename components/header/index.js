import React from "react";
import { View, Image, TextInput, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "../../styles";

import imgLogo from "../../assets/logo.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortByText: "Date posted",
      sortByChevron: "down",
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { mini } = this.props;

    return mini ? (
      <View style={styles.headerMini}>
        <Image source={imgLogo} style={styles.headerMiniLogo} />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          University Detail
        </Text>
        <MaterialIcons
          name="school"
          size={36}
          color="#333"
          style={{ marginTop: -2 }}
        />
      </View>
    ) : (
      <View style={styles.header}>
        <Image source={imgLogo} style={styles.headerLogo} />
      </View>
    );
  }
}
