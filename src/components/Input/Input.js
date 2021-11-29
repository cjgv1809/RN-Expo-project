import React, { useState, useContext } from "react"
import { Alert, Keyboard, TextInput } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import * as Animatable from "react-native-animatable"
import Icon from "react-native-vector-icons/MaterialIcons"
import styles from "./styles"
import { useTheme } from "@react-navigation/native"
import { PreferencesContext } from "../../context/ThemeContext"

const InputComponent = ({ navigation }) => {
	const [cityName, setCityName] = useState("")
	
	const {		
		setInputView,
		setCityRequired,
		setWeatherNameCity,
		setWeatherDaily,
	} = useContext(WeatherContext)
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
		setWeatherNameCity("")
		setWeatherDaily({})
		setCityRequired(cityName.trim())
		setCityName("")
		setInputView(true)
		Keyboard.dismiss()
		navigation.navigate("WeatherScreen")		
	}
	
	return (
		<Animatable.View animation="fadeInUpBig" duration={1100}>
			<TextInput
				placeholder="Buscar ciudad"
				type="text"
				value={cityName}
				onChange={(e) => setCityName(e.nativeEvent.text)}
				style={styles.inputStyle}
				placeholderTextColor="white"
				onSubmitEditing={search}				
			/>
			<Icon
				name="search"
				size={30}
				color="#fff"
				onPress={search}
				style={styles.icontStyle}
			/>
		</Animatable.View>
	)
}

export default InputComponent
