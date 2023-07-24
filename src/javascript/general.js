// Cursor

// Tracker
const cursor = document.querySelector('.cursor');
const cursorAfter = document.querySelector('.cursorAfter')
let targetX = 0;
let targetY = 0;
let mouseHover = false;

document.addEventListener('mousemove', e => {
    targetX = e.clientX;
    targetY = e.clientY;
});

document.addEventListener('mousedown', () => {
    cursor.style.border = '15px solid #E6E6EB';
})

document.addEventListener('mouseup', () => {
    if (mouseHover) {
        cursor.style.border = '25px solid #E6E6EB';
    }

    if (!mouseHover) {
        cursor.style.border = '2px solid #E6E6EB';
    }
});

function updateCursor() {

    cursor.style.top = `${targetY}px`;
    cursor.style.left = `${targetX}px`;

    cursorAfter.animate({top: `${targetY}px`, left: `${targetX}px`}, {duration: 700, fill: 'forwards'})

    requestAnimationFrame(updateCursor);
}

updateCursor();


// Add event listeners to hoverable elements
const hoverableElements = document.querySelectorAll('.hoverable');

hoverableElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        mouseHover = true;
        cursor.style.border = '25px solid #E6E6EB';
    });

    element.addEventListener('mouseout', () => {
        mouseHover = false;
        cursor.style.border = '2px solid #E6E6EB';
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
        top: window.innerHeight + (0.05 * window.innerHeight), behavior: 'smooth'
    });
}



