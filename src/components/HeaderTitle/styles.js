import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#0007",
    borderColor: "#fff5",
    borderRadius: 100,
    borderWidth: 0.5,
    height: 70,
    justifyContent: "center",
    marginBottom: 15,
    marginTop: Platform.OS === "ios" ? 30 : 50,
    marginHorizontal: 10,
  },
  textStyles: {
    color: "#fff",
    letterSpacing: 1,
  },
});
