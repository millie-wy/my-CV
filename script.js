window.addEventListener('scroll', onScroll);

function onScroll() {
    updateHeaderColor();
    updatePlanePosition();
}

function updateHeaderColor() {
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

function updatePlanePosition() {
    const bg = document.getElementById('section-home');
    const scrollPercent = Math.min(1, window.scrollY / bg.clientHeight);
    const planeBg = document.getElementById('plane');
    const planePic = document.getElementById('plane-pic');
    let marginPlane = scrollPercent * (planeBg.clientWidth - planePic.clientWidth);
    planePic.style.marginLeft = marginPlane + 'px';
}



