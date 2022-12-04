// task 1

for(let i = 20; i <=30; i++) {
    let fraction = `${i},5 `
    document.write(`${i} ${fraction}`);
}

// tsak 2

const dollor = 27

for(let j = 1; j <=10; j++) {
    for (let k = 10; k <=100; k++) {
        if (k / 10 === j) {
           result = k * dollor
           console.log(result);
        }
    }
}

// Task 3 

const number = parseInt(prompt('Input number'))

for(let n = 1; n <= 100; n++) {
    if(n ** 2 < number) {
        console.log(n);
    } 
}

// Task 4

const simplNum = parseInt(prompt('Simple num or not?'))

if (simplNum % 2 !== 0 ) {
    alert(`Yes, ${simplNum} is simple number`)
} else {
    alert(`No, ${simplNum} is not simple number`)
}

// Task 5

const num = parseInt(prompt('Some number'))

for(let t = 0; t < 10; t++) {
    result = 3 ** t;
    if (num === result) alert(`${num} is true`)
}

// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у
// деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
