//Global Variables
var qOfTday = document.getElementById("qOfTday");
const quoteUrl = "https://quotes.rest/qod.json";
//Fetches information from API.
    fetch(quoteUrl)
        .then(quoteResp => quoteResp.json())
            .then(quoteData =>
            {
                //prints out the dayly quote on the site.
                qOfTday.innerHTML = `"${quoteData.contents.quotes[0].quote}"`;
            })
