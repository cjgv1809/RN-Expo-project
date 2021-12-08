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
	headerContainer: {
		justifyContent: "center",
		paddingBottom: "1%",
	},
	bodyContainer: {
		flex: 1,
		justifyContent: "center",
		paddingVertical: "2%",
	},
	footerContainer: {
		justifyContent: "flex-end",
		paddingTop: "1%",
	},
	logo: {
		flex: 1,
		resizeMode: "contain",
	},
	anagrama: {
		marginTop: "-70%",
		marginLeft: -30,
	},
	containerLoading: {
		alignItems: "center",
		alignSelf: "center",
		backgroundColor: "#B0B0AE85",
		borderRadius: 15,
		justifyContent: "center",
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
	btnContainer: {
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 5,
	},
})

export default styles
