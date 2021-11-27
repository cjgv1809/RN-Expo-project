import React, {useState, useEffect} from "react"
import {
	View,
	ImageBackground,
	SafeAreaView,
	Keyboard,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
} from "react-native"
import * as Animatable from "react-native-animatable"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import AboutUs from "../components/AboutUs/AboutUs"
import styles from "../stylesGlobal/stylesGlobalScreen"

const AboutUsScreen = ({ navigation }) => {
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
								<HeaderTitle title="Sobre Nosotros" />
							</View>
							<Animatable.View
								animation={
									keyboardStatus ? "bounceOut" : "bounceIn"
								}
								duration={keyboardStatus ? 800 : 3500}
								style={styles.bodyContainer}
							>
								<AboutUs />
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
										icon="brightness-4"
										text="Modo Claro"
										onPress={() => console.log("modo dark")}
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

export default AboutUsScreen
