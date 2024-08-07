const animationElements = document.querySelector('.animation-elements');
const mainPage = document.querySelector('.main-container');

function toggleVisibility(showElement, hideElement, delay) {
    showElement.style.display = 'flex';
    hideElement.style.display = 'none';

    setTimeout(() => {
        showElement.style.display = 'none';
        hideElement.style.display = 'block';
    }, delay);
}

toggleVisibility(animationElements, mainPage, 3000);
