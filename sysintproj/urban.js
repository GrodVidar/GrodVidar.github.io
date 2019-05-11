
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
        urbanString = urbanString.replace(/\[/g,'');
        urbanString = urbanString.replace(/\]/g,'');
        urbanDivider.innerHTML = `About ${searchWord}: ${urbanString}`;
    })

    };
