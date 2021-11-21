import React, { useContext } from "react"
import {
	Image,
	Text,
	useWindowDimensions,
	ScrollView,
	View,
} from "react-native"
import * as Animatable from "react-native-animatable"
import { WeatherContext } from "../../context/WeatherContext"
import { IconsContext } from "../../context/IconsContext"
import WeeklyDay from "../WeeklyDay/WeeklyDay"
import WeeklyTemp from "../WeeklyTemp/WeeklyTemp"
import WeeklyIcon from "../WeeklyIcon/WeeklyIcon"
import styles from "./styles"

const Weather = () => {
	const { width } = useWindowDimensions()
	const { weatherCurrent, weatherDaily } = useContext(WeatherContext)
	const { iconWeather } = useContext(IconsContext)
	const { temp_min, temp_max } = weatherCurrent
	const { temp, descriptionWeather } = weatherDaily

	if (!temp) return null

	return (
		<View style={styles.parentContainer}>
			<View style={styles.weatherCurrentContainer}>
				<Animatable.View
					animation={"bounceInLeft"}
					duration={3500}
					style={styles.iconWeatherContainer}
				>
					<Image source={iconWeather} style={styles.iconWeather} />
				</Animatable.View>
				<View style={styles.infoWeatherContainer}>
					<View style={styles.textCurrentTempContainer}>
						<Text
							style={{
								...styles.textCurrentTemp,
								fontSize: width < 350 ? 55 : 60,
							}}
						>
							{parseFloat(temp).toFixed(1)}
						</Text>
						<Text style={styles.textCelciusBigDegrees}>°</Text>
						<Text style={styles.textCelciusBig}>C</Text>
					</View>
					<View style={styles.temMinMaxContainer}>
						<Text style={styles.textInfoMinMax}> Min </Text>
						<Text style={styles.temMinMax}>
							{parseFloat(temp_min).toFixed(1)}°
							<Text style={styles.textCelcius}>C</Text> /
						</Text>
						<Text style={styles.textInfoMinMax}> Max </Text>
						<Text style={styles.temMinMax}>
							{parseFloat(temp_max).toFixed(1)}°
							<Text style={styles.textCelcius}>C</Text>
						</Text>
					</View>
					<Text style={styles.textDescriptionWeatherCurrent}>
						{descriptionWeather}
					</Text>
				</View>
			</View>
			<View style={styles.weatherWeekListContainer}>
				<WeeklyDay />
				<WeeklyTemp />
				<WeeklyIcon />
			</View>
			<Image
				source={require("../../../assets/mapa.jpg")}
				style={styles.mapCities}
			/>
		</View>
	)
}

export default Weather
