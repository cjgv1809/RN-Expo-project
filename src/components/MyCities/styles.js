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
  textCityList: {
    color: "#FFFF",
    fontSize: 15,
  },
  containerBtns: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  containerBtnWeather: {
    backgroundColor: "#B0B0AE70",
    borderRadius: 10,
    flexDirection: "row",
    height: 35,
    marginHorizontal: 5,
  },
  containerBtnDelete: {
    backgroundColor: "#A7060695",
    borderRadius: 10,
    flexDirection: "row",
    height: 35,
    marginHorizontal: 5,
    width: 101,
  },
  btnText: {
    fontSize: 16,
    color: "#FFFF",
    marginHorizontal: 5,
  },
});
