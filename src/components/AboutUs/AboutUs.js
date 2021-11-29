import React from "react"
import { View, Text } from "react-native"
import * as Animatable from "react-native-animatable"
import styles from "./styles"

const AboutUs = () => {
	return (
		<View style={styles.textContainerAbout}>
			<Animatable.Text animation="fadeIn" duration={3500}>
				Somos un grupo de entusiastas programadores y diseñadores que
				siempre estan en busqueda de entregar el mayor valor en sus
				trabajos, atendiendo a las necesidades de nuestros usuarios. En
				esta app, especialmente pensada para la consulta del clima y el
				pronostico del mismo para los siguientes dias, le facilitamos a
				nuestros usuarios, bajo una gran interfaz grafica y buena
				experiencia de usuario, un entorno donde podra hacerlo con
				confianza, ya sea por razones laborales o personales. Ante cualq
				Ante cualquier duda o sugerencia, dejamos a su disposicion
				nuestro email de contacto: pwa@gmail.com
			</Animatable.Text>
		</View>
	)
}

export default AboutUs
