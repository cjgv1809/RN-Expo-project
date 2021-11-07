import React from "react"
import { View, SafeAreaView, ImageBackground, Image } from "react-native"

import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import styles from "../GlobalStyles/GlobalStyles"

const MapMyCitiesScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require("../../assets/bgImage2.jpeg")}
				style={styles.image}
			>
				<View style={styles.container}>
					<View>
						<HeaderTitle title="Mis Ciudades" />
					</View>
					<View style={styles.containerMapCities}>
						<Image
							source={require("../../assets/mapa_completo.jpg")}
							style={styles.mapCities}
						/>
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
							icon="compare"
							text="Modo Claro"
							onPress={() => console.log("modo dark")}
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

export default MapMyCitiesScreen
