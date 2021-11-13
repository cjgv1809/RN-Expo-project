import React from "react"
import { View, SafeAreaView, ImageBackground } from "react-native"
import ButtonComponent from "../components/Button/Button"
import InputComponent from "../components/Input/Input"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import MyCities from "../components/MyCities/MyCities"
import styles from "../stylesGlobal/stylesGlobalScreen"

const MyCitiesScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.parentContainer}>
			<ImageBackground
				source={require("../../assets/bgHome.jpg")}
				style={styles.imageBackground}
			>
				<View style={styles.capBlack}>
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
								icon="brightness-4"
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

export default MyCitiesScreen
