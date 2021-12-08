import React, { useContext, useState, useEffect } from "react"
import {
	View,
	ImageBackground,
	SafeAreaView,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native"
import * as Animatable from "react-native-animatable"
import * as SQLite from "expo-sqlite"
import { useTheme, useIsFocused } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { PreferencesContext } from "../context/ThemeContext"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import InfoModal from "../components/InfoModal/InfoModal"
import styles from "../stylesGlobal/stylesGlobalScreen"

const db = SQLite.openDatabase("paulas_db.db")

const HomeScreen = ({ navigation }) => {
	const [modalInfoVisible, setModalInfoVisible] = useState(false)
	const [keyboardStatus, setKeyboardStatus] = useState(false)
	const { themeDark } = useContext(PreferencesContext)
	const { colors } = useTheme()
	const isFocused = useIsFocused()

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", keyboardDidShow)
		Keyboard.addListener("keyboardDidHide", keyboardDidHide)
		return () => {
			Keyboard.removeAllListeners("keyboardDidShow", keyboardDidShow)
			Keyboard.removeAllListeners("keyboardDidHide", keyboardDidHide)
		}
	}, [])
	const keyboardDidShow = () => {
		setKeyboardStatus(true)
	}
	const keyboardDidHide = () => {
		setKeyboardStatus(false)
	}

	// Creación de la tabla
	db.transaction((tx) => {
		tx.executeSql(
			"SELECT name FROM sqlite_master WHERE type='table' AND name='cities'",
			[],
			(tx, results) => {
				if (results.rows.length == 0) {
					tx.executeSql(
						"CREATE TABLE cities (ID INTEGER PRIMARY KEY AUTOINCREMENT, cityName TEXT, lat REAL, lon REAL)",
					)
				}
			},
		)
	})

	// db.transaction(function (tx) {
	// 	tx.executeSql("DROP TABLE cities")
	// })

	return (
		<>
			<StatusBar style={themeDark ? "light" : "dark"} />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.parentContainer}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<SafeAreaView
						style={[
							styles.parentContainer,
							{ backgroundColor: colors.background },
						]}
					>
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
									<HomeHeader />
								</View>
								<View style={styles.bodyContainer}>
									<Animatable.View
										animation={
											keyboardStatus
												? "bounceOut"
												: "bounceIn"
										}
										duration={3500}
										style={styles.anagrama}
									>
										<Animatable.Image
											source={require("../../assets/anagrama.png")}
											animation={
												isFocused || keyboardStatus
													? "bounceIn"
													: "bounceOut"
											}
											duration={3500}
										/>
									</Animatable.View>
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
												navigation.navigate(
													"AboutUsScreen",
												)
											}
										/>
									</View>
									<View>
										<InputComponent
											navigation={navigation}
										/>
									</View>
								</View>
							</View>
						</ImageBackground>
					</SafeAreaView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</>
	)
}

export default HomeScreen
