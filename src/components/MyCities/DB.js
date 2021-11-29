import React, { useState, useContext, useEffect } from "react"
import { Text, View, Alert } from "react-native"
import { WeatherContext } from "../../context/WeatherContext"
import * as SQLite from "expo-sqlite"

export const db = SQLite.openDatabase(
	{
		name: "paulas_db",
		location: "default",
	},
	() => {
		console.log("DB created")
	},
	(error) => {
		console.log("Error creating DB", error)
	},
)

export const initialCities = [
	{ id: "1", cityName: "Cariló", lat: -37.1652, lon: -56.8913 },
	{ id: "2", cityName: "Mar del Plata", lat: -38.0023, lon: -57.5575 },
	{ id: "3", cityName: "Mar del Sur", lat: -38.3429, lon: -57.9908 },
	{ id: "4", cityName: "Necochea", lat: -38.5473, lon: -58.7368 },
	{ id: "5", cityName: "Pinamar", lat: -37.1079, lon: -56.8614 },
	{	id: "6",cityName: "San Clemente del Tuyú",	lat: -36.3569,	lon: -56.7235,	},
	{ id: "7", cityName: "Santa Clara del Mar", lat: -37.8364, lon: -57.5067 },
	{ id: "8", cityName: "Santa Teresita", lat: -36.5413, lon: -56.7011 },
	{ id: "9", cityName: "Villa Gesell", lat: -37.2639, lon: -56.973 },
]

const DB = () => {
	const { cityRequired, lat, lon } = useContext(WeatherContext)

		useEffect(() => {
			db.transaction((tx) => {
				tx.executeSql(
					"CREATE TABLE IF NOT EXISTS" +
						"Cities" +
						"(ID INTEGER PRIMARY KEY AUTOINCREMENT, CityName TEXT, Lat REAL, Lon REAL)",
				)
			})
		}, [])

		//Función para agregar una ciudad a la table
		const setData = () => {
			db.transaction((tx) => {
				tx.executeSql(
					"INSERT INTO Cities (CityName, Lat, Lon) VALUES (?,?,?)",
					[weatherNameCity, lat, lon],
				),
					console.log("Insert Ok")
			})
		}

	useEffect(() => {
		//Función para recuperar las ciudades de la table
		db.transaction((tx) => {
			tx.executeSql("SELECT * FROM Cities", [], (tx, results) => {
				let len = results.rows.length
				if (len > 0) {
					let cityName = results.rows.item(0).CityName
					let lat = results.rows.item(0).Lat
					let lon = results.rows.item(0).Lon
					console.log(cityName)
				} else {
					console.log("vacia")
				}
			})
		})
	}, [])

	

	// //Función para borrar una ciudad del listado
	// const cityDelete = (cityId) => {
	// 	const newCitiesList = cities.filter((city) => city.id !== cityId)
	// 	setCities(newCitiesList)
	// 	Alert.alert("Ciudad eliminada con éxito", "", [{ text: "OK" }])
	// }
const removeData = async () => {
	try {
		// await AsyncStorage.clear();
		db.transaction((tx) => {
			tx.executeSql(
				"DELETE FROM Users",
				[],
				() => {
					navigation.navigate("Login")
				},
				(error) => {
					console.log(error)
				},
			)
		})
	} catch (error) {
		console.log(error)
	}
}
	// const showAlert = (cityId) => {
	// 	Alert.alert(
	// 		"Confirmar",
	// 		"¿Seguro quieres eliminar esta ciudad del listado?",
	// 		[
	// 			{
	// 				text: "OK",
	// 				onPress: () => cityDelete(cityId),
	// 			},
	// 			{
	// 				text: "Cancel",
	// 				onPress: () => console.log("Cancelar"),
	// 				style: "cancel",
	// 			},
	// 		],
	// 	)
	// }
	return <></>
}

export default DB
