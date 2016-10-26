function navFunction() {
    var Bob = document.getElementById("NavId");
    if (Bob.className === "navbar") {
        Bob.className += " responsive";
    } else {
        Bob.className = "navbar";
    }
}