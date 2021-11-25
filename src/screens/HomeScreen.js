import React, { useContext, useState } from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import * as Animatable from "react-native-animatable"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import InfoModal from "../components/InfoModal/InfoModal"
import styles from "../stylesGlobal/stylesGlobalScreen"
import { useTheme } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { PreferencesContext } from "../context/ThemeContext"

const HomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false)
	const { toggleTheme, themeDark } = useContext(PreferencesContext)
	const { colors } = useTheme()

	return (
		<>
			<StatusBar style={themeDark ? "light" : "dark"} />
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
							<Animatable.Image
								source={require("../../assets/anagrama.png")}
								animation={"bounceIn"}
								duration={3500}
								style={styles.anagrama}
							/>
							<View>
								<InfoModal
									visible={modalVisible}
									onPress={() => setModalVisible(false)}
								/>
							</View>
						</View>
						<View style={styles.footerContainer}>
							<View style={styles.btnContainer}>
								<ButtonComponent
									icon="folder"
									text="Mis Ciudades"
									onPress={() =>
										navigation.navigate("MyCitiesScreen")
									}
								/>
								<ButtonComponent
									icon="info"
									text="Info & Uso"
									onPress={() => setModalVisible(true)}
								/>
								<ButtonComponent
									icon="group"
									text="Nosotros"
									onPress={() =>
										navigation.navigate("AboutUsScreen")
									}
								/>
							</View>
							<View>
								<InputComponent navigation={navigation} />
							</View>
						</View>
					</View>
				</ImageBackground>
			</SafeAreaView>
		</>
	)
}

export default HomeScreen
