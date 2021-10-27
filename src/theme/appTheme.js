import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "nowrap",
    backgroundColor: '#0008'
  },
  btnText: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 30,
  },
  btn: {
    width: 165,
    height: 54,
    left: 10,

    backgroundColor: "#B0B0AE90",
    borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btn2: {
    width: 165,
    height: 54,
    left: 186,

    color: "red",
    backgroundColor: "#B0B0AE",
    borderRadius: 30,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
