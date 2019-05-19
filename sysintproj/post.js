//Global Variables
const postUrl = "https://5cd130b0d4a78300147be599.mockapi.io/Info";
const postLoc = "https://5cd130b0d4a78300147be599.mockapi.io/Location"

//Checking if user browser supports geolocation, to then send it to API >:)
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(postPosition);
}
else {
    {
        console.log("Geolocation is not supported by this browser!");
    }
}


//function that is called in former if-statement
function postPosition(position)
{
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var posData = {lat: lat, long: long};

    fetch(postLoc,
    {
        method: 'post',
        headers:
        {
             'Accept' : 'application/json, text/plain, */*',
             'Content-Type' : 'application/json'
        },
        body : JSON.stringify(posData)
    })
}


//Function that is called if the user submits their information.
function postInfo()
{
    var frm = document.getElementById("postForm");
    var genders = document.getElementsByName("gender");
    var userMail = document.getElementById("userMail").value;
    var userName = document.getElementById("userName").value;
    var selectedGender;
    //loop through the three options to see wich one is selected
    for(var i = 0; i < genders.length; i++)
    {
        if(genders[i].checked)
        selectedGender = genders[i].value;
    }
    if(userName !== "" && userMail !== "" && selectedGender.indexOf("sex")== -1)
    {    //make the input "Json-friendly"
        var data = {name: userName, email: userMail, sex: selectedGender};

        fetch(postUrl,
            {
                method: 'post',
                headers:
                {
                    'Accept' : 'application/json, text/plain, */*',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
    .then(postRes => postRes.json())
    }
    //makes the form reset and clears all inputs.
    frm.reset();
    //return false to stop the site from refreshing
    return false;
}
