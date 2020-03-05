import { getLatLng } from './places'
import { changeImageBySearchterm } from './pictures'
import { getWeather } from './weather'

const submitButton = document.getElementById("requestButton")
export const listener = submitButton.addEventListener('click',function(event){
    event.preventDefault()
    const city = document.getElementById("cityInput").value
    console.log("clicked "+city)
    start(city)
}); 

const start = async (city) => {
    const latLng = await getLatLng(city)
    console.log(latLng.lng) //TODO: Work with this thing to get the weather from server.js
    changeImageBySearchterm("cityPic",city)
    document.getElementById("city").innerText = `City: ${city}`
    document.getElementById("lat").innerText = `Latitude: ${latLng.lat}`
    document.getElementById("lng").innerText = `Longitude: ${latLng.lng}`
    document.getElementById("country").innerText = `Country: ${latLng.countryCode}`
    console.log(document.getElementById("dateInput").value)
    await getWeather({"lat": latLng.lat, "lng": latLng.lng, "time": 1583341111})
}