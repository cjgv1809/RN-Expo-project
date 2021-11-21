import React, { useContext, useState, useEffect } from "react"
import {
	View,
	ImageBackground,
	SafeAreaView,
	ActivityIndicator,
} from "react-native"
import { WeatherContext } from "../context/WeatherContext"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputButton from "../components/InputButton/InputButton"
import Weather from "../components/Weather/Weather"
import styles from "../stylesGlobal/stylesGlobalScreen"

const WeatherScreen = ({ navigation }) => {
	const [geting, setGeting] = useState(true)
	const [bgColor, setBgColor] = useState("#0004")
	const { weatherDaily, weatherNameCity } = useContext(WeatherContext)

	const component = geting ? (
		<ActivityIndicator size="large" color="#FFA600" />
	) : (
		<Weather />
	)

	useEffect(() => {
		if (weatherDaily.temp < 14) {
			setBgColor("#001E8795")
		} else if (weatherDaily.temp >= 14 && weatherDaily.temp < 29) {
			setBgColor("#976D0399")
		} else if (weatherDaily.temp >= 29) {
			setBgColor("#8D000085")
		}
		setGeting(false)
	})

	return (
		<SafeAreaView style={styles.parentContainer}>
			<ImageBackground
				source={require("../../assets/bgHome.jpg")}
				style={styles.imageBackground}
			>
				<View style={[{ flex: 1 }, { backgroundColor: bgColor }]}>
					<View style={styles.headerContainer}>
						<HeaderTitle title={weatherNameCity} />
					</View>
					<View style={styles.bodyContainer}>{component}</View>
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
									navigation.navigate("MyCitiesScreen")
								}
							/>
							<ButtonComponent
								icon="queue"
								text="Agregar"
								onPress={() => console.log("ciudad agregada")}
							/>
						</View>
						<View>
							<InputButton />
						</View>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default WeatherScreen
