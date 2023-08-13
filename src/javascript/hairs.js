// Animation when card switch

const cardsOrder = Array(document.querySelector('.first'), document.querySelector('.second'), document.querySelector('.third'), document.querySelector('.fourth'), document.querySelector('.fifth'));
let activeCard = document.querySelector('.active');
function changeCard(index){


    if (cardsOrder[index] === activeCard) {
        return;
    }

    // Animate the active card with a fade out

    activeCard.classList.remove('active');

    cardsOrder[index].classList.add('active');

    activeCard = cardsOrder[index];


}