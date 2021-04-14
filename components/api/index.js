import React from "react";
import { View, TextInput, Text, Modal, TouchableHighlight } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "../../styles";

import {
  getAccessKeyPositionstack,
  setAccessKeyPositionstack,
} from "../../components/api/functions";

export default class Api extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputAPItext: "",
      modalVisible: false,
    };

    this.hideModal = this.props.hideModal.bind(this);
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    this.hideModal(visible, this.state.inputAPItext);
  };

  promptUser = async () => {
    const selection = await new Promise((resolve) => {
      const title = "Access Key not found!";
      const message =
        "To use the Geocoding function, you need to define the Access Key of the Positionstack API (more information on the about screen). What do you want to do?";
      const buttons = [
        { text: "Cancel", onPress: () => resolve(this.setModalVisible(false)) },
        {
          text: "Define now",
          onPress: () => resolve(this.setModalVisible(true)),
        },
      ];
      Alert.alert(title, message, buttons);
    });

    if (selection) {
      this.setState({ userSelection: selection });
    }
  };

  componentDidMount() {
    this.setModalVisible(true);
  }

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Access Key Positionstack");
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Access Key Positionstack!</Text>

              <TextInput
                // autoFocus
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.inputAPI}
                onChangeText={(text) => this.setState({ inputAPItext: text })}
                // onSubmitEditing={() => {
                // this.submit(this.props.country.name, this.state.searchText);
                // }}
              />

              <View style={styles.groupButton}>
                <TouchableHighlight
                  style={styles.cancelButton}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.openButton}
                  onPress={async () => {
                    await setAccessKeyPositionstack(this.state.inputAPItext);
                    this.setModalVisible(false);
                  }}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
