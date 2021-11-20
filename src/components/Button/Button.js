import React from "react"
import { useWindowDimensions } from "react-native"
import { Button, Icon } from "react-native-elements"
import * as Animatable from "react-native-animatable"
import styles from "./styles"

const ButtonComponent = ({ icon, text, onPress, type }) => {
	const { width } = useWindowDimensions()
	return (
		<Animatable.View
			animation={"bounceIn"}
			duration={2000}
			delay={800}
			style={styles.btnContainer}
		>
			<Button
				buttonStyle={styles.btnStyle}
				icon={
					<Icon
						name={icon}
						size={width < 350 ? 22 : 30}
						color="#fff"
					/>
				}
				iconPosition="top"
				onPress={onPress}
				title={text}
				titleStyle={{
					...styles.btnTitleStyle,
					fontSize: width < 350 ? 11 : 14,
				}}
				type={type}
			/>
		</Animatable.View>
	)
}

export default ButtonComponent
