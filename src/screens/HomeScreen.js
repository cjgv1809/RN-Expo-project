import React, { useState } from "react"
import { View, ImageBackground, SafeAreaView } from "react-native"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import InfoModal from "../components/InfoModal/InfoModal"
import styles from "../GlobalStyles/GlobalStyles"

const HomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require("../../assets/bgImage.jpeg")}
				style={styles.image}
			>
				<View>
					<HomeHeader />
					<InfoModal
						visible={modalVisible}
						onPress={() => setModalVisible(false)}
					/>
				</View>
				<View style={styles.btnContainer}>
					<ButtonComponent
						icon="folder"
						text="Mis Ciudades"
						onPress={() => navigation.navigate("MyCitiesScreen")}
					/>
					<ButtonComponent
						icon="info"
						text="Info & Uso"
						onPress={() => setModalVisible(true)}
					/>
					<ButtonComponent
						icon="group"
						text="Nosotros"
						onPress={() => navigation.navigate("AboutUsScreen")}
					/>
				</View>
				<View>
					<InputComponent />
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default HomeScreen
