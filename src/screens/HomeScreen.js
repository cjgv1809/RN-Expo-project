import React, { useState, useEffect } from "react"
import {
	View,
	ImageBackground,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native"
import * as Animatable from "react-native-animatable"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import InfoModal from "../components/InfoModal/InfoModal"
import styles from "../stylesGlobal/stylesGlobalScreen"

const HomeScreen = ({ navigation }) => {
	const [modalInfoVisible, setModalInfoVisible] = useState(false)
	const [keyboardStatus, setKeyboardStatus] = useState(undefined)
	const [refresh, setRefresh] = useState(undefined)

	console.log(keyboardStatus)

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", keyboardDidShow)
		Keyboard.addListener("keyboardDidHide", keyboardDidHide)

		return () => {
			Keyboard.removeAllListeners("keyboardDidShow", keyboardDidShow)
			Keyboard.removeAllListeners("keyboardDidHide", keyboardDidHide)
		}
	},[])
	const keyboardDidShow = () => {
		setKeyboardStatus(true)
		setRefresh(!refresh)
	}
	const keyboardDidHide = () => {
		setKeyboardStatus(false)
		setRefresh(!refresh)
	}

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
								<HomeHeader />
							</View>
							<View
								style={{
									...styles.bodyContainer,
								}}
							>
								<Animatable.Image
									source={require("../../assets/anagrama.png")}
									animation={
										keyboardStatus
											? "bounceOut"
											: "bounceIn"
									}
									duration={keyboardStatus ? 800 : 3500}
									style={styles.anagrama}
								/>
								<View>
									<InfoModal
										visible={modalInfoVisible}
										onPress={() =>
											setModalInfoVisible(false)
										}
									/>
								</View>
							</View>
							<View style={styles.footerContainer}>
								<View style={styles.btnContainer}>
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
										icon="info"
										text="Info & Uso"
										onPress={() =>
											setModalInfoVisible(true)
										}
									/>
									<ButtonComponent
										icon="group"
										text="Nosotros"
										onPress={() =>
											navigation.navigate("AboutUsScreen")
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

export default HomeScreen
