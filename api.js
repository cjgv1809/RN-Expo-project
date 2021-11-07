import { API_KEY } from "@env"

const fetchWeather = async (query) => {
	const data = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric&lang=es`,
	)
		.then((res) => res.json())
		.catch((err) => console.log(err.message))

	return data
}

export default fetchWeather
