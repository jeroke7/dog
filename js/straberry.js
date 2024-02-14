const upCaretList = document.querySelectorAll('.fa-caret-up')
const downCaretList = document.querySelectorAll('.fa-caret-down')
const dropItemList = document.querySelectorAll('dropitm')



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