window.addEventListener('load', main);
window.addEventListener('scroll', onScroll);

/** Functions to be run when page loads  */
function main() { 
    shortenDescriptions();
    addEventListeners(); 
}

/** Functions to be run according to scrollbar's movement */
function onScroll() {
    updateHeaderColor();
    updatePlanePosition();
}

/** Onclick function for buttons */
function addEventListeners() { 
    const menuBtn = document.getElementById('hamburger-m');
    menuBtn.onclick = toggleMenu;

    const readBtns = document.querySelectorAll('.readmore-button');
    readBtns.forEach(readBtn => {
        readBtn.addEventListener('click', toggleDescription);
    });

    const menuItems = document.querySelectorAll('.t-header-links');
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', closeToggleMenu);
    })
}

/** Render header's color on scroll */
function updateHeaderColor() {
    let header = document.getElementById('header');
    let toggleMenu = document.getElementById('toggle-menu');
    let headerLinks = header.querySelectorAll('.header-links')
    let hamburgerMenu = header.querySelector('#hamburger-m')
    let top = window.scrollY;
    if (top >= 115 || toggleMenu.style.height === "15rem") {
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

/** Display toggle menu on click (for mobile devices with 600px width or below) */
function toggleMenu() {
    let toggleMenu = document.getElementById('toggle-menu');
    let toggleMenuList = document.getElementById('toggle-menu-list');
    let menuBtn = document.getElementById('hamburger-m');
    if (toggleMenu.style.height === "0%") {
        toggleMenu.style.height = "15rem";
        setTimeout(function() {toggleMenuList.classList = "flex-col flex"}, 300);
        menuBtn.classList = "absolute fas fa-times";
    } else {
        closeToggleMenu();
    }
}

/** Hide toggle menu */
function closeToggleMenu() {
    let toggleMenu = document.getElementById('toggle-menu');
    let toggleMenuList = document.getElementById('toggle-menu-list');
    let menuBtn = document.getElementById('hamburger-m');
    toggleMenu.style.height = "0%";
    toggleMenuList.classList = "none";
    menuBtn.classList = "absolute fas fa-bars";
}

/** Adjust plane left-margin on scroll */ 
function updatePlanePosition() {
    const bg = document.getElementById('section-home');
    const scrollPercent = Math.min(1, window.scrollY / bg.clientHeight);
    const planeBg = document.getElementById('plane');
    const planePic = document.getElementById('plane-pic');
    let marginPlane = scrollPercent * (planeBg.clientWidth - planePic.clientWidth);
    planePic.style.marginLeft = marginPlane + 'px';
}

/** Set max character length and inject html for hidding extra text in the 'toggleDescription' function */
function shortenDescriptions() { 
    let noOfCharac = 80;
    let descriptions = document.querySelectorAll('.portfo-description');
    descriptions.forEach(description => {
        if (description.textContent.length < noOfCharac) {
            description.nextElementSibling.style.display = "none"; // hide "read more" button
        } else {
            let displayText = description.textContent.slice(0,noOfCharac);
            let moreText = description.textContent.slice(noOfCharac);
            description.innerHTML = displayText + '<span class="dots">...</span><span class="moretext none">' + moreText + '</span>';
        }
    })
}

/**
 * Display and hide hidden content and render buttons's text content on click 
 * @param {Event} event // pointer event for the specific button
 */
function toggleDescription(event) {
    let readBtn = event.target;
    let cardBody = event.target.parentElement;
    let textToHide = cardBody.getElementsByClassName('moretext').item(0);
    let dots = cardBody.getElementsByClassName('dots').item(0);
    
    if (textToHide.classList.contains('none')) {
        textToHide.classList.remove('none');
        dots.classList.add('none');
        readBtn.textContent = 'Read less ⇧';
    } else {
        textToHide.classList.add('none');
        dots.classList.remove('none');
        readBtn.textContent = 'Read more ⇩';
    }
}
