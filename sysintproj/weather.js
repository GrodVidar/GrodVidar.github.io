//Global Variables
const weatherDiv = document.getElementById('weatherP');
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?id=2673730&APPID=b59bef2ad5a1d58ea369389b3a449fa8&units=metric"

//fetching information from API.
fetch(weatherUrl)
    .then(weatherResp => weatherResp.json())
        .then(weatherData =>
        {
            //defines weatherString with the current temperature
            var weatherString = "Temperature is: " + weatherData.main.temp;
            weatherDiv.innerHTML = weatherString;
            //fetches the icon-string
            var iconInfo = weatherData.weather[0].icon;
            //we check the value of the string and find the matching from https://openweathermap.org/weather-conditions
            //Since 03, 04, 09, 10, 11, 13 and 50 uses the same icon during night and day, we link them to the same icon
            switch(iconInfo)
            {
                case "01d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/01d.png";
                    break;
                case "02d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/02d.png";
                    break;
                case "01n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/01n.png";
                    break;
                case "02n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/02n.png";
                    break;
                case "03d":
                case "03n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/03d.png";
                    break;
                case "04d":
                case "04n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/04d.png";
                    break;
                case "09d":
                case "09n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/09d.png";
                    break;
                case "10d":
                case "10n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/10d.png";
                    break;
                case "11d":
                case "11n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/11d.png";
                    break;
                case "13d":
                case "13n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/13d.png";
                    break;
                case "50d":
                case "50n":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/50d.png";
                    break;
                default:
                    document.getElementById("iconImg").src = "https://i.imgur.com/5DdFi4T.png";
            }
        })
