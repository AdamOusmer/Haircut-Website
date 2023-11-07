// Cursor

const cursorDot = document.querySelector('.cursorDot');
const cursorCircle = document.querySelector('.cursorCircle')


// Variables Declaration

let mouseHover = false; // Check if an element is hovered for the mouseup animation resizing
let menuOpened = false;

const userAgent = navigator.userAgent;
let isTabletOrPhone = /tablet|ipad/i.test(userAgent) || /mobile|iphone|android/i.test(userAgent);


let targetX = 0;
let targetY = 0;

if (!isTabletOrPhone) {
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
} else {
    cursorCircle.style.display = 'none';
    cursorDot.style.display = 'none';
}
// menu Logo animation

const menuLogo = Array.from(document.getElementsByClassName('imageMenu'));
const maxExtension = [10, 20, 35, 55, 85];

function animateLogo() {

    if (menuOpened) {
        menuLogo.forEach((logo, index) => {

            let x = targetX / window.innerWidth * 100;
            let y = targetY / window.innerHeight * 100;

            if (x >= 0 && x < 50) {
                x = -50 + x;
            } else if (x >= 50 && x < 100) {
                x = x - 50;
            }

            if (y >= 0 && y < 50) {
                y = -50 + y;
            } else if (y >= 50 && y < 100) {
                y = y - 50;
            }

            x = x * maxExtension[index] / 1000;
            y = y * maxExtension[index] / 1000;

            logo.animate({transform: `translate(${x - 50}%, ${y - 50}%)`}, {
                duration: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

        })
    }

    requestAnimationFrame(animateLogo); // Call the function again for the next animation frame
}

animateLogo()

// Menu toggle

const checkbox = document.querySelector('#menu-checkbox');
const menu = document.querySelector('#nav');


checkbox.addEventListener('change', async () => {
    if (checkbox.checked) {
        menu.classList.add('menuVisible');
        menu.classList.remove('menuInvisible')


        menu.animate({top: '0'}, {duration: 600, easing: 'ease-in-out', fill: 'both'}).finished;

        menuOpened = true;
    } else {
        await menu.animate({top: '-100%'}, {duration: 600, easing: 'ease-in-out', fill: 'both'}).finished;

        menu.classList.add('menuInvisible')
        menu.classList.remove('menuVisible');


        menuOpened = false;
    }
});

// Name of the window when the page visibility changes

let title = document.title;
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        document.title = title;
    } else {
        title = document.title;
        document.title = 'Karine Styliste Salon';
    }
});


function scrollPortfolio(element, direction) {

    let scrollAmount = 0;
    let totalScrollAmount = 300; // Adjust the total scroll distance

    let frames = 90; // Adjust the total number of frames
    let scrollPerFrame = totalScrollAmount / frames;

    let slideTimer = setInterval(function () {

        element.scrollLeft += direction ? scrollPerFrame : -scrollPerFrame;

        scrollAmount += scrollPerFrame;
        if (scrollAmount >= totalScrollAmount) {
            clearInterval(slideTimer);
        }
    }, 1); // Adjust the interval duration for smoother animation

}


// Cookie alert

let acceptCookie = false;
const cookiesAccepted = localStorage.getItem('cookiesAccepted');


function accepted() {
    acceptCookie = true;
    document.querySelector('.cookieAlert').style.display = 'none';

    localStorage.setItem('cookieAccepted', 'true')
}

function cookieAlert() {

    console.log('cookie')

    const cookie = document.createElement('div');
    cookie.classList.add('cookieAlert');

    cookie.innerHTML = `

        <h1>POUR T’OFFRIR UNE MEILLEURE EXPÉRIENCE</h1>
        <pre>
        Nous utilisons des témoins pour optimiser ton expérience, à des fins d'analyse et de marketing. En cliquant sur « Accepter tout », tu consents à l'utilisation de tous les témoins.        
        </pre>
        <a class="buttons" onclick="accepted()">Accepter tout</a>
    `;

    if (!JSON.parse(cookiesAccepted)) {
        cookie.style.display = 'flex';
    }

}