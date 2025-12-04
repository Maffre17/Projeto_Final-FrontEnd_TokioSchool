const botaoMenu = document.getElementById('header__button')
const botaoMenuFechar = document.getElementById('nav__button')
const menu = document.getElementById('header__nav')
botaoMenu.addEventListener('click', () => {

    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
})
botaoMenuFechar.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
})
