import React, { useState, useEffect, useContext } from "react"
import {
	View,
	SafeAreaView,
	ImageBackground,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native"
import * as Animatable from "react-native-animatable"
import * as SQLite from "expo-sqlite"
import { PreferencesContext } from "../context/ThemeContext"
import { WeatherContext } from "../context/WeatherContext"
import { useTheme, useIsFocused } from "@react-navigation/native"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import MyCities from "../components/MyCities/MyCities"
import AlertModal from "../components/AlertModal/AlertModal"
import styles from "../stylesGlobal/stylesGlobalScreen"

const db = SQLite.openDatabase("paulas_db.db")

const MyCitiesScreen = ({ navigation }) => {
	const [noCities, setNoCities] = useState(false)
	const { toggleTheme, themeDark } = useContext(PreferencesContext)
	const { refresh } = useContext(WeatherContext)
	const { colors } = useTheme()
	const [keyboardStatus, setKeyboardStatus] = useState(false)
	const isFocused = useIsFocused()

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

	//Comprobar si hay ciudades en la tabla
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql("SELECT * FROM cities", [], (tx, results) => {
				if (results.rows.length === 0) {
					setNoCities(true)
				}
			})
		})
	}, [])

	const componentAlertNoCities = (
		<AlertModal
			show={noCities}
			title="No existen ciudades en tu listado!!"
			message="Utiliza el buscador y agrega una ciudad."
			showConfirmButton={true}
			confirmText="OK"
			confirmButtonColor="#FFA600"
			onConfirmPressed={() => setNoCities(false)}
		/>
	)
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
						<View
							style={[
								styles.capBlack,
								{ backgroundColor: colors.background },
							]}
						>
							<View style={styles.headerContainer}>
								<HeaderTitle title="Mis Ciudades" />
							</View>
							{noCities ? (
								<View>{componentAlertNoCities}</View>
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
									<MyCities
										navigation={navigation}
										isFocused={isFocused}
									/>
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
										icon="room"
										text="Ver Mapa"
										onPress={() => {
											navigation.navigate(
												"MapMyCitiesScreen",
											)
										}}
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

export default MyCitiesScreen
