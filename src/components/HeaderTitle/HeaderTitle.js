import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import { useTheme } from "@react-navigation/native"

const HeaderTitle = ({ title }) => {
	const { colors } = useTheme()

	return (
		<View
			style={[
				styles.headerContainer,
				{ backgroundColor: colors.notification },
			]}
		>
			<Text style={[styles.mainText, { color: colors.text }]}>
				{title}
			</Text>
		</View>
	)
}

export default HeaderTitle
