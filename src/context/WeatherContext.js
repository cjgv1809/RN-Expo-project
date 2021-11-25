import React, { createContext, useState, useEffect } from "react"
import { Alert } from "react-native"
import axios from "axios"
import { API_KEY_1, API_KEY_2 } from '@env'

export const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
	const [query, setQuery] = useState(false) // Para controlar q no consulte en el 1° render
	const [cityRequired, setCityRequired] = useState("")
	const [weatherNameCity, setWeatherNameCity] = useState("")
	const [weatherCurrent, setWeatherCurrent] = useState({})
	const [weatherDaily, setWeatherDaily] = useState({})

	// const {temp} = weatherDaily.current
if (!weatherDaily) return null
	useEffect(() => {
		//Función que ejecuta la consulta el clima actual
		const getWeatherCurrent = async () => {
			if (query) {
				try {
					const urlWeatherCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${cityRequired},AR&appid=${API_KEY_1}&units=metric&lang=es`
					console.log(urlWeatherCurrent)

					const dataWeatherCurrent = await axios.get(
						urlWeatherCurrent,
					)
					const { coord, main, name } = dataWeatherCurrent.data
					const { lat, lon } = coord
					setWeatherNameCity(name)
					setWeatherCurrent(main)

					const urlWeatherDaily = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_2}&units=metric&lang=es`
					console.log(urlWeatherDaily)

					const dataWeatherDaily = await axios.get(urlWeatherDaily)
					const { current, daily } = dataWeatherDaily.data
					const { temp, weather } = current
					const { description, icon } = weather[0]
					// const { iconsWeek } = daily.weather[0].icon
					const descriptionWeather = description.toUpperCase()
					
					setWeatherDaily({
						temp,
						descriptionWeather,
						icon,
						daily,
						// iconsWeek,
					})

					setQuery(false)
				} catch (error) {
					showAlert()
					console.log(error)
				}
			}
		}
		getWeatherCurrent()
	}, [query])

	const showAlert = () => {
		Alert.alert(
			"Error",
			"No se encontro respuesta para esa consulta, intente con otra",
			[
				{
					text: "OK",
					onPress: () => console.log("ciudad no encontrada"),
				},
			],
		)
	}

	return (
		<WeatherContext.Provider
			value={{
				setQuery,
				setCityRequired,
				setWeatherCurrent,
				setWeatherDaily,
				cityRequired,
				weatherCurrent,
				weatherDaily,
				weatherNameCity,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider
