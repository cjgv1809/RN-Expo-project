import React, { useContext, useState, useEffect } from "react"
import { View, ActivityIndicator } from "react-native"

const LoadingScreen = () => {
	return (
		<View>
			<ActivityIndicator size="large" color="#FFA600" />
		</View>
	)
}

export default LoadingScreen
