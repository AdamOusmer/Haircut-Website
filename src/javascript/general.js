// Cursor

// Tracker
const cursor = document.querySelector('.cursor');

// Tracker
document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', `
  top: ${e.clientY}px; 
  left: ${e.clientX}px;
  `)});

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
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

