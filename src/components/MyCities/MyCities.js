import React, { useState, useContext } from "react"
import { Text, View,  FlatList, useWindowDimensions } from "react-native"
import { Button } from "react-native-elements"
import { WeatherContext } from "../../context/WeatherContext"
import { MaterialIcons } from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"
import { db, initialCities } from "./DB"
import { useTheme } from "@react-navigation/native"
import styles from "./styles"

const MyCities = ({ navigation }) => {
	const [cities, setCities] = useState(initialCities)
	const {
		setCityRequired,
		setWeatherNameCity,
		setWeatherDaily,
		setInputView,
	} = useContext(WeatherContext)
	const { width } = useWindowDimensions()
	const { colors } = useTheme()

	//Funcion para realizar la consulta del clima
	const search = (cityName) => {
		console.log("\x1b[36m%s\x1b[0m", "query from city list")
		setWeatherNameCity("")
		setWeatherDaily({})
		setCityRequired(cityName)
		setInputView(true)
		navigation.navigate("WeatherScreen")
	}

	//Función para acortar nombre largo de ciudad
	const truncate = (str, n) =>
		str?.length > n ? str.substr(0, n - 1) + "..." : str

	return (
		<FlatList
			data={cities}
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
								onPress={() => showAlert(item.id)}
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
			keyExtractor={(item) => item.id}
		/>
	)
}

export default MyCities
