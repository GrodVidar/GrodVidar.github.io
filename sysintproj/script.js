//Global Variables
const mainDiv = document.getElementById("mainDiv");
const hpKey = "4ac1f1eb94344e009c98b323a4f4a2af";
const slKey = "2fddd8be222741dca106f37a60e159f7";
var hpurl;


//function that first gets a metro-station-name from user, then gets information from SLs-APIs, then prints this out on the HTML.
function setUrl()
{
    mainDiv.innerHTML = null;
    //we take in the input from the user and uses this in the url on line 12
    var g_station = document.getElementById('station').value;
    hpurl = "https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/typeahead.json?key="+ hpKey +"&searchstring=" + g_station +"&stationsonly=True&maxresults=1";
    fetch(hpurl)
        .then(response => response.json())
            .then(data =>
            {
                //we get siteId from the earlier API and use it to find the right station
                var key = data.ResponseData[0].SiteId;
                var slurl = "https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key="+ slKey +"&siteid="+ key +"&timewindow=20";
                fetch(slurl)
                    .then((resp) => resp.json())
                        .then(function(data)
                        {
                            let line = data.ResponseData.Metros;
                            return line.map(function(trainobj)
                        {
                            mainDiv.innerHTML += `${trainobj.GroupOfLine}: `;
                            mainDiv.innerHTML += `${trainobj.LineNumber} mot `;
                            mainDiv.innerHTML += `${trainobj.Destination} kommer om `;
                            mainDiv.innerHTML += `${trainobj.DisplayTime} <br>`;
                        })
                    })

            })
}
