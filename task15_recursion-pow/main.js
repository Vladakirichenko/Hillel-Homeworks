
const num = +prompt('Enter num')
const degree = +prompt('Enter degree')

const pow = (num, degree) => {
    return degree > 1 ? num * pow(num, degree - 1) : num;
}

alert(pow(num, degree))

