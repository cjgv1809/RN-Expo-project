import React from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import Weather from "../components/Weather/Weather"
import styles from "../GlobalStyles/GlobalStyles"

const city = "Mar del Plata"
const WeatherScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require("../../assets/bgImage2.jpeg")}
				style={styles.image}
			>
				<View style={styles.container2}>
					<View>
						<HeaderTitle title={city} />
					</View>
					<View>
						<Weather />
					</View>
					<View style={styles.btnContainer}>
						<ButtonComponent
							icon="home"
							text="Inicio"
							onPress={() => navigation.navigate("HomeScreen")}
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
							onPress={() => console.log("Agregando a la db")}
						/>
					</View>
					<View>
						<InputComponent />
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default WeatherScreen
