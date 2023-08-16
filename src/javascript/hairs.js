// Animation when card switch

const cardsOrder = Array(document.querySelector('.first'), document.querySelector('.second'), document.querySelector('.third'), document.querySelector('.fourth'), document.querySelector('.fifth'));
let activeCard = document.querySelector('.active');

function changeCard(index) {


    if (cardsOrder[index] === activeCard) {
        return;
    }

    // Animate the active card with a fade out

    activeCard.classList.remove('active');

    cardsOrder[index].classList.add('active');

    activeCard = cardsOrder[index];

}

const cards = document.querySelector('.cards');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const rotationValue = (2 * Math.PI) / 3;

// TODO: change image when click on next or previous button
// TODO: add constant with the reference for the a tag and the img tag

let rotationAngle = 0; // Initial rotation angle


nextButton.addEventListener('click', () => {
    rotationAngle -= rotationValue; // Decrease the rotation angle by 45 degrees

    cards.animate(
        [
            { transform: `translate(-50%, 0%) rotate(${rotationAngle + rotationValue}rad)` },
            { transform: `translate(-50%, 0%) rotate(${rotationAngle}rad)` }
        ],
        {
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in', // Animation easing function
            fill: 'forwards'
        }
    );

    cards.style.transform = `translate(-50%, 0%) rotate(${rotationAngle + rotationValue}rad)`

});

previousButton.addEventListener('click', () => {
    rotationAngle += rotationValue; // Decrease the rotation angle by 45 degrees

    cards.animate(
        [
            { transform: `translate(-50%, 0%) rotate(${rotationAngle - rotationValue}rad)` },
            { transform: `translate(-50%, 0%) rotate(${rotationAngle}rad)` }
        ],
        {
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in', // Animation easing function
            fill: 'forwards'
        }
    );

    cards.style.transform = `translate(-50%, 0%) rotate(${rotationAngle - rotationValue}rad)`

});

