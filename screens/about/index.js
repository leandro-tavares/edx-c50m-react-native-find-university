import React from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "../../styles";
import { getAccessKeyPositionstack } from "../../components/api/functions";

import Header from "../../components/header";
import Api from "../../components/api";

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      access_key: "",
      modalVisible: false,
    };
  }

  hideModal = (visible, access_key) => {
    this.setState({
      modalVisible: visible,
      access_key: this.setMaskKey(access_key),
    });
  };

  setMaskKey = (access_key) => {
    const part1 = access_key.substr(0, 10);
    const part2 = access_key.substr(11, access_key.length);
    return part1 + Array(part2.length + 1).join("*");
  };

  async componentDidMount() {
    const API = await getAccessKeyPositionstack();
    if (API && API.access_key) {
      this.setState({
        access_key: this.setMaskKey(API.access_key),
      });
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={{ maxHeight: 120 }}>
          <Header />
        </View>
        <ScrollView style={styles.about}>
          <Text style={styles.aboutText}>
            This application was developed as a final project, of the{" "}
            <Text style={styles.aboutBold}>
              CS50's Mobile App Development with React Native
            </Text>
            , course, in order to present the knowledge absorbed during the
            course.
          </Text>
          <Text style={styles.aboutText}>
            The course was conducted through the platform for education and
            learning <Text style={styles.aboutBold}>edX</Text>, founded by{" "}
            <Text style={styles.aboutBold}>Harvard</Text> and{" "}
            <Text style={styles.aboutBold}>MIT</Text>.{" "}
            <Text
              style={styles.aboutLink}
              onPress={() => Linking.openURL("https://www.edx.org/about-us")}
            >
              https://www.edx.org/about-us
            </Text>
          </Text>
          <Text style={styles.aboutText}>
            The course was presented by instructors, Jordan Hayashi and David J.
            Malan, from the Division of Continuing Education, Harvard
            University.
          </Text>
          <Text style={styles.aboutText}>
            The following concepts were presented in this course:
          </Text>
          <Text style={styles.aboutText}>
            - JavaScript basics and EcmaScript 6;{"\n"}- React.js basics, Props
            and State;{"\n"}- Introduction to React Native;{"\n"}- Lists, User
            Input, Debugging;{"\n"}- Navigation - presented by: Brent Vatne and
            Eric Vicenti;{"\n"}- Data;{"\n"}- Expo Components - presented by:
            Charlie Cheever;{"\n"}- Redux, Async Redux, Tools;{"\n"}-
            Performance;{"\n"}- Deploying, Testing
          </Text>

          <Text style={styles.aboutText}>
            This app connects the following APIs, to make information available
            to the user:
          </Text>
          <Text style={styles.aboutText}>
            <Text style={styles.aboutBold}>
              University Domains and Names Data List & API
            </Text>
            {"\n"}
            <Text
              style={styles.aboutLink}
              onPress={() =>
                Linking.openURL(
                  "https://github.com/Hipo/university-domains-list"
                )
              }
            >
              https://github.com/Hipo/university-domains-list
            </Text>
          </Text>

          <Text style={styles.aboutText}>
            <Text style={styles.aboutBold}>
              REST Countries: Get information about countries via a RESTful API
            </Text>
            {"\n"}
            <Text
              style={styles.aboutLink}
              onPress={() =>
                Linking.openURL("https://github.com/apilayer/restcountries")
              }
            >
              https://github.com/apilayer/restcountries
            </Text>
          </Text>

          <Text style={styles.aboutText}>
            <Text style={styles.aboutBold}>
              REST Countries: Accurate Forward & Reverse Batch Geocoding REST
              API
            </Text>
            {"\n"}
            <Text
              style={styles.aboutLink}
              onPress={() =>
                Linking.openURL("https://github.com/apilayer/positionstack")
              }
            >
              https://github.com/apilayer/positionstack
            </Text>
          </Text>

          <Text style={styles.aboutTextObs}>
            It is necessary to generate a Free access key, to use this API
            (limited to 25,000 monthly requests){" "}
            <Text
              style={{ ...styles.aboutLink, color: "grey" }}
              onPress={() =>
                Linking.openURL("https://positionstack.com/product")
              }
            >
              https://positionstack.com/product
            </Text>
            .
          </Text>

          {/* DEFINE API KEY */}
          <Text style={styles.aboutTextObs}>
            Access Key defined: {this.state.access_key}{" "}
            <FontAwesome
              name="pencil-square-o"
              size={15}
              color="grey"
              onPress={() => this.setState({ modalVisible: true })}
            />
          </Text>

          <Text
            style={{
              fontSize: 11,
              marginTop: 20,
              color: "grey",
              // alignSelf: "flex-end",
              textAlign: "center",
            }}
          >
            Version: 1.0.0 - 2020 by Leandro Tavares {"\n"}
            <Text
              style={styles.aboutLink}
              onPress={() =>
                Linking.openURL("https://github.com/leandro-tavares")
              }
            >
              https://github.com/leandro-tavares
            </Text>
          </Text>
        </ScrollView>

        {this.state.modalVisible ? <Api hideModal={this.hideModal} /> : null}
      </View>
    );
  }
}
