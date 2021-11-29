import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: "#fff",
		borderRadius: 15,
		flex: 1,

		marginHorizontal: 10,
		marginTop: "30%",
		marginBottom: 10,
		padding: 20,
	},

	textTitleModalContainer: {
		alignItems: "center",
		borderRadius: 15,
		backgroundColor: "#B0B0AE50",
		fontSize: 24,
		justifyContent: "center",

		padding: 10,
		textAlign: "center",
		width: "100%",
	},
	textTitleModal: {
		borderRadius: 15,
		color: "#FFA600",
		fontSize: 24,
	},
	textModal: {
		textAlign: "justify",
	},
	btnContainer: {
		backgroundColor: "#B0B0AE",
		borderRadius: 15,
		height: 40,
		marginTop: 10,
	},
})

export default styles;
