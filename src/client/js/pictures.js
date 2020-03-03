/* Global Variables */
const pixabayApiKey = "15458697-86a1b8fb3157401dfeb55f13a"

/* Function to get the current temperature by ZIP Code*/
getImage = async (city) => {
    const res = await fetch("https://pixabay.com/api/?key="+pixabayApiKey+"&q="+city+"&image_type=photo")
    try {
        const picture = await res.json();
        console.log(picture)
        return picture;
    } catch(error){
        console.log("ERROR",error)
    }
}

getImage("Köln")

