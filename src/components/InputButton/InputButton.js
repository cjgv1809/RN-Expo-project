import React, { useState } from "react"
import { useWindowDimensions, View } from "react-native"
import { Overlay, Button, Icon } from "react-native-elements"
import * as Animatable from "react-native-animatable"

import InputModal from "../InputModal/InputModal"
import styles from "./styles"

const InputButton = ({ onPress }) => {
	const [visible, setVisible] = useState(false)
	const [modalInputVisible, setModalInputVisible] = useState(false)
	const toggleOverlay = () => {
		setVisible(!visible)
	}
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
						name="search"
						size={width < 350 ? 22 : 30}
						color="#fff"
					/>
				}
				iconPosition="right"
				onPress={onPress}
				onPress={toggleOverlay}
				title="Buscar ciudad"
				titleStyle={{
					...styles.btnTitleStyle,
					fontSize: width < 350 ? 11 : 15,
				}}
			/>			
				
			
		</Animatable.View>
	)
}

export default InputButton
