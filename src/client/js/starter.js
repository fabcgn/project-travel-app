import { getLatLng } from './places'
import { changeImageBySearchterm } from './pictures'
import { getWeather } from './weather'
import { getUnixTimeCode } from './dateCalc'

const submitButton = document.getElementById("requestButton")
export const listener = submitButton.addEventListener('click',function(event){
    event.preventDefault()
    const city = document.getElementById("cityInput").value
    const time = document.getElementById("dateInput").value
    console.log("clicked "+city)
    start(city, time)
})

const start = async (city, time) => {
    const latLng = await getLatLng(city)
    const UnixTime = await getUnixTimeCode(time)
    const weather = await getWeather({"lat": latLng.lat, "lng": latLng.lng, "time": UnixTime})
    console.log(weather)
    await changeImageBySearchterm("cityPic",city)
    document.getElementById("city").innerText = `City: ${city}`
    document.getElementById("lat").innerText = `Latitude: ${latLng.lat}`
    document.getElementById("lng").innerText = `Longitude: ${latLng.lng}`
    document.getElementById("country").innerText = `Country: ${latLng.countryCode}`
    document.getElementById("weather").innerText = `Weather: ${JSON.stringify(weather)}`
}

