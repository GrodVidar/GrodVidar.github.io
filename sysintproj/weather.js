const weatherDiv = document.getElementById('weatherP');

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?id=2673730&APPID=b59bef2ad5a1d58ea369389b3a449fa8&units=metric"

fetch(weatherUrl)
    .then(weatherResp => weatherResp.json())
        .then(weatherData =>
        {
            var weatherString = "Temperature is: " + weatherData.main.temp;
            //console.log (weatherData.main.temp);
            weatherDiv.innerHTML = weatherString;

            var iconInfo = weatherData.weather[0].icon;

            switch(iconInfo)
            {
                case "01d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/01d.png";
                    break;
                case "02d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/02d.png";
                    break;
                case "03d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/03d.png";
                    break;
                case "04d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/04d.png";
                    break;
                case "09d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/09d.png";
                    break;
                case "10d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/10d.png";
                    break;
                case "11d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/11d.png";
                    break;
                case "13d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/13d.png";
                    break;
                case "50d":
                    document.getElementById("iconImg").src = "http://openweathermap.org/img/w/50d.png";
                    break;
                default:
                    document.getElementById("iconImg").src = "http://picresize.com/images/rsz_5cd7e7b4e8d9c.png";
            }
        })
