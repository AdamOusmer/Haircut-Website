// Cursor

// Variables Declaration
const cursorDot = document.querySelector('.cursorDot');
const cursorCircle = document.querySelector('.cursorCircle')
let targetX = 0;
let targetY = 0;
let mouseHover = false; // Check if an element is hovered for the mouseup animation resizing

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

        lines.setAttribute('style', `background-color: #007CA3;`)

    } else {
        menu.classList.add('menuInvisible')
        menu.classList.remove('menuVisible');

        lines.setAttribute('style', `background-color: #E6E7FF;`)

    }
});


// scroll button

function scrollWin() {
    window.scrollTo({
        top: window.innerHeight + (0.05 * window.innerHeight), behavior: 'smooth' // Since there is a margin of 5vh, we are adding 5% of the height
    });


}



