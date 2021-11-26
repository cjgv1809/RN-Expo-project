import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		marginHorizontal: 12,
		flexDirection: "column"
	},
	weatherCurrentContainer: {
		alignItems: "center",
		flex: 1.5,
		flexDirection: "row",
	},
	iconWeatherContainer: {
		flex: 1,
		marginLeft: "-10%",
		marginTop: "15%",
	},
	iconWeather: {
		width: "115%",
		height: "205%"
	},
	infoWeatherContainer: {
		alignItems: "center",
		flex: 0.7,
	},
	currentTemp: {
		color: "#fff",
		fontFamily: "RobotoSlab_900Black",
		marginTop: "5%",
		marginRight: "-10%",
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
	textWeatherCurrent: {
		color: "#fff9",
		fontSize: 13,
		textAlign: "center",
	},
	weatherWeekList: {
		flex: 1,
	},
	mapCities: {
		borderRadius: 10,
		width: "100%",
		height: "100%"
	},
	mapContainer: {
		flex: 1
	},
})

export default styles
