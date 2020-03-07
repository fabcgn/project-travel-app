/* Global Variables */
const pixabayApiKey = "15458697-86a1b8fb3157401dfeb55f13a"

/* Function to get the current temperature by ZIP Code*/
export const imageUrlBySearchterm = async (searchTerm) => {
    const res = await fetch("https://pixabay.com/api/?key=" + pixabayApiKey + "&q=" + searchTerm + "&image_type=photo")
    try {
        const picture = await res.json();
        const randomEntry = Math.floor(Math.random() * picture.hits.length) // chooses a random picture to display
        //console.log(picture.hits[randomEntry])
        const url = picture.hits[randomEntry].webformatURL
        return url;
    } catch (error) {
        const url = "/src/client/media/pictures/hiker-918473_640.jpg"
        console.log("ERROR", error)
        return url
    }
}