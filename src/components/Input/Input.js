import React, { useState, useContext, useEffect } from "react"
import { Alert, Keyboard } from "react-native"
import { Input } from "react-native-elements"
import { WeatherContext } from "../../context/WeatherContext"
import Icon from "react-native-vector-icons/MaterialIcons"
import styles from "./styles"
import { useTheme } from "@react-navigation/native"
import { PreferencesContext } from "../../context/ThemeContext"

const InputComponent = ({ navigation }) => {
	const [cityName, setCityName] = useState("")
	const { setQuery, setCityRequired, setWeatherCurrent, setWeatherDaily } =
		useContext(WeatherContext)
	const { toggleTheme, themeDark } = useContext(PreferencesContext)
	const { colors } = useTheme()

	// Función que valida la ciudad ingresada y ejecuta la consulta //
	const search = () => {
		const showAlert = () => {
			Alert.alert("Error", "Este campo no puede quedar vacío", [
				{ text: "OK" },
			])
		}

		if (cityName === "") {
			showAlert()
			return
		}

		console.log("\x1b[35m%s\x1b[0m", "query from input")
		setQuery(true)
		setCityRequired(cityName.trim())
		setCityName("")
		setWeatherCurrent({})
		setWeatherDaily({})
		Keyboard.dismiss()
		navigation.navigate("WeatherScreen")
	}

	return (
		<Input
			placeholder="Buscar ciudad"
			type="text"
			value={cityName}
			onChange={(e) => setCityName(e.nativeEvent.text)}
			inputContainerStyle={styles.inputContainerStyle}
			inputStyle={[styles.inputStyle, { color: colors.text }]}
			placeholderTextColor={colors.text}
			rightIcon={
				<Icon
					name="search"
					size={30}
					color={colors.text}
					onPress={search}
				/>
			}
			onSubmitEditing={search}
		/>
	)
}

export default InputComponent
