import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "flex-end",
		backgroundColor: "#0007",
		borderColor: "#fff5",
		borderRadius: 15,
		borderWidth: 0.5,
		height: 80,
		justifyContent: "center",
		marginBottom: 5,
		marginHorizontal: 10,
		marginTop: Platform.OS === "ios" ? 20 : 45,
	},
	logoStyle: {
		width: 140,
		height: 60,
		marginRight:10,
		resizeMode: "contain",
	},
})

export default styles
