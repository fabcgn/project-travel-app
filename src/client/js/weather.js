/* Global Variables */

/* export const getWeather = async (data) => {
    const res = await fetch(`http://localhost:8080/weather?lat=${data.lat}&lng=${data.lng}&time=${data.time}`, {
        method: 'POST',
        headers: {
            'Content-Type':'application.json'
        }
    })
    const updateUI = (result) => {
        console.log(result)
        document.getElementById("weather").innerHTML = JSON.stringify(result)  //TODO: Make this work
    }
    updateUI(res.body)
} */




// New Approach
//    DARKSKY API

export const getWeather = async (apiData) => {

    //const unixDate = apiData.time
    //const lati = apiData.lat;
    //const long = apiData.lng;
    //const data = `https://api.darksky.net/forecast/3986942eeca21b41228cea69abf48866/${lati},${long},${unixDate}`
    const getData = await fetch('http://localhost:8080/darkSky', {
        method: 'POST',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiData)
      })
      const data = await getData.json();
      // console.log(data)
      return data
}

// getWeather({ lat: '50', lng: '10', time: '1585180800' })
