// Task 2 

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let elemMin = 0;
let elemMax = 0;
let sumPositive = 0;
let sumNegative = 0;
let sumEvenNum = 0;
let sumOddNum = 0;
let multPositive = 1;
let arrPositive = [];
let arrNegative = [];
let arrEvenNum = [];
let arrOddNum = [];

for (let j = 0; j < array.length; j++) {
    if (array[j] > 0) {
        arrPositive.push(array[j])
        sumPositive += array[j]
        multPositive *= array[j];
    } else {
        arrNegative.push(array[j])
        sumNegative += array[j]
    } 

    if (array[j] % 2 === 0 && array[j] > 0) {
        arrEvenNum.push(array[j])
        sumEvenNum += array[j]
    } else if (array[j] % 2 !== 0 && array[j] > 0){
        arrOddNum.push(array[j])
        sumOddNum += array[j]
    }

    if (array[j] > elemMax) {
        elemMax = array[j]
    } else if (array[j] < elemMin) {
        elemMin = array[j]
    }
}

let countArrPositive = arrPositive.length
let countArrNegative = arrNegative.length
let countArrEvenNum = arrEvenNum.length
let countArrOddNum = arrOddNum.length
let indexMaxNum = array.indexOf(elemMax)
let indexMinNum = array.indexOf(elemMin)

console.log('Сумма позитивных елементов: ' + sumPositive);
console.log('Количство позитивных елементов: ' + countArrPositive );
console.log('Наименьший елемент: ' + elemMin);
console.log('Индекс наименьшего елемента: ' + indexMinNum); 
console.log('Наибольший елемент: ' + elemMax );
console.log('Индекс наибольшего елемента: ' + indexMaxNum); 
console.log('Количство негативных елементов: ' + countArrNegative);
console.log('Количство непарных позитивных елементов: ' + countArrOddNum);
console.log('Количство парных позитивных елементов: ' + countArrEvenNum);
console.log('Сумма парных позитивных елементов: ' + sumEvenNum);
console.log('Сумма непарных позитивных елементов: ' + sumOddNum);
console.log('Произведение позитивных елементов: ' + multPositive);
console.log('Сумма негативных елементов: ' + sumNegative);

for(let i = 0; i < array.length; i++) {
    if(array[i] !== elemMax) {
        array[i] = 0;
    }
}
console.log(array);