import React, { useContext } from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import AboutUs from "../components/AboutUs/AboutUs"
import styles from "../stylesGlobal/stylesGlobalScreen"
import { PreferencesContext } from "../context/ThemeContext"
import { useTheme } from "@react-navigation/native"

const AboutUsScreen = ({ navigation }) => {
	const { toggleTheme, themeDark } = useContext(PreferencesContext)
	const { colors } = useTheme()

	return (
		<SafeAreaView style={styles.parentContainer}>
			<ImageBackground
				source={require("../../assets/bgHome.jpg")}
				style={styles.imageBackground}
			>
				<View
					style={[
						styles.capBlack,
						{
							backgroundColor: colors.background,
						},
					]}
				>
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
								icon={
									themeDark ? "brightness-5" : "brightness-3"
								}
								text={themeDark ? "Modo Claro" : "Modo Oscuro"}
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
	)
}

export default AboutUsScreen
