/* Global Variables */
const geoNameUserName = "fabcgn"


/* Function to get the current temperature by ZIP Code*/
getLatLng = async (city) => {
    const res = await fetch("http://api.geonames.org/postalCodeSearchJSON?placename=k%C3%B6ln&maxRows=10&username="+geoNameUserName)
    try {
        const place = await res.json();
        console.log(place.postalCodes[0])
        console.log("Lat="+place.postalCodes[0].lat)
        console.log("Lng="+place.postalCodes[0].lng)
        console.log("CountryCode="+place.postalCodes[0].countryCode)
        return place.postalCodes[0];
    } catch(error){
        console.log("ERROR",error)
    }
}

getLatLng("Köln")

