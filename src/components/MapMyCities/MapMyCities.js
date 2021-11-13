import React from 'react'
import { Image } from "react-native"
import styles from './styles'

const MapMyCities = () => {
  return (
		<Image
			source={require("../../../assets/mapa_completo.jpg")}
			style={styles.mapCities}
		/>
  )
}

export default MapMyCities
