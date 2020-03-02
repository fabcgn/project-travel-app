/* Global Variables */
const geoNameUserName = "fabcgn"


/* Function to get the current temperature by ZIP Code*/
getLocation = async (city) => {
    const res = await fetch("http://api.geonames.org/postalCodeSearchJSON?placename=k%C3%B6ln&maxRows=10&username="+geoNameUserName)
    try {
        const place = await res.json();
        console.log(place)
        return place;
    } catch(error){
        console.log("ERROR",error)
    }
}

getLocation("Köln")

