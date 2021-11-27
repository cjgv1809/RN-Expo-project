import "react-native-gesture-handler"
import React, { useEffect, useState, useCallback, useMemo } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NavigationApp } from "./src/navigation/NavigationApp"
import WeatherProvider from "./src/context/WeatherContext"
import IconsProvider from "./src/context/IconsContext"
import { PreferencesContext } from "./src/context/ThemeContext"
import {
	RobotoSlab_400Regular,
	RobotoSlab_600SemiBold,
	RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab"
import { Allura_400Regular } from "@expo-google-fonts/allura"
import { LightTheme, DarkTheme } from "./src/stylesGlobal/theme"
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"

const App = () => {
	let [fontsLoaded] = useFonts({
		"RobotoSlab-Black": require("./assets/fonts/RobotoSlab-Black.ttf"),
		"RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
		"RobotoSlab-SemiBold": require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
		// AlluraRegular: require("./assets/fonts/Allura-Regular.ttf"),
	})

	// if (!fontsLoaded) {
	// 	return <AppLoading />
	// }

	const [themeDark, setThemeDark] = useState(true)

	let theme = themeDark ? DarkTheme : LightTheme

	const toggleTheme = useCallback(() => {
		return setThemeDark(!themeDark)
	}, [themeDark])

	const preferences = useMemo(
		() => ({
			toggleTheme,
			themeDark,
		}),
		[toggleTheme, themeDark],
	)

	return (
		<PreferencesContext.Provider value={preferences}>
			<WeatherProvider>
				<IconsProvider>
					<NavigationContainer style={{ flex: 1 }} theme={theme}>
						<NavigationApp />
					</NavigationContainer>
				</IconsProvider>
			</WeatherProvider>
		</PreferencesContext.Provider>
	)
}

export default App
