/* Global Variables */
const geoNameUserName = "fabcgn"


/* Function to get the current temperature by ZIP Code*/
getLocation = async (city) => {
    const res = await fetch("http://api.geonames.org/geoCodeAddressJSON?q="+city+"&username="+geoNameUserName)
    try {
        const place = await res.json();
        console.log(place)
        return place;
    } catch(error){
        console.log("ERROR",error)
    }
}

getLocation("Cologne")