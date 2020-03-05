import { start } from './js/starter'
import { getLatLng } from './js/places'
import { changeImageBySearchterm } from './js/pictures'
import { getWeather } from './js/weather'

start("New York") // This is called properly and triggers
const submitButton = document.getElementById("requestButton")
const listener = submitButton.addEventListener('click',function(event){
    alert("I am clicked")
}); 
listener()
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'



/* Do I need this?
export {
    changeImageBySearchterm,
    getLatLng,
    start
} 
*/