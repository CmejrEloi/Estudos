//Destaca o menu selecionado
var menuItem = document.querySelectorAll('.item-menu');
var pagina = document.querySelector('.pagina')

function selectLink() {

    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );

    pagina.innerHTML = this.textContent
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expande ou retrai o menu
var expandir = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var contentAdjust = document.querySelector('.main')

expandir.addEventListener('click', () => {
    menuSide.classList.toggle('expandir')
    contentAdjust.classList.toggle('ajustar')
})


/** Modal */
let btnModal = document.querySelectorAll('.btn-modal')
let modal = document.querySelector('.modal')
modal.classList.add('transition')

let btnCloseModal = document.querySelector('.bclose')

/** Exibe modal */
btnModal.forEach((link) =>
    link.addEventListener('click', () => {
        modal.style.display = 'flex'
        setTimeout(() => {
            modal.style.opacity = '1'
        }, 10)

    })
)

/** Fecha modal */
btnCloseModal.addEventListener('click', () => {
    modal.style.opacity = '0'
    setTimeout(() => {
        modal.style.display = 'none'
    }, 1000)
})