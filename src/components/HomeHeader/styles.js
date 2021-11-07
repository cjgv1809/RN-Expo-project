import { StyleSheet, Platform } from "react-native"

export default styles = StyleSheet.create({
	headerContainer: {
		alignItems: "flex-end",
		backgroundColor: "#0007",
		borderColor: "#fff5",
		borderRadius: 100,
		borderWidth: 0.5,
		height: 70,
		justifyContent: "center",
		marginTop: Platform.OS === "ios" ? 30 : 50,
		marginHorizontal: 10,
		paddingHorizontal: 10,
	},
	mainTextDirection: {
		maxWidth: 140,
	},
	mainText: {
		color: "#DB9D24",
		letterSpacing: 8,
	},
	textStyles: {
		color: "#fff",
		fontSize: 18,
		letterSpacing: 1,
	},
	textStylesApp: {
		color: "#fff9",
		fontSize: 18,
	},
})
