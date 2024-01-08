//mouseover, mouseout
const productList = document.querySelectorAll('.product')
const priceList = document.querySelectorAll('.item-price')
const shopBtnList = document.querySelectorAll('.shop-btn')


productList.forEach(product => {
    product.addEventListener('mouseOver', () => {
        let index = parseInt(product.id)
        shopBtnList[index].computedStyleMap.display='block'
        priceList[index].computedStyleMap.display='none'
        // imageList[index].src = ''

    })
});

productList.forEach(product => {
    product.addEventListener('mouseOut', () => {
        let index = parseInt(product.id)
        shopBtnList[index].computedStyleMap.display='none'
        priceList[index].computedStyleMap.display='block'
        // imageList[index].src = ''

    })
});