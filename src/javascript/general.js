// Cursor

// Tracker
const cursor = document.querySelector('.cursor');
const cursorAfter = document.querySelector('.cursorAfter');
let cursorAfterX = 0;
let cursorAfterY = 0;
const transitionSpeed = 0.1; // Adjust this value to control the speed of the transition

document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';

    // Calculate the distance between the current position and the target position for cursorAfter
    const deltaX = e.clientX - cursorAfterX;
    const deltaY = e.clientY - cursorAfterY;

    // Update the target position for cursorAfter based on the transition speed
    cursorAfterX += deltaX * transitionSpeed;
    cursorAfterY += deltaY * transitionSpeed;

    // Apply the new position to cursorAfter
    cursorAfter.style.top = cursorAfterY + 'px';
    cursorAfter.style.left = cursorAfterX + 'px';
});

// Add event listeners to hoverable elements
const hoverableElements = document.querySelectorAll('.hoverable');

hoverableElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        cursor.classList.add('hovered');
    });
    element.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
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



