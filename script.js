

window.onscroll = function() {
    let header = document.getElementById('header');
    let headerLinks = header.querySelectorAll('.header-links')
    let top = window.scrollY;
    if (top >= 115) {
        header.style.background = "rgb(108, 168, 202)";
        for (let item of headerLinks) {
            item.children[0].style.color = "white";
        }
    } else {
        header.style.background = "";
        for (let item of headerLinks) {
            item.children[0].style.color = "#3c3c3c";
        }
    } 
}

const container = document.getElementById('plane');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const scrollArea = 2800 - windowHeight;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || window.scrollTop;
    const scrollPercent = scrollTop/scrollArea || 0;
    const plane = document.getElementsByClassName('plane-pic')[0];

    plane.style.marginLeft = scrollPercent*window.innerWidth + 'px';
});

