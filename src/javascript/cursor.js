// Cursor

// Tracker
const cursor = document.querySelector('.cursor');

// Tracker
document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', `
  top: ${e.pageY}px; 
  left: ${e.pageX}px;
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

