import React, { useContext, useState, useEffect } from "react"
import {
	View,
	ImageBackground,
	SafeAreaView,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
} from "react-native"
import * as Animatable from "react-native-animatable"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import MapMyCities from "../components/MapMyCities/MapMyCities"
import styles from "../stylesGlobal/stylesGlobalScreen"
import { PreferencesContext } from "../context/ThemeContext"
import { useTheme } from "@react-navigation/native"

const MapMyCitiesScreen = ({ navigation }) => {
	const { toggleTheme, themeDark } = useContext(PreferencesContext)
	const { colors } = useTheme()

	const [keyboardStatus, setKeyboardStatus] = useState(false)

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
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.parentContainer}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<SafeAreaView style={styles.parentContainer}>
					<ImageBackground
						source={require("../../assets/bgHome.jpg")}
						style={styles.imageBackground}
					>
						<View style={styles.capBlack}>
							<View>
								<HeaderTitle title="Mis Ciudades" />
							</View>
							<Animatable.View
								animation={
									keyboardStatus ? "bounceOut" : "bounceIn"
								}
								duration={keyboardStatus ? 800 : 3500}
								style={styles.bodyContainer}
							>
								<MapMyCities />
							</Animatable.View>
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
										icon={
											themeDark
												? "brightness-5"
												: "brightness-3"
										}
										text={
											themeDark
												? "Modo Claro"
												: "Modo Oscuro"
										}
										onPress={() => toggleTheme()}
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

export default MapMyCitiesScreen
