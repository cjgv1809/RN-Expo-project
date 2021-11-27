import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NavigationApp } from "./src/navigation/NavigationApp"
import AppLoading from "expo-app-loading"
import {
	useFonts,
	RobotoSlab_400Regular,
	RobotoSlab_600SemiBold,
	RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab"
import { Allura_400Regular } from "@expo-google-fonts/allura"
import WeatherProvider from "./src/context/WeatherContext"

const App = () => {
	const [fontsLoaded] = useFonts({
		Allura_400Regular,
		RobotoSlab_400Regular,
		RobotoSlab_600SemiBold,
		RobotoSlab_900Black,
	})
	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<WeatherProvider>
				<NavigationContainer style={{ flex: 1 }}>
					<NavigationApp />
				</NavigationContainer>
			</WeatherProvider>
		)
	}
}

export default App
