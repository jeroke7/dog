const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const dropItemList = document.querySelector('.dropitms')
const menu = document.querySelector('.menu')
const fade = document.querySelector('.fade')

openBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'flex'
    fade.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    openBtn.style.display = 'block'
    fade.style.display = 'none'

})