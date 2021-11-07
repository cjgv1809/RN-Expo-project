import React from "react"
import { Button, Icon } from "react-native-elements"
import styles from "./styles"

const ButtonComponent = ({ icon, text, onPress, type }) => {
	return (
		<Button
			buttonStyle={styles.btnStyle}
			containerStyle={styles.btnContainerStyle}
			icon={<Icon name={icon} size={30} color="#fff" />}
			iconPosition="top"
			onPress={onPress}
			title={text}
			titleStyle={styles.btnTitleStyle}
			type={type}
		/>
	)
}

export default ButtonComponent
