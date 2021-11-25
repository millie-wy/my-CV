window.addEventListener('load', main);
window.addEventListener('scroll', onScroll);
window.addEventListener('click', unhideText); ///

function main() { ///
    addEventListeners(); ///
}

function onScroll() {
    updateHeaderColor();
    updatePlanePosition();
}

function addEventListeners() { ///
    ABC(); ///
}

function updateHeaderColor() {
    let header = document.getElementById('header');
    let headerLinks = header.querySelectorAll('.header-links')
    let hamburgerMenu = header.querySelector('#hamburger-m')
    let top = window.scrollY;
    if (top >= 115) {
        header.style.background = "rgb(108, 168, 202)";
        hamburgerMenu.style.color = "white";
        for (let item of headerLinks) {
            item.children[0].style.color = "white";
        }
    } else {
        header.style.background = "";
        hamburgerMenu.style.color = "#3c3c3c";
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



//////

function ABC() { 
    let noOfCharac = 100;
    let descriptions = document.querySelectorAll('.portfo-description');
    descriptions.forEach(description => {
    if (description.textContent.length < noOfCharac) {
        description.nextElementSibling.style.display = "none";
    } else {
        let displayText = description.textContent.slice(0,noOfCharac);
        let moreText = description.textContent.slice(noOfCharac);
        description.innerHTML = `${displayText}<span id="dots">...</span><span id="moretext">${moreText}</span>`;
        let textToHide = document.getElementById('moretext');
        textToHide.classList.add('invisible');
        }
    })
}


 function unhideText() {
    let readBtn = document.getElementById('readmore');
    let noOfCharac = 100;
    let textToHide = document.getElementById('moretext');
    let dots = document.getElementById('dots');

    if (textToHide.textContent.length < noOfCharac + '3') {
         textToHide.classList.remove('invisible');
         dots.classList.add('invisible');
         readBtn.innerHTML = 'Read less <i class="fas fa-angle-up"></i>';
        
         console.log('this is 1:' + textToHide);
         console.log('this is 1:' + dots);
       } else {
         textToHide.classList.add('invisible');
         dots.classList.remove('invisible');
         readBtn.innerHTML = 'Read more <i class="fas fa-angle-down"></i>'
         console.log('this is 2:' + textToHide);
         console.log('this is 2:' + dots);
       }
}