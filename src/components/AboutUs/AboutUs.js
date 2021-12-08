import React from "react"
import { ScrollView } from "react-native"
import * as Animatable from "react-native-animatable"
import styles from "./styles"

const AboutUs = () => {
	return (
		<ScrollView style={styles.textContainerAbout}>
			<Animatable.Text
				animation="fadeIn"
				duration={3500}
				style={styles.textAbout}
			>
				Somos un grupo de entusiastas programadores y diseñadores que
				siempre estamos en búsqueda de entregar el mayor valor en sus
				trabajos, atendiendo a las necesidades de nuestros usuarios.
				{"\n"}En esta app, especialmente pensada para la consulta del
				clima y el pronóstico del mismo para los siguientes dias, le
				facilitamos a nuestros usuarios, bajo una gran interfaz gráfica
				y una excelente experiencia de usuario, un entorno donde podrá
				hacerlo con confianza, ya sea por razones laborales o
				personales.{"\n"}Ante cualquier duda o sugerencia, dejamos a su
				disposición nuestro email de contacto: pwa@gmail.com. Muchas
				gracias !!
			</Animatable.Text>
		</ScrollView>
	)
}

export default AboutUs
