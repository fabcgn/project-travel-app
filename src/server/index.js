const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require("node-fetch");


app.use(cors())
app.use(express.static('dist'))

app.use(bodyParser.urlencoded({
    extended: true
})
);
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
    console.log('Example app listening on port '+port+'! Go to http://localhost:'+port+'/')
})

// consts for the API
const postRequest = './handle';
const geoNames = 'api.geonames.org/postalCodeSearchJSON?';
const darkSky = 'api.darksky.net/forecast';
const pixabayApi = 'pixabay.com/api';
let projectData = {}; 


// API for DarkSky
const darkskyApiKey = "3986942eeca21b41228cea69abf48866"

const getWeather = async (lat,lng, time) => {
    const res = await fetch("https://api.darksky.net/forecast/3986942eeca21b41228cea69abf48866/10,50,1583346094")
    try {
        const weather = await res.json();
        console.log(weather)
        return weather;
    } catch(error){
        console.log("ERROR",error)
    }
}

const test = async () => {
    const res = await fetch ("http://dummy.restapiexample.com/api/v1/employee/5")
    .then(res => res.json())
}


// Post Route for darkSky API
app.get("/weather", async (req, res) => {
    const dog = await fetch ("https://api.darksky.net/forecast/3986942eeca21b41228cea69abf48866/10,50,1583346094")
    try {
        res.json(dog);
    } catch (error) {
        console.log("ERROR",error)
    }
   });



   // https://api.darksky.net/forecast/3986942eeca21b41228cea69abf48866/10,50,1583346094
/* 
Global Variables
const darkskyApiKey = "3986942eeca21b41228cea69abf48866"

Function to get the Latitute and Longitude from a City Name
export const getWeather = async (lat,lng, time) => {
    const res = await fetch("https://api.darksky.net/forecast/"+darkskyApiKey+"/"+lat+","+lng+","+time)
    try {
        const weather = await res.json();
        console.log(weather)
        return weather;
    } catch(error){
        console.log("ERROR",error)
    }
}

getWeather(53,10,1583273742)
*/