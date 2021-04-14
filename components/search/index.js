import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import { styles } from "../../styles";

export class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortByText: "Date posted",
      sortByChevron: "down",
      searchText: "",
      country: {},
    };

    this.submit = this.props.submit.bind(this);
    this.onPress = this.props.onPress.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View>
        <View style={styles.search}>
          <View style={styles.searchGroup}>
            <FontAwesome name="search" size={16} color="#636363" />

            <TextInput
              // autoFocus
              autoCapitalize="words"
              autoCorrect={false}
              style={styles.searchInput}
              onChangeText={(text) => this.setState({ searchText: text })}
              onSubmitEditing={() => {
                this.submit(this.props.country.name, this.state.searchText);
              }}
            />
          </View>

          <View style={styles.searchFilter}>
            <TouchableOpacity onPress={this.onPress}>
              <FontAwesome name="sliders" size={16} color="#636363" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    country: state.country,
  };
};

export default connect(mapStateToProps)(Items);
