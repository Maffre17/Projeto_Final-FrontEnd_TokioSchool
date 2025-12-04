const buttons = Array.from(document.getElementsByClassName('menus__item-button'))
const divs = Array.from(document.getElementsByClassName('menu__item-div'))
const icon = Array.from(document.getElementsByClassName('menus__button-icon'))

let indiceAtivo = null;

buttons.forEach((button, i) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const isVisible = divs[i].style.display === 'block';

        if (isVisible) {
            // Esconde
            divs[i].style.display = 'none';
            icon[i].src = './assets/img/down-arrow.png'; // volta o ícone
        } else {
            // Mostra
            divs[i].style.display = 'block';

            icon[i].src = './assets/img/upload.png' // muda o ícone
        }
    });
})
