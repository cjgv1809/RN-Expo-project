import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
import styles from "./styles"

const HomeHeader = () => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.mainTextDirection}>
				<Text h4 h4Style={styles.textStyles}>
					<Text h3 h3Style={styles.mainText}>
						Paula
					</Text>{" "}
					Weather
					<Text style={styles.textStylesApp}>App</Text>
				</Text>
			</View>
		</View>
	)
}

export default HomeHeader
