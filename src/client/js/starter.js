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

const restartButton = document.getElementById("restartButton")
export const listener2 = restartButton.addEventListener('click',function(event){
    event.preventDefault()
    trip = {}
    document.getElementById("input").classList.remove("hide")
    document.getElementById("weatherInfo").classList.add("hide")
})

let trip = {}

const start = async (city, time) => {
    const latLng = await getLatLng(city)
    trip.Latitude = latLng.lat
    trip.Longitude = latLng.lng
    trip.Country = latLng.countryCode
    trip.City = city
    trip.unixtime = await getUnixTimeCode(time)
    trip.img = await imageUrlBySearchterm(city)
    const weather = await getWeather({"lat": latLng.lat, "lng": latLng.lng, "time": trip.unixtime})
    trip.tempMax = weather.tempHigh
    trip.tempMin = weather.tempLow
    trip.weatherSummary = weather.summary
    console.log(trip)
    updateUI()
}

const updateUI = () => {
    document.getElementById("cityPic").src = trip.img
    document.getElementById("cityPic").alt = `Image of ${trip.City}`
    document.getElementById("city").innerText = `City: ${trip.City}`
    document.getElementById("lat").innerText = `Latitude: ${trip.Latitude}`
    document.getElementById("lng").innerText = `Longitude: ${trip.Longitude}`
    document.getElementById("country").innerText = `Country: ${trip.Country}`
    document.getElementById("weather").innerText = `Weather: Between ${trip.tempMin} and ${trip.tempMax} Degree ${trip.weatherSummary}`
    document.getElementById("input").classList.add("hide")
    document.getElementById("weatherInfo").classList.remove("hide")
}
