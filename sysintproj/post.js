var postUrl = "https://5cd130b0d4a78300147be599.mockapi.io/Info";


function postInfo()
{
    var genders = document.getElementsByName("gender");
    var userMail = document.getElementById("userMail").value;
    var userName = document.getElementById("userName").value;
    var selectedGender;
    for(var i = 0; i < genders.length; i++)
    {
        if(genders[i].checked)
        selectedGender = genders[i].value;
    }

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
    .then(postRes => console.log(postRes))
}
