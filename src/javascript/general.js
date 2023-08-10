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

checkbox.addEventListener('change', async() => {
    if (checkbox.checked) {
        menu.classList.add('menuVisible');
        menu.classList.remove('menuInvisible')


        await menu.animate( {top : '0'}, {duration: 600, easing: 'ease-in-out', fill: 'both'}).finished;

        menuOpened = true;
    } else {
        await menu.animate( {top : '-100%'}, {duration: 600, easing: 'ease-in-out', fill: 'both'}).finished;

        menu.classList.add('menuInvisible')
        menu.classList.remove('menuVisible');



        menuOpened = false;
    }
});

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
            }
            else if (x >= 50 && x < 100) {
                x = x - 50;
            }

            if (y >= 0 && y < 50) {
                y = -50 + y;
            }
            else if (y >= 50 && y < 100) {
                y = y - 50;
            }

            x = x * maxExtension[index] / 1000;
            y = y * maxExtension[index] / 1000;

            logo.animate(
                { transform: `translate(${x - 50}%, ${y - 50}%)` },
                { duration: 1000, easing: 'ease-in-out', fill: 'both' }
            );

        })
    }

    requestAnimationFrame(animateLogo); // Call the function again for the next animation frame
}

animateLogo()
