import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
	headerContainer: {
		alignItems: "flex-end",
		backgroundColor: "#0007",
		borderColor: "#fff5",
		borderRadius: 15,
		borderWidth: 0.5,
		marginBottom: 5,
		marginHorizontal: 10,
		marginTop: Platform.OS === "ios" ? 20 : 45,
		paddingHorizontal: 25,
		paddingVertical: 5,
	},
	mainTextContainer: {
		marginBottom: -10,
	},
	mainText: {
		color: "#FFA600",
		fontSize: 40,
		fontFamily: "Allura_400Regular",
	},
	subtitleTextContainer: {
		flexDirection: "row",
	},
	subtitleText1: {
		color: "#fff",
		fontSize: 16,
		letterSpacing: 2,
	},
	subtitleText2: {
		color: "#fff9",
		fontSize: 16,
	},
})

export default styles
