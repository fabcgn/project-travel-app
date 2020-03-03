import { start } from './js/starter'
import { getLatLng } from './js/places'
import { changeImageBySearchterm } from './js/pictures'

start("Berlin") // This is called properly and triggers

import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'



/* Make functions globally available via the "Client.*" library */

/* Do I need this?
export {
    changeImageBySearchterm,
    getLatLng,
    start
} 
*/