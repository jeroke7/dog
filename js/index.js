const minusButtonList = document.querySelectorAll('.fa-circle-minus')
const plusButtonList = document.querySelectorAll('.fa-circle-plus')
const paragraphList = document.querySelectorAll('.faq-paragraph')
console.log(minusButtonList)


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