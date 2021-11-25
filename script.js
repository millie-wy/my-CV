window.addEventListener('scroll', onScroll);
window.addEventListener('click', unhideText);

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

// function unhideText() {
//     let dots = document.querySelectorAll('.dots');
//     let moreText = document.querySelectorAll('.more2');
//     let readMoreButton = document.getElementById('readmore1');

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         moreText.style.display = "inline"    
//     }
// }


let noOfCharac = 100;
let descriptions = document.querySelectorAll('.portfo-description');
descriptions.forEach(description => {
    if (description.textContent.length < noOfCharac) {
        description.nextElementSibling.style.display = "none";
    } else {
        let displayText = description.textContent.slice(0,noOfCharac);
        let moreText = description.textContent.slice(noOfCharac);
        description.innerHTML = "hello";
    }
});

