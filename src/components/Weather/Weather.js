import React, { useState } from "react"
import { Text, Image, View } from "react-native"
import { Icon } from "react-native-elements"
import { FlatList } from "react-native"
import styles from "./styles"

const Weather = () => {
	return (
		<View>
			<View style={styles.cityWeatherContainer}>
				<View style={styles.infoWeatherContainer}>
					<Text>Clima Actual</Text>
					<Image
						source={require("../../../assets/27.png")}
						style={styles.iconWeather}
					/>
					<Text>26°</Text>
				</View>

				<View style={styles.weatherMaxMinContainer}>
					<View style={styles.temMin}>
						<Text style={styles.textInfoMaxMin}>Tem{"\n"}Min</Text>
						<Text>11°</Text>
						<Text>03:00{"\n"}am</Text>
					</View>
					<View style={styles.temMax}>
						<Text>Tem {"\n"}Max</Text>
						<Text>16°</Text>
						<Text>01:00 {"\n"}pm</Text>
					</View>
				</View>
			</View>
			<View style={styles.weatherWeekContainer}>
				<FlatList style={styles.weatherWeekList} />
			</View>
			<View style={styles.containerMapCities}>
				<Image
					source={require("../../../assets/mapa.jpg")}
					style={styles.mapCities}
				/>
			</View>
		</View>
	)
}

export default Weather
