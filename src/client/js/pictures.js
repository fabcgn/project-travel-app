/* Global Variables */
const pixabayApiKey = "15458697-86a1b8fb3157401dfeb55f13a"

/* Function to get the current temperature by ZIP Code*/
getImage = async (city) => {
    const res = await fetch("https://pixabay.com/api/?key="+pixabayApiKey+"&q="+city+"&image_type=photo")
    try {
        const picture = await res.json();
        console.log(picture.hits[0].webformatURL)
        console.log(picture.hits[0])
        return picture.hits[0];
    } catch(error){
        console.log("ERROR",error)
    }
}

getImage("New York")

