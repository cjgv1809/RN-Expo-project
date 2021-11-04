import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  containerCityList: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0005",
    borderRadius: 15,
    flexDirection: "row",
    height: 50,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  containerTextCity: {
    alignSelf: "center",
  },
  textCityList: {
    color: "#FFFF",
    fontSize: 16,
  },
  containerBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  containerBtnWeather: {
    alignItems: "center",
    backgroundColor: "#B0B0AE70",
    borderRadius: 10,
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    marginHorizontal: 5,
    paddingVertical: 2,
    // width: "55%",
  },
  containerBtnDelete: {
    alignItems: "center",
    backgroundColor: "#A7060695",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 5,
    paddingVertical: 2,
    // width: "55%",
  },
  btnText: {
    fontSize: 16,
    color: "#FFFF",
    textAlign: "center",
    marginHorizontal: 5,
  },
});
