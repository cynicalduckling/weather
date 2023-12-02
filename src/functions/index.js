import axios from "axios";

export const getGeoCode = (location) => {
    return axios.get("https://api.openweathermap.org/geo/1.0/direct", { params: { q: location, limit: 1, APPID: import.meta.env.VITE_OPENWEATHER_KEY } })
}

export const currentWeatherCall = ({ lat, lon }) => {
    return axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: lat,
            lon: lon,
            units: "metric",
            APPID: import.meta.env.VITE_OPENWEATHER_KEY
        }
    })
}

export const currentWeatherForecast = ({ lat, lon }) => {
    return axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
            lat: lat,
            lon: lon,
            units: "metric",
            APPID: import.meta.env.VITE_OPENWEATHER_KEY
        }
    })
}

