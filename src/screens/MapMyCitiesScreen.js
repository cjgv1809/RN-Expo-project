import React from "react"
import { View, SafeAreaView, ImageBackground } from "react-native"
import HeaderTitle from "../components/HeaderTitle/HeaderTitle"
import ButtonComponent from "../components/Button/Button"
import InputButton from "../components/InputButton/InputButton"
import MapMyCities from "../components/MapMyCities/MapMyCities"
import styles from "../stylesGlobal/stylesGlobalScreen"

const MapMyCitiesScreen = ({ navigation }) => {
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
						<MapMyCities />
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
								icon="brightness-4"
								text="Modo Claro"
								onPress={() => console.log("modo dark")}
							/>
						</View>
						<View>
							<InputButton />
						</View>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

export default MapMyCitiesScreen
