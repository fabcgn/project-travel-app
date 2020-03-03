import { getLatLng } from './places'
import { changeImageBySearchterm } from './pictures'
import { requestWeather } from './weather'


export const start = async (city) => {
    const latLng = await getLatLng(city)
    console.log(latLng.lat) //TODO: Work with this thing to get the weather from server.js
    changeImageBySearchterm("cityPic",city)
}
