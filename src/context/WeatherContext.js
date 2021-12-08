import React, { createContext, useState, useEffect } from "react"
import axios from "axios"
import { API_KEY_1, API_KEY_2 } from "@env"

export const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {	
	const [refresh, setRefresh] = useState(true)
	const [viewSpinner, setViewSpinner] = useState(true)
	const [responseStatus, setResponseStatus] = useState(true)
	const [cityRequired, setCityRequired] = useState("")
	const [weatherNameCity, setWeatherNameCity] = useState("")
	const [weatherDaily, setWeatherDaily] = useState({})
	const [coord, setCoord] = useState({})
	const { lat, lon } = coord
	
	useEffect(() => {
		//Función que ejecuta la consulta del clima
		const getWeatherCurrent = async () => {
			if (!cityRequired) return null
			try {
				const urlWeatherCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityRequired},AR&appid=${API_KEY_1}&units=metric&lang=es`
				console.log(urlWeatherCurrent)

				const dataWeatherCurrent = await axios.get(urlWeatherCurrent)
				const { coord, name } = dataWeatherCurrent.data
				const { lat, lon } = coord
				setWeatherNameCity(name)
				setCoord({ lat, lon })

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
				setResponseStatus(true)
				setViewSpinner(true)
			} catch (error) {
				setViewSpinner(false)
				setResponseStatus(false)				
				setCityRequired("")
				setWeatherNameCity("")
				setWeatherDaily({})
				console.log(error.message)
			}
		}
		getWeatherCurrent()
	}, [cityRequired])

	return (
		<WeatherContext.Provider
			value={{
				setCityRequired,
				setWeatherDaily,
				setWeatherNameCity,			
				setViewSpinner,
				setRefresh,
				refresh, 
				responseStatus,
				viewSpinner,			
				cityRequired,
				weatherDaily,
				weatherNameCity,
				lat,
				lon,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider
