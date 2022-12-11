// Task 1

const arrLength = parseInt(prompt('Input length of array'))

let arr = []

for(let i = 0; i < arrLength; i++) {
    const arrInfo = parseInt(prompt(`input number #${i + 1}`))
    arr.push(arrInfo)
}

arr.sort((num1, num2) => num1 - num2)
   .splice(2, 3)

alert(arr.join(', '))
