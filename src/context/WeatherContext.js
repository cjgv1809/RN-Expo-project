import React, { createContext, useState, useEffect } from "react"
import { Alert } from "react-native"
import axios from "axios"
import { API_KEY_1, API_KEY_2 } from "@env"

export const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
	const [inputView, setInputView] = useState(true)
	const [cityRequired, setCityRequired] = useState("")
	const [weatherNameCity, setWeatherNameCity] = useState("")
	const [weatherDaily, setWeatherDaily] = useState({})
	const { temp } = weatherDaily

	useEffect(() => {
		//Función que ejecuta la consulta el clima
		const getWeatherCurrent = async () => {
			if (!cityRequired) return null
			try {
				const urlWeatherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityRequired},AR&appid=${API_KEY_1}&units=metric&lang=es`
				console.log(urlWeatherCurrent)

				const dataWeatherCurrent = await axios.get(urlWeatherCurrent)
				const { coord, name } = dataWeatherCurrent.data
				const { lat, lon } = coord
				setWeatherNameCity(name)

				const urlWeatherDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_2}&units=metric&lang=es`
				console.log(urlWeatherDaily)

				const dataWeatherDaily = await axios.get(urlWeatherDaily)
				const { current, daily } = dataWeatherDaily.data
				const { temp, weather } = current
				const { description, icon } = weather[0]
				const descriptionWeather = description.toUpperCase()
				const { min, max } = daily[0].temp
				const days = daily.slice(1, 6)
				const iconsApi = days.map((icon) => icon.weather[0].icon)

				setWeatherDaily({
					temp,
					descriptionWeather,
					icon,
					min,
					max,
					days,
					iconsApi,
				})
				setCityRequired("")
			} catch (error) {
				showAlert()
				console.log(error.message)
			}
		}
		getWeatherCurrent()
	}, [cityRequired])

	const showAlert = () => {
		Alert.alert(
			"Error",
			"No se encontro respuesta para esa consulta, intente con otra",
			[
				{
					text: "OK",
					// onPress: () => setInputView(false),
				},
			],
		)
		setCityRequired("")
		setWeatherNameCity("")
		setWeatherDaily({})
	}

	return (
		<WeatherContext.Provider
			value={{
				setCityRequired,
				setWeatherDaily,
				setWeatherNameCity,
				setInputView,
				inputView,
				cityRequired,
				weatherDaily,
				weatherNameCity,
				temp,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider
