import React, { useContext, useEffect, useState } from "react"
import { Image, Text, useWindowDimensions, View } from "react-native"
import * as Animatable from "react-native-animatable"
import { WeatherContext } from "../../context/WeatherContext"
import IconsApp from "../../../assets/iconsApp/iconsApp"
import anagrama from "../../../assets/anagrama.png"
import WeeklyDay from "../WeeklyDay/WeeklyDay"
import WeeklyTemp from "../WeeklyTemp/WeeklyTemp"
import WeeklyIcon from "../WeeklyIcon/WeeklyIcon"
import styles from "./styles"

const initialIcon = anagrama

const Weather = () => {
	const [iconWeather, setIconWeather] = useState(initialIcon)
	const { width } = useWindowDimensions()
	const { weatherDaily } = useContext(WeatherContext)
	const { temp, descriptionWeather, min, max, icon } = weatherDaily

	useEffect(() => {
		setIconWeather(iconWeatherReplaced)
	}, [icon])
	const iconWeatherReplaced = IconsApp[icon]
	if (!temp) return null
	return (
		<View style={styles.parentContainer}>
			<View style={styles.weatherCurrentContainer}>
				<Animatable.View
					animation={"bounceInLeft"}
					duration={2500}
					style={styles.iconWeatherContainer}
				>
					<Image source={iconWeather} style={styles.iconWeather} />
				</Animatable.View>
				<View style={styles.infoWeatherContainer}>
					<View style={styles.textCurrentTempContainer}>
						<Animatable.Text
							animation={"fadeInRightBig"}
							duration={1500}
							delay={1000}
							style={{
								...styles.textCurrentTemp,
								fontSize: width < 350 ? 55 : 60,
							}}
						>
							{parseFloat(temp).toFixed(1)}
						</Animatable.Text>
						<Animatable.Text
							animation={"fadeInRightBig"}
							duration={1500}
							delay={1500}
							style={styles.textCelciusBigDegrees}
						>
							°
						</Animatable.Text>
						<Animatable.Text
							animation={"fadeInRightBig"}
							duration={1500}
							delay={1500}
							style={styles.textCelciusBig}
						>
							C
						</Animatable.Text>
					</View>
					<Animatable.View
						animation={"bounceIn"}
						duration={2500}
						delay={1000}
						style={styles.temMinMaxContainer}
					>
						<Text style={styles.textInfoMinMax}> Min </Text>
						<Text style={styles.temMinMax}>
							{parseFloat(min).toFixed(1)}°
							<Text style={styles.textCelcius}>C</Text> /
						</Text>
						<Text style={styles.textInfoMinMax}> Max </Text>
						<Text style={styles.temMinMax}>
							{parseFloat(max).toFixed(1)}°
							<Text style={styles.textCelcius}>C</Text>
						</Text>
					</Animatable.View>
					<Animatable.Text
						animation={"bounceIn"}
						duration={2500}
						delay={1500}
						style={styles.textDescriptionWeatherCurrent}
					>
						{descriptionWeather}
					</Animatable.Text>
				</View>
			</View>
			<Animatable.View
				animation={"bounceIn"}
				duration={3500}
				delay={2000}
				style={styles.weatherWeekListContainer}
			>
				<WeeklyDay />
				<WeeklyTemp />
				<WeeklyIcon />
			</Animatable.View>
		</View>
	)
}

export default Weather
