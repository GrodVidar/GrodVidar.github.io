const factUrl = "https://cors-anywhere.herokuapp.com/https://randomuselessfact.appspot.com/random.json?language=en";
var factmini = document.getElementById('factmini');

function getFact()
{
    fetch(factUrl)
        .then(factresp => factresp.json())
            .then(factData =>
            {
                //console.log(factData.text);
                factmini.innerHTML = factData.text;
            })
}
