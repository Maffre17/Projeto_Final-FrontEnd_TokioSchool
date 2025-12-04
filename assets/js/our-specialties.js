const imgs = Array.from(document.getElementsByClassName('our-specialties__item-img'))
const buttons = Array.from(document.getElementsByClassName('our-specialties__item-button'))
const div = Array.from(document.getElementsByClassName('our-specialties__item-div'))

let indiceAtivo = null;

buttons.forEach((button, i) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        imgs[i].style.width = '100%'
        div[i].style.display = 'none'
        indiceAtivo = i;
    })
});
document.addEventListener('click', () => {
    if (indiceAtivo !== null) {
        imgs[indiceAtivo].style.width = '30%';
        div[indiceAtivo].style.display = 'block';
        indiceAtivo = null;
    }
});