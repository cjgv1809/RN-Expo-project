import React, { useContext } from "react"
import { Text, Image, View } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import { FlatList } from "react-native-gesture-handler"
import styles from "./styles"

const Weather = () => {
	
	const { weatherCurrent, weatherDaily } = useContext(WeatherContext)
	const { name, main, weather } = weatherCurrent
	// const { name, main, weather } = weatherDaily
	if (!name) return null
	return (
		<View style={styles.parentContainer}>
			<View style={styles.cityWeatherContainer}>
				<View style={styles.infoWeatherContainer}>
					<View style={styles.textWeatherContainer}>
						<Text style={styles.textWeather}>
							Clima{"\n"}Actual
						</Text>
					</View>
					<View style={styles.weatherCurrentContainer}>
						<Image
							source={{
								uri: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
							}}
							style={styles.iconWeather}
						/>
						<Text style={styles.textWeather}>
							{weather[0].description}
						</Text>
						<Text style={styles.currentTemp}>
							{parseFloat(main.temp).toFixed(1)} °
						</Text>
					</View>
				</View>

				<View style={styles.weatherMaxMinContainer}>
					<View style={styles.temMin}>
						<Text style={styles.textInfoMaxMin}>Tem{"\n"}Min</Text>
						<Text>{parseFloat(main.temp_min).toFixed(1)}°</Text>
						<Text style={styles.textInfoMaxMin}>03:00{"\n"}am</Text>
					</View>
					<View style={styles.temMax}>
						<Text style={styles.textInfoMaxMin}>Tem{"\n"}Max</Text>
						<Text>{parseFloat(main.temp_max).toFixed(1)}°</Text>
						<Text style={styles.textInfoMaxMin}>01:00{"\n"}pm</Text>
					</View>
				</View>
			</View>
			<View style={styles.weatherWeekContainer}>
				<FlatList style={styles.weatherWeekList} />
			</View>
			<View style={styles.mapCitiesContainer}>
				<Image
					source={require("../../../assets/mapa.jpg")}
					style={styles.mapCities}
				/>
			</View>
		</View>
	)
}

export default Weather
