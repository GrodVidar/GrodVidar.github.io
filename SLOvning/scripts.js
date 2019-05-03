var uri = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=2fddd8be222741dca106f37a60e159f7&siteid=9186&timewindow=40";

const info = document.getElementById('root');

fetch(uri)
.then((resp)=>resp.json())
.then(function(data)
{
    let line = data.ResponseData.Metros;
    return line.map(function(trainobj)
{
    info.innerHTML += `${trainobj.GroupOfLine}: `;
    info.innerHTML += `${trainobj.LineNumber} mot `;
    info.innerHTML += `${trainobj.Destination} kommer om `;
    info.innerHTML += `${trainobj.DisplayTime} `;
    if(trainobj.Deviations != null)
    {
        trainobj.Deviations.forEach(foo=>
        {
            const bar = document.createElement('strong');
            //info.innerHTML += `HEJ! :)`;
            bar.textContent = foo.Text;
            info.appendChild(bar);
            info.innerHTML += `<br>`;
            //info.innerHTML += `${trainobj.Deviations[0].Text}<br>`;
        })
    }
    else
    {
        info.innerHTML += `<br>`
    }
})
})
