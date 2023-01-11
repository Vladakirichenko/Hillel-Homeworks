const showCategory = () => {
    const categoriesElem = document.querySelector('.categories')
    DATA.forEach((item, id) => {
        const categoryElem = document.createElement('div')
        categoryElem.innerHTML = item.name
        categoryElem.setAttribute('data-category-id', id)
        categoryElem.onclick = showProducts;
        categoriesElem.append(categoryElem)
    })
}

const showProducts = (event) => {
    const productsElem = document.querySelector('.products')
    const categoryId = event.target.getAttribute('data-category-id')
    const products = DATA[categoryId].products
    
    productsElem.innerHTML = '';
    
    products.forEach((item, id) => {
        const productElem = document.createElement('div')
        productElem.setAttribute('data-product-id', id)
        productElem.setAttribute('data-category-id', categoryId)
        productElem.innerHTML = item.name
        productsElem.append(productElem)
        productsElem.onclick = showDiteiles;
    })

}

const showDiteiles = (event) => {
    const detailesElem = document.querySelector('.detailes')
    const productId = event.target.getAttribute('data-product-id')
    const categoryId = event.target.getAttribute('data-category-id')

    detailesElem.innerHTML = ''

    const infoPrice = DATA[categoryId].products[productId].price
    const infoDescription = DATA[categoryId].products[productId].description
    
    const infoElem = document.createElement('div')
    infoElem.innerHTML = `<b>Price</b>: ${infoPrice} <br> <b>Description</b>: ${infoDescription} <br> <button class="btn" onclick = "buyProduct()">Купити</button> `
    detailesElem.append(infoElem)
}

const buyProduct = () => {
    const window = document.getElementsByClassName('window')[0]
    window.classList.add('active')
    setTimeout(() => {
        location.reload()
    }, 2000)
}

showCategory()