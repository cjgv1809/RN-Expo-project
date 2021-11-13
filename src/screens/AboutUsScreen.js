import React from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import AboutUs from "../components/AboutUs/AboutUs"
import styles from "../stylesGlobal/stylesGlobalScreen"

const AboutUsScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.parentContainer}>
			<ImageBackground
				source={require("../../assets/bgHome.jpg")}
				style={styles.imageBackground}
			>
				<View style={styles.capBlack}>
					<View style={styles.headerContainer}>
						<HeaderTitle title="Sobre Nosotros" />
					</View>
					<View style={styles.bodyContainer}>
						<AboutUs />
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
								icon="compare"
								text="Modo Claro"
								onPress={() => console.log("modo dark")}
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

export default AboutUsScreen
