import { requestWeather } from './weather'

/* Global Variables */
const geoNameUserName = "fabcgn"

/* Function to get the Latitute and Longitude from a City Name*/
export const getLatLng = async (city) => {
    const res = await fetch("http://api.geonames.org/postalCodeSearchJSON?placename="+city+"&maxRows=10&username="+geoNameUserName)
    try {
        const place = await res.json();
        //console.log(place.postalCodes[0])
        //console.log("Lat="+place.postalCodes[0].lat)
        //console.log("Lng="+place.postalCodes[0].lng)
        //console.log("CountryCode="+place.postalCodes[0].countryCode)
        const lat = place.postalCodes[0].lat
        const lng = place.postalCodes[0].lng
        const countryCode = place.postalCodes[0].countryCode
        // console.log({"lat": lat, "lng": lng, "countryCode": countryCode})
        return {"lat": lat, "lng": lng, "countryCode": countryCode};
    } catch(error){
        console.log("ERROR",error)
    }
}