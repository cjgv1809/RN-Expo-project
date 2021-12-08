import React, { useState, useContext, useEffect } from "react"
import { Text, View, FlatList, useWindowDimensions } from "react-native"
import * as Animatable from "react-native-animatable"
import * as SQLite from "expo-sqlite"
import { MaterialIcons } from "@expo/vector-icons"
import { Button } from "react-native-elements"
import { useTheme } from "@react-navigation/native"
import { WeatherContext } from "../../context/WeatherContext"
import AlertModal from "../AlertModal/AlertModal"
import styles from "./styles"

const db = SQLite.openDatabase("paulas_db.db")

const MyCities = ({ navigation }) => {
	const [alertCityDelete, setAlertCityDelete] = useState(false)
	const [alertConfirmDelete, setAlertConfirmDelete] = useState(false)
	const [idCityDelete, setIdCityDelete] = useState("")
	const [nameCityDelete, setNameCityDelete] = useState("")
	const [citiesList, setCitiesList] = useState([])
	const {
		setCityRequired,
		setWeatherNameCity,
		setWeatherDaily,
		refresh,
		setRefresh,
	} = useContext(WeatherContext)
	const { width } = useWindowDimensions()
	const { colors } = useTheme()

	//Funcion para realizar la consulta del clima
	const search = (cityName) => {
		console.log("\x1b[36m%s\x1b[0m", "query from city list")
		setWeatherNameCity("")
		setWeatherDaily({})
		setCityRequired(cityName)
		navigation.navigate("WeatherScreen")
	}

	//Función para acortar nombre largo de ciudad
	const truncate = (str, n) =>
		str?.length > n ? str.substr(0, n - 1) + "..." : str

	//Traer ciudades de la db y comprobar existencia de registros en la tabla
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql("SELECT * FROM cities", [], (tx, results) => {
				const dataQuery = []
				for (let i = 0; i < results.rows.length; ++i){
					dataQuery.push(results.rows.item(i))}
				setCitiesList(dataQuery)
				
			})
		})
	}, [refresh])

	// Eliminar una ciudad de la db
	const cityDelete = (id) => {
		db.transaction((tx) => {
			tx.executeSql("DELETE FROM cities where ID = ?", [id])
		}),
			setAlertConfirmDelete(true)
	}

	const componentAlertDelete = (
		<AlertModal
			show={alertCityDelete}
			title={`¿ Eliminar ${"\n"} ${nameCityDelete} ?`}
			showCancelButton={true}
			showConfirmButton={true}
			cancelText="No, cancelar"
			confirmText="Si, eliminar"
			confirmButtonColor="#A7060695"
			cancelButtonColor="#00000060"
			onConfirmPressed={() => {
				cityDelete(idCityDelete)
				setAlertCityDelete(false)
				setRefresh(!refresh)
			}}
			onCancelPressed={() => setAlertCityDelete(false)}
		/>
	)
	const componentAlertConfirmDelete = (
		<AlertModal
			show={alertConfirmDelete}
			title={`${nameCityDelete}`}
			message="Se eliminó correctamente !!"
			closeOnTouchOutside={false}
			closeOnHardwareBackPress={true}
			showConfirmButton={true}
			confirmText="OK"
			confirmButtonColor="#FFA600"
			onConfirmPressed={() => {
				setAlertConfirmDelete(false)
				setRefresh(!refresh)
			}}
		/>
	)

	return (
		<FlatList
			data={citiesList}
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
								color: colors.textCityList,
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
						<View>
							{componentAlertDelete}
							{componentAlertConfirmDelete}
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
									setAlertCityDelete(true)
									setIdCityDelete(item.ID)
									setNameCityDelete(item.cityName)
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
			keyExtractor={(item) => item.ID.toString()}
		/>
	)
}

export default MyCities
