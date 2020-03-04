import { getLatLng } from './places'
import { changeImageBySearchterm } from './pictures'
import { darkSkyAPI } from './weather'


export const start = async (city) => {
    const latLng = await getLatLng(city)
    console.log(latLng.lng) //TODO: Work with this thing to get the weather from server.js
    changeImageBySearchterm("cityPic",city)
    document.getElementById("city").innerText = `City: ${city}`
    document.getElementById("lat").innerText = `Latitude: ${latLng.lat}`
    document.getElementById("lng").innerText = `Longitude: ${latLng.lng}`
    document.getElementById("country").innerText = `Country: ${latLng.countryCode}`
    
    // const weather = await requestWeather({lat: 53.5521285714286, lng: 10.0004285714286, countryCode: "DE"}
    // console.log(weather.lng)
}
