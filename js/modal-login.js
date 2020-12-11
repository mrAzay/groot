let loginButton = document.querySelector('.header__login-btn');
let loginModal = document.querySelector('.modal-login');
let overlay = document.querySelector('.overlay');
let closeButton = document.querySelector('.modal__close');

loginButton.addEventListener('click', () => {
    loginModal.classList.add('active')
    overlay.classList.add('active')
})

closeButton.addEventListener('click', () => {
    loginModal.classList.remove('active');
    overlay.classList.remove('active')
})
