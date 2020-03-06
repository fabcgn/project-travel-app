import { getLatLng } from './places'
import { imageUrlBySearchterm } from './pictures'
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

const trip = {}

const start = async (city, time) => {
    const latLng = await getLatLng(city)
    trip.Latitude = latLng.lat
    trip.Longitude = latLng.lng
    trip.Country = latLng.countryCode
    trip.unixtime = await getUnixTimeCode(time)
    trip.img = await imageUrlBySearchterm(city)
    const weather = await getWeather({"lat": latLng.lat, "lng": latLng.lng, "time": trip.unixtime})
    trip.tempMax = weather.tempHigh
    trip.tempMin = weather.tempLow
    trip.weatherSummary = weather.Summary
    document.getElementById("city").innerText = `City: ${city}`
    document.getElementById("lat").innerText = `Latitude: ${latLng.lat}`
    document.getElementById("lng").innerText = `Longitude: ${latLng.lng}`
    document.getElementById("country").innerText = `Country: ${latLng.countryCode}`
    document.getElementById("weather").innerText = `Weather: ${JSON.stringify(weather)}`
    console.log(trip)
}

start ("Cologne", "2020-03-09")

/* To add later again: 
export const exchangeImg = (frame, image, alt, delay) => {
    setTimeout(() => {
        document.getElementById(frame).src = image
        document.getElementById(frame).alt = "Picture of "+alt
    }, delay);
}   
*/