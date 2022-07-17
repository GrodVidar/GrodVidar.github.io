function checkAnswers() {
    var q1 = document.getElementById('q1').value.toLowerCase();
    var q2 = document.getElementById('q2').value.toLowerCase();
    var q3 = document.getElementById('q3').value.toLowerCase();
    var success = true;
    if(q1 != "barn" && q1 != "ungar") {
        showToast('q1error');
        success = false;
    }
    if(q2 != "katter" && q2 != "katt") {
        showToast('q2error');
        success = false;
    }
    if(q3 != "tatueringar" &&  q3 != "tatureringar" && q3 != "tatuering") {
        showToast('q3error');
        success = false;
    }
    console.log(success);
    if (success) {
        win();
    }
}

function showToast(e) {
    var elem = document.getElementById(e);
    if (elem.style.display == 'block') {
        return;
    }
    else {
        elem.style.display = 'block';
        setTimeout(function() {removeToast(e)}, 3000);
    }
}

function removeToast(e) {
    var elem = document.getElementById(e);
    elem.style.display = 'none';
}

function win() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('problem').style.display = 'none';
    document.getElementById('solution').style.display = 'none';
    document.getElementById('prize').innerText = '2000:- till en TATUERING!!';
    document.getElementById('congrats').style.display = 'block';
    document.body.style.backgroundImage = "url('bg.jpg')";
}

function show(elem) {
    document.getElementById(elem).style.display = 'block';
}

function unshow(elem) {
    document.getElementById(elem).style.display = 'none';
}




setTimeout(function() {show('problem');}, 6000);
setTimeout(function() {unshow('congrats');}, 6000);
setTimeout(function() {show('solution');}, 8000);