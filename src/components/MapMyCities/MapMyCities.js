import React, { useState, useEffect, useContext } from "react"
import * as SQLite from "expo-sqlite"
import MapView, { Marker } from "react-native-maps"
import { View, Alert } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import styles from "./styles"

const db = SQLite.openDatabase("paulas_db.db")

const initialRegion = {
	latitude: -37.5,
	longitude: -58.0,
	latitudeDelta: 0.1,
	longitudeDelta: 4.5,
}

const MapMyCities = () => {
	const [region, setRegion] = useState(initialRegion)
	const [citiesList, setCitiesList] = useState([])
	const { lat, lon } = useContext(WeatherContext)

	//Traer ciudades de la db
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql("SELECT * FROM cities", [], (tx, results) => {
				const dataQuery = []
				for (let i = 0; i < results.rows.length; ++i)
					dataQuery.push(results.rows.item(i))
				setCitiesList(dataQuery)				
			})
		})
	}, [])

	useEffect(() => {
		if (!region) {
			setRegion({
				latitude: lat,
				longitude: lon,
				latitudeDelta: 0.02,
				longitudeDelta: 1,
			})
		} else {
			setRegion(region)
		}
	}, [])

	return (
		<View style={styles.containerMapCities}>
			<MapView
				zoomEnabled={true}
				zoomEnabled={true}
				zoomTapEnabled={true}
				rotateEnabled={true}
				scrollEnabled={true}
				loadingEnabled={true}
				region={region}
				style={styles.mapCities}
			>
				{citiesList.map((city, i) => (
					<Marker
						title={`${city.cityName}`}						
						showCallout
						tracksViewChanges={false}
						coordinate={{
							latitude: city.lat,
							longitude: city.lon,
							latitudeDelta: 0.4,
							longitudeDelta: 0.2,
						}}
						key={i.toString()}
					/>
				))}
			</MapView>
		</View>
	)
}

export default MapMyCities
