import React, { useContext, useState, useEffect } from "react"
import {
	View,
	ImageBackground,
	ActivityIndicator,
	SafeAreaView,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Text,
} from "react-native"
import * as Animatable from "react-native-animatable"
import { WeatherContext } from "../context/WeatherContext"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import Weather from "../components/Weather/Weather"
import styles from "../stylesGlobal/stylesGlobalScreen"

const WeatherScreen = ({ navigation }) => {
	const [geting, setGeting] = useState(true)
	const [bgColor, setBgColor] = useState("#0004")
	const [keyboardStatus, setKeyboardStatus] = useState(false)
	const { weatherDaily, weatherNameCity } = useContext(WeatherContext)
	const { temp } = weatherDaily


	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", keyboardDidShow)
		Keyboard.addListener("keyboardDidHide", keyboardDidHide)

		return () => {
			Keyboard.removeAllListeners("keyboardDidShow", keyboardDidShow)
			Keyboard.removeAllListeners("keyboardDidHide", keyboardDidHide)
		}
			
	}, [])
	const keyboardDidShow = () => setKeyboardStatus(true)
	const keyboardDidHide = () => setKeyboardStatus(false)

	useEffect(() => {
		if (temp < 14) {
			setBgColor("#001E8795")
		} else if (temp >= 14 && temp < 29) {
			setBgColor("#976D0399")
		} else if (temp >= 29) {
			setBgColor("#8D000085")
		}
		if (temp) setGeting(false)
		// temp ?? navigation.goBack()
	})

	return (
		<KeyboardAvoidingView
			// behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.parentContainer}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<SafeAreaView style={styles.parentContainer}>
					<ImageBackground
						source={require("../../assets/bgHome.jpg")}
						style={styles.imageBackground}
					>
						<View
							style={[{ flex: 1 }, { backgroundColor: bgColor }]}
						>
							<View>
								<HeaderTitle title={weatherNameCity} />
							</View>
							{geting ? (
								<Animatable.View
									animation={
										keyboardStatus
											? "bounceOut"
											: "bounceIn"
									}
									duration={keyboardStatus ? 800 : 3500}
									style={styles.containerLoading}
								>
									<ActivityIndicator
										size="large"
										color="#FFA600"
										style={styles.activityIndicator}
									/>
									<Text style={styles.textLoading}>
										Consultando ...
									</Text>
									<Text style={styles.textMsgLoading}>
										Un momento por favor
									</Text>
								</Animatable.View>
							) : (
								<Animatable.View
									animation={
										keyboardStatus
											? "bounceOut"
											: "bounceIn"
									}
									duration={keyboardStatus ? 800 : 3500}
									style={styles.bodyContainer}
								>
									<Weather />
								</Animatable.View>
							)}

							<View style={styles.footerContainer}>
								<View style={styles.btnContainer}>
									<ButtonComponent
										icon="home"
										text="Inicio"
										onPress={() =>
											navigation.navigate("HomeScreen")
										}
									/>
									<ButtonComponent
										icon="folder"
										text="Mis Ciudades"
										onPress={() =>
											navigation.navigate(
												"MyCitiesScreen",
											)
										}
									/>
									<ButtonComponent
										icon="queue"
										text="Agregar"
										onPress={() =>
											navigation.navigate(
												"MapMyCitiesScreen",
											)
										}
									/>
								</View>
								<View>
									<InputComponent navigation={navigation} />
								</View>
							</View>
						</View>
					</ImageBackground>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default WeatherScreen
