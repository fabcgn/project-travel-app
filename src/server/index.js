const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios').default;


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
    console.log('Example app listening on port '+port+'! Go to http://localhost:'+port+'/')
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
        url: `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng},${time}?exclude=minutly,hourly,daily,alerts,flags`
    })
    .then(function (response) {
        console.log('RESPONSE',response.data);
        res.json(response.data)
      })    
    .catch(error=>{
        console.log('ERROR',error)      
        res.send(error)
    })     
   });

   app.get("/testrob", (req, res) => {
       res.send(JSON.parse('{"test": "test"}'))
   })

//http://dummy.restapiexample.com/api/v1/employee/5
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