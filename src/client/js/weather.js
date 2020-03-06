
export const getWeather = async (apiData) => {
    const getData = await fetch('http://localhost:8080/darkSky', {
        method: 'POST',
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiData)
      })
      const data = await getData.json();
      // console.log(data)
      return data
}