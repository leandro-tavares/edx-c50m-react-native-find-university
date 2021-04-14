import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

import { styles } from "../../styles";
import { setCountry } from "../../components/search/functions";

import { updateCountry } from "../../redux/actions";

import Statistics from "../../components/statistics";
import { Country } from "../../components/country";

export class FilterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("name");
    return {
      title: "Country selection",
      headerTintColor: "#ffcb00",
      headerStyle: {
        backgroundColor: "#f0f0f0",
        borderWidth: 0,
      },
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      region: "",
      country: "Brazil",
      countries: null,
    };
  }

  getCountries = async (region) => {
    fetch(
      `https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;alpha2Code;region;population`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const countries = result;

        this.setState({
          countries,
          statistics: countries.length,
        });
      });
  };

  setRegion = async (region) => {
    this.setState({
      region,
    });

    await this.getCountries(region);
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { countries } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ alignSelf: "center", marginBottom: 10 }}>
            Country defined:
          </Text>

          <Country country={this.props.country} />

          <View style={styles.region}>
            <View
              style={{
                ...styles.regionButton,
                backgroundColor:
                  this.state.region === "africa" ? "#ffcb00" : "#fff",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setRegion("africa")}
              >
                <Text>Africa</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...styles.regionButton,
                backgroundColor:
                  this.state.region === "americas" ? "#ffcb00" : "#fff",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setRegion("americas")}
              >
                <Text>Americas</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...styles.regionButton,
                backgroundColor:
                  this.state.region === "asia" ? "#ffcb00" : "#fff",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setRegion("asia")}
              >
                <Text>Asia</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...styles.regionButton,
                backgroundColor:
                  this.state.region === "europe" ? "#ffcb00" : "#fff",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setRegion("europe")}
              >
                <Text>Europe</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...styles.regionButton,
                backgroundColor:
                  this.state.region === "oceania" ? "#ffcb00" : "#fff",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setRegion("oceania")}
              >
                <Text>Oceania</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ alignSelf: "center", color: "grey" }}>
            Click on the region to see the respective countries:
          </Text>
        </View>

        <View style={styles.items}>
          {this.state.statistics && (
            <Statistics data={this.state.statistics} info="countries" />
          )}

          <ScrollView
            style={{
              ...styles.items,
              maxHeight: Dimensions.get("window").height - 400,
            }}
          >
            {countries &&
              countries.map((country) => (
                <TouchableOpacity
                  key={country.alpha2Code}
                  activeOpacity={0.5}
                  onPress={() => {
                    const name = country.name;
                    const flag = country.alpha2Code.toLowerCase();

                    this.setState({
                      country: name,
                    });

                    setCountry(country);

                    this.props.updateCountry({ name, flag });

                    this.props.navigation.navigate("Home");
                  }}
                >
                  <View style={styles.countryItem}>
                    <View>
                      <Image
                        style={styles.countryFlag}
                        source={{
                          uri: `https://www.countryflags.io/${country.alpha2Code.toLowerCase()}/flat/64.png`,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        ...styles.countryData,
                        width: Dimensions.get("window").width - 150,
                      }}
                    >
                      <Text style={styles.countryName}>{country.name}</Text>
                      <Text style={styles.countryDescription}>
                        Capital: {country.capital}
                      </Text>
                      <Text style={styles.countryDescription}>
                        Population:{" "}
                        {new Intl.NumberFormat().format(country.population)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.country,
});

export default connect(mapStateToProps, { updateCountry: updateCountry })(
  FilterScreen
);
