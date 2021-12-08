import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	containerCityItem: {
		alignItems: "center",
		backgroundColor: "#0005",
		borderRadius: 15,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
		marginHorizontal: 10,
		paddingHorizontal: 10,
	},
	textCityList: {
		flex: 1,
		fontFamily: "RobotoSlab-SemiBold",
	},	
	containerBtns: {
		flex: 2,
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 10,
		marginRight: -5,
	},
	btnContainer: {
		flex: 1,
		marginHorizontal: 3,
	},
	containerBtnWeather: {
		backgroundColor: "#B0B0AE70",
		borderRadius: 10,
		flexDirection: "row",
	},
	containerBtnDelete: {
		backgroundColor: "#A7060695",
		borderRadius: 10,
		flexDirection: "row",
	},
})

export default styles
