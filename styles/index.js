import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    height: 85,
    marginTop: 50,
    paddingTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    flexDirection: "column",
  },

  headerLogo: {
    height: 62,
    width: 112,
    alignSelf: "center",
  },

  headerMini: {
    height: 50,
    marginTop: 0,
    padding: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "#ffcb00",
    backgroundColor: "#ddd",
    justifyContent: "space-between",
  },

  headerMiniLogo: {
    height: 30,
    width: 50,
    alignSelf: "flex-start",
  },

  search: {
    height: 50,
    marginTop: 20,
    minWidth: "100%",
    flexDirection: "row",
  },

  searchGroup: {
    flex: 1,
    height: 40,
    marginLeft: 24,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    alignItems: "center",
  },

  searchInput: {
    flex: 1,
    height: 30,
    marginLeft: 10,
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "red",
  },

  searchFilter: {
    width: 40,
    height: 40,
    padding: 10,
    marginLeft: 14,
    marginRight: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffcb00",
  },

  statsItems: {
    height: 40,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
    // maxWidth: "100%",
    // minWidth: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#e8e8e8",
  },

  statsText: {
    fontSize: 14,
    color: "#636363",
    marginLeft: 10,
  },

  statsResult: {
    fontSize: 14,
    color: "#e06d06",
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  items: {
    flex: 1,
    paddingTop: 10,
    alignSelf: "stretch",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "red",
    // padding: 20,
    // margin: 10,
    flexDirection: "column",
  },

  item: {
    flex: 1,
    height: 120,
    borderRadius: 8,
    minWidth: "85%",

    paddingTop: 14,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,

    marginLeft: 24,
    marginRight: 24,
    marginBottom: 18,
    alignSelf: "stretch",
    justifyContent: "space-around",

    position: "relative",

    backgroundColor: "#fff",

    shadowColor: "#333",
    shadowOpacity: 0.149,
    shadowRadius: 5,
  },

  itemFavorite: {
    position: "absolute",
    zIndex: 100,
    right: 12,
    top: 14,
  },

  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#636363",
    // marginBottom: 10,
    marginRight: 20,
  },

  itemDescription: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemDetail: {
    fontSize: 12,
    color: "#636363",
  },

  itemTitle: {
    fontSize: 13,
    color: "#e06d06",
  },

  notfound: {
    flex: 1,
    top: 50,
    justifyContent: "flex-start",
  },

  loading: {
    flex: 1,
    top: 20,
    justifyContent: "flex-start",
  },

  loadingSpinner: {
    width: 50,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  loadingColorSpin: {
    color: "#e06d06",
  },

  menu: {
    height: 100,
    padding: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    shadowColor: "#333",
    shadowOpacity: 0.149,
    backgroundColor: "#fff",
    maxWidth: "100%",
    minWidth: "100%",
  },

  region: {
    marginTop: 20,
    padding: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  regionButton: {
    // width: 65,
    height: 40,
    margin: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },

  country: {
    borderWidth: 1,
    maxWidth: "100%",
    minWidth: "100%",
  },

  countryItem: {
    flex: 1,
    height: 80,
    borderRadius: 8,

    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,

    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
    justifyContent: "space-around",
    flexDirection: "row",

    position: "relative",

    backgroundColor: "#fff",

    shadowColor: "#333",
    shadowOpacity: 0.149,
    shadowRadius: 5,
  },

  countryFlag: {
    width: 45,
    height: 45,
    marginTop: 5,
    marginRight: 10,
  },

  countryData: {},

  countryName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#636363",
  },

  countryDescription: {
    marginTop: 3,
    fontSize: 11,
  },

  clearButton: {
    width: 120,
    height: 35,
    marginBottom: 10,
    marginRight: 20,
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  // University Detail
  university: {
    height: 100,
    borderRadius: 8,
    minWidth: "90%",

    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,

    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
    justifyContent: "space-around",

    backgroundColor: "#fff",

    shadowColor: "#333",
    shadowOpacity: 0.149,
    shadowRadius: 10,
  },

  universityName: {
    color: "#e06d06",
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
  },

  universityCountry: {
    color: "#333",
    fontSize: 12,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 5,
    alignSelf: "stretch",
    textAlign: "center",
    fontWeight: "bold",
  },

  universityWebPage: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 5,
    // alignSelf: "stretch",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  universityWebPageText: {
    color: "#39c",
    fontSize: 13,
    marginBottom: 2,
    marginRight: 5,
  },

  universityGeodata: {
    height: 60,
    padding: 10,
    borderWidth: 1,
    minWidth: "80%",
    borderColor: "#ccc",
    justifyContent: "center",
    borderStyle: "solid",
    backgroundColor: "#fff",
  },

  universityGeodataText: {
    fontSize: 11,
    color: "#333",
  },

  mapStyle: {
    minWidth: "100%",
    alignSelf: "stretch",
  },

  about: {
    margin: 24,
    padding: 0,
  },

  aboutText: { color: "#333", fontSize: 11, marginBottom: 10 },

  aboutTextObs: {
    color: "grey",
    fontSize: 11,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  aboutBold: { fontWeight: "bold" },

  aboutLink: {
    color: "#39c",
    textDecorationLine: "underline",
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    opacity: 0.98,
    backgroundColor: "#f8f8f8",
  },

  modalView: {
    opacity: 1,
    height: 180,
    width: 340,
    marginTop: 150,
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  groupButton: {
    flexDirection: "row",
  },

  cancelButton: {
    width: 100,
    backgroundColor: "#cccccc",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    elevation: 2,
  },

  openButton: {
    width: 100,
    backgroundColor: "#e06d06",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  inputAPI: {
    opacity: 1,
    height: 40,
    width: 280,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    backgroundColor: "#eaeaea",
    alignItems: "center",
  },
});
