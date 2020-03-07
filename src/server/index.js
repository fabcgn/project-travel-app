const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

app.use(cors())
app.use(express.static('dist'))
app.use(express.urlencoded());

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
    console.log('Example app listening on port ' + port + '! Go to http://localhost:' + port + '/')
})

// API for DarkSky
const darkskyApiKey = process.env.DARKSKY_API_KEY

app.post('/darkSky', async (req, res) => {
    console.log(req.body)
    const url = `https://api.darksky.net/forecast/${darkskyApiKey}/${req.body.lat},${req.body.lng},${req.body.time}`
    console.log(url)
    const data = await fetch(url);
    const weatherData = await data.json();
    const objAPI = {
        tempHigh: Math.round(weatherData.daily.data[0].temperatureHigh),
        tempLow: Math.round(weatherData.daily.data[0].temperatureLow),
        summary: weatherData.daily.data[0].summary,
    }
    console.log(objAPI);
    res.send(objAPI);
})

module.exports = app