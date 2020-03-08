import { getLatLng } from './places'
import { imageUrlBySearchterm } from './pictures'
import { getWeather } from './weather'
import { getUnixTimeCode, date_diff_indays } from './dateCalc'

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
    objAPI = {}
    inputCard.classList.remove("hide")
    outputCard.classList.add("hide")
    inputCard.classList.add("card")
    outputCard.classList.remove("card")
})

let objAPI = {}
const inputCard = document.getElementById("inputCard")
const outputCard = document.getElementById("outputCard")


const start = async (city, time) => {
    const latLng = await getLatLng(city)
    const Unixtime = await getUnixTimeCode(time)
    const cityImg = await imageUrlBySearchterm(city)
    objAPI.daysToGo = date_diff_indays(time)
    const objAPIserver = await getWeather({ "lat": latLng.lat, "lng": latLng.lng, "time": Unixtime, "city": city, "country": latLng.countryCode, "daysToGo": objAPI.daysToGo, "cityImg": cityImg})
    objAPI = objAPIserver
    console.log(objAPI)
    updateUI()
}

const updateUI = () => {
    document.getElementById("cityPic").src = objAPI.cityImg
    document.getElementById("cityPic").alt = `Image of ${objAPI.city}`
    document.getElementById("city").innerText = `${objAPI.city}`
    document.getElementById("country").innerText = `, ${objAPI.country}`
    document.getElementById("weather").innerText = `Between ${objAPI.tempLow} and ${objAPI.tempHigh} Degrees - ${objAPI.summary}`
    document.getElementById("daysToGo").innerText = `${objAPI.daysToGo}`
    inputCard.classList.add("hide")
    outputCard.classList.remove("hide")
    inputCard.classList.remove("card")
    outputCard.classList.add("card")
}
