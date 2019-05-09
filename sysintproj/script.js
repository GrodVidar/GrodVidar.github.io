const mainDiv = document.getElementById("mainDiv");
const hpKey = "4ac1f1eb94344e009c98b323a4f4a2af";
const slKey = "2fddd8be222741dca106f37a60e159f7";
var hpurl;
var slurl;

function setUrl()
{
    mainDiv.innerHTML = null;
    var g_station = document.getElementById('station').value;
    hpurl = "https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/typeahead.json?key="+ hpKey +"&searchstring=" + g_station +"&stationsonly=True&maxresults=1";
    console.log("url: " + hpurl);
    fetch(hpurl)
        .then(response => response.json())
            .then(data =>
            {
                var key = data.ResponseData[0].SiteId;
                //console.log(key);
                slurl = "https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key="+ slKey +"&siteid="+ key +"&timewindow=20";
                console.log(slurl);
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
