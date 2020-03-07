# Travelweather

This is a project I've done during my Front End Developmer Nanodegree with Udacity.

## Functionality

The App is a simple webapp built with an Express server, webpack and web technologies.
When entering a cityname and date, the app searches for the coordinates of the place, queries a picture of the place and finds the weatherforecast for the trip.
It then conveniently displas it in the frontend again.

## Extended functionality

-   Changing the trip again works also. This clears the data from the first query and stars anew (keeping the values in the form, if you only want to change one or the other one).
-   Countdown. The result also shows prominently, how many days ahead the trip is.
-   When Pixabay does not offer any picture results, a default image is shown
-   Every query shows an other random picture that matches the city name

# Screens

![alt landing Page](https://i.ibb.co/M8KVnXG/Screenshot-2020-03-07-at-14-53-19.png "Landing Screen")
![alt Weather Page](https://i.ibb.co/M8KVnXG/Screenshot-2020-03-07-at-14-53-19.png "Weather Screen")

# Installation

run `npm install` to install all dependencies.

add a `.env` file in the root directory and paste die API keys:
e.g.:

```
PIXABAY_API_KEY=*******-*********
DARKSKY_API_KEY=************************
```

run `test` for the automated tests (server has to be not initiated yet)

run `start` for kicking off the express server

run `build-prod` to see it in pruction mode (service workers enables, js and css minified)

run `build-dev` for a live server version for debugging.
