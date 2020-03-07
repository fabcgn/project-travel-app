import { getLatLng } from './places'
import { imageUrlBySearchterm } from './pictures'
import { getWeather } from './weather'
import { getUnixTimeCode } from './dateCalc'

const submitButton = document.getElementById("requestButton")
export const listener = submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    const city = document.getElementById("cityInput").value
    const time = document.getElementById("dateInput").value
    console.log("clicked " + city)
    start(city, time)
})

const restartButton = document.getElementById("restartButton")
export const listener2 = restartButton.addEventListener('click', function (event) {
    event.preventDefault()
    trip = {}
    inputCard.classList.remove("hide")
    outputCard.classList.add("hide")
    inputCard.classList.add("card")
    outputCard.classList.remove("card")
})

let trip = {}
const inputCard = document.getElementById("inputCard")
const outputCard = document.getElementById("outputCard")


const start = async (city, time) => {
    const latLng = await getLatLng(city)
    trip.Latitude = latLng.lat
    trip.Longitude = latLng.lng
    trip.Country = latLng.countryCode
    trip.City = city
    trip.unixtime = await getUnixTimeCode(time)
    trip.img = await imageUrlBySearchterm(city)
    const weather = await getWeather({ "lat": latLng.lat, "lng": latLng.lng, "time": trip.unixtime })
    trip.tempMax = weather.tempHigh
    trip.tempMin = weather.tempLow
    trip.weatherSummary = weather.summary
    console.log(trip)
    updateUI()
}

const updateUI = () => {
    document.getElementById("cityPic").src = trip.img
    document.getElementById("cityPic").alt = `Image of ${trip.City}`
    document.getElementById("city").innerText = `${trip.City}`
    document.getElementById("country").innerText = `, ${trip.Country}`
    document.getElementById("weather").innerText = `Between ${trip.tempMin} and ${trip.tempMax} Degrees - ${trip.weatherSummary}`
    inputCard.classList.add("hide")
    outputCard.classList.remove("hide")
    inputCard.classList.remove("card")
    outputCard.classList.add("card")
}
