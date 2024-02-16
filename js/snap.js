const upAngleList = document.querySelectorAll('.fa-angle-up')
const downAngleList = document.querySelectorAll('.fa-angle-down')
const dropItmsList = document.querySelectorAll('dropitms')



//open
upAngleList.forEach(up => {
    up.addEventListener('click', () => {
        let Angle = parseInt(up.id)
        upAngleList[angle].style.display='none'
        downAngleList[angle].style.display='flex'
        dropItmsList[angle].style.display='flex'
    })
})
//closed
downAngleList.forEach(down => {
    down.addEventListener('click', () => {
        let Angle = parseInt(down.id)
        upAngleList[angle].style.display='flex'
        downAngleList[angle].style.display='none'
        dropItmsList[angle].style.display='none'
    })
})