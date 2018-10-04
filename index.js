function surprise() {
    document.getElementById("surpriseText").innerHTML = "Ta-da!"
}

function alertFunction() {
    alert("This is an alert. How cool!")
}

function response() {
    var response = prompt("Type your response here:");
    document.getElementById("responseText").innerHTML = response;
    document.getElementById("hiddenText").style.visibility = "visible";
    console.log('sup')
}
