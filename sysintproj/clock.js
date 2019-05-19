const clockDiv = document.getElementById('clockDiv');

const clockurl = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm"
function updateClock()
{
    fetch(clockurl)
        .then(cResp => cResp.json())
            .then(cData =>
                {
                    var fullString = cData.datetime;
                    //The API gives us a string like this: 2019-05-19T22:22:10.390363+02:00, below we find the index of 'T'
                    //and '.' to get the information before and between them.
                    var tPos = fullString.indexOf("T");
                    var dotPos = fullString.indexOf(".");
                    var currentDate = fullString.slice(0,tPos);
                    var currentClock = fullString.slice((tPos+1),dotPos);

                    clockDiv.innerHTML = `Date: ${currentDate}<br>`;
                    clockDiv.innerHTML += `Clock: ${currentClock}`;
                })
    //if this the line below is added, the clock should update each second, but since we're fetching from API, this isn't reliable.
    //setTimeout(updateClock, 1000);
}

updateClock();
