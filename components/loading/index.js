import React from "react";
import { View, Animated, Text, Easing } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import { styles } from "../../styles";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.StartImageRotateFunction());
  }

  componentDidMount() {
    this.StartImageRotateFunction();
  }

  componentWillUnmount() {}

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <View style={styles.loading}>
        <Animated.View
          style={{
            ...styles.loadingSpinner,
            transform: [{ rotate: RotateData }],
          }}
        >
          <Fontisto
            name="spinner-cog"
            size={24}
            style={styles.loadingColorSpin}
          />
        </Animated.View>

        <Text style={styles.loadingColorSpin}>Loading...</Text>
      </View>
    );
  }
}
