import React, { useContext } from "react"
import { View, SafeAreaView, ImageBackground } from "react-native"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import MyCities from "../components/MyCities/MyCities"
import styles from "../stylesGlobal/stylesGlobalScreen"
import { useTheme } from "@react-navigation/native"
import { PreferencesContext } from "../context/ThemeContext"

const MyCitiesScreen = ({ navigation }) => {
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
						{ backgroundColor: colors.background },
					]}
				>
					<View style={styles.headerContainer}>
						<HeaderTitle title="Mis Ciudades" />
					</View>
					<View style={styles.bodyContainer}>
						<MyCities navigation={navigation} />
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
								icon="room"
								text="Ver Mapa"
								onPress={() =>
									navigation.navigate("MapMyCitiesScreen")
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

export default MyCitiesScreen
