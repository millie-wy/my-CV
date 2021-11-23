

window.onscroll = function() {
    let header = document.getElementById('header');
    let headerLinks = header.querySelector('.header-links');
    console.log(headerLinks)
    let top = window.scrollY;
    if (top >= 115) {
        header.style.background = "rgb(108, 168, 202)";
        for (const item of headerLinks.children) {
            item.style.color = "white";
        }
    } else {
        header.style.background = "";
        for (const item of headerLinks.children) {
            item.style.color = "#3c3c3c";
        }
    }

} 

