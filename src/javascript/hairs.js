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

let indexActiveCard = 0;
let indexCurrentCardDisplayed = 0;


const cardsImages = ['../../image/collectionsHairs/ballerina/ballerina.jpg', '../../image/collectionsHairs/ballerina/ballerina2.JPG', '../../image/collectionsHairs/ballerina/ballerina3.JPG', '../../image/collectionsHairs/ballerina/ballerina4.JPG']
const cardsLinks = ['#', '#']
const cardsShowingImages = [document.querySelector('.card1 a img'), document.querySelector('.card2 a img'), document.querySelector('.card3 a img')]
const cardsShowingLinks = [document.querySelector('.card3 a'), document.querySelector('.card2 a'), document.querySelector('.card1 a')]

function changeCardCollection(movement) {

    if (movement === "next") {
        indexActiveCard = indexActiveCard === cardsShowingImages.length - 1 ? 0 : indexActiveCard + 1;

        indexCurrentCardDisplayed = indexCurrentCardDisplayed === cardsImages.length - 1 ? 0 : indexCurrentCardDisplayed + 1;
        console.log(cardsImages[indexActiveCard])

        cardsShowingImages[indexActiveCard].setAttribute('src', cardsImages[indexCurrentCardDisplayed])

    }

    if (movement === "previous") {
        indexActiveCard = indexActiveCard === 0 ? cardsShowingImages.length - 1 : indexActiveCard - 1;

        indexCurrentCardDisplayed = indexCurrentCardDisplayed === 1 ? cardsImages.length - 1 : indexCurrentCardDisplayed - 1; // TODO select the right card
        console.log(cardsImages[indexActiveCard])

        cardsShowingImages[indexActiveCard].setAttribute('src', cardsImages[indexCurrentCardDisplayed])

    }


}

nextButton.addEventListener('click', () => {
    rotationAngle -= rotationValue; // Decrease the rotation angle by 45 degrees

    changeCardCollection("next")

    cards.animate(
        [
            {transform: `translate(-50%, 0%) rotate(${rotationAngle + rotationValue}rad)`},
            {transform: `translate(-50%, 0%) rotate(${rotationAngle}rad)`}
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

    changeCardCollection("previous")


    cards.animate(
        [
            {transform: `translate(-50%, 0%) rotate(${rotationAngle - rotationValue}rad)`},
            {transform: `translate(-50%, 0%) rotate(${rotationAngle}rad)`}
        ],
        {
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in', // Animation easing function
            fill: 'forwards'
        }
    );

    cards.style.transform = `translate(-50%, 0%) rotate(${rotationAngle - rotationValue}rad)`

});

