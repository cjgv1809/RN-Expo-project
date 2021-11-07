import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NavigationApp } from "./src/navigation/NavigationApp"

export default function App() {
	return (
		<NavigationContainer>
			<NavigationApp />
		</NavigationContainer>
	)
}
