/* Global Variables */
const darkskyApiKey = "3986942eeca21b41228cea69abf48866"

/* Function to get the Latitute and Longitude from a City Name*/

export const darkSkyAPI = async (lat, lng, time) => {
    const urlTwo = `http://localhost:8000/darkSky?lat=${lat}&lng=${lng}&time=${time}`;
    return await fetch(urlTwo).then(response => {
        return response.json();
    })
}

/* Function to POST data */

//darkSkyAPI({lat:10,lng:50,time:1583349094})




/* export const requestWeather = async (array) => {
    const res = await fetch ('http://localhost:8080/weather', {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        body: JSON.stringify({array})
    })
    console.log(res)
    return res
}

requestWeather({"lat":53.5521285714286,"lng":10.0004285714286,"countryCode":"DE"}) */

/*
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

getWeather(53,10,1583273742) */