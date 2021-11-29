import React from "react"
import { View, Image } from "react-native"
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
			<Image
				source={require("../../../assets/logo.png")}
				style={styles.logoStyle}
			/>
		</View>
	)
}

export default HomeHeader
