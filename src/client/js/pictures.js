/* Global Variables */
const pixabayApiKey = "15458697-86a1b8fb3157401dfeb55f13a"

/* Fucntion to exchange any image src by ID after delay */
const exchangeImg = async (frame, image, alt, delay) => {
    setTimeout(() => {
        document.getElementById(frame).src = image
        document.getElementById(frame).alt = "Picture of "+alt
    }, delay); // TODO: Delete Delay later   
}   

/* Function to get the current temperature by ZIP Code*/
const changeImageBySearchterm = async (frame, searchTerm) => {
    const res = await fetch("https://pixabay.com/api/?key="+pixabayApiKey+"&q="+searchTerm+"&image_type=photo")
    try {
        const picture = await res.json();
        const randomEntry = Math.floor(Math.random() * picture.hits.length) // chooses a random picture to display
        console.log(picture.hits[randomEntry])
        exchangeImg (frame, picture.hits[randomEntry].webformatURL, searchTerm, 100)
        return "success";
    } catch(error){
        exchangeImg (frame, "/src/client/media/pictures/hiker-918473_640.jpg", 100)
        console.log("ERROR",error)
    }
}

changeImageBySearchterm("cityPic","Cologne")