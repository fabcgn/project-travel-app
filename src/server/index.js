const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

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
app.listen(8080, function () {
    console.log('Example app listening on port 8080! Go to http://localhost:8080/')
})

module.exports = app;