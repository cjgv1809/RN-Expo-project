import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import { useTheme } from "@react-navigation/native"

const HomeHeader = () => {
	const { colors } = useTheme()

	return (
		<View
			style={[
				styles.headerContainer,
				{ backgroundColor: colors.background },
			]}
		>
			<View style={styles.mainTextContainer}>
				<Text style={styles.mainText}>Paula's</Text>
			</View>
			<View style={styles.subtitleTextContainer}>
				<Text style={styles.subtitleText1}>Weather</Text>
				<Text style={styles.subtitleText2}>App</Text>
			</View>
		</View>
	)
}

export default HomeHeader
