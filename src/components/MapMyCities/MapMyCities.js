import React, { useState, useEffect, useContext } from "react"
import MapView, { Marker } from "react-native-maps"
import { View, Alert } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import { DB,initialCities } from "../../components/MyCities/DB"
import styles from "./styles"

const MapMyCities = () => {
	const [location, setLocation] = useState({})
	const { lat, lon } = useContext(WeatherContext)

	if (initialCities.length === 0) {
		Alert.alert(
			"No hay ciudades en el listado",
			"Busca una ciudad y agregala al listado",
			[
				{
					text: "OK",
				},
			],
		)
	}

	const moreInfo = () => {
		Alert.alert("temp", "clima", [
			{
				text: "OK",
			},
		])
	}

	return (
		<View style={styles.containerMapCities}>			
			<MapView
				zoomEnabled={true}
				zoomEnabled={true}
				zoomTapEnabled={true}
				rotateEnabled={true}
				scrollEnabled={true}
				loadingEnabled={true}
				initialRegion={{
					latitude: -38.0023,
					longitude: -57.5575,
					latitudeDelta: 0.04,
					longitudeDelta: 0.5,
				}}
				style={styles.mapCities}
			>
				{initialCities.map((city, i) => (
					<Marker
						title={`${city.cityName}`}
						// onPress={moreInfo}
						showCallout
						tracksViewChanges={false}
						coordinate={{
							latitude: city.lat,
							longitude: city.lon,
							latitudeDelta: 0.04,
							longitudeDelta: 0.65,
						}}
						key={i.toString()}
					/>
				))}
			</MapView>
		</View>
	)
}

export default MapMyCities
