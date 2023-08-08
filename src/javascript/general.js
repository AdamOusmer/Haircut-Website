// Cursor

// Variables Declaration
const cursorDot = document.querySelector('.cursorDot');
const cursorCircle = document.querySelector('.cursorCircle')
let targetX = 0;
let targetY = 0;
let mouseHover = false; // Check if an element is hovered for the mouseup animation resizing
let menuOpened = false;

// Tracker
document.addEventListener('mousemove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
});

// Click Event listener
document.addEventListener('mousedown', () => {
    cursorDot.style.border = '15px solid #E6E6EB';
})

document.addEventListener('mouseup', () => {
    if (mouseHover) {
        cursorDot.style.border = '25px solid #E6E6EB';
    }

    if (!mouseHover) {
        cursorDot.style.border = '2px solid #E6E6EB';
    }
});

// Lag effect on the big circle and instant position update for the dot
function updateCursor() {

    cursorDot.style.top = `${targetY}px`;
    cursorDot.style.left = `${targetX}px`;

    cursorCircle.animate({top: `${targetY}px`, left: `${targetX}px`}, {duration: 700, fill: 'forwards'})

    requestAnimationFrame(updateCursor);
}

updateCursor();


// Add event listeners to hovered elements
const hoveredElements = document.querySelectorAll('.hovered');

hoveredElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        mouseHover = true;
        cursorDot.style.border = '25px solid #E6E6EB';
    });

    element.addEventListener('mouseout', () => {
        mouseHover = false;
        cursorDot.style.border = '2px solid #E6E6EB';
    });
});


// Menu toggle

const checkbox = document.querySelector('#menu-checkbox');
const menu = document.querySelector('.menuLayout');
const lines = document.querySelectorAll('.lines');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        menu.classList.add('menuVisible');
        menu.classList.remove('menuInvisible')
        document.body.classList.add('menu-opened')
        menuOpened = true;
    } else {
        menu.classList.add('menuInvisible')
        menu.classList.remove('menuVisible');
        document.body.classList.remove('menu-opened')
        menuOpened = false;
    }
});


// scroll button

function scrollWin() {
    window.scrollTo({
        top: window.innerHeight + (0.05 * window.innerHeight), behavior: 'smooth' // Since there is a margin of 5vh, we are adding 5% of the height
    });
}

// about button

const contactButton = document.querySelector('.contactButton');
const moreButton = document.querySelector('.moreButton');
const contactStyle = document.querySelector('.contact')
const moreStyle = document.querySelector('.more')
const about = document.querySelector('.about')

contactButton.addEventListener('mouseenter', () => {
    contactStyle.classList.add('hoveredButtons');
    moreButton.style.visibility = 'hidden';
    about.style.background = '#0d0d0d';
});

contactButton.addEventListener('mouseleave', () => {
    contactStyle.classList.remove('hoveredButtons');
    moreButton.style.visibility = 'visible';
    about.style.background = '#E6E6EB';

});


moreButton.addEventListener('mouseenter', () => {
    moreStyle.classList.add('hoveredButtons');
    contactButton.style.visibility = 'hidden';
    about.style.background = '#0d0d0d';

});

moreButton.addEventListener('mouseleave', () => {
    moreStyle.classList.remove('hoveredButtons');
    contactButton.style.visibility = 'visible';
    about.style.background = '#E6E6EB';

});

// menu Logo animation

const menuLogo = Array.from(document.getElementsByClassName('.imageMenu'));

function animateLogo() {

    let maxExtension = [30, 25, 15, 10, 5];
    if(menuOpened) {

        menuLogo.forEach((logo, index) => {
            let x = targetX / window.innerWidth;
            let y = targetY / window.innerHeight;

            logo.style.transform = 'translate(' + (x > maxExtension[index] ? maxExtension[index] : x) + '%, ' + (y > maxExtension[index] ? maxExtension[index] : y) + '%)';

        })
    }
}

window.addEventListener('mousemove', animateLogo);