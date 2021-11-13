import React, { useState, useContext } from "react"
import { Alert, Keyboard } from "react-native"
import { Input } from "react-native-elements"
import { WeatherContext } from "../../context/WeatherContext"
import Icon from "react-native-vector-icons/MaterialIcons"
import styles from "./styles"

const InputComponent = () => {
	const [city, setCity] = useState("")
	const { setQuery, setCityRequired } = useContext(WeatherContext)

	// Función que valida la ciudad ingresada y ejecuta la consulta //
	const search = () => {
		const showAlert = () => {
			Alert.alert("Error", "Este campo no puede quedar vacío", [
				{ text: "OK" },
			])
		}
		if (city.trim() === "") {
			showAlert()
			return
		}
		console.log('realizando consulta desde input')
		setQuery(true)
		setCityRequired(city)
		setCity("")
		Keyboard.dismiss()
	}
	
	return (
		<Input
			placeholder="Buscar ciudad"
			type="text"
			value={city}
			onChange={(e) => setCity(e.nativeEvent.text)}
			inputContainerStyle={styles.inputContainerStyle}
			inputStyle={styles.inputStyle}
			placeholderTextColor="white"
			rightIcon={
				<Icon
					name="search"
					size={30}
					color="#fff"
					onPress={search}
				/>
			}
			onSubmitEditing={search}
		/>
	)
}

export default InputComponent
