let featureImg = document.getElementById("cityPic").src

const exchangeImg = (frame, image) => {
    setTimeout(() => {
        document.getElementById(frame).src = image
    }, 3000); // TODO: Delete Delay later
    
}   

exchangeImg ("cityPic","/src/client/media/pictures/hiker-918473_640.jpg")

export {exchangeImg}