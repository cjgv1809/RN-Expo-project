import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
	},
	imageBackground: {
		flex: 1,
		resizeMode: "cover",
	},
	capBlack: {
		backgroundColor: "#0004",
		flex: 1,
	},
	headerContainer: {
		// justifyContent: "center",
	},
	bodyContainer: {
		flex: 2.4,
		justifyContent: "center",
	},
	anagrama: {
		marginTop: -165,
		marginLeft: -30,
	},
	footerContainer: {
		justifyContent: "flex-end",
		flex: 1,
	},
	btnContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 5,
	},


})

export default styles;
