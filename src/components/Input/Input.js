import React, { useState, useContext } from "react"
import { View, Keyboard, TextInput } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import * as Animatable from "react-native-animatable"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useTheme } from "@react-navigation/native"
import { PreferencesContext } from "../../context/ThemeContext"
import AlertModal from "../AlertModal/AlertModal"
import styles from "./styles"

const InputComponent = ({ navigation }) => {
	const [cityName, setCityName] = useState("")
	const [noCities, setNoCities] = useState(false)
	const {		
		setCityRequired,
		setWeatherNameCity,
		setWeatherDaily,	
	} = useContext(WeatherContext)
	const { themeDark } = useContext(PreferencesContext)
	const { colors } = useTheme()

	// Función que valida la ciudad ingresada y ejecuta la consulta //
	const search = () => {
		if (cityName === "") {
			setNoCities(true)
			return
		}
		console.log("\x1b[35m%s\x1b[0m", "query from input")
		setWeatherNameCity("")
		setWeatherDaily({})
		setCityRequired(cityName.trim())
		setCityName("")
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
				style={{
					...styles.inputStyle,
					backgroundColor: colors.inputBackground,
					color: colors.textInput,
				}}
				placeholderTextColor={themeDark ? "white" : "black"}
				onSubmitEditing={search}
			/>
			<View>
				<AlertModal
					show={noCities}
					title={'Ingresa el nombre de una ciudad !!'}
					onConfirmPressed={() => setNoCities(false)}
					confirmText={"OK"}
					showCancelButton={false}
					confirmButtonColor="#FFA600"
				/>
			</View>
			<Icon
				name="search"
				size={30}
				color={themeDark ? "white" : "black"}
				onPress={search}
				style={styles.icontStyle}
			/>
		</Animatable.View>
	)
}

export default InputComponent
