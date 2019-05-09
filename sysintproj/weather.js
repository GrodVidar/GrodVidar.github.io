const weatherDiv = document.getElementById('weatherDiv');

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=2673730&APPID=b59bef2ad5a1d58ea369389b3a449fa8&units=metric"

fetch(weatherUrl)
    .then(weatherResp => weatherResp.json())
        .then(weatherData =>
        {
            console.log (weatherData.main.temp);
            weatherDiv.innerHTML = `${weatherData.main.temp} degrees in Celsius in Stockholm`;
        })
