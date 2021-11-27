import React, { useContext } from "react"
import { View, Image } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import IconsApp from "../../../assets/iconsApp/iconsApp"
import styles from "./styles"

const WeeklyIcon = () => {	
	const { weatherDaily } = useContext(WeatherContext)
	const { iconsApi } = weatherDaily

	if (!iconsApi) return null
	const listIcons = []

	for (let i = 0; i < 5; i++) {
		const iconWeatherReplaced = IconsApp[iconsApi[i]]
		listIcons.push(iconWeatherReplaced)
	}

	return (
		<View style={styles.iconWeatherWeekContainer}>
			{listIcons.map((icon, i) => (
				<View style={styles.iconWeatherContainer} key={i}>
					<Image
						source={icon}					
						style={styles.iconWeatherWeek}
					/>
				</View>
			))}
		</View>
	)
}

export default WeeklyIcon
