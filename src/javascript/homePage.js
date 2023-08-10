
// scroll button

function scrollWin() {
    window.scrollTo({
        top: window.innerHeight + (0.05 * window.innerHeight), behavior: 'smooth' // Since there is a margin of 5vh, we are adding 5% of the height
    });
}

// about button

const contactButton = document.querySelector('.contactButton');
const moreButton = document.querySelector('.moreButton');
const contactStyle = document.querySelector('.contact')
const moreStyle = document.querySelector('.more')
const text = document.querySelectorAll('.textAbout')
const logoAbout = document.querySelector('.imgAbout')

contactButton.addEventListener('mouseenter', () => {
    contactStyle.classList.add('hoveredButtons');
    moreButton.style.visibility = 'hidden';
    text.forEach((element) => {
        element.style.color = '#E6E6EB';
    })
    logoAbout.style.visibility = 'hidden';
});

contactButton.addEventListener('mouseleave', () => {
    contactStyle.classList.remove('hoveredButtons');
    moreButton.style.visibility = 'visible';
    text.forEach((element) => {
        element.style.color = '#0d0d0d';
    })
    logoAbout.style.visibility = 'visible';

});


moreButton.addEventListener('mouseenter', () => {
    moreStyle.classList.add('hoveredButtons');
    contactButton.style.visibility = 'hidden';
    text.forEach((element) => {
        element.style.color = '#E6E6EB';
    })
    logoAbout.style.visibility = 'hidden';

});

moreButton.addEventListener('mouseleave', () => {
    moreStyle.classList.remove('hoveredButtons');
    contactButton.style.visibility = 'visible';
    text.forEach((element) => {
        element.style.color = '#0d0d0d';
    })
    logoAbout.style.visibility = 'visible';

});
