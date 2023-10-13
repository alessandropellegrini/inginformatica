// Used to toggle the menu on small screens when clicking on the menu button
function menuToggle() {
    var x = document.getElementById("navMenu");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// // Close the dropdown if the user clicks outside of it
window.onmouseout = function(event) {
    var x = document.getElementById("navMenu");
    x.style.display = "none";
}