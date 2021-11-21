import React, { useContext } from "react"
import { View } from "react-native"
import * as Animatable from "react-native-animatable"
import { WeatherContext } from "../../context/WeatherContext"
import { IconsContext } from "../../context/IconsContext"
import styles from "./styles"

const WeeklyIcon = () => {
	const { weatherDaily } = useContext(WeatherContext)
	const { ICONS_WEATHER } = useContext(IconsContext)
	const { daily } = weatherDaily
	const days = daily.slice(1, 6)
	const iconsApi = days.map((icon) => icon.weather[0].icon)

	const listIcons = []
	
	for (let i = 0; i < 5; i++) {
		const iconWeatherReplaced = ICONS_WEATHER[iconsApi[i]]
		listIcons.push(iconWeatherReplaced)
	}

	return (
		<View style={styles.iconWeatherWeekContainer}>
			{listIcons.map((icon, i) => (
				<View style={styles.iconWeatherContainer} key={i}>
					<Animatable.Image
						source={icon}
						animation={"fadeInLeftBig"}
						duration={2500}
						delay={200}
						style={styles.iconWeatherWeek}
					/>
				</View>
			))}
		</View>
	)
}

export default WeeklyIcon
