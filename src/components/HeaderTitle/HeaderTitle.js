import React from "react"
import { View, Text, useWindowDimensions } from "react-native"
import styles from "./styles"
import { useTheme } from "@react-navigation/native"

const HeaderTitle = ({ title }) => {
	const { width } = useWindowDimensions()
	const { colors } = useTheme()

	return (
		<View
			style={[
				styles.headerContainer,
				{ backgroundColor: colors.notification },
			]}
		>
			<Text
				style={[
					{ ...styles.mainText, fontSize: width < 350 ? 18 : 24 },
					{ color: colors.text },
				]}
			>
				{title}
			</Text>
		</View>
	)
}

export default HeaderTitle
