import React from "react"
import { Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Button } from "react-native-elements"
import styles from "./styles"

const MyCities = ({ item, navigation, onPress }) => {
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str
	}

	return (
		<View style={styles.containerCityList}>
			<View>
				<Text style={styles.textCityList}>
					{truncate(item.cityName, 12)}
				</Text>
			</View>
			<View style={styles.containerBtns}>
				<Button
					title="Ver Clima"
					buttonStyle={styles.containerBtnWeather}
					onPress={() => navigation.navigate("WeatherScreen")}
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
					onPress={onPress}
					icon={
						<MaterialIcons name="delete" size={20} color="#fff" />
					}
				/>
			</View>
		</View>
	)
}

export default MyCities
