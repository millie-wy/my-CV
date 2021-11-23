

window.onscroll = function() {
    let header = document.getElementById('header');
    let headerLinks = header.querySelectorAll('header-links');
    let top = window.scrollY;
    if (top >= 115) {
        header.style.background = "rgb(108, 168, 202)";
    } else {
        header.style.background = "";
    }

} 

