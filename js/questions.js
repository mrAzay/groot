let showMoreButtons = [...document.querySelectorAll('.questions__show-more')]
let infoList = [...document.querySelectorAll('.questions__item')]

console.log(infoList)

showMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(infoList[index])
        infoList[index].classList.toggle('active')
    })
})