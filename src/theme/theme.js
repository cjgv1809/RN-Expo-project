import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginVertical: 50,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
    alignItems: "flex-end",
    backgroundColor: "#0007",
    borderColor: "#fff",
    borderWidth: 0.4,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  inputContainer: {
    marginVertical: 15,
  },
});
