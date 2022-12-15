const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
];

const showProducts = (objProd) => {
    for (let prodId = 0; prodId < objProd.length; prodId++) {
        console.log(`${prodId + 1} ${objProd[prodId].name} ${objProd[prodId].price}`);
    }
}

showProducts(products)

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

const discountCounter = (totalProdPrice, grnPerDol, priceStartFrom, discount) => {
    if (totalProdPrice * grnPerDol > priceStartFrom) {
        console.log(`Congrats, you get a discount ${discount}%`);
        console.log(`Your total price is: ${totalProdPrice * (100 - discount) / 100}`);
    }
}

let prodNum;
const getProdNum = () => {
    do {
        prodNum = prompt('Write product number:');

        if (prodNum === null) {
            break;
        }
        prodNum--;
    } while (prodNum < 0 || prodNum > products.length - 1 || isNaN(prodNum));

    return prodNum;
}

getProdNum ()

const getProdCount = (prodNum) => {
    if (typeof prodNum === 'number') {
        const product = products[prodNum];

        console.log(product);

        let prodCount;

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

            discountCounter(totalProdPrice, GRN_PER_DOLLAR, DISCOUNT_START_FROM, DISCOUNT)
        }
    }
}

getProdCount(prodNum)
