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
		height: "205%",
	},
	infoWeatherContainer: {
		alignItems: "center",
		flex: 1,
	},
	textCurrentTempContainer: {
		flexDirection: "row",
		marginTop: "5%",
	},
	textCurrentTemp: {
		color: "#fff",
		fontFamily: "RobotoSlab_900Black",
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
	},
	textInfoMinMax: {
		color: "#CFCDCD",
		fontFamily: "RobotoSlab_400Regular",
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
	mapCities: {
		borderRadius: 10,
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		backgroundColor: "#B0B0AE85",
		marginBottom:-10,
	},
})

export default styles
