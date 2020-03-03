/* Global Variables */
const pixabayApiKey = "15458697-86a1b8fb3157401dfeb55f13a"
let featureImg = document.getElementById("cityPic").src

/* Fucntion to exchange any image src by ID */
const exchangeImg = (frame, image) => {
    setTimeout(() => {
        document.getElementById(frame).src = image
    }, 3000); // TODO: Delete Delay later
    
}   

/* Function to get the current temperature by ZIP Code*/
const getImage = async (city) => {
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
exchangeImg ("cityPic","/src/client/media/pictures/hiker-918473_640.jpg")
