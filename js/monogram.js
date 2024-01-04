//mouseover, mouseout
const productList = document.querySelectorAll('.product')
const priceList = document.querySelectorAll('.item-price')
const shopBtnList = document.querySelectorAll('.shop-btn')


productList.forEach(product => {
    product,addEventListener('mouseover', () => {
        let index = parseInt(product.id)
        shopBtnList[index].style.display='block'
        priceList[index].style.display='none'
        // imageList[index].src = ''

    })
});

productList.forEach(product => {
    product,addEventListener('mouseout', () => {
        let index = parseInt(product.id)
        shopBtnList[index].style.display='none'
        priceList[index].style.display='block'
        // imageList[index].src = ''

    })
});