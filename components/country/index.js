import React from "react";
import { View, Image, Text } from "react-native";

export class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 26, height: 16, marginRight: 10 }}
            source={{
              uri: `https://www.countryflags.io/${this.props.country.flag}/flat/64.png`,
            }}
          />
          <Text
            style={{
              color: "#e06d06",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {this.props.country.name}
          </Text>
        </View>
      </View>
    );
  }
}

export default Country;
