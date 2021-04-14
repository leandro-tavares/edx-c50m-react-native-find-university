import React from "react";
import { View, Text, ScrollView } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { connect } from "react-redux";

import { styles } from "../../styles";

import Loading from "../../components/loading";
import Header from "../../components/header";
import Search from "../../components/search";
import Statistics from "../../components/statistics";
import Item from "../../components/item";
import Country from "../../components/country";

import { getCountry } from "../../components/search/functions";

import { updateCountry, updateUniversity } from "../../redux/actions";
import { checkFavorite } from "../../components/favorite/functions";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      display: "none",
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      universities: null,
      notfound: false,
      loading: false,
      statistics: 0,
      country: {},
    };

    this.getUniversities = this.getUniversities.bind(this);
    this.showUniversity = this.showUniversity.bind(this);
  }

  getUniversities = (country, name) => {
    if (name) {
      let nameSearch = "";
      let countrySearch = country;

      if (name.indexOf(" ") > 0) {
        nameSearch = `&name=${name.split(" ")[0]}`;
      } else {
        nameSearch = `&name=${name}`;
      }

      this.setState({
        loading: true,
      });

      // Hack = API Hipolabs vs API restcountries
      if (country === "United States of America") {
        countrySearch = "United States";
      }

      fetch(
        `http://universities.hipolabs.com/search?country=${countrySearch}&name=${nameSearch.trim()}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
          if (name.split(" ").length > 0) {
            return result.filter((university) =>
              university.name.includes(name.trim())
            );
          } else {
            return result;
          }
        })
        .then((result) => {
          const universities = result;

          if (universities.length == 0) {
            this.setState({
              universities: null,
              notfound: true,
              loading: false,
              statistics: 0,
            });
            return;
          }

          this.setState({
            universities,
            notfound: false,
            loading: false,
            statistics: universities.length,
          });
        });
    }
  };

  showUniversity = (university) => {
    this.props.updateUniversity({
      country: university.country,
      name: university.name,
      webpage: university.web_pages[0],
    });

    this.props.navigation.push("Detail", {
      name: university.name,
    });
  };

  showFilter = (country, name) => {
    this.props.navigation.navigate("Filter", {
      country,
      name,
    });
  };

  reloadUniversities = () => {
    if (
      // this.props.country &&
      this.state.country &&
      this.props.country.name !== this.state.country.name
    ) {
      this.setState({
        universities: null,
        country: this.props.country,
      });
    }
  };

  async componentDidMount() {
    const country = await getCountry();

    this.setState({
      country: {
        name: country.name,
        flag: country.alpha2Code,
      },
    });

    this.props.updateCountry({
      name: country.name,
      flag: country.alpha2Code,
    });
  }

  render() {
    if (this.props.isFocused && this.state.universities) {
      this.reloadUniversities();
    }

    const { universities, loading, notfound, statistics } = this.state;

    return (
      <View style={styles.container}>
        <Header />

        <Country country={this.props.country} />

        <Search submit={this.getUniversities} onPress={this.showFilter} />

        <View style={styles.container}>
          {loading ? (
            <Loading />
          ) : !notfound ? (
            <View>
              {universities ? (
                <Statistics data={statistics} info="universities" />
              ) : null}
              <ScrollView style={styles.items}>
                {universities &&
                  universities.map((university, i) => (
                    <Item
                      key={i}
                      data={university}
                      onPress={() => this.showUniversity(university)}
                    />
                  ))}
              </ScrollView>
            </View>
          ) : (
            <View style={styles.notfound}>
              <Text>No universities found for this search</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  country: state.country,
});

export default connect(mapStateToProps, {
  updateCountry: updateCountry,
  updateUniversity: updateUniversity,
})(withNavigationFocus(HomeScreen));
