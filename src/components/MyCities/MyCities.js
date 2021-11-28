import React, { useState, useContext, useEffect, useCallback } from "react"
import { Text, View, Alert, FlatList, useWindowDimensions } from "react-native"
import { Button } from "react-native-elements"
import { WeatherContext } from "../../context/WeatherContext"
import { MaterialIcons } from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"
import { useTheme } from "@react-navigation/native"
import styles from "./styles"
import { useFocusEffect } from "@react-navigation/native"
import { db } from "../../screens/HomeScreen"

const MyCities = ({ navigation }) => {
	const [data, setData] = useState([])
	const [cities, setCities] = useState(data)
	const [answer, setAnswer] = useState(false)
	console.log("ANSWER", answer)
	const {
		setCityRequired,
		setWeatherNameCity,
		setWeatherDaily,
		weatherNameCity,
	} = useContext(WeatherContext)
	const { width } = useWindowDimensions()
	const { colors } = useTheme()

	//Funcion para realizar la consulta del clima
	const search = (cityName) => {
		console.log("\x1b[36m%s\x1b[0m", "query from city list")
		setCityRequired(cityName)
		setWeatherNameCity("")
		setWeatherDaily({})
		navigation.navigate("WeatherScreen")
	}

	//Función para borrar una ciudad del listado
	const cityDelete = (cityId) => {
		console.log("CITIES", cities)
		const newCitiesList = cities.filter((city) => city.id !== cityId)
		setCities(newCitiesList)
		console.log("newCitiesList", newCitiesList)
		Alert.alert("Info", "Ciudad eliminada con éxito", "", [{ text: "OK" }])
	}

	const showAlert = (cityId) => {
		Alert.alert(
			"Confirmar",
			"¿Seguro quieres eliminar esta ciudad del listado?",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancelar"),
					style: "cancel",
				},
				{
					text: "OK",
					onPress: () =>
						// cityDelete(cityId)
						setAnswer(true),
					style: "default",
				},
			],
		)
	}

	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY AUTOINCREMENT, cityName TEXT NOT NULL);",
			)
		})
	}, [])

	useFocusEffect(
		useCallback(() => {
			const fetchCities = () => {
				db.transaction(
					(tx) => {
						tx.executeSql(
							`SELECT * FROM cities ORDER BY ID DESC`,
							[],
							(tx, results) => {
								let len = results.rows.length
								if (len > 0) {
									let initialCities = []
									for (let i = 0; i < len; i++) {
										let item = results.rows.item(i)
										console.log("item", item)
										initialCities.push(item)
									}
									setData(initialCities)
								}
							},
							(tx, error) => {
								console.log(
									"Error al acceder a la tabla de ciudades",
								)
							},
						)
					},
					() => {
						console.log("Transaccion correcta", "select")
					},
					(error) => {
						console.log("Error de transaccion", error)
					},
				)
			}
			fetchCities()
			return () => fetchCities()
		}, []),
	)

	const deleteCity = (id) => {
		if (answer) {
			db.transaction((tx) => {
				tx.executeSql(`DELETE FROM cities WHERE ID = ?;`, [id]),
					(tx, results) => {
						if (results.rowsAffected > 0) {
							Alert.alert(
								"Exito",
								"Ciudad borrada exitosamente",
								[
									{
										text: "Ok",
									},
								],
								{ cancelable: false },
							)
							setAnswer(false)
						}
					},
					(tx, error) => {
						console.log("Error al borrar la ciudad")
					},
					() => {
						console.log("Transaccion correcta", "Delete")
					},
					(error) => {
						console.log("Error de transaccion", error)
					}
			})
		}
	}

	//Función para acortar nombre largo de ciudad
	const truncate = (str, n) =>
		str?.length > n ? str.substr(0, n - 1) + "..." : str

	return (
		<FlatList
			data={data}
			renderItem={({ item }) => (
				<View
					style={[
						styles.containerCityItem,
						{ backgroundColor: colors.card },
					]}
				>
					<Text
						style={[
							{
								...styles.textCityList,
								fontSize: width < 350 ? 14 : 16,
								color: colors.text,
							},
						]}
					>
						{truncate(item.cityName, 12)}
					</Text>
					<Animatable.View
						animation="fadeInDown"
						duration={1500}
						style={styles.containerBtns}
					>
						<View style={styles.btnContainer}>
							<Button
								title="Ver Clima"
								titleStyle={[
									{
										fontSize: width < 350 ? 11 : 14,
										color: colors.text,
									},
								]}
								buttonStyle={styles.containerBtnWeather}
								onPress={() => search(item.cityName)}
								icon={
									<MaterialIcons
										name="device-thermostat"
										size={20}
										color={colors.text}
									/>
								}
							/>
						</View>
						<View style={styles.btnContainer}>
							<Button
								title="Borrar"
								titleStyle={[
									{
										fontSize: width < 350 ? 11 : 14,
										color: colors.text,
									},
								]}
								buttonStyle={[
									styles.containerBtnDelete,
									{ backgroundColor: colors.border },
								]}
								onPress={() => {
									showAlert(item.id)
									deleteCity(item.id)
								}}
								icon={
									<MaterialIcons
										name="delete"
										size={20}
										color={colors.text}
									/>
								}
							/>
						</View>
					</Animatable.View>
				</View>
			)}
			keyExtractor={(item) => item.id.toString()}
		/>
	)
}

export default MyCities
