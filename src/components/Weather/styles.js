import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		justifyContent: "space-around",
		marginHorizontal: 12,
	},
	cityWeatherContainer: {
		backgroundColor: "#fff4",
		flex: 1,
		paddingHorizontal: 5,
		paddingVertical: 5,
		borderRadius: 15,
	},
	infoWeatherContainer: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		// justifyContent: "space-around",
		marginBottom: 5,
	},
	textWeatherContainer: {
		flex: 1.5,
	},
	textWeather: {
		fontSize: 20,
		color: "#fff",
		fontFamily: "RobotoSlab_400Regular",
		textAlign: "center",
	},
	weatherCurrentContainer: {
		flex: 3,
		flexDirection: "row",
	},
	iconWeather: {
		width: 80,
		height: 50,
		// backgroundColor: "green",
	},
	currentTemp: {
		fontSize: 38,
		color: "#fff",
		fontFamily: "RobotoSlab_900Black",
		textAlign: "left",
		backgroundColor: "orange",
	},
	weatherMaxMinContainer: {
		alignItems: "center",
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	temMin: {
		alignItems: "center",
		backgroundColor: "#8394CF",
		borderRadius: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 10,
		padding: 5,
		width: 145,
	},
	temMax: {
		alignItems: "center",
		backgroundColor: "#C00000",
		borderRadius: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
		width: 145,
	},
	textInfoMaxMin: {
		color: "#CFCDCD",
		textAlign: "center",
	},
	weatherWeekContainer: {
		marginVertical: 5,
		backgroundColor: "#8D000095",
		flex: 0.7,
	},
	weatherWeekList: {
		backgroundColor: "#373737",
		height: 80,		
		borderRadius: 15,
	},
	mapCitiesContainer: {
		alignItems: "center",
	},
	mapCities: {
		borderRadius: 15,
		height: 120,
		width: 330,
	},
})

export default styles;
