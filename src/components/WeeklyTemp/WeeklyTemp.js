import React, { useContext } from "react"
import { FlatList, Text, useWindowDimensions, View } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import styles from "./styles"

const WeeklyTemp = () => {
	const { width } = useWindowDimensions()
	const { weatherDaily } = useContext(WeatherContext)
	const { days } = weatherDaily

	return (
		<View>
			<FlatList
				data={days}
				numColumns={5}
				renderItem={({ item }) => (
					<View
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
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	)
}

export default WeeklyTemp
