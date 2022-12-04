// Task 1

const num1 = parseInt(prompt('input num1'))
const num2 = parseInt(prompt('input num2'))

if(num1 === num2) {
    alert(num1 +' = '+ num2)
} else if (num1 > num2){
    alert(num1 + ' is bigger than ' + num2)
} else {
    alert(num2 + ' is bigger than ' + num1)
}

// Task 2

const distKm = parseInt(prompt('km'))
const distFut = parseInt(prompt('fut'))

metrInkm = distKm * 1000
distFutINkm = distFut * 0.305

if (metrInkm > distFutINkm) {
    alert(`${distKm} km is bigger`)
} else {
    alert(`${distFut} fut is bigger`)
}

// Task 3

const a = parseInt(prompt('Input num1'))
const b = parseInt(prompt('Input num2'))

if (a % b === 0) {
    alert(`${a} is a divisor of ${b}`)
} else {
    alert(`${a} is not a divisor of ${b}`)
}

if (b % a === 0) {
    alert(`${b} is a divisor of ${a}`)
} else {
    alert(`${b} is not a divisor of ${a}`)
}

// Task 4
 
for (let i = 10; i < 20; i++) {
    document.write(i + ', ');
}
document.write(20)

// Task 5

for (let b = 10; b <= 20; b++) {
    console.log(b * b);
}

// Task 6

for (let c = 1; c <= 10; c++) {
    console.log(c * 7);
}

// Task 7

let sum = 0;
for (let num = 1; num <= 500; num++) {
     sum += num;
}
console.log(sum / 500);

// Task 8

let result = 15
for (let d = 16; d <= 35; d++) {
    result *= d
    console.log(result);
}

// Task 9

let acum = 0;
for (let h = 30; h <= 80; h++) {
    if (h % 2 === 0) {
        acum += h
    }
}
console.log(acum);

// Task 10

for (let k = 100; k <= 200; k++) {
    if (k % 3 === 0) {
        console.log(k);
    }
}

// 1. Дано два різних числа. Виявити яке з них більше, а яке менше.
// 2. Відомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?
// 3. Виявити чи деяке число а є дільником числа b ? І навпаки. (Дати 2 відповіді)
// 4. Вивести на сторінку в одну строку через зап’яту числа від 10 до 20
// 5. Вивести квадрати чисел від 10 до 20
// 6. Вивести таблицю множення на 7
// 7. Знайти середнє арифметичне всіх цілих чисел від 1 до 500
// 8. Знайти добуток усіх цілих чисел від 15 до 35
// 9. Вивести суму тільки парних чисел в діапазоні від 30 до 80
// 10. Вивести всі числа в діапазоні від 100 до 200 кратні 3
