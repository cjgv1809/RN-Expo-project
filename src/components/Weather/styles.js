import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  cityWeatherContainer: {
    backgroundColor: "#fff7",
    height: 120,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },
  infoWeatherContainer: {
    flexDirection: "row",
  },
  weatherMaxMinContainer: {
    flexDirection: "row",
  },
  iconWeather: {
    width: 50,
    height: 50,
  },
  temMin: {
    backgroundColor: "#8394CF",
    borderRadius: 15,
    flexDirection: "row",
    marginHorizontal: 10,
    width: 145,
  },
  temMax: {
    backgroundColor: "#C00000",
    borderRadius: 15,
    flexDirection: "row",
    width: 145,
  },
  textInfoMaxMin: {
    color: "#CFCDCD",
  },
  weatherWeekContainer: {},
  weatherWeekList: {
    backgroundColor: "#373737",
    height: 80,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },
  containerMapCities: {
    alignItems: "center",
    // flex: 1,
  },
  mapCities: {
    borderRadius: 15,
    height: 120,
    width: 330,
  },
});
