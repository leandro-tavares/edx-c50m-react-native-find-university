import React from "react";
import { View, Image, TextInput, Text, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "../../styles";

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.statsItems}>
        <Text style={styles.statsText}>Total {this.props.info} found:</Text>
        <Text style={styles.statsResult}>
          {this.props.data} <Entypo name="bar-graph" size={14} />
        </Text>
      </View>
    );
  }
}
