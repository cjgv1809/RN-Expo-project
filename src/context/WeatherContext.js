import React, { createContext, useState, useEffect } from "react"
import { Alert } from "react-native"
import axios from "axios"
import { API_KEY_1, API_KEY_2 } from "@env"

export const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
	const [weatherCurrent, setWeatherCurrent] = useState({})
	const [weatherDaily, setWeatherDaily] = useState({})
	// const [mapCity, setMapCity] = useState({})
	const [query, setQuery] = useState(false) // Para controlar q no consulte en el 1° render
	const [cityRequired, setCityRequired] = useState("") 

	const lat = weatherCurrent?.coord?.lat
	const lon = weatherCurrent?.coord?.lon
	
	// console.log(weatherCurrent)
	// console.log(lat, lon)

	const urlWeatherCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${cityRequired},AR&appid=${API_KEY_1}&units=metric&lang=es`

	// const urlWeatherDaily = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_2}&units=metric&lang=es`

	// const urlMap = `https://tile.openweathermap.org/map/clouds_new/10/${lat}/${lon}.png?appid=${API_KEY_2}`

	const showAlert = () => {
		Alert.alert(
			"Error",
			"No se encontro respuesta para esa consulta, intente con otra",
			[{ text: "OK" }],
		)
	}

	useEffect(() => {
		if (query) {
			try {
				//Función que ejecuta la consulta el clima actual
				const getWeatherCurrent = async () => {
					const dataWeatherCurrent = await axios.get(
						urlWeatherCurrent,
					)
					setWeatherCurrent(dataWeatherCurrent.data)
				}

				//Función que ejecuta la consulta el pronóstico
				// const getWeatherDaily = async () => {
				// 	const dataWeatherDaily = await axios.get(urlWeatherDaily)
				// 	setWeatherDaily(dataWeatherDaily.data)
				// }

				// //Función que ejecuta la consulta el mapa
				// const getMap = async () => {
				// 	const dataMap = await axios.get(urlMap)
				// 	setMapCity(dataMap.data)
				// }

				getWeatherCurrent()
				// Promise.all([getWeatherDaily(), getMap()])

				setQuery(false)
			} catch (error) {
				showAlert()
			}
		}
	}, [query])
	

	return (
		<WeatherContext.Provider
			value={{
				setQuery,
				setCityRequired,
				weatherCurrent,
				weatherDaily,
				cityRequired,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider
