import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	containerCityItem: {
		alignItems: "center",
		backgroundColor: "#0005",
		borderRadius: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
		marginHorizontal: 10,
		paddingHorizontal: 10,
	},
	textCityList: {
		color: "#FFFF",
		fontSize: 15,
	},
	containerBtns: {
		flexDirection: "row",
		marginVertical: 10,
		marginRight: -5,
	},
	containerBtnWeather: {
		backgroundColor: "#B0B0AE70",
		borderRadius: 10,
		flexDirection: "row",
		height: 35,
		marginHorizontal: 5,
	},
	containerBtnDelete: {
		backgroundColor: "#A7060695",
		borderRadius: 10,
		flexDirection: "row",
		height: 35,
		marginHorizontal: 5,
		width: 101,
	},
})

export default styles;
