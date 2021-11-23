

window.onscroll = function() {
    let header = document.getElementById('header');
    let headerLinks = header.querySelector('.header-links')
    let headerLink = header.querySelectorAll('.header-links')
    let top = window.scrollY;
    if (top >= 115) {
        header.style.background = "rgb(108, 168, 202)";
        for (let item of headerLink) {
            item.children[0].style.color = "white";
        }
    } else {
        header.style.background = "";
        for (let item of headerLink) {
            item.children[0].style.color = "#3c3c3c";
        }
    } 
}