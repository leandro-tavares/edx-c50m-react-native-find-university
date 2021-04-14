import React from "react";
import {
  View,
  Alert,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { connect } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { getAccessKeyPositionstack } from "../../components/api/functions";
import { styles } from "../../styles";

import store from "../../redux/store";

import Header from "../../components/header";
import Api from "../../components/api";
import {
  checkFavorite,
  setFavorite,
  removeFavorite,
} from "../../components/favorite/functions";

export class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("name");
    return {
      title,
      headerTintColor: "#e06d06",
      headerStyle: {
        backgroundColor: "#f0f0f0",
        borderWidth: 0,
      },
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      university: {},
      country: {},
      favorite: false,
      geodata: false,
      noGeodata: "",
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014,
      },
      label: "",
      street: "",
      address: "",
      location: "",
      modalVisible: false,
    };
  }

  hideModal = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };

  getGeocoding = async (name) => {
    const API = await getAccessKeyPositionstack();

    if (!API.access_key) {
      this.setState({
        modalVisible: true,
      });

      return false;
    }

    fetch(
      `http://api.positionstack.com/v1/forward?access_key=${API.access_key}&query=${name}&limit=1`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          Alert.alert(
            "Access Key invalid",
            result.error.message +
              "\nEdit your key in the about screen (section Access Key).",
            {
              text: "Cancel",
              onPress: () => resolve(null),
            }
          );
          return false;
        }

        if (result.data.length > 0) {
          const {
            latitude,
            longitude,
            label,
            street,
            number,
            locality,
            region,
            postal_code,
          } = result.data[0];

          this.setState({
            region: {
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            label,
            street,
            address: `${number ? number + ", " : ""} ${
              street ? street + "\n" : ""
            }${locality ? locality + " - " : ""}${region} ${
              postal_code ? " - " + postal_code : ""
            }`,
            location: `Latitude: ${latitude} // Longitude: ${longitude}`,
            geodata: true,
            noGeodata: "",
          });
        } else {
          this.setState({
            noGeodata: "No Geocodind data found to this University",
          });
        }
      });
  };

  openLinkMap = (lat, lng, label) => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  isInThisPage = async () => {
    const { university, country } = store.getState();
    const favorite = await checkFavorite(university.country, university.name);

    this.setState({
      university,
      country,
      favorite,
      geodata: false,
    });
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const mapRef = React.createRef();

    if (
      this.props.isFocused &&
      this.props.navigation.getParam("name") !== this.state.university.name
    ) {
      this.isInThisPage();
    }

    const { name, webpage, country } = this.state.university;

    return (
      <View style={styles.container}>
        <Header mini icon="university" />

        <View style={styles.university}>
          <View style={styles.itemFavorite}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.favorite) {
                  removeFavorite(country, name);
                } else {
                  setFavorite({ country, name, web_pages: [webpage] });
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

          <Text style={styles.universityName}>{name}</Text>
          <Text style={styles.universityCountry}>{country}</Text>
          {webpage ? (
            <View style={styles.universityWebPage}>
              <Text
                style={styles.universityWebPageText}
                onPress={() => Linking.openURL(webpage)}
              >
                {webpage}{" "}
              </Text>
              <FontAwesome name="external-link" size={13} color="#39c" />
            </View>
          ) : null}
        </View>

        <View>
          {!this.state.geodata ? (
            <View>
              <TouchableOpacity
                onPress={() => this.getGeocoding(name)}
                style={{
                  ...styles.regionButton,
                  minWidth: "80%",
                  flexDirection: "row",
                }}
              >
                <Ionicons name="ios-globe" size={18} color="#39c" />
                <Text style={{ marginLeft: 5, color: "#39c" }}>
                  Get Geocoding data
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.universityGeodata}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.universityGeodataText}>
                  Address: {this.state.address}
                </Text>
                <FontAwesome
                  name="map-marker"
                  size={13}
                  color="#39c"
                  style={{ marginLeft: 5 }}
                  onPress={() =>
                    mapRef.current.animateToRegion({
                      latitude: this.state.region.latitude,
                      longitude: this.state.region.longitude,
                      latitudeDelta: 0.05,
                      longitudeDelta: 0.05,
                    })
                  }
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.universityGeodataText}>
                  Location: {this.state.location}
                </Text>
                <FontAwesome
                  name="external-link"
                  size={13}
                  color="#39c"
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    this.openLinkMap(
                      this.state.region.latitude,
                      this.state.region.longitude,
                      this.state.label
                    )
                  }
                />
              </View>
            </View>
          )}

          <View style={styles.container}>
            {this.state.geodata ? (
              <MapView
                ref={mapRef}
                loadingEnabled={true}
                zoomControlEnabled={true}
                // provider={PROVIDER_GOOGLE}
                style={{
                  ...styles.mapStyle,
                  minHeight: Dimensions.get("window").height - 410,
                }}
                initialRegion={this.state.region}
                region={this.state.region}
              >
                <Marker
                  coordinate={this.state.region}
                  title={this.state.label}
                  description={this.state.street}
                />
              </MapView>
            ) : this.state.noGeodata !== "" ? (
              <Text>{this.state.noGeodata}</Text>
            ) : null}
          </View>
        </View>

        {this.state.modalVisible ? <Api hideModal={this.hideModal} /> : null}
      </View>
    );
  }
}

export default connect()(withNavigationFocus(DetailScreen));
