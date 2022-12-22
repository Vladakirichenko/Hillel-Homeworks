const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

const showProducts = (objProd) => {
    for (let prodId = 0; prodId < objProd.length; prodId++) {
        console.log(`${prodId + 1} ${objProd[prodId].name} ${objProd[prodId].price}`);
    }
}

const discountCounter = (totalProdPrice) => {
    if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
        console.log(`Congrats, you get a discount ${DISCOUNT}%`);
        console.log(`Your total price is: ${totalProdPrice * (100 - DISCOUNT) / 100}`);
    }
}

const getProdNum = (prodLength) => {
    let prodNum;
    do {
        prodNum = prompt('Write product number:');

        if (prodNum === null) {
            break;
        }
        prodNum--;
    } while (prodNum < 0 || prodNum > prodLength.length - 1 || isNaN(prodNum));

    return prodNum;
}

const getProdCount = (prodNum) => {
    let prodCount;
    if (typeof prodNum === 'number') {
        const product = products[prodNum];

        console.log(product);

        do {
            prodCount = prompt('Write product count:');

            if (prodCount === null) {
                break;
            }
            prodCount = +prodCount;
        } while(prodCount <= 0 || isNaN(prodCount));

             if (typeof prodCount === 'number') {
            const totalProdPrice = prodCount * product.price;

            console.log(`Total price: $${totalProdPrice}`);

            discountCounter(totalProdPrice)
        }
    }
}

const valueProdNum = getProdNum (products)
showProducts(products)
getProdCount(valueProdNum)
