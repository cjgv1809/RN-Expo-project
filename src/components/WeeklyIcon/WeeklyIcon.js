import React, { useContext } from "react"
import { View } from "react-native"
import * as Animatable from "react-native-animatable"
import { WeatherContext } from "../../context/WeatherContext"
import { IconsContext } from "../../context/IconsContext"
import styles from "./styles"

const WeeklyIcon = () => {
	const { weatherDaily } = useContext(WeatherContext)
	const { ICONS_WEATHER, iconWeather } = useContext(IconsContext)
	const { daily } = weatherDaily
	const days = daily.slice(1, 6)

	const iconsApi = days.map((icon) => icon.weather[0].icon)
	const iconsWeek = []

	
	console.log(iconsApi)
	console.log(Object.values(ICONS_WEATHER))
	return (
		<View style={styles.iconWeatherWeekContainer}>
			<Animatable.Image
				source={iconWeather}
				animation={"fadeInLeftBig"}
				duration={2500}
				delay={200}
				style={styles.iconWeatherWeek}
			/>
			<Animatable.Image
				source={iconWeather}
				animation={"fadeInRightBig"}
				duration={2500}
				delay={200}
				style={styles.iconWeatherWeek}
			/>
			<Animatable.Image
				source={iconWeather}
				animation={"fadeInLeftBig"}
				duration={2500}
				delay={200}
				style={styles.iconWeatherWeek}
			/>
			<Animatable.Image
				source={iconWeather}
				animation={"fadeInRightBig"}
				duration={2500}
				delay={200}
				style={styles.iconWeatherWeek}
			/>
			<Animatable.Image
				source={iconWeather}
				animation={"fadeInLeftBig"}
				duration={2500}
				delay={200}
				style={styles.iconWeatherWeek}
			/>
		</View>
	)
}

export default WeeklyIcon
