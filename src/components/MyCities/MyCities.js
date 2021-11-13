import React, { useState, useContext } from "react"
import { Text, View, Alert, FlatList } from "react-native"
import { Button } from "react-native-elements"
import { WeatherContext } from "../../context/WeatherContext"
import { MaterialIcons } from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"
import initialCities from "./cityList"
import styles from "./styles"

const MyCities = ({ navigation }) => {
	const [cities, setCities] = useState(initialCities)
	const { setQuery, setCityRequired } = useContext(WeatherContext)

	//Funcion para realizar la consulta del clima
	const search = (cityName) => {
		console.log("realizando consulta desde listado")
		setQuery(true)
		setCityRequired(cityName)
		navigation.navigate("WeatherScreen")
	}

	//Función para borrar una ciudad del listado
	const cityDelete = (cityId) => {
		const newCitiesList = cities.filter((city) => city.id !== cityId)
		setCities(newCitiesList)
		Alert.alert("Ciudad eliminada con éxito", "", [{ text: "OK" }])
	}

	const showAlert = (cityId) => {
		Alert.alert(
			"Confirmar",
			"¿Seguro quieres eliminar esta ciudad del listado?",
			[
				{
					text: "OK",
					onPress: () => cityDelete(cityId),
				},
				{
					text: "Cancel",
					onPress: () => console.log("Cancelar"),
					style: "cancel",
				},
			],
		)
	}

	//Función para acortar nombre largo de ciudad
	const truncate = (str, n) =>
		str?.length > n ? str.substr(0, n - 1) + "..." : str

	return (
		<FlatList
			data={cities}
			renderItem={({ item }) => (
				<View style={styles.containerCityItem}>
					<Text style={styles.textCityList}>
						{truncate(item.cityName, 12)}
					</Text>
					<Animatable.View
						animation="fadeInDown"
						duration={1500}
						style={styles.containerBtns}
					>
						<Button
							title="Ver Clima"
							buttonStyle={styles.containerBtnWeather}
							onPress={() => search(item.cityName)}
							icon={
								<MaterialIcons
									name="device-thermostat"
									size={20}
									color="#fff"
								/>
							}
						/>
						<Button
							title="Borrar"
							buttonStyle={styles.containerBtnDelete}
							onPress={() => showAlert(item.id)}
							icon={
								<MaterialIcons
									name="delete"
									size={20}
									color="#fff"
								/>
							}
						/>
					</Animatable.View>
				</View>
			)}
			keyExtractor={(item) => item.id}
		/>
	)
}

export default MyCities
