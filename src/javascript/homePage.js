// scroll button

function scrollWin() {
    window.scrollTo({
        top: 0.95 * window.innerHeight, behavior: 'smooth' // Since there is a margin of 5vh, we are adding 5% of the height
    });
}

const cards = document.querySelectorAll('.card');

console.log(cards);
cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.classList.add('cardHovered');

        cards.forEach(element => {
            if(element !== card) {
                element.classList.add('cardHoveredOthers');
            }
        })
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('cardHovered');

        cards.forEach(element => {
            if(element !== card) {
                element.classList.remove('cardHoveredOthers');
            }
        });
    });
});

