
function aboutMe() {
    document.getElementById("container1").style.display = "block"
    document.getElementById("container2").style.display = "none"
    document.getElementById("container3").style.display = "none"
    document.getElementById("container4").style.display = "none"
}

function portfolio() {
    document.getElementById("container1").style.display = "none"
    document.getElementById("container2").style.display = "block"
    document.getElementById("container3").style.display = "none"
    document.getElementById("container4").style.display = "none"
}

function skill() {
    document.getElementById("container1").style.display = "none"
    document.getElementById("container2").style.display = "none"
    document.getElementById("container3").style.display = "block"
    document.getElementById("container4").style.display = "none"
}

function exp() {
    document.getElementById("container1").style.display = "none"
    document.getElementById("container2").style.display = "none"
    document.getElementById("container3").style.display = "none"
    document.getElementById("container4").style.display = "block"
}

/*
document.getElementById("container1").onclick = function() { 
  
    document.getElementById("circle").style.display = "none"; 

} 

document.getElementById("rounded").onclick = function() { 

    document.getElementById("rounded").style.display = "none"; 

} 

document.getElementById("square").onclick = function() { 

    document.getElementById("square").style.display = "none"; 

} 

var messageDisplay = document.querySelector("#message");
var inc=0;

function pollYes() {
	messageDisplay.textContent = "Merci beaucoup!";
	document.getElementById('feedback').style.display = "block";
}

function pollNo() {
	messageDisplay.textContent = "Merci pour votre réponse! ";
	document.getElementById('feedback').style.display = "block";
}

function submitComm()
{
     document.getElementById('feedback').style.display = "none";
     document.feedbackForm.submitComm()