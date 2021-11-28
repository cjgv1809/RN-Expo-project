// import React, { useContext, useEffect, useState } from "react"
// import { WeatherContext } from "../context/WeatherContext"
// const {
// 	inputView,
// 	cityRequired,
// 	setInputView,
// 	setCityRequired,
// 	setWeatherNameCity,
// 	setWeatherDaily,
// } = useContext(WeatherContext)
// import * as SQLite from "expo-sqlite"

// // DB Creation
// // const db = SQLite.openDatabase({
// // 	name: "paulas_db",
// // 	location: "default",
// // })

// // const createTable = () => {
// // 	const promise = new Promise((resolve, reject) => {
// // 		db.transaction((tx) => {
// // 			tx.executeSql(
// // 				"CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY NOT NULL, cityName TEXT NOT NULL);",
// // 				[],
// // 				() => {
// // 					resolve()
// // 				},
// // 				(_, err) => {
// // 					reject(err)
// // 				},
// // 			)
// // 		})
// // 	})
// // 	return promise
// // }

// // const insertCity = () => {
// // 	const promise = new Promise((resolve, reject) => {
// // 		db.transaction((tx) => {
// // 			tx.executeSql(
// // 				`INSERT INTO cities (cityName) VALUES (?);`,
// // 				[cityRequired],
// // 				(_, result) => {
// // 					resolve(result)
// // 				},
// // 				(_, err) => {
// // 					reject(err)
// // 				},
// // 			)
// // 		})
// // 	})
// // 	return promise
// // }

// // const fetchCities = () => {
// // 	const promise = new Promise((resolve, reject) => {
// // 		db.transaction((tx) => {
// // 			tx.executeSql(
// // 				"SELECT * FROM cities ORDER BY ID DESC",
// // 				[],
// // 				(_, result) => {
// // 					resolve(result)
// // 				},
// // 				(_, err) => {
// // 					reject(err)
// // 				},
// // 			)
// // 		})
// // 	})
// // 	return promise
// // }

// // const deleteCity = (id) => {
// // 	const promise = new Promise((resolve, reject) => {
// // 		db.transaction(
// // 			(tx) => {
// // 				tx.executeSql(`DELETE FROM cities WHERE ID = ?;`, [id])
// // 			},
// // 			(_, result) => {
// // 				resolve(result)
// // 			},
// // 			(_, err) => {
// // 				reject(err)
// // 			},
// // 		)
// // 	})
// // 	return promise
// // }

// // export { createTable, insertCity, fetchCities, deleteCity }

// const CityList = () => {
// 	// Aqui el SELECT a la tabla cities

// 	const [cities, setCities] = useState([])
// 	console.log("cities", cities)

// 	useEffect(() => {
// 		const fetchCities = () => {
// 			db.transaction(
// 				(tx) => {
// 					tx.executeSql(
// 						`SELECT * FROM cities ORDER BY ID DESC`,
// 						[],
// 						(tx, results) => {
// 							let len = results.rows.length
// 							if (len > 0) {
// 								let initialCities = []
// 								for (let i of len) {
// 									let item = results.rows.item(i)
// 									console.log(results.rows.item(i))
// 									initialCities.push({
// 										id: item.id,
// 										cityName: item.cityName,
// 									})
// 								}
// 								setCities(initialCities)
// 								console.log("initialCities", initialCities)
// 							}
// 							console.log("ciudades agregadas: " + len)
// 						},
// 						(tx, error) => {
// 							console.log(
// 								"Error al acceder a la tabla de ciudades",
// 							)
// 						},
// 					)
// 				},
// 				(error) => {
// 					console.log("Error de transaccion")
// 				},
// 				() => {
// 					console.log("Transaccion correcta")
// 				},
// 			)
// 		}
// 		return () => fetchCities()
// 	}, [])

// 	return (
// 		<View>
// 			{cities?.map((city, index) => (
// 				<View>
// 					<Text key={index}>{city}</Text>
// 				</View>
// 			))}
// 		</View>
// 	)
// }

// export default CityList
