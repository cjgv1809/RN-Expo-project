import React, { useContext } from "react"
import { FlatList, Text, useWindowDimensions, View } from "react-native"
import * as Animatable from "react-native-animatable"
import { WeatherContext } from "../../context/WeatherContext"
import styles from "./styles"

const WeeklyTemp = () => {
	const { width } = useWindowDimensions()
	const { weatherDaily } = useContext(WeatherContext)

	const { daily } = weatherDaily	
	const days = daily.slice(1, 6)	

	return (
		<View style={styles.weatherWeekListContainer}>
			<FlatList
				data={days}
				numColumns={5}
				renderItem={({ item }) => (
					<Animatable.View
						animation={"fadeInRightBig"}
						duration={2500}
						delay={200}
						style={styles.weatherWeekList}
					>
						<Text
							style={{
								...styles.textTemWeek,
								fontSize: width < 350 ? 14 : 22,
							}}
						>
							{parseFloat(item.temp.max).toFixed()}°
						</Text>
					</Animatable.View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	)
}

export default WeeklyTemp
