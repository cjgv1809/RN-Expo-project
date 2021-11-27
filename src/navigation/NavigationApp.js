import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import WeatherScreen from "../screens/WeatherScreen"
import MapMyCitiesScreen from "../screens/MapMyCitiesScreen"
import MyCitiesScreen from "../screens/MyCitiesScreen"
import AboutUsScreen from "../screens/AboutUsScreen"

const Stack = createStackNavigator()

export const NavigationApp = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: "Inicio" }}
			/>
			<Stack.Screen
				name="MyCitiesScreen"
				component={MyCitiesScreen}
				options={{ title: "Mis Ciudades" }}
			/>
			<Stack.Screen
				name="WeatherScreen"
				component={WeatherScreen}
				options={{ title: "Buscar Ciudad" }}
			/>
			<Stack.Screen
				name="MapMyCitiesScreen"
				component={MapMyCitiesScreen}
				options={{ title: "Mapa" }}
			/>
			<Stack.Screen
				name="AboutUsScreen"
				component={AboutUsScreen}
				options={{ title: "Sobre Nosotros" }}
			/>
		</Stack.Navigator>
	)
}
