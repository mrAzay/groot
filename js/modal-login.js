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


document.querySelector('.header__nav-btn').addEventListener('click', ()=>{
    if(document.querySelector('.top__nav').style.display === "none") {
        document.querySelector('.top__nav').style.display = "block"
    } else {
        document.querySelector('.top__nav').style.display = "none"
    }
})

document.querySelector('html').addEventListener('click', (e)=>{
    if(document.querySelector('.top__nav').style.display === "block" && !e.target.contains(document.querySelector('.top__nav')) && !e.target.contains(document.querySelector('.header__nav-btn'))) {
        document.querySelector('.top__nav').style.display = "none"
    }
})