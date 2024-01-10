const minusButtonList = document.querySelectorAll('.fa-circle-minus')
const plusButtonList = document.querySelectorAll('.fa-circle-plus')
const paragraphList = document.querySelectorAll('.faq-paragraph')

const upCaretList = document.querySelectorAll('.fa-caret-up')
const downCaretList = document.querySelectorAll('.fa-caret-down')
const dropItemList = document.querySelectorAll('.menu-items')


minusButtonList.forEach(minus => {
    minus.addEventListener('click', () => {
        let index = parseInt(minus.id)
        plusButtonList[index].style.display='flex'
        minusButtonList[index].style.display='none'
        paragraphList[index].style.display='none'
    })
})

plusButtonList.forEach(plus => {
    plus.addEventListener('click', () => {
        let index = parseInt(plus.id)
        plusButtonList[index].style.display='none'
        minusButtonList[index].style.display='flex'
        paragraphList[index].style.display='flex'
    })
})

downCaretList.forEach(down => {
    down.addEventListener('click', () => {
        let caret = parseInt(down.id)
        upCaretList[caret].style.display='flex'
        downCaretList[caret].style.display='none'
        dropItemList[caret].style.display='none'
    })
})
upCaretList.forEach(up => {
    up.addEventListener('click', () => {
        let caret = parseInt(up.id)
        upCaretList[caret].style.display='none'
        downCaretList[caret].style.display='flex'
        dropItemList[caret].style.display='flex'
    })
})
