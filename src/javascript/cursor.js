// Cursor

const cursor = document.querySelector('.cursor');

// Tracker
document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', `
  top: ${e.pageY}px; 
  left: ${e.pageX}px;
  `);

} );
