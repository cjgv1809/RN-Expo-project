import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: "#fff",
		borderColor: "#fff9",
		borderRadius: 15,
		borderWidth: 2,
		flex: 1,
		marginHorizontal: 11,
		marginTop: "30%",
		marginBottom: 10,
		padding: 20,
	},
	textTitleModalContainer: {
		alignItems: "center",
		borderColor: "#0009",
		borderRadius: 15,
		borderWidth: 2,
		backgroundColor: "#B0B0AE40",
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
