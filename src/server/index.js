const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios'); // https://github.com/laicuRoot/Travel-App-Website/blob/master/src/server/server.js


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

// API for DarkSky
const darkSkyApi = async (key, latitude, long, time) => {
    const res = await fetch(`https://api.darksky.net/forecast/${key}/${latitude},${long},${time}`)
    try {
        const weather = await res.json();
        console.log(weather)
        return weather;
    } catch (error) {
        console.log("ERROR",error)

    }
}
const darkskyApiKey = process.env.DARKSKY_API_KEY



// Post Route for Weather API
app.post("/weather", async (req, res) => {
    res = await darkSkyApi(darkskyApiKey, req.query.lat, req.lng, req.query.time)
    return res
}
)


module.exports = app;

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