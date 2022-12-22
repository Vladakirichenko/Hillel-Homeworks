// Task 1

const arr = [5, 3, 35, true, 'hello', 235, 1, 'string', '3', 10, 24, 3]

const averageArrNum = (array) => {
    let arrNum = []
    array.forEach((item) => {
        if (typeof item === 'number') {
            arrNum.push(item)
        }
    })
    console.log(arrNum);
    const sumArr = arrNum.reduce((acc, item) => {
    return acc + item
    }, 0)
    const result = sumArr / arrNum.length
    return console.log(result.toFixed());
} 

averageArrNum(arr)

// Task 2

const firstNum = +prompt('Enter first num')
const actionSign = prompt('Enter action sign')
const secondNum = +prompt('Enter second num')

const sum = (x, y) => {
    return x + y
}
const numDifference = (x, y) => {
    return x - y
}
const mult = (x, y) => {
    return x * y
}
const division = (x, y) => {
    return x / y
}
const remainder = (x, y) => {
    return x % y
}
const degree = (x, y) => {
    return x ** y
}

const doMath = (x, znak, y) => {
    if (znak === '+') {
        alert(sum(x, y));  
    } else if (znak === '-') {
        alert(numDifference(x, y));  
    } else if (znak === '*') {
        alert(mult(x, y));  
    }else if (znak === '/') {
        alert(division(x, y));  
    } else if (znak === '%') {
        alert(remainder(x, y));  
    } else if (znak === '^') {
        alert(degree(x, y));  
    }
}

doMath(firstNum, actionSign, secondNum)

// Task 3

const arrLength = parseInt(prompt('Input length of array'))
const innerArrLength = parseInt(prompt('Input length of arrays inner'))

const enterArr = (outerLength, innerLength) => {
    const arr = []

    for (let i = 0; i < outerLength; i++) {
        arr.push(new Array()) 
        for (let j = 0; j < innerLength; j++){
            const arrInnerInfo = +prompt(`input number #${j + 1}`)
            arr[i][j] = arrInnerInfo
        }
    }
    console.log(arr);
}

enterArr(arrLength, innerArrLength)

// Task 4

const removeElem = (str, rep) => {
    console.log(str);
     rep.forEach((item) => {
          str = str.replaceAll(item, '')
    })
    console.log(str);
}

removeElem('hello world', ['l', 'd'])
