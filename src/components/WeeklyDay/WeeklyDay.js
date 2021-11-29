import React from "react"
import { View, Text, useWindowDimensions } from "react-native"
import styles from "./styles"

const day = new Date().getDay() + 1
const WEEKS = {
	1: ["Lun", "Mar", "Mie", "Jue", "Vie"],
	2: ["Mar", "Mie", "Jue", "Vie", "Sab"],
	3: ["Mie", "Jue", "Vie", "Sab", "Dom"],
	4: ["Jue", "Vie", "Sab", "Dom", "Lun"],
	5: ["Vie", "Sab", "Dom", "Lun", "Mar"],
	6: ["Sab", "Dom", "Lun", "Mar", "Mie"],
	7: ["Dom", "Lun", "Mar", "Mie", "Jue"],
}

const weekdays = WEEKS[day]

const WeeklyDay = () => {
	const { width } = useWindowDimensions()

	return (
		<View style={styles.dayWeekContainer}>
			{weekdays.map((day, i) => (
				<Text
					style={{
						...styles.textDayWeek,
						fontSize: width < 350 ? 10 : 14,
					}}
					key={i.toString()}
				>
					{day}
				</Text>
			))}
		</View>
	)
}

export default WeeklyDay
