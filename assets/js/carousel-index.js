let current = 0
const seta = document.getElementById('specialties__button')
const bg = document.getElementById('specialties')
const img = document.getElementById('specialties__card-img')
if (window.innerWidth < 1024) {
    // --- CARROSSEL APENAS PARA TELAS MENORES ---
    const imgs = [
        { image: './assets/img/carpaccio-de-salmao.jpg', background: './assets/img/salmao-textura.jpg' },
        { image: './assets/img/atum-picante.jpg', background: './assets/img/atum-textura.jpg' },
        { image: './assets/img/gunkan-de-polvo.png', background: './assets/img/polvo-textura.jpg' }
    ]



    function updateCarousel() {
        setTimeout(() => {
            img.src = imgs[current].image
            bg.style.backgroundImage = `url(${imgs[current].background})`
        }, 100)
    }

    seta.addEventListener('click', () => {
        current = (current + 1) % imgs.length
        updateCarousel()
    })

    updateCarousel()

} else {
    bg.style.backgroundImage = `url(./assets/img/background-banner.jpg)`
}
