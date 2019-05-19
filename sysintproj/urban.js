//Function that is called when user inputs anything in the UrbanDictionary part of the HTML
//Takes input from user then gets information from UD.
function searchUrban()
{
    var searchWord = document.getElementById('searchString').value;
    const urbanDivider = document.getElementById('urbanMain');

    var urbanUrl = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+ searchWord;

    fetch(urbanUrl,
    {
        method: "GET",
        headers:
        {
            'X-rapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
            'X-RapidAPI-Key' : 'fce2bb9194msh903b399461e1542p109330jsn79fbed1ea6f9'
        },

    })
    .then(urbanResp => urbanResp.json())
    .then(urbanInfo =>
    {
        var urbanString = urbanInfo.list[0].definition;
        //links to other words in UD starts with '[' and ends with ']' with use of regex we remove these.
        urbanString = urbanString.replace(/\[/g,'');
        urbanString = urbanString.replace(/\]/g,'');
        urbanDivider.innerHTML = `About ${searchWord}: ${urbanString}`;
    })

    };
