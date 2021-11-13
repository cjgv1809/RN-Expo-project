import React from "react"
import { View, Text } from "react-native"
import * as Animatable from "react-native-animatable"
import styles from "./styles"

const AboutUs = () => {
	return (
		<View style={styles.textContainerAbout}>
			<Animatable.Text
				animation="fadeIn"
				duration={3500}
			>
				Somos un grupo de ....
			</Animatable.Text>
		</View>
	)
}

export default AboutUs
