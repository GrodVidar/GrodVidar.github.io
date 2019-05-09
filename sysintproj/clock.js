const clockDiv = document.getElementById('clockDiv');

const clockurl = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm"

fetch(clockurl)
    .then(cResp => cResp.json())
        .then(cData =>
        {
            var fullString = cData.datetime;
            //console.log(fullString);
            var tPos = fullString.indexOf("T");
            var dotPos = fullString.indexOf(".");
            //console.log(tPos);
            var currentDate = fullString.slice(0,tPos);
            var currentClock = fullString.slice((tPos+1),dotPos);

            clockDiv.innerHTML = `Date: ${currentDate}<br>`;
            clockDiv.innerHTML += `Clock ${currentClock}`;
        })
