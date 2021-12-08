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
import { CommonActions } from "@react-navigation/native"
import * as Animatable from "react-native-animatable"
import * as SQLite from "expo-sqlite"
import { useIsFocused } from "@react-navigation/native"
import { WeatherContext } from "../context/WeatherContext"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import Weather from "../components/Weather/Weather"
import AlertModal from "../components/AlertModal/AlertModal"
import styles from "../stylesGlobal/stylesGlobalScreen"

const db = SQLite.openDatabase("paulas_db.db")

const WeatherScreen = ({ navigation }) => {
	const [bgColor, setBgColor] = useState("#0004")
	const [keyboardStatus, setKeyboardStatus] = useState(false)
	const [alertAddCity, setAlertAddCity] = useState(false)
	const [alertCityExisting, setAlertCityExisting] = useState(false)
	const [alertNoCityRequired, setAlertNoCityRequired] = useState(true)
	const {
		weatherDaily,
		weatherNameCity,
		responseStatus,
		lat,
		lon,
		viewSpinner,
		refresh,
		setRefresh,
	} = useContext(WeatherContext)
	const { temp } = weatherDaily
	const isFocused = useIsFocused()

	// Info keyboard
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

	//Cambiar background según temperatura actual
	useEffect(() => {
		if (temp < 14) {
			setBgColor("#001E8795")
		} else if (temp >= 14 && temp < 29) {
			setBgColor("#976D0399")
		} else if (temp >= 29) {
			setBgColor("#8D000085")
		}
	})

	//Agregar una ciudad y actualizar la tabla
	const addCitiesLits = () => {
		db.transaction((tx) => {
			tx.executeSql(
				"SELECT * FROM cities WHERE cityName = ?",
				[weatherNameCity],
				(tx, results) => {
					let length = results.rows.length
					if (length > 0) {
						setAlertCityExisting(true)
					} else {
						tx.executeSql(
							"INSERT INTO cities (cityName, lat, lon) VALUES (?,?,?)",
							[weatherNameCity, lat, lon],
						)
						setAlertAddCity(true)
					}
				},
			)
		})
	}

	const componentSpinner = (
		<Animatable.View
			animation={keyboardStatus ? "bounceOut" : "bounceIn"}
			duration={keyboardStatus ? 800 : 3500}
			style={styles.containerLoading}
		>
			<ActivityIndicator
				size="large"
				color="#FFA600"
				style={styles.activityIndicator}
			/>
			<Text style={styles.textLoading}>Consultando ...</Text>
			<Text style={styles.textMsgLoading}>Un momento por favor</Text>
		</Animatable.View>
	)

	const componentWeather = (
		<Animatable.View
			animation={keyboardStatus ? "bounceOut" : "bounceIn"}
			duration={keyboardStatus ? 800 : 3500}
			style={styles.bodyContainer}
		>
			<Weather isFocused={isFocused} />
		</Animatable.View>
	)

	const componentAlertAddcity = (
		<AlertModal
			show={alertAddCity}
			title={`"${weatherNameCity}" se agregó correctamente`}
			showConfirmButton={true}
			confirmText="OK"
			confirmButtonColor="#FFA600"
			onConfirmPressed={() => {
				setAlertAddCity(false)
				setRefresh(!refresh)
				navigation.navigate("MapMyCitiesScreen")
			}}
		/>
	)

	const componentAlertCityExisting = (
		<AlertModal
			show={alertCityExisting}
			title={`"${weatherNameCity}" `}
			message={"ya existe en el listado !!"}
			showConfirmButton={true}
			confirmText="OK"
			confirmButtonColor="#FFA600"
			onConfirmPressed={() => setAlertCityExisting(false)}
		/>
	)

	const componentAlertNoCity = (
		<AlertModal
			show={alertNoCityRequired}
			title={"Ups !!"}
			message={"No pudimos encontrar la ciudad !!"}
			showConfirmButton={true}
			confirmText={"OK"}
			confirmButtonColor="#FFA600"
			onConfirmPressed={() => {
				setAlertNoCityRequired(false)
				navigation.dispatch(CommonActions.goBack())
			}}
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
							style={[{ flex: 1 }, { backgroundColor: bgColor }]}
						>
							<View style={styles.headerContainer}>
								<HeaderTitle title={weatherNameCity} />
							</View>
							{viewSpinner && (!temp || !responseStatus) ? (
								<View style={styles.bodyContainer}>
									{componentSpinner}
								</View>
							) : temp || (!viewSpinner && responseStatus) ? (
								<View style={styles.bodyContainer}>
									{componentWeather}
								</View>
							) : !temp && (!responseStatus || !viewSpinner) ? (
								<View style={styles.bodyContainer}>
									{componentAlertNoCity}
								</View>
							) : null}
							<View>{componentAlertAddcity}</View>
							<View>{componentAlertCityExisting}</View>
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
										onPress={addCitiesLits}
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
