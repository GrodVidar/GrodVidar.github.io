//Global Variables
const factUrl = "https://cors-anywhere.herokuapp.com/https://randomuselessfact.appspot.com/random.json?language=en";
var factmini = document.getElementById('factmini');

//Function gets called when user presses "Get Random Fact!" gets random fact, then prints it.
function getFact()
{
    fetch(factUrl)
        .then(factresp => factresp.json())
            .then(factData =>
            {
                factmini.innerHTML = factData.text;
            })
}
