import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		marginHorizontal: 12,
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
		height: "205%",
	},
	infoWeatherContainer: {
		alignItems: "center",
		flex: 1,
	},
	currentTemp: {
		flex: 3,
		color: "#fff",
		fontFamily: "RobotoSlab_900Black",
		marginTop: "5%",
		marginRight: "-10%",
	},
	temMinMaxContainer: {
		flex: 1,
		flexDirection: "row",
	},
	textInfoMinMax: {
		color: "#CFCDCD",
		fontFamily: "RobotoSlab_400Regular",
	},
	temMinMax: {
		flexDirection: "row",
		color: "#fff",
	},
	textWeatherCurrent: {
		color: "#fff9",
		flex: 1,
		fontSize: 13,
		textAlign: "center",
	},
	weatherWeekList: {
		flex: 0.9,
		// backgroundColor: "red",
	},
	mapCitiesContainer: {
		borderRadius: 10,
		flex: 1,
		marginBottom: 5,
	},
	mapCities: {
		flex: 1,
	},
})

export default styles
