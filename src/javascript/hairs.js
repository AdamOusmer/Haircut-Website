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


const cardsImages = ['../../assets/image/collectionsHairs/ballerina/ballerina.jpg', '../../assets/image/collectionsHairs/ice_queen/ice1.JPG', '../../assets/image/collectionsHairs/ballerina/ballerina2.JPG', '../../assets/image/collectionsHairs/ballerina/ballerina3.JPG', '../../assets/image/collectionsHairs/ballerina/ballerina4.JPG'];
const cardsLinks = ['collections/ballerina.html', '#', '#', '#', '#'];
const names_collection = ["Ballerina", "Ice Queen", "Ballerina2", "ballerina3", "ballerina4"];
const background = ['#0B0D10', '#c2d1e1', '#0B0D10', '#0B0D10', '#0B0D10']
const colors = ['#E6E6EB', '#0B0D10', '#E6E6EB', '#E6E6EB', '#E6E6EB']
const cardsShowingImages = [document.querySelector('.card1 a img'), document.querySelector('.card2 a img'), document.querySelector('.card3 a img')];
const cardsShowingLinks = [document.querySelector('.card1 a'), document.querySelector('.card2 a'), document.querySelector('.card3 a')];
const name_collection = document.querySelector('#collection_name');
const section = document.querySelector('.collections')
const text_collection = document.querySelectorAll('.text_collection')

function changeCardCollection(movement) {

    if (movement) {
        indexActiveCard = indexActiveCard === cardsShowingImages.length - 1 ? 0 : indexActiveCard + 1;
        indexCurrentCardDisplayed = indexCurrentCardDisplayed === cardsImages.length - 1 ? 0 : indexCurrentCardDisplayed + 1;
    } else {
        indexActiveCard = indexActiveCard === 0 ? cardsShowingImages.length - 1 : indexActiveCard - 1;
        indexCurrentCardDisplayed = indexCurrentCardDisplayed === 0 ? cardsImages.length - 1 : indexCurrentCardDisplayed - 1;
    }

    cardsShowingImages[indexActiveCard].setAttribute('src', cardsImages[indexCurrentCardDisplayed]);
    cardsShowingLinks[indexActiveCard].setAttribute('href', cardsLinks[indexCurrentCardDisplayed]);
    name_collection.innerHTML = names_collection[indexCurrentCardDisplayed];
    section.style.background = background[indexCurrentCardDisplayed];
    text_collection.forEach((text) => {
        text.style.color = colors[indexCurrentCardDisplayed];
    });
}

nextButton.addEventListener('click', () => {
    rotationAngle -= rotationValue; // Decrease the rotation angle by 45 degrees

    changeCardCollection(true);

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

    changeCardCollection(false)


    cards.animate(
        [
            {transform: `translate(-50%, -50%) rotate(${rotationAngle - rotationValue}rad)`},
            {transform: `translate(-50%, -50%) rotate(${rotationAngle}rad)`}
        ],
        {
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in', // Animation easing function
            fill: 'forwards'
        }
    );

    cards.style.transform = `translate(-50%, 0%) rotate(${rotationAngle - rotationValue}rad)`;

});

// Portfolio
const nextKarine = document.getElementById("nextPortfolioKarine");
const previousKarine = document.getElementById("previousPortfolioKarine");
const portfolioKarine = document.getElementById("list-Karine")

const nextSacha = document.getElementById("nextPortfolioSacha");
const previousSacha = document.getElementById("previousPortfolioSacha");
const portfolioSacha = document.getElementById("list-Sacha")


nextKarine.addEventListener("click", function () {
    scrollPortfolio(portfolioKarine, true);
});
previousKarine.addEventListener("click", function () {
    scrollPortfolio(portfolioKarine, false);
});

nextSacha.addEventListener("click", function () {
    scrollPortfolio(portfolioSacha, true);
});
previousSacha.addEventListener("click", function () {
    scrollPortfolio(portfolioSacha, false);
});
