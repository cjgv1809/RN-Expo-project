import { StyleSheet } from "react-native"

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
	containerLoading: {
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "#B0B0AE85",
		borderRadius: 15,
		justifyContent: "center",
		marginTop: 150,
		width: "60%",
	},
	activityIndicator: {
		alignItems: "center",
		justifyContent: "center",
		margin: 15,
	},
	textLoading: {
		color: "#fff",
		marginBottom: 15,
		fontSize: 18,
	},
	textMsgLoading: {
		color: "#fff",
		marginBottom: 15,
		fontSize: 14,
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

export default styles
