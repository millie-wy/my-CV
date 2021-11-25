window.addEventListener('load', main);
window.addEventListener('scroll', onScroll);

function main() { 
    shortenDescriptions();
    addEventListeners(); 
}

function onScroll() {
    updateHeaderColor();
    updatePlanePosition();
}

function addEventListeners() { 
    const readBtns = document.querySelectorAll('.readmore-button');
    readBtns.forEach(readBtn => {
        readBtn.addEventListener('click', toggleDescription);
    });
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

/**
 * 
 */
function shortenDescriptions() { 
    let noOfCharac = 100;
    let descriptions = document.querySelectorAll('.portfo-description');
    descriptions.forEach(description => {
        if (description.textContent.length < noOfCharac) {
            description.nextElementSibling.style.display = "none"; // hide read more button
        } else {
            let displayText = description.textContent.slice(0,noOfCharac); // not to use innerHTML so it doesnt show html tags
            let moreText = description.textContent.slice(noOfCharac);
            description.innerHTML = displayText + '<span class="dots">...</span><span class="moretext invisible">' + moreText + '</span>';
        }
    })
}

/**
 * 
 * @param {Event} event // pointer event for the specific button
 */
function toggleDescription(event) {
    let readBtn = event.target;
    let cardBody = event.target.parentElement;
    let textToHide = cardBody.getElementsByClassName('moretext').item(0);
    let dots = cardBody.getElementsByClassName('dots').item(0);
    
    if (textToHide.classList.contains('invisible')) {
        textToHide.classList.remove('invisible');
        dots.classList.add('invisible');
        readBtn.textContent = 'Read less ⇧';
    } else {
        textToHide.classList.add('invisible');
        dots.classList.remove('invisible');
        readBtn.textContent = 'Read more ⇩';
    }
}