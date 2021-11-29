import React from "react"
import {
	View,
	Modal,
	ScrollView,
	useWindowDimensions,
	Text,
} from "react-native"
import { Icon } from "react-native-elements"
import { Button } from "react-native-elements/dist/buttons/Button"
import * as Animatable from "react-native-animatable"
import screenWheather from "../../../assets/screen_weather.jpeg"
import styles from "./styles"

const InfoModal = ({ visible, onPress }) => {
	const { width } = useWindowDimensions()
	return (
		<Modal animationType="fade" visible={visible} transparent>
			<View
				style={{
					...styles.modalContainer,
					marginTop: width < 350 ? "38%" : "30%",
				}}
			>
				<ScrollView>
					<View style={styles.textTitleModalContainer}>
						<Text style={styles.textTitleModal}>
							Bienvenida Paula !!
						</Text>
					</View>
					<Animatable.Text
						animation="fadeInUpBig"
						duration={1500}
						style={styles.textModal}
					>
						{"\n"}
						Gracias por utilizar la app de clima que creamos para
						vos. {"\n"}
						{"   "}Por medio de esta aplicación podrás consultar el
						clima actual y el pronóstico para cinco días de
						diferentes ciudades de Argentina. {"\n"}
						{"   "}Indicando en el buscador la ciudad a consultar,
						se visualizará el clima actual y el pronóstico,pudiendo
						optar por agregar la ciudad buscada a un listado
						de ciudades (Mis Ciudades), donde encontrarás las
						ciudades previamente guardadas. {"\n"}Desde la pantalla
						"Mis Ciudades" también tendrás la posibilidad de consultar el clima de las ciudades del listado, borrar ciudades
						y visualizarlas en un mapa.
						{"\n"}
						{"   "}La pantalla con la información del clima mostrará
						la temperatura actual de la ciudad, la temperatura
						máxima y mínima para esa jornada y el pronóstico de la
						semana. {"\n"}
						{"   "}También la aplización cuenta con la posicbilidad de optar por utilizarla en
						modo oscuro o claro.{"\n"}
						{"   "}
						Esperamos que sea de tu agrado y estamos a tu
						disposición para ayudarte en lo que necesites.
						{"\n"}
						{"   "}Que disfrutes tu APP.
					</Animatable.Text>
				</ScrollView>
				<View style={styles.btnContainer}>
					<Button
						icon={<Icon name="close" color="#fff" />}
						iconRight="true"
						title="Cerrar"
						onPress={onPress}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default InfoModal
