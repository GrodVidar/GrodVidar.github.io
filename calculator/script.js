
$(document).ready(function() {
  $('.writable').keyup(function() {
    calculate();
  });
  var fs = document.getElementById('file-select');
  fs.addEventListener('change', function() {
    //const fileList = event.target.files;
    var fr = new FileReader();
    fr.onload=function() {
      const fullText = fr.result.replace(/(\r\n|\n|\r)/gm, "");
      const values = fullText.split(',');
      setValues(values);
      calculate();
    }
    fr.readAsText(this.files[0]);
  //  console.log(fileList);
  })

  $("#loadButton").on("click", function () {
      $("#file-select").trigger("click");
    });
});

function saveValues() {
  var nc = document.getElementById('newCost').value;
  var nr = document.getElementById('newRent').value;
  var ng = document.getElementById('newGarage').value;
  var le = document.getElementById('loanEstimate').value;
  var i = document.getElementById('interest').value;


  if(nc == '' || nr == '') {return;}

  window.open('data:text/csv;charset=utf-8,' + nc + ',' + nr + ',' + ng + ',' + le + ',' + i);
}


function setValues(values) {
  document.getElementById('newCost').value = values[0];
  document.getElementById('newRent').value = values[1];
  document.getElementById('newGarage').value = values[2];
  document.getElementById('loanEstimate').value = values[3];
  document.getElementById('interest').value = values[4];
}

function calculate() {
  var newCost = parseFloat(document.getElementById('newCost').value);
  if(isNaN(newCost)) { newCost = 0;}
  var newRent = parseFloat(document.getElementById('newRent').value);
  if(isNaN(newRent)) { newRent = 0;}
  var newGarage = parseFloat(document.getElementById('newGarage').value);
  if(isNaN(newGarage)) { newGarage = 0;}
  var loanEstimate = parseFloat(document.getElementById('loanEstimate').value);
  if(isNaN(loanEstimate)) { loanEstimate = 0;}
  var interest = parseFloat(document.getElementById('interest').value);
  if(isNaN(interest)) { interest = 0;}

  newCost *= 1000000
  loanEstimate *= 1000000


  var interestCostPre = document.getElementById('interestCostPre');
  var interestCostPost = document.getElementById('interestCostPost');
  var totalCostPre = document.getElementById('totalCostPre');
  var totalCostPost = document.getElementById('totalCostPost');
  var totalCostPost = document.getElementById('totalCostPost');
  var cheaperThan = document.getElementById('cheaperThan');
  var moneyLeft = document.getElementById('moneyLeft');


  var interestCostPreValue = Math.round((loanEstimate * (interest/100)) / 12);
  var interestCostPostValue = Math.round(interestCostPreValue * 0.7);
  var totalCostPreValue = Math.round(newRent + newGarage + interestCostPreValue);
  var totalCostPostValue = Math.round(newRent + newGarage + interestCostPostValue);
  var cheaperThanValue = Math.round(10117 - totalCostPostValue);
  var moneyLeftValue = 3864000 + loanEstimate - newCost;


  interestCostPre.value = interestCostPreValue
  interestCostPost.value = interestCostPostValue
  totalCostPre.value = totalCostPreValue
  totalCostPost.value = totalCostPostValue
  cheaperThan.value = cheaperThanValue
  moneyLeft.value = moneyLeftValue
}
