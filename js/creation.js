const hamButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navi.classList.toggle('open');
    hamButton.classList.toggle('open');
});