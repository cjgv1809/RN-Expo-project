import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		marginHorizontal: 12,
	},
	weatherCurrentContainer: {
		alignItems: "center",
		flex: 1.3,
		flexDirection: "row",
	},
	iconWeatherContainer: {
		flex: 1,
		marginLeft: "-10%",
		marginTop: "15%",
	},
	iconWeather: {
		width: "115%",
		height: "190%",
	},
	infoWeatherContainer: {
		alignItems: "center",
		flex: 1,
	},
	textCurrentTempContainer: {
		flexDirection: "row",
		marginTop: "18%",
	},
	textCurrentTemp: {
		color: "#fff",
		fontFamily: "RobotoSlab-Black",
		textAlign: "center",
	},
	textCelciusBigDegrees: {
		color: "#CFCDCD",
		fontSize: 40,
		marginTop: "3%",
		marginLeft: 3,
	},
	textCelciusBig: {
		color: "#CFCDCD",
		fontSize: 30,
		marginTop: "5%",
	},
	temMinMaxContainer: {
		flexDirection: "row",
		marginTop: "10%",
	},
	textInfoMinMax: {
		color: "#CFCDCD",
		fontFamily: "RobotoSlab-Regular",
	},
	temMinMax: {
		color: "#fff",
	},
	textCelcius: {
		color: "#CFCDCD",
	},
	textDescriptionWeatherCurrent: {
		color: "#FFF",
		flex: 1,
		fontSize: 11,
		marginTop: 10,
		textAlign: "center",
		letterSpacing: 1,
	},
	weatherWeekListContainer: {
		flex: 0.9,
		justifyContent: "center",
	},
	styleAlert: {
		backgroundColor: "#484848",
		borderRadius: 15,
		fontFamily: "RobotoSlab-SemiBold",
	},
	titleStyle: {
		color: "#fff",
		fontSize: 20,
		textAlign: "center",
	},
	messageStyle: {
		color: "#FFA600",
		fontFamily: "RobotoSlab-SemiBold",
	},
	overlayStyle: {
		backgroundColor: "#00000060",
	},
})

export default styles
