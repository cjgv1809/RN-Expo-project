import React, { useContext, useState } from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import { WeatherContext } from "../context/WeatherContext"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import Weather from "../components/Weather/Weather"
import styles from "../stylesGlobal/stylesGlobalScreen"

const WeatherScreen = ({ navigation }) => {
	const [bgColor, setBgColor] = useState("#0004")
	const { weatherCurrent, cityRequired } = useContext(WeatherContext)
	// const { main } = weatherCurrent
		
	// if (!main) return null

	// if (main?.temp < 14) {
	// 	setBgColor("#00176895")
	// } else if (main?.temp >= 14 && main?.temp < 27) {
	// 	setBgColor("#A8840595")
	// } else {
	// 	setBgColor("#8D000095")
	// }


	return (
		<SafeAreaView style={styles.parentContainer}>
			<ImageBackground
				source={require("../../assets/bgHome.jpg")}
				style={styles.imageBackground}
			>
				<View style={[{ flex: 1 }, { backgroundColor: bgColor }]}>
					<View style={styles.headerContainer}>
						<HeaderTitle title={cityRequired} />
					</View>
					<View style={styles.bodyContainer}>
						<Weather />
					</View>
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
								onPress={() =>
									console.log("Agregando a la db...")
								}
							/>
						</View>
						<View>
							<InputComponent />
						</View>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default WeatherScreen
