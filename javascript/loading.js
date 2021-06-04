//JavaScript Document

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 50);
}

function showPage() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("Start").style.display = "block";
}