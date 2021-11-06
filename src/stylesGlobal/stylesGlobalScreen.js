import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#0009",
    flex: 1,
  },
  container2: {
    backgroundColor: "#00176895",
    // backgroundColor: "#8D000095",
    // backgroundColor: "#A8840595",
    flex: 1,
  },
  btnContainer: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  textContainerAbout: {
    backgroundColor: "#fff7",
    height: "52%",
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },
  containerCitiesList: {
    alignItems: "center",
    height: "52%",
    marginHorizontal: 10,
  },
  containerMapCities: {
    alignItems: "center",
    flex: 1,
  },
  mapCities: {
    borderRadius: 30,
    height: "160%",
    width: "90%",
  },
});
