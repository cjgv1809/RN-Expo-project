import "react-native-gesture-handler"
import React, {
	useContext,
	useEffect,
	useState,
	useCallback,
	useMemo,
} from "react"
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
import { Allura_400Regular, useFonts } from "@expo-google-fonts/allura"
import { LightTheme, DarkTheme } from "./src/stylesGlobal/theme"

const App = () => {
	const { fontsRobotoLoaded } = useFonts({
		RobotoSlab_400Regular,
		RobotoSlab_600SemiBold,
		RobotoSlab_900Black,
	})

	const { fontsAlluraLoaded } = useFonts({
		Allura_400Regular,
	})

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
