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
const nextButton = document.getElementById('nextCollections');
const previousButton = document.getElementById('previousCollections')
const rotationValue = (2 * Math.PI) / 3;

let rotationAngle = 0; // Initial rotation angle

let indexActiveCard = 0;
let indexCurrentCardDisplayed = 0;


const cardsImages = ['../../image/collectionsHairs/ballerina/ballerina.jpg', '../../image/collectionsHairs/ballerina/ballerina1.JPG', '../../image/collectionsHairs/ballerina/ballerina2.JPG', '../../image/collectionsHairs/ballerina/ballerina3.JPG', '../../image/collectionsHairs/ballerina/ballerina4.JPG'];
const cardsLinks = ['collections/ballerina.html', '#', '#', '#', '#'];
const cardsShowingImages = [document.querySelector('.card1 a img'), document.querySelector('.card2 a img'), document.querySelector('.card3 a img')];
const cardsShowingLinks = [document.querySelector('.card1 a'), document.querySelector('.card2 a'), document.querySelector('.card3 a')];

function changeCardCollection(movement) {

    if (movement === "next") {
        indexActiveCard = indexActiveCard === cardsShowingImages.length - 1 ? 0 : indexActiveCard + 1;

        indexCurrentCardDisplayed = indexCurrentCardDisplayed === cardsImages.length - 1 ? 0 : indexCurrentCardDisplayed + 1;

        cardsShowingImages[indexActiveCard].setAttribute('src', cardsImages[indexCurrentCardDisplayed]);
        cardsShowingLinks[indexActiveCard].setAttribute('href', cardsLinks[indexCurrentCardDisplayed]);
    }

    if (movement === "previous") {
        indexActiveCard = indexActiveCard === 0 ? cardsShowingImages.length - 1 : indexActiveCard - 1;

        indexCurrentCardDisplayed = indexCurrentCardDisplayed === 0 ? cardsImages.length - 1 : indexCurrentCardDisplayed - 1;

        cardsShowingImages[indexActiveCard].setAttribute('src', cardsImages[indexCurrentCardDisplayed]);
        cardsShowingLinks[indexActiveCard].setAttribute('href', cardsLinks[indexCurrentCardDisplayed]);

    }


}

nextButton.addEventListener('click', () => {
    rotationAngle -= rotationValue; // Decrease the rotation angle by 45 degrees

    changeCardCollection("next");

    const animation = cards.animate(
        [
            {transform: `translate(-50%, -50%) rotate(${rotationAngle + rotationValue}rad)`},
            {transform: `translate(-50%, -50%) rotate(${rotationAngle}rad)`}
        ],
        {
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in', // Animation easing function
            fill: 'forwards'
        }
    );

    animation.onfinish = () => {
        cards.style.transform = `translate(-50%, -50%) rotate(${rotationAngle + rotationValue}rad)`;
    };
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

    cards.style.transform = `translate(-50%, 0%) rotate(${rotationAngle - rotationValue}rad)`;

});

const nextPenny = document.getElementById("nextPortfolioPenny");
const previousPenny = document.getElementById("previousPortfolioPenny");
const portfolioPenny = document.getElementById("list-Penny")


nextPenny.addEventListener("click", function(){scrollPortfolio(portfolioPenny, true);} );
previousPenny.addEventListener("click", function(){scrollPortfolio(portfolioPenny, false);} );



// Adjust size of the logo for Safari and Chrome

window.onload = function() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    const serviceImages = document.querySelector('.services.aesthetic img');

        if (isSafari || isChrome) {
            serviceImages.style.height = '20%';
        }
};