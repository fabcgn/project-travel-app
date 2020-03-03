import { getLatLng } from './places'
import { changeImageBySearchterm } from './pictures'


export const start = (city) => {
    getLatLng(city),
    changeImageBySearchterm("cityPic",city)
}
