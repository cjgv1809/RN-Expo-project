import React, { useState } from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import * as Animatable from "react-native-animatable"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import InfoModal from "../components/InfoModal/InfoModal"
import styles from "../stylesGlobal/stylesGlobalScreen"

const HomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<SafeAreaView style={styles.parentContainer}>
			<ImageBackground
				source={require("../../assets/bgHome.jpg")}
				style={styles.imageBackground}
			>
				<View style={styles.capBlack}>
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
	)
}

export default HomeScreen
