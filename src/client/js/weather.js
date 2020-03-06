/* Global Variables */

export const getWeather = async (data) => {
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
}
getWeather({ lat: '52.5179', lng: '13.3759', time: '1585180800' })