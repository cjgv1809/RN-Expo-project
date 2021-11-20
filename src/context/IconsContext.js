import React, { createContext, useState, useContext, useEffect } from "react"
import { WeatherContext } from "./WeatherContext"
import clear_d from "../../assets/iconsWeather/clear_d.png"
import clear_n from "../../assets/iconsWeather/clear_n.png"
import few_clouds_d from "../../assets/iconsWeather/few_clouds_d.png"
import few_clouds_n from "../../assets/iconsWeather/few_clouds_n.png"
import scattered_clouds from "../../assets/iconsWeather/scattered_clouds.png"
import shower_rain from "../../assets/iconsWeather/shower_rain.png"
import rain_d from "../../assets/iconsWeather/rain_d.png"
import rain_n from "../../assets/iconsWeather/rain_n.png"
import thunderstorm from "../../assets/iconsWeather/thunderstorm.png"
import snow from "../../assets/iconsWeather/snow.png"
import mist_d from "../../assets/iconsWeather/mist_d.png"
import mist_n from "../../assets/iconsWeather/mist_n.png"
import anagrama from "../../assets/anagrama.png"

export const IconsContext = createContext()

const initialIcon = anagrama
const ICONS_WEATHER = {
	"01d": clear_d,
	"01n": clear_n,
	"02d": few_clouds_d,
	"02n": few_clouds_n,
	"03d": scattered_clouds,
	"03n": scattered_clouds,
	"04d": scattered_clouds,
	"04n": scattered_clouds,
	"09d": shower_rain,
	"09n": shower_rain,
	"10d": rain_d,
	"10n": rain_n,
	"11d": thunderstorm,
	"11n": thunderstorm,
	"13d": snow,
	"13n": snow,
	"50d": mist_d,
	"50n": mist_n,
}

const IconsProvider = ({ children }) => {
	const [iconWeather, setIconWeather] = useState(initialIcon)
	const { weatherDaily } = useContext(WeatherContext)
	const { icon } = weatherDaily

	useEffect(() => {
		setIconWeather(iconWeatherReplaced)
	}, [icon])

	const iconWeatherReplaced = ICONS_WEATHER[icon]

	return (
		<IconsContext.Provider value={{ iconWeather, ICONS_WEATHER }}>
			{children}
		</IconsContext.Provider>
	)
}

export default IconsProvider
