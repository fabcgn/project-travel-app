const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios').default;
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


// Post Route for darkSky API
app.post("/weather", (req, res) => {
    console.log("----")
    console.log(req.query)
    console.log("----")
    const lat = req.query.lat
    const lng = req.query.lng
    const time = req.query.time
    axios({
        method: "get",
        url: `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng},${time}?exclude=minutly,hourly,alerts,flags`
    })
        .then(function (response) {
            console.log('RESPONSE', response.data.daily);
            res.json(response.data.daily)
        })
        .catch(error => {
            console.log('ERROR', error)
            res.send(error)
        })
})
